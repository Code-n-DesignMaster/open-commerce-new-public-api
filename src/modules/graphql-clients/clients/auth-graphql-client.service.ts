import { Inject } from '@nestjs/common';
import {
  AuthServiceGraphqlClient,
  GraphqlParameterDto,
  BuildGraphqlOperationDto,
  GraphqlOperationBuilder,
  BaseInternalServiceGraphqlClientService,
} from '@open-commerce/db-internal-service-client';
import { LoggerService } from '@open-commerce/nestjs-logger';
import { AUTH_SERVICE_GRAPHQL_CLIENT_TOKEN } from '../graphql-clients.constants';
import { IInAuthPayloadOptions } from '../../auth/interfaces/inauth-payload-options';
import { IInAuthPayloadValidateResponse } from '../../auth/interfaces/inauth-payload-validate-response.interface';
import { InauthTrustScoreValueInputDto } from '../../auth/dtos/inauth-trust-score-value-input.dto';
import { CustomerOtpRequestDto } from '../../auth/dtos/customer-otp-request.dto';
import { ICustomerOtpPayload } from '../../auth/interfaces/customer-otp-payload.inreface';
import { IAuthTokens } from '../../auth/interfaces/auth-tokens.interface';
import { CustomerLoginByOtpDto } from '../../auth/dtos/customer-login-by-otp.dto';
import { InAuthDeviceRegistrationRequestInputDto } from '../../auth/dtos/inauth-device-registration-request-input.dto';

export class AuthGraphqlClientService extends BaseInternalServiceGraphqlClientService {
  constructor(
    protected logger: LoggerService,
    @Inject(AUTH_SERVICE_GRAPHQL_CLIENT_TOKEN)
    private authGraphqlClient: AuthServiceGraphqlClient,
  ) {
    super(logger);
  }

  public async customerUsernameChange(
    newUsername: string,
    sub: string,
  ): Promise<string> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'newUsername',
        type: 'String',
      },
      {
        name: 'sub',
        type: 'String',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'customerUsernameChange',
      type: 'mutation',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.authGraphqlClient.executeQuery(
      operationDetails.name,
      operation,
      {
        newUsername,
        sub,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async customerUsernameChangeVerify(otp: any): Promise<string> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'otp',
        type: 'OTP',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'customerUsernameChangeVerify',
      type: 'mutation',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.authGraphqlClient.executeQuery(
      operationDetails.name,
      operation,
      {
        otp,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async inAuthPayloadValidate(
    input: IInAuthPayloadOptions,
  ): Promise<IInAuthPayloadValidateResponse> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'input',
        type: 'InAuthPayloadInput!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'inAuthPayloadValidate',
      type: 'mutation',
      parameters,
      fields: 'success',
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.authGraphqlClient.executeQuery(
      operationDetails.name,
      operation,
      {
        input,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async inAuthMobileDeviceRegister(
    input: InAuthDeviceRegistrationRequestInputDto,
  ) {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'input',
        type: 'InAuthDeviceRegistrationRequestInput!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'inauthDeviceRegister',
      type: 'mutation',
      parameters,
      fields: 'deviceResponse',
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.authGraphqlClient.executeQuery(
      operationDetails.name,
      operation,
      {
        input,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async inauthDeviceTrustScoreThresholdUpdate(
    input: InauthTrustScoreValueInputDto,
  ): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'input',
        type: 'InauthTrustScoreValueInput!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'inauthDeviceTrustScoreThresholdUpdate',
      type: 'mutation',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.authGraphqlClient.executeQuery(
      operationDetails.name,
      operation,
      {
        input,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async inauthCustomerToDeviceConnect(input: {
    deviceId: string;
    customerId: number;
  }): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'input',
        type: 'InauthCustomerToDeviceConnectInput!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'inauthCustomerToDeviceConnect',
      type: 'mutation',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.authGraphqlClient.executeQuery(
      operationDetails.name,
      operation,
      {
        input,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async inauthBlacklistedDeviceUnblockedStatusSet(
    deviceId: string,
    unblockedStatus: boolean,
  ): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'deviceId',
        type: 'ID!',
      },
      {
        name: 'unblockedStatus',
        type: 'Boolean!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'inauthBlacklistedDeviceUnblockedStatusSet',
      type: 'mutation',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.authGraphqlClient.executeQuery(
      operationDetails.name,
      operation,
      {
        deviceId,
        unblockedStatus,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async inauthDeviceBlacklistRemove(deviceId: string): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'deviceId',
        type: 'ID!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'inauthDeviceBlacklistRemove',
      type: 'mutation',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.authGraphqlClient.executeQuery(
      operationDetails.name,
      operation,
      {
        deviceId,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async inAuthGetSigfiles(input: {
    deviceId: string;
    deviceType: string;
  }) {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'input',
        type: 'InAuthGetSigfilesRequestInput!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'inauthGetSigfiles',
      type: 'query',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.authGraphqlClient.executeQuery(
      operationDetails.name,
      operation,
      {
        input,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async customerOTPRequest(
    input: CustomerOtpRequestDto,
  ): Promise<ICustomerOtpPayload> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'input',
        type: 'CustomerOTPRequest!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'customerOTPRequest',
      type: 'mutation',
      parameters,
      fields: `
        session
        success
        sub
      `,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.authGraphqlClient.executeQuery(
      operationDetails.name,
      operation,
      {
        input,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async updateUserAttrs(
    input: any,
    accessToken: string,
  ): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'input',
        type: 'UserAttributes',
      },
      {
        name: 'accessToken',
        type: 'String',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'updateUserAttrs',
      type: 'mutation',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.authGraphqlClient.executeQuery(
      operationDetails.name,
      operation,
      {
        input,
        accessToken,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async logout(accessToken: string): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'accessToken',
        type: 'String',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'logout',
      type: 'mutation',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.authGraphqlClient.executeQuery(
      operationDetails.name,
      operation,
      {
        accessToken,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async getAccessTokenByRefreshToken(
    input: IAuthTokens,
  ): Promise<IAuthTokens> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'input',
        type: 'AccessTokenByRefreshTokenInputType!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'getAccessTokenByRefreshToken',
      type: 'mutation',
      parameters,
      fields: `
        tokens {
          accessToken
          refreshToken
        }
      `,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.authGraphqlClient.executeQuery(
      operationDetails.name,
      operation,
      {
        input,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async customerLoginByOTP(
    input: CustomerLoginByOtpDto,
    deviceId: string,
  ): Promise<IAuthTokens | ICustomerOtpPayload> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'input',
        type: 'OTP!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'customerLoginByOTP',
      type: 'mutation',
      parameters,
      fields: `
        ... on CustomerOTPPayload {
          session
          success
        }
        ... on AuthTokens {
          tokens {
            accessToken
            refreshToken
          }
        }
      `,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.authGraphqlClient.executeQuery(
      operationDetails.name,
      operation,
      {
        input,
        deviceId,
      },
    );

    return this.dataOrThrowFrom(result);
  }
}
