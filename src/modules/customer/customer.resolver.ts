import * as assert from 'assert';
import { get, isEmpty } from 'lodash';
import { GraphQLResolveInfo } from 'graphql';
import {
  Resolver,
  Query,
  Args,
  Mutation,
  Context,
  Info,
} from '@nestjs/graphql';
import { UseGuards, Inject } from '@nestjs/common';
import { LoggerService } from '@open-commerce/nestjs-logger';
import {
  THROTTLING_ERROR,
  ThrottlingService,
} from '@open-commerce/nestjs-throttling';

import { Viewer } from '../common/decorators/viewer.decorator';
import { IViewer } from '../common/interfaces/viewer.interface';
import { CustomerPaymentInstrumentCreateDto } from './dtos/customer-payment-instrument-create.dto';
import { IPaymentInstrument } from './interfaces/payment-instrument.interface';
import { CustomerPaymentInstrumentUpdateDto } from './dtos/customer-payment-instrument-update.dto';
import { IClientPaymentToken } from './interfaces/client-payment-token.interface';
import { Auth } from '../common/decorators/auth.decorator';
import { IAuth } from '../common/interfaces/auth.interface';
import { JwtAuthGuard } from '../authorization/services/auth-guard.service';
import { OCCustomerNotFoundError } from '../../errors/OCCustomerNotFoundError';
import { TransactionReceiptMapper } from '../common/mappers/transaction.mapper';
import { LogoutService } from '../auth/services/logout.service';
import { OCCustomerDeleteError } from '../../errors/OCCustomerDeleteError';

import { OCThrottlingError } from '../../errors/OCThrottlingError';
import {
  ThrottlingConfig,
  THROTTLING_CONFIG_SERVICE_TOKEN,
} from '../throttling-config/throttling-config.constants';
import { IThrottlingConfigService } from '../throttling-config/interfaces/throttling-config.service.interface';
import { CustomerUpdateDto } from '@open-commerce/data-objects';
import { CustomerConfig, CUSTOMER_CONFIG_TOKEN } from './customer.config';
import { CustomerService } from './customer.service';
import { AuthClientService } from '../auth/services/auth-client.service';
import { IInAuthPayloadOptions } from '../auth/interfaces/inauth-payload-options';

@Resolver('Customer')
@UseGuards(JwtAuthGuard)
export class CustomerResolver {
  private readonly loggerContext = this.constructor.name;

  constructor(
    private customerService: CustomerService,
    private authService: AuthClientService,
    private logoutService: LogoutService,
    private readonly logger: LoggerService,
    private throttlingService: ThrottlingService,
    @Inject(THROTTLING_CONFIG_SERVICE_TOKEN)
    private throttlingConfig: IThrottlingConfigService,
    @Inject(CUSTOMER_CONFIG_TOKEN)
    private config: CustomerConfig,
  ) {}

  @Query('currentCustomer')
  public async currentCustomer(
    @Info() info: GraphQLResolveInfo,
    @Auth() auth: IAuth,
  ) {
    this.logger.log('processing currentCustomer', this.loggerContext);

    this.logger.log('fetching customer', this.loggerContext);

    // 1. Get current customer from customer service
    const customer = await this.customerService.retrieveByIdentityId(
      auth.sub,
      info,
    );

    // 2. If transactions, update receipt data for proper display
    if (get(customer, 'transactions.edges')) {
      // Map transactions
      customer.transactions.edges.map(transactionEdge =>
        TransactionReceiptMapper.mapTransactionToDisplayTransaction(
          transactionEdge.node,
        ),
      );
    }

    if (isEmpty(customer)) {
      throw new OCCustomerNotFoundError();
    }

    return customer;
  }

  @Mutation('customerDelete')
  public async customerDelete(@Auth() auth: IAuth): Promise<boolean> {
    this.logger.log('processing customerDelete', this.loggerContext);

    this.logger.log('fetching customer', this.loggerContext);
    // 1. Get customer
    const customer = await this.customerService.retrieveByIdentityId(auth.sub);

    // 2. Verify customer exists
    if (isEmpty(customer)) {
      throw new OCCustomerNotFoundError();
    }

    try {
      // 3. Delete the customer
      const customerDelete = await this.customerService.customerDelete(
        customer.uuid,
      );
      if (customerDelete) {
        // 4. Log the customer out
        await this.logoutService.logout(auth);
      }

      return customerDelete;
    } catch (e) {
      throw new OCCustomerDeleteError();
    }
  }

  @Mutation('customerUpdate')
  public async customerUpdate(
    @Info() resolveInfo: GraphQLResolveInfo,
    @Viewer() viewer: IViewer,
    @Auth() auth: IAuth,
    @Args('input') input: CustomerUpdateDto,
    @Args('inAuthLog') inAuthLog: string,
  ) {
    const payload: IInAuthPayloadOptions = {
      auth,
      inAuthLogPayload: inAuthLog,
      deviceId: viewer.deviceId,
      deviceIpAddress: viewer.deviceIpAddress,
      transactionId: viewer.traceId,
    };
    this.logger.warn(
      {
        msg: 'helllllllllo',
        payload,
      },
      this.loggerContext,
    );

    await this.authService.inAuthPayloadValidate(payload);
    const customer = await this.customerService.retrieveByIdentityId(auth.sub);

    return this.customerService.customerUpdate(
      resolveInfo,
      customer.uuid,
      this.customerService.makeBirthdayValid(input),
    );
  }

  @Mutation('customerEmailVerificationSend')
  public async customerEmailVerificationSend(@Auth() auth: IAuth) {
    const customer = await this.customerService.retrieveByIdentityId(auth.sub);

    return this.customerService.customerEmailVerificationSend(customer.uuid);
  }

  @Query('clientPaymentToken')
  public async clientPaymentToken(
    @Auth() auth: IAuth,
  ): Promise<IClientPaymentToken> {
    this.logger.log(`processing clientPaymentToken`, this.loggerContext);

    const customer = await this.getCustomer(auth);

    const response = await this.customerService.clientPaymentToken(
      customer.uuid,
    );

    return response;
  }

  @Mutation('customerPaymentInstrumentCreate')
  public async customerPaymentInstrumentCreate(
    @Info() resolveInfo: GraphQLResolveInfo,
    @Args('input') input: CustomerPaymentInstrumentCreateDto,
    @Viewer() viewer: IViewer,
    @Auth() auth: IAuth,
  ): Promise<IPaymentInstrument> {
    this.logger.log(
      `processing customerPaymentInstrumentCreate`,
      this.loggerContext,
    );
    const customer = await this.getCustomer(auth);

    await this.throttle(
      ThrottlingConfig.CustomerPaymentInstrumentCreate,
      viewer,
      customer,
    );

    const response = await this.customerService.customerPaymentInstrumentCreate(
      resolveInfo,
      customer.uuid,
      input,
    );

    return response;
  }

  @Mutation('customerPaymentInstrumentUpdate')
  public async customerPaymentInstrumentUpdate(
    @Info() resolveInfo: GraphQLResolveInfo,
    @Args('input') input: CustomerPaymentInstrumentUpdateDto,
  ): Promise<IPaymentInstrument> {
    this.logger.log(
      `processing customerPaymentInstrumentUpdate`,
      this.loggerContext,
    );

    const response = await this.customerService.customerPaymentInstrumentUpdate(
      resolveInfo,
      input,
    );

    return response;
  }

  @Mutation('customerPaymentInstrumentDelete')
  public async customerPaymentInstrumentDelete(
    @Info() resolveInfo: GraphQLResolveInfo,
    @Args('uuid') uuid: string,
    @Auth() auth: IAuth,
  ): Promise<IPaymentInstrument[]> {
    this.logger.log(
      `processing customerPaymentInstrumentDelete`,
      this.loggerContext,
    );

    const customer = await this.getCustomer(auth);
    const response = await this.customerService.customerPaymentInstrumentDelete(
      resolveInfo,
      customer.uuid,
      uuid,
    );

    return response;
  }

  @Mutation('customerPushNotificationTokenRegister')
  public async customerRegisterPushNotificationToken(
    @Args('token') token: string,
    @Context('req') req,
  ): Promise<boolean> {
    const customer = await this.getCustomer(req.auth);
    const success = await this.customerService.customerRegisterPushNotificationToken(
      customer.uuid,
      token,
    );

    return success;
  }

  private async getCustomer(auth: IAuth, resolveInfo?: GraphQLResolveInfo) {
    this.logger.log('fetching customer', this.loggerContext);
    const customer = await this.customerService.retrieveByIdentityId(
      auth.sub,
      resolveInfo,
    );

    assert(
      !isEmpty(customer),
      'recieved empty result from commonCustomerFactory.retrieveByIdentityId ' +
        'mutation response; auth service is probably the issue',
    );

    return customer;
  }

  private async throttle(key: ThrottlingConfig, viewer, customer) {
    try {
      if (
        this.config.isWhiteListForAutomatedQaEnabled &&
        customer.email.match(/^aqa\+(.*)@stuzo\.com$/)
      ) {
        this.logger.debug(
          `Customer ${customer.uuid} is whitelisted for throttling by email pattern`,
          this.loggerContext,
        );
      } else {
        const throttlingConfig = await this.throttlingConfig.get(key);
        await this.throttlingService.checkThrottledQueueAndIncrement(
          `customerPaymentInstrumentCreate:${viewer.deviceId}`,
          {
            timeInMinutes: throttlingConfig.timeInSeconds / 60,
            requests: throttlingConfig.limit,
            throttledInMinutes: throttlingConfig.blockDurationSeconds / 60,
          },
        );
      }
    } catch (error) {
      if (error.code === THROTTLING_ERROR) {
        throw new OCThrottlingError(
          'Maximum number of requests reached. Please try again later',
        );
      }
      throw error;
    }
  }
}
