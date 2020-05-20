import { Inject } from '@nestjs/common';
import {
  NotificationServiceGraphqlClient,
  ClientServiceResponse,
  GraphqlParameterDto,
  BuildGraphqlOperationDto,
  GraphqlOperationBuilder,
  BaseInternalServiceGraphqlClientService,
} from '@open-commerce/db-internal-service-client';
import { NOTIFICATION_RECEIVER_TYPE } from '@open-commerce/data-objects';
import { NOTIFICATION_SERVICE_GRAPHQL_CLIENT_TOKEN } from '../graphql-clients.constants';
import { LoggerService } from '@open-commerce/nestjs-logger';

export class NotificationGraphqlClientService extends BaseInternalServiceGraphqlClientService {
  constructor(
    protected logger: LoggerService,
    @Inject(NOTIFICATION_SERVICE_GRAPHQL_CLIENT_TOKEN)
    private notificationClient: NotificationServiceGraphqlClient,
  ) {
    super(logger);
  }

  public async iosAppNotificationTokenRegister(
    rawIosAppToken: string,
    customerUuid: string,
  ): Promise<ClientServiceResponse> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'rawToken',
        type: 'String!',
      },
      {
        name: 'customerUuid',
        type: 'ID!',
      },
      {
        name: 'receiverType',
        type: 'NOTIFICATION_RECEIVER_TYPE!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'notificationTokenRegister',
      type: 'mutation',
      parameters,
      fields: `
        uuid
        token
        customerUuid
        receiverType
      `,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.notificationClient.executeQuery(
      operationDetails.name,
      operation,
      {
        rawToken: rawIosAppToken,
        customerUuid,
        receiverType: NOTIFICATION_RECEIVER_TYPE.IOS_APP,
      },
    );

    return result;
  }
}
