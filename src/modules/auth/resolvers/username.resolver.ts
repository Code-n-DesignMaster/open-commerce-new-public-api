import { Mutation, Resolver, Args, Info } from '@nestjs/graphql';
import { AuthClientService } from '../services/auth-client.service';
import { Auth } from '../../common/decorators/auth.decorator';
import { CustomerService } from '../../customer/customer.service';
import { OCCustomerExistsError } from '../../../errors/OCCustomerExistsError';
import { PHONE_TYPE } from '../../customer/interfaces/phone-type.enum';
import { UseGuards, Inject } from '@nestjs/common';
import { JwtAuthGuard } from '../../authorization/services/auth-guard.service';
import {
  ThrottlingService,
  THROTTLING_ERROR,
} from '@open-commerce/nestjs-throttling';
import { OCThrottlingError } from '../../../errors/OCThrottlingError';
import {
  OC_TOO_MANY_TRIES_ERROR,
  OCTooManyTriesError,
} from '../../../errors/OCTooManyTriesError';
import {
  ThrottlingConfig,
  THROTTLING_CONFIG_SERVICE_TOKEN,
} from '../../throttling-config/throttling-config.constants';
import { IThrottlingConfigService } from '../../throttling-config/interfaces/throttling-config.service.interface';
import { GraphQLResolveInfo } from 'graphql';

@Resolver('Auth')
@UseGuards(JwtAuthGuard)
export class UsernameResolver {
  constructor(
    private authService: AuthClientService,
    private customerService: CustomerService,
    private throttlingService: ThrottlingService,
    @Inject(THROTTLING_CONFIG_SERVICE_TOKEN)
    private throttlingConfig: IThrottlingConfigService,
  ) {}

  // FIXME: Why is this in the auth module?  Move this entire resolver to the customer module.
  @Mutation('customerUsernameChange')
  public async customerUsernameChange(
    @Args('newUsername') username: string,
    @Auth() auth,
  ): Promise<string> {
    try {
      const throttlingConfig = await this.throttlingConfig.get(
        ThrottlingConfig.CustomerUsernameChange,
      );
      await this.throttlingService.checkThrottledQueueAndIncrement(
        `customerUsernameChange_${auth.sub}`,
        {
          throttledInMinutes: throttlingConfig.blockDurationSeconds / 60,
          timeInMinutes: throttlingConfig.timeInSeconds / 60,
          requests: throttlingConfig.limit,
        },
      );
    } catch (e) {
      this.handleError(e);
    }

    const customer = await this.customerService.currentCustomerByUsername(
      null,
      username,
    );
    if (customer) {
      throw new OCCustomerExistsError();
    }
    return this.authService.updatePhoneNumber(username, auth.sub);
  }

  @Mutation('customerUsernameChangeVerify')
  public async customerUsernameChangeVerify(
    @Info() resolveInfo: GraphQLResolveInfo,
    @Args('otp') otp,
    @Auth() auth,
  ): Promise<string> {
    try {
      const username = await this.authService.verifyPhoneNumber(otp);

      if (username) {
        const customer = await this.customerService.retrieveByIdentityId(
          auth.sub,
        );
        await this.customerService.customerUpdate(resolveInfo, customer.uuid, {
          username,
          phoneNumbers: [
            {
              phoneNumber: username,
              phoneType: PHONE_TYPE.WORK,
            },
          ],
        });
      }

      return username;
    } catch (e) {
      this.handleError(e);
    }
  }

  private handleError(error) {
    if (error.code === THROTTLING_ERROR) {
      throw new OCThrottlingError(
        'Maximum number of phone number changes reached. Please try again later.',
      );
    }
    if (error.code === OC_TOO_MANY_TRIES_ERROR) {
      throw new OCTooManyTriesError();
    }
    throw error;
  }
}
