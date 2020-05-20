import { WALLET_PASS_URL_QUERY } from './../gqls/queries/wallet-pass';
import { LoggerService } from '@open-commerce/nestjs-logger';
import { IWalletPass } from '../interfaces/wallet-pass.interface';
import { POWERCARD_IN_WALLET_QUERY } from '../gqls/queries/powercard-in-wallet.query';
import { MOBILE_PASS_GRAPHQL_CLIENT_SERVICE_TOKEN } from '../../graphql-clients/graphql-clients.constants';
import { MobilePassGraphqlClientService } from '../../graphql-clients/clients/mobile-pass-graphql-client.service';
import { Inject } from '@nestjs/common';

export class MobilePassManagementServiceClient {
  protected loggerContext = this.constructor.name;

  constructor(
    @Inject(MOBILE_PASS_GRAPHQL_CLIENT_SERVICE_TOKEN)
    private mobilePassGraphqlService: MobilePassGraphqlClientService,
    private logger: LoggerService,
  ) {}

  public async isPowercardInGoogleWallet(
    powercardUuid: string,
    deviceId: string,
  ): Promise<any> {
    const variables = {
      deviceId,
      powercardUuid,
    };

    this.logger.log(
      JSON.stringify({
        msg: 'sending query is powercard in google wallet',
        query: POWERCARD_IN_WALLET_QUERY,
        variables,
      }),
      this.loggerContext,
    );

    return await this.mobilePassGraphqlService.isPowercardInGoogleWallet(
      deviceId,
      powercardUuid,
    );
  }

  public async getWalletPassUrls(
    powercardUuid: string,
    deviceId: string,
  ): Promise<IWalletPass> {
    const variables = {
      deviceId,
      powercardUuid,
    };
    this.logger.log(
      JSON.stringify({
        msg: 'sending query mobile pass internal service',
        query: WALLET_PASS_URL_QUERY,
        variables,
      }),
      this.loggerContext,
    );

    return await this.mobilePassGraphqlService.getWalletPassUrls(
      powercardUuid,
      deviceId,
    );
  }
}
