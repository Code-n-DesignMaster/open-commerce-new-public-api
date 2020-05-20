import { Viewer } from './../../common/decorators/viewer.decorator';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UseGuards, Inject } from '@nestjs/common';
import { LoggerService } from '@open-commerce/nestjs-logger';
import { ApolloError } from 'apollo-server-core';
import { OCNotAuthorizedError } from '../../../errors/OCNotAuthorizedError';
import { isEmpty } from 'lodash';
import assert = require('assert');
import { CustomerOtpRequestDto } from '../dtos/customer-otp-request.dto';
import { CustomerService } from '../../customer/customer.service';
import { AuthClientService } from '../services/auth-client.service';
import { PHONE_TYPE } from '../../customer/interfaces/phone-type.enum';
import { JwtAuthGuard } from '../../authorization/services/auth-guard.service';
import { Auth } from '../../common/decorators/auth.decorator';
import {
  THROTTLING_ERROR,
  ThrottlingService,
} from '@open-commerce/nestjs-throttling';
import { OCThrottlingError } from '../../../errors/OCThrottlingError';
import { IViewer } from '../../common/interfaces/viewer.interface';
import { CustomerLoginByOtpDto } from '../dtos/customer-login-by-otp.dto';
import {
  THROTTLING_CONFIG_SERVICE_TOKEN,
  ThrottlingConfig,
} from '../../throttling-config/throttling-config.constants';
import { IThrottlingConfigService } from '../../throttling-config/interfaces/throttling-config.service.interface';
import { IAuth } from '../../common/interfaces/auth.interface';

@Resolver('Auth')
export class LoginResolver {
  protected loggerContext: string = this.constructor.name;

  constructor(
    private customerService: CustomerService,
    private authService: AuthClientService,
    private logger: LoggerService,
    private throttlingService: ThrottlingService,
    @Inject(THROTTLING_CONFIG_SERVICE_TOKEN)
    private throttlingConfig: IThrottlingConfigService,
  ) {}

  @Query('loggedInTest')
  @UseGuards(JwtAuthGuard)
  public async loggedInTest(@Auth() auth: IAuth) {
    if (!auth.sub) {
      throw new OCNotAuthorizedError();
    }
    return {
      result: true,
    };
  }

  @Mutation('customerOTPRequest')
  public async customerOTPRequest(
    @Args('input') input: CustomerOtpRequestDto,
    @Viewer() viewer: IViewer,
  ) {
    try {
      this.logger.log('processing customerOTPRequest', this.loggerContext);

      const throttlingConfig = await this.throttlingConfig.get(
        ThrottlingConfig.CustomerOTPRequest,
      );
      await this.throttlingService.checkThrottledQueueAndIncrement(
        `customerOTPRequest_${input.identifier}`,
        {
          throttledInMinutes: throttlingConfig.blockDurationSeconds / 60,
          timeInMinutes: throttlingConfig.timeInSeconds / 60,
          requests: throttlingConfig.limit,
        },
      );

      const result = await this.authService.customerOTPRequest(input);

      this.logger.debug(
        {
          msg: 'processed customerOTPRequest',
          result: JSON.stringify(result),
        },
        this.loggerContext,
      );

      assert(
        !isEmpty(result.sub),
        Error(`JWT sub was not returned; login has likely failed`),
      );

      let customer = await this.customerService.retrieveBasicByIdentityId(
        result.sub,
      );

      if (!customer || !customer.uuid) {
        this.log({
          msg: 'no customer was retreived using result.sub',
          sub: result.sub,
        });

        customer = await this.customerService.createCustomer(null, {
          identityProviderId: result.sub,
          username: input.identifier,
          phoneNumbers: [
            {
              phoneNumber: input.identifier,
              phoneType: PHONE_TYPE.WORK,
            },
          ],
        });
      } else {
        this.log({
          msg: 'retreived customer using id',
          id: result.sub,
        });
      }

      // connect customer to device
      await this.authService.inauthCustomerToDeviceConnect(
        customer.id,
        viewer.deviceId,
      );

      return result;
    } catch (e) {
      this.handleError(e);
    }
  }

  @Mutation('customerLoginByOTP')
  public async customerLoginByOTP(
    @Args('input') input: CustomerLoginByOtpDto,
    @Args('inAuthRegistrationPayload') inAuthRegistrationPayload: string,
    @Viewer() viewer: IViewer,
  ) {
    // Only call device register if payload is present
    let inAuthData = null;

    if (inAuthRegistrationPayload) {
      inAuthData = await this.authService.inAuthMobileDeviceRegister(
        viewer.deviceId,
        inAuthRegistrationPayload,
      );
    }

    // Authenticate
    const authenticationResult = await this.authService.customerLoginByOTP(
      input,
      viewer.deviceId,
    );

    // Only include the inauth response if we have a registration payload
    const response = inAuthRegistrationPayload
      ? {
          ...authenticationResult,
          inAuthDeviceResponse: inAuthData.deviceResponse,
        }
      : {
          ...authenticationResult,
        };

    return response;
  }

  @Mutation('getAccessTokenByRefreshToken')
  public async getAccessTokenByRefreshToken(@Args('input') input) {
    return this.authService.getAccessTokenByRefreshToken(input);
  }

  private log(message: { msg: string; [key: string]: any }): void {
    this.logger.log(message, this.loggerContext);
  }

  private handleError(e) {
    // let's throw apollo error immediately
    if (e instanceof ApolloError) {
      throw e;
    }
    // let's rethrow errors from auth
    if (e.code && e.code.startsWith('OC_')) {
      throw new ApolloError(e.message, e.code);
    }

    if (e.code === THROTTLING_ERROR) {
      throw new OCThrottlingError(
        'Maximum number of code attempts reached. Please try again later.',
      );
    }

    throw e;
  }
}
