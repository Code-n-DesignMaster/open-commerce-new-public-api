import { ICustomerInternal } from '../common/interfaces/customer-internal.interface';
import { IClientPaymentToken } from './interfaces/client-payment-token.interface';
import { IPaymentInstrument } from './interfaces/payment-instrument.interface';
import { CustomerPaymentInstrumentCreateDto } from './dtos/customer-payment-instrument-create.dto';
import { CustomerPaymentInstrumentUpdateDto } from './dtos/customer-payment-instrument-update.dto';

import { Inject, Injectable } from '@nestjs/common';
import { LoggerService } from '@open-commerce/nestjs-logger';

import { CustomerRegistrationCompleteDto } from '../auth/dtos/customer-registration-complete.dto';
import { CustomerConfig, CUSTOMER_CONFIG_TOKEN } from './customer.config';
import * as moment from 'moment';
import { get, set } from 'lodash';
import { OCCustomerNotificationTokenRegisterError } from '../../errors/OCCustomerNotificationTokenRegisterError';
import { ICustomerServiceConfig } from './interfaces/customer-service-config.interface';
import { CustomerUpdateDto } from '@open-commerce/data-objects';
import {
  NOTIFICATION_GRAPHQL_CLIENT_SERVICE_TOKEN,
  CUSTOMER_GRAPHQL_CLIENT_SERVICE_TOKEN,
} from '../graphql-clients/graphql-clients.constants';
import { NotificationGraphqlClientService } from '../graphql-clients/clients/notification-graphql-client.service';
import { CustomerGraphqlClientService } from '../graphql-clients/clients/customer-graphql-client.service';
import { GraphQLResolveInfo } from 'graphql';

@Injectable()
export class CustomerService {
  private readonly loggerContext = this.constructor.name;
  constructor(
    @Inject(CUSTOMER_CONFIG_TOKEN)
    config: CustomerConfig,
    private readonly logger: LoggerService,
    @Inject(NOTIFICATION_GRAPHQL_CLIENT_SERVICE_TOKEN)
    private notificationService: NotificationGraphqlClientService,
    @Inject(CUSTOMER_GRAPHQL_CLIENT_SERVICE_TOKEN)
    private customerGraphqlService: CustomerGraphqlClientService,
  ) {}

  public async getCustomerConfig(): Promise<ICustomerServiceConfig> {
    return await this.customerGraphqlService.customerServiceConfig();
  }

  public async customerDelete(uuid: string): Promise<boolean> {
    this.logger.log(
      {
        msg: 'deleting current customer',
        uuid,
      },
      this.loggerContext,
    );

    return await this.customerGraphqlService.customerDelete(uuid);
  }

  public async currentCustomerByUsername(
    resolveInfo: GraphQLResolveInfo,
    username: string,
  ): Promise<ICustomerInternal> {
    this.logger.log(
      {
        msg: 'fetching customerByUsername',
        username,
      },
      this.loggerContext,
    );

    return await this.customerGraphqlService.currentCustomerByUsername(
      resolveInfo,
      username,
    );
  }

  public async customerUpdate(
    resolveInfo: GraphQLResolveInfo,
    customerUuid: string,
    input: Partial<ICustomerInternal>,
  ): Promise<ICustomerInternal> {
    // this.logger.log(
    //   {
    //     msg: 'updating currentCustomer',
    //     customerUuid,
    //     input: input + '',
    //   },
    //   this.loggerContext,
    // );

    return await this.customerGraphqlService.customerUpdate(
      resolveInfo,
      customerUuid,
      input,
    );
  }

  public async customerEmailVerificationSend(
    customerUuid: string,
  ): Promise<boolean> {
    this.logger.log(
      {
        msg: 'sending customer email verification',
        customerUuid,
      },
      this.loggerContext,
    );

    return await this.customerGraphqlService.customerEmailVerificationSend(
      customerUuid,
    );
  }

  public async clientPaymentToken(
    customerUuid: string,
  ): Promise<IClientPaymentToken> {
    return await this.customerGraphqlService.clientPaymentToken(customerUuid);
  }

  public async customerPaymentInstrumentCreate(
    resolveInfo: GraphQLResolveInfo,
    customerUuid: string,
    input: CustomerPaymentInstrumentCreateDto,
  ): Promise<IPaymentInstrument> {
    return await this.customerGraphqlService.customerPaymentInstrumentCreate(
      resolveInfo,
      customerUuid,
      input,
    );
  }

  public async customerPaymentInstrumentUpdate(
    resolveInfo: GraphQLResolveInfo,
    input: CustomerPaymentInstrumentUpdateDto,
  ): Promise<IPaymentInstrument> {
    return await this.customerGraphqlService.customerPaymentInstrumentUpdate(
      resolveInfo,
      input,
    );
  }

  public async customerPaymentInstrumentDelete(
    resolveInfo: GraphQLResolveInfo,
    customerUuid: string,
    uuid: string,
  ): Promise<IPaymentInstrument[]> {
    return await this.customerGraphqlService.customerPaymentInstrumentDelete(
      resolveInfo,
      customerUuid,
      uuid,
    );
  }

  public async retrieveByIdentityId(
    identityProviderId: string,
    info?: GraphQLResolveInfo,
  ): Promise<ICustomerInternal> {
    return await this.customerGraphqlService.customerByIdentityProviderId(
      info,
      identityProviderId,
    );
  }

  public async retrieveBasicByIdentityId(
    identityProviderId: string,
  ): Promise<ICustomerInternal> {
    // Get basic fields, no resolver info here.
    return await this.customerGraphqlService.customerByIdentityProviderId(
      null,
      identityProviderId,
    );
  }

  public async createCustomer(
    resolveInfo: GraphQLResolveInfo,
    input: any,
  ): Promise<ICustomerInternal> {
    return await this.customerGraphqlService.customerCreate(resolveInfo, input);
  }

  public async customerRegistrationComplete(
    resolveInfo: GraphQLResolveInfo,
    customerUuid: string,
    input: CustomerRegistrationCompleteDto,
  ): Promise<ICustomerInternal> {
    return await this.customerGraphqlService.customerRegistrationComplete(
      resolveInfo,
      customerUuid,
      input,
    );
  }

  public getBirthdayInValidFormat(birthdate: string) {
    const format = 'YYYY-MM-DD';
    return birthdate ? moment(birthdate, format).format(format) : null;
  }

  public makeBirthdayValid<
    T extends CustomerUpdateDto | CustomerRegistrationCompleteDto
  >(input: T): T {
    const birthday = get(input, 'demographics.birthday', null);
    if (birthday) {
      return set(
        input,
        'demographics.birthday',
        this.getBirthdayInValidFormat(birthday),
      );
    } else {
      return input;
    }
  }

  public async customerRegisterPushNotificationToken(
    customerUuid: string,
    token: string,
  ): Promise<boolean> {
    const response = await this.notificationService.iosAppNotificationTokenRegister(
      token,
      customerUuid,
    );

    if (response.status === 200) {
      return true;
    } else {
      throw new OCCustomerNotificationTokenRegisterError(
        response.rawResponse.message,
      );
    }
  }
}
