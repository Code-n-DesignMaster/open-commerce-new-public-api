import { Provider } from '@nestjs/common';
import {
  CUSTOMER_SERVICE_GRAPHQL_CLIENT_TOKEN,
  NOTIFICATION_SERVICE_GRAPHQL_CLIENT_TOKEN,
  MOBILE_PASS_SERVICE_GRAPHQL_CLIENT_TOKEN,
  CUSTOMER_GRAPHQL_CLIENT_SERVICE_TOKEN,
  NOTIFICATION_GRAPHQL_CLIENT_SERVICE_TOKEN,
  MOBILE_PASS_GRAPHQL_CLIENT_SERVICE_TOKEN,
  DAVE_AND_BUSTERS_SERVICE_GRAPHQL_CLIENT_TOKEN,
  DAVE_AND_BUSTERS_GRAPHQL_CLIENT_SERVICE_TOKEN,
  API_VERIFICATION_SERVICE_GRAPHQL_CLIENT_TOKEN,
  API_VERIFICATION_GRAPHQL_CLIENT_SERVICE_TOKEN,
  PAYMENT_GRAPHQL_CLIENT_SERVICE_TOKEN,
  PAYMENT_SERVICE_GRAPHQL_CLIENT_TOKEN,
  AUTH_GRAPHQL_CLIENT_SERVICE_TOKEN,
  AUTH_SERVICE_GRAPHQL_CLIENT_TOKEN,
  GRAPHQL_SERVICE_DIRECTORY_TOKEN,
} from './graphql-clients.constants';
import {
  CustomerServiceGraphqlClient,
  NotificationServiceGraphqlClient,
  PassManagementServiceGraphqlClient,
  DaveAndBustersServiceGraphqlClient,
  ApiVerificationServiceGraphqlClient,
  PaymentServiceGraphqlClient,
  AuthServiceGraphqlClient,
  GraphqlServiceDirectory,
  SERVICE_NAME,
} from '@open-commerce/db-internal-service-client';
import { CustomerGraphqlClientService } from './clients/customer-graphql-client.service';
import { NotificationGraphqlClientService } from './clients/notification-graphql-client.service';
import { MobilePassGraphqlClientService } from './clients/mobile-pass-graphql-client.service';
import { DaveAndBustersGraphqlClientService } from './clients/dave-and-busters-graphql-client.service';
import { ApiVerificationGraphqlClientService } from './clients/api-verification-graphql-client.service';
import { PaymentGraphqlClientService } from './clients/payment-graphql-client.service';
import { AuthGraphqlClientService } from './clients/auth-graphql-client.service';

export const graphqlClientsProviders: Provider[] = [
  {
    provide: GRAPHQL_SERVICE_DIRECTORY_TOKEN,
    useFactory: () =>
      new GraphqlServiceDirectory([
        SERVICE_NAME.PASS_MANAGEMENT,
        SERVICE_NAME.CUSTOMER,
      ]),
  },
  // NOTE: These are the internal service client instances from
  // internal service client NPM.
  {
    provide: CUSTOMER_SERVICE_GRAPHQL_CLIENT_TOKEN,
    useClass: CustomerServiceGraphqlClient,
  },
  {
    provide: NOTIFICATION_SERVICE_GRAPHQL_CLIENT_TOKEN,
    useClass: NotificationServiceGraphqlClient,
  },
  {
    provide: MOBILE_PASS_SERVICE_GRAPHQL_CLIENT_TOKEN,
    useClass: PassManagementServiceGraphqlClient,
  },
  {
    provide: DAVE_AND_BUSTERS_SERVICE_GRAPHQL_CLIENT_TOKEN,
    useClass: DaveAndBustersServiceGraphqlClient,
  },
  {
    provide: API_VERIFICATION_SERVICE_GRAPHQL_CLIENT_TOKEN,
    useClass: ApiVerificationServiceGraphqlClient,
  },
  {
    provide: PAYMENT_SERVICE_GRAPHQL_CLIENT_TOKEN,
    useClass: PaymentServiceGraphqlClient,
  },
  {
    provide: AUTH_SERVICE_GRAPHQL_CLIENT_TOKEN,
    useClass: AuthServiceGraphqlClient,
  },
  //////////////////////////////////////////////

  // NOTE: These are helper abstractions that contain code to
  // build the operations executed by the internal service clients above.
  {
    provide: CUSTOMER_GRAPHQL_CLIENT_SERVICE_TOKEN,
    useClass: CustomerGraphqlClientService,
  },
  {
    provide: NOTIFICATION_GRAPHQL_CLIENT_SERVICE_TOKEN,
    useClass: NotificationGraphqlClientService,
  },
  {
    provide: MOBILE_PASS_GRAPHQL_CLIENT_SERVICE_TOKEN,
    useClass: MobilePassGraphqlClientService,
  },
  {
    provide: DAVE_AND_BUSTERS_GRAPHQL_CLIENT_SERVICE_TOKEN,
    useClass: DaveAndBustersGraphqlClientService,
  },
  {
    provide: API_VERIFICATION_GRAPHQL_CLIENT_SERVICE_TOKEN,
    useClass: ApiVerificationGraphqlClientService,
  },
  {
    provide: PAYMENT_GRAPHQL_CLIENT_SERVICE_TOKEN,
    useClass: PaymentGraphqlClientService,
  },
  {
    provide: AUTH_GRAPHQL_CLIENT_SERVICE_TOKEN,
    useClass: AuthGraphqlClientService,
  },
  ///////////////////////////////////
];
