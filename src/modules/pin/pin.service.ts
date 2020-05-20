import { Inject, Injectable } from '@nestjs/common';
import { ThrottlingService } from '@open-commerce/nestjs-throttling';

import {
  THROTTLING_CONFIG_SERVICE_TOKEN,
  ThrottlingConfig,
} from '../throttling-config/throttling-config.constants';
import { IThrottlingConfigService } from '../throttling-config/interfaces/throttling-config.service.interface';
import {
  PAYMENT_GRAPHQL_CLIENT_SERVICE_TOKEN,
  CUSTOMER_GRAPHQL_CLIENT_SERVICE_TOKEN,
} from '../graphql-clients/graphql-clients.constants';
import { PaymentGraphqlClientService } from '../graphql-clients/clients/payment-graphql-client.service';
import { get } from 'lodash';
import { OCPaymentsWalletDeleteError } from '../../errors/OCPaymentsWalletDeleteError';
import { CustomerGraphqlClientService } from '../graphql-clients/clients/customer-graphql-client.service';

@Injectable()
export class PinService {
  constructor(
    private throttlingService: ThrottlingService,
    @Inject(THROTTLING_CONFIG_SERVICE_TOKEN)
    private throttlingConfig: IThrottlingConfigService,
    @Inject(PAYMENT_GRAPHQL_CLIENT_SERVICE_TOKEN)
    private paymentClientService: PaymentGraphqlClientService,
    @Inject(CUSTOMER_GRAPHQL_CLIENT_SERVICE_TOKEN)
    private customerGraphqlService: CustomerGraphqlClientService,
  ) {}

  public async setPinCode(input: any, customerUuid: string): Promise<boolean> {
    return await this.customerGraphqlService.customerPinCodeSet(
      customerUuid,
      input,
    );
  }

  public async changePinCode(
    input: any,
    customerUuid: string,
  ): Promise<boolean> {
    return await this.customerGraphqlService.customerPinCodeChange(
      customerUuid,
      input,
    );
  }

  public async verifyPinCode(
    input: any,
    customerUuid: string,
  ): Promise<boolean> {
    const result = await this.customerGraphqlService.customerPinCodeVerify(
      customerUuid,
      input,
    );

    if (result === false) {
      const throttlingConfig = await this.throttlingConfig.get(
        ThrottlingConfig.PinCodeVerify,
      );
      await this.throttlingService.incrementAndThrowErrorOnOverflow(
        `verifyPinCode_${customerUuid}`,
        {
          timeInMinutes: throttlingConfig.timeInSeconds / 60,
          requests: throttlingConfig.limit,
          throttledInMinutes: throttlingConfig.blockDurationSeconds / 60,
        },
      );
    }

    return result;
  }

  public async resetPinCode(customerUuid: string): Promise<boolean> {
    const pinReset = await this.customerGraphqlService.customerPinCodeReset(
      customerUuid,
    );

    if (pinReset) {
      await this.deletePaymentsWallet(customerUuid);
    }
    return pinReset;
  }

  private async deletePaymentsWallet(uuid: string) {
    const response = await this.paymentClientService.paymentWalletDelete(uuid);
    const error = get(response, 'rawResponse.data.errors[0]', null);
    if (error) {
      throw new OCPaymentsWalletDeleteError();
    }
  }
}
