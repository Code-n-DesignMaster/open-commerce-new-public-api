import { Inject } from '@nestjs/common';
import { MOBILE_PASS_SERVICE_GRAPHQL_CLIENT_TOKEN } from '../graphql-clients.constants';
import {
  PassManagementServiceGraphqlClient,
  GraphqlParameterDto,
  BuildGraphqlOperationDto,
  GraphqlOperationBuilder,
  BaseInternalServiceGraphqlClientService,
} from '@open-commerce/db-internal-service-client';
import { LoggerService } from '@open-commerce/nestjs-logger';
import { IWalletPass } from '../../dave-busters/interfaces/wallet-pass.interface';
import { get } from 'lodash';

export class MobilePassGraphqlClientService extends BaseInternalServiceGraphqlClientService {
  private loggerContext = this.constructor.name;

  constructor(
    protected logger: LoggerService,
    @Inject(MOBILE_PASS_SERVICE_GRAPHQL_CLIENT_TOKEN)
    private mobilePassClient: PassManagementServiceGraphqlClient,
  ) {
    super(logger);
  }

  public async isPowercardInGoogleWallet(
    powercardUuid: string,
    deviceId: string,
  ): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'powercardUuid',
        type: 'ID!',
      },
      {
        name: 'deviceId',
        type: 'ID!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'isPowercardInGoogleWallet',
      type: 'query',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    this.logger.log(
      JSON.stringify({
        msg: 'sending query is powercard in google wallet',
        query: operation,
        parameters,
      }),
      this.loggerContext,
    );

    const result = await this.mobilePassClient.executeQuery(
      operationDetails.name,
      operation,
      {
        powercardUuid,
        deviceId,
      },
    );

    return get(result, 'data');
  }

  public async getWalletPassUrls(
    powercardUuid: string,
    deviceId: string,
  ): Promise<IWalletPass> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'powercardUuid',
        type: 'ID!',
      },
      {
        name: 'deviceId',
        type: 'ID!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'walletPass',
      type: 'query',
      parameters,
      fields: `
        googlePayUrl
        pkPassUrl
      `,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.mobilePassClient.executeQuery(
      operationDetails.name,
      operation,
      {
        powercardUuid,
        deviceId,
      },
    );

    return this.dataOrThrowFrom(result);
  }
}
