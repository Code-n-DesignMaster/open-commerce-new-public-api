import { IInAuthPayloadValidateResponse } from '../interfaces/inauth-payload-validate-response.interface';
import { IInAuthPayloadOptions } from '../interfaces/inauth-payload-options';
import {
  AuthServiceConfig,
  AUTH_SERVICE_CONFIG_TOKEN,
} from '../auth-service.config';
import { ICustomerOtpPayload } from '../interfaces/customer-otp-payload.inreface';
import { Inject } from '@nestjs/common';
import { IAuthTokens } from '../interfaces/auth-tokens.interface';
import { CustomerOtpRequestDto } from '../dtos/customer-otp-request.dto';
import { OCInAuthValidationError } from '../../../errors/OCInAuthValidationError';
import { OCNotAuthorizedError } from '../../../errors/OCNotAuthorizedError';
import { get } from 'lodash';
import { ApolloError } from 'apollo-server-core';
import { LoggerService } from '@open-commerce/nestjs-logger';
import { InauthTrustScoreValueInputDto } from '../dtos/inauth-trust-score-value-input.dto';
import { CustomerLoginByOtpDto } from '../dtos/customer-login-by-otp.dto';
import {
  API_VERIFICATION_GRAPHQL_CLIENT_SERVICE_TOKEN,
  AUTH_GRAPHQL_CLIENT_SERVICE_TOKEN,
} from '../../graphql-clients/graphql-clients.constants';
import { ApiVerificationGraphqlClientService } from '../../graphql-clients/clients/api-verification-graphql-client.service';
import { AuthGraphqlClientService } from '../../graphql-clients/clients/auth-graphql-client.service';

export class AuthClientService {
  private readonly loggerContext = this.constructor.name;

  constructor(
    @Inject(AUTH_SERVICE_CONFIG_TOKEN)
    private config: AuthServiceConfig,
    @Inject(API_VERIFICATION_GRAPHQL_CLIENT_SERVICE_TOKEN)
    private readonly apiKeyService: ApiVerificationGraphqlClientService,
    private readonly logger: LoggerService,
    @Inject(AUTH_GRAPHQL_CLIENT_SERVICE_TOKEN)
    private readonly authGraphqlService: AuthGraphqlClientService,
  ) {
    if (config.inAuthTestMode) {
      this.logger.log(
        'InAuth test mode is ENABLED because DB__INAUTH_TEST_MODE is true!',
        this.loggerContext,
      );
    }
  }

  public async updatePhoneNumber(
    newUsername: string,
    sub: string,
  ): Promise<string> {
    this.logger.log(
      {
        msg: 'processing updatePhoneNumber',
        newUsername,
        sub,
      },
      this.loggerContext,
    );

    return await this.authGraphqlService.customerUsernameChange(
      newUsername,
      sub,
    );
  }

  public async verifyPhoneNumber(otp: any): Promise<string> {
    this.logger.log(
      {
        msg: 'processing verifyPhoneNumber',
        otp,
      },
      this.loggerContext,
    );

    return await this.authGraphqlService.customerUsernameChangeVerify(otp);
  }

  public async inAuthPayloadValidate(
    input: IInAuthPayloadOptions,
  ): Promise<IInAuthPayloadValidateResponse> {
    this.logger.log(
      {
        msg: 'processing inAuthPayloadValidate',
        deviceId: input.deviceId,
        inAuthLogPayload: input.inAuthLogPayload,
      },
      this.loggerContext,
    );

    let result = null;
    try {
      result = await this.authGraphqlService.inAuthPayloadValidate({
        deviceId: input.deviceId,
        deviceIpAddress: input.deviceIpAddress,
        transactionId: input.transactionId,
        inAuthLogPayload: input.inAuthLogPayload,
      });
    } catch (error) {
      this.logger.log(
        'error from inauth validation - ' + get(error, 'code'),
        this.loggerContext,
      );
      switch (error.code) {
        case 'OC_INAUTH_NO_PERM_ID_ERROR':
          // If user is logged in, log the user out if they do not have a valid
          // permanentId for the device.
          if (input.auth) {
            await this.logout(input.auth.accessToken);
          }
          throw new OCNotAuthorizedError();
        case 'OC_INAUTH_SIGFILES_OUTDATED_ERROR':
          // let's rethrow errors from auth
          throw new ApolloError(error.message, error.code);
        default:
          // unhandled error. let's log it
          this.logger.error(error.message, error.stack, this.loggerContext);
          throw new ApolloError(error.message, error.code);
      }
    }

    this.logger.log(
      {
        msg: 'processed inAuthPayloadValidate',
        deviceId: input.deviceId,
        inAuthLogPayload: input.inAuthLogPayload,
        result,
      },
      this.loggerContext,
    );

    if (!result.success) {
      throw new OCInAuthValidationError(result.message);
    }
    return result;
  }

  public async inAuthMobileDeviceRegister(deviceId: string, payload: string) {
    this.logger.log('executing inAuthMobileDeviceRegister', this.loggerContext);

    try {
      const result = await this.authGraphqlService.inAuthMobileDeviceRegister({
        deviceId,
        payload,
      });

      this.logger.log(
        'returning inAuthMobileDeviceRegister response: ' +
          JSON.stringify(result),
        this.constructor.name,
      );

      return result;
    } catch (error) {
      this.logger.log(
        'error from inauth registration - ' + get(error, 'code'),
        this.loggerContext,
      );
      if (error.code && error.code.startsWith('OC_')) {
        // let's rethrow errors from auth
        throw new ApolloError(error.message, error.code);
      }
      // unhandled error. let's log it
      this.logger.error(error.message, error.stack, this.loggerContext);
      throw error;
    }
  }

  public async inauthDeviceTrustScoreThresholdUpdate(
    input: InauthTrustScoreValueInputDto,
  ): Promise<boolean> {
    this.logger.log(
      JSON.stringify({
        msg: 'executing inauthDeviceTrustScoreThresholdUpdate',
        input,
      }),
      this.loggerContext,
    );

    const response = await this.authGraphqlService.inauthDeviceTrustScoreThresholdUpdate(
      input,
    );

    this.logger.log(
      JSON.stringify({
        msg: 'returning inauthDeviceTrustScoreThresholdUpdate response',
        response,
      }),
      this.loggerContext,
    );

    return response;
  }

  public async inauthCustomerToDeviceConnect(
    customerId: number,
    deviceId: string,
  ): Promise<boolean> {
    this.logger.log(
      JSON.stringify({
        msg: 'executing inauthCustomerToDeviceConnect',
        customerId,
        deviceId,
      }),
      this.loggerContext,
    );

    try {
      const response = await this.authGraphqlService.inauthCustomerToDeviceConnect(
        { deviceId, customerId },
      );

      this.logger.log(
        JSON.stringify({
          msg: 'returning inauthCustomerToDeviceConnect response',
          response,
        }),
        this.loggerContext,
      );

      return response;
    } catch (error) {
      this.logger.error(
        {
          msg: `inauthCustomerToDeviceConnect mutation failed. Error: ${
            error.message
          }`,
        },
        error.stack,
        this.loggerContext,
      );

      return false;
    }
  }

  public async inauthBlacklistedDeviceUnblockedStatusSet(
    deviceId: string,
    unblockedStatus: boolean,
  ): Promise<boolean> {
    this.logger.log(
      {
        msg: 'executing inauthBlacklistedDeviceUnblockedStatusSet',
        deviceId,
        unblockedStatus: unblockedStatus.toString(),
      },
      this.loggerContext,
    );

    const response = await this.authGraphqlService.inauthBlacklistedDeviceUnblockedStatusSet(
      deviceId,
      unblockedStatus,
    );

    this.logger.log(
      JSON.stringify({
        msg: 'returning inauthBlacklistedDeviceUnblockedStatusSet response',
        response,
      }),
      this.loggerContext,
    );

    return response;
  }

  public async inauthDeviceBlacklistRemove(deviceId: string): Promise<boolean> {
    this.logger.log(
      {
        msg: 'executing inauthDeviceBlacklistRemove',
        deviceId,
      },
      this.loggerContext,
    );

    const response = await this.authGraphqlService.inauthDeviceBlacklistRemove(
      deviceId,
    );

    this.logger.log(
      JSON.stringify({
        msg: 'returning inauthDeviceBlacklistRemove response',
        response,
      }),
      this.loggerContext,
    );

    return response;
  }

  public async inAuthGetSigfiles(deviceId: string, deviceType: string) {
    this.logger.log('executing inAuthGetSigfiles', this.loggerContext);

    const result = await this.authGraphqlService.inAuthGetSigfiles({
      deviceId,
      deviceType,
    });

    this.logger.log(
      'returning inAuthGetSigfiles response: ',
      this.loggerContext,
      // JSON.stringify(response),
    );

    return result;
  }

  public async customerOTPRequest(
    input: CustomerOtpRequestDto,
  ): Promise<ICustomerOtpPayload> {
    this.logger.debug(
      {
        msg: 'processing customerOTPRequest',
        input,
      },
      this.loggerContext,
    );

    return await this.authGraphqlService.customerOTPRequest(input);
  }

  public async updateAttributes(
    input: any,
    accessToken: string,
  ): Promise<boolean> {
    return await this.authGraphqlService.updateUserAttrs(input, accessToken);
  }

  public async logout(accessToken: string): Promise<boolean> {
    return await this.authGraphqlService.logout(accessToken);
  }

  public async getAccessTokenByRefreshToken(input: IAuthTokens) {
    return await this.authGraphqlService.getAccessTokenByRefreshToken(input);
  }

  public async customerLoginByOTP(
    input: CustomerLoginByOtpDto,
    deviceId: string,
  ): Promise<IAuthTokens | ICustomerOtpPayload> {
    return await this.authGraphqlService.customerLoginByOTP(input, deviceId);
  }

  public inAuthTestModeEnabled(): boolean {
    return this.config.inAuthTestMode;
  }

  public async verifyAdminApiKey(apiKey: string): Promise<boolean> {
    return await this.apiKeyService.verifyAdminApiKey(apiKey);
  }
}
