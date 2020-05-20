import { Inject } from '@nestjs/common';
import { API_VERIFICATION_SERVICE_GRAPHQL_CLIENT_TOKEN } from '../graphql-clients.constants';
import {
  ApiVerificationServiceGraphqlClient,
  GraphqlParameterDto,
  BuildGraphqlOperationDto,
  GraphqlOperationBuilder,
  BaseInternalServiceGraphqlClientService,
} from '@open-commerce/db-internal-service-client';
import { LoggerService } from '@open-commerce/nestjs-logger';

export class ApiVerificationGraphqlClientService extends BaseInternalServiceGraphqlClientService {
  constructor(
    protected logger: LoggerService,
    @Inject(API_VERIFICATION_SERVICE_GRAPHQL_CLIENT_TOKEN)
    private apiVerificationClient: ApiVerificationServiceGraphqlClient,
  ) {
    super(logger);
  }

  public async verifyApiKey(apiKey: string): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'apiKey',
        type: 'ID!',
      },
    ];
    const operationDetails: BuildGraphqlOperationDto = {
      name: 'verifyApiKey',
      type: 'query',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.apiVerificationClient.executeQuery(
      operationDetails.name,
      operation,
      {
        apiKey,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async verifyAdminApiKey(apiKey: string): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'apiKey',
        type: 'ID!',
      },
    ];
    const operationDetails: BuildGraphqlOperationDto = {
      name: 'verifyAdminApiKey',
      type: 'query',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.apiVerificationClient.executeQuery(
      operationDetails.name,
      operation,
      {
        apiKey,
      },
    );

    return this.dataOrThrowFrom(result);
  }
}
