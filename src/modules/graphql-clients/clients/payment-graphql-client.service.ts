import {
  ClientServiceResponse,
  PaymentServiceGraphqlClient,
  GraphqlParameterDto,
  BuildGraphqlOperationDto,
  GraphqlOperationBuilder,
  BaseInternalServiceGraphqlClientService,
} from '@open-commerce/db-internal-service-client';
import { Inject } from '@nestjs/common';
import { PAYMENT_SERVICE_GRAPHQL_CLIENT_TOKEN } from '../graphql-clients.constants';
import { LoggerService } from '@open-commerce/nestjs-logger';

export class PaymentGraphqlClientService extends BaseInternalServiceGraphqlClientService {
  constructor(
    protected logger: LoggerService,
    @Inject(PAYMENT_SERVICE_GRAPHQL_CLIENT_TOKEN)
    private paymentServiceClient: PaymentServiceGraphqlClient,
  ) {
    super(logger);
  }

  // This method returns no query fields.
  public async paymentWalletDelete(
    customerId: string,
  ): Promise<ClientServiceResponse> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'customerId',
        type: 'ID!',
      },
    ];

    // Build the query to the target service
    const operationDetails: BuildGraphqlOperationDto = {
      type: 'mutation',
      name: 'paymentWalletDelete',
      parameters,
      formatted: true,
    };
    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.paymentServiceClient.executeQuery(
      operationDetails.name,
      operation,
      {
        customerId,
      },
    );

    return result;
  }
}
