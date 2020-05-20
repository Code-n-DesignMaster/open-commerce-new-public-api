import { Provider } from '@nestjs/common';
import {
  VERSIONS_SERVICE_TOKEN,
  SERVICES_DIRECTORY_TOKEN,
} from './health-check.constants';
import {
  GraphqlServiceDirectory,
  SERVICE_NAME,
} from '@open-commerce/db-internal-service-client';
import { VersionsService } from './versions.service';

const {
  TRANSACTION,
  PAYMENT,
  CUSTOMER,
  AUTH,
  NOTIFICATION,
  PASS_MANAGEMENT,
  DAVE_AND_BUSTERS,
  API_VERIFICATION,
} = SERVICE_NAME;

export const healthCheckProviders: Provider[] = [
  {
    provide: VERSIONS_SERVICE_TOKEN,
    useClass: VersionsService,
  },
  {
    provide: SERVICES_DIRECTORY_TOKEN,
    useFactory: () => {
      return new GraphqlServiceDirectory([
        TRANSACTION,
        PAYMENT,
        CUSTOMER,
        AUTH,
        NOTIFICATION,
        PASS_MANAGEMENT,
        DAVE_AND_BUSTERS,
        API_VERIFICATION,
      ]);
    },
  },
];
