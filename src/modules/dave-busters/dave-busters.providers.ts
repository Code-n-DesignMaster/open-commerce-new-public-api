import { Provider } from '@nestjs/common';
import { CustomerPowercardWalletResolver } from './resolvers/customer-powercard-wallet.resolver';
import { PowercardResolver } from './resolvers/powercard.resolver';
import { LocationResolver } from './resolvers/location.resolver';
import { AdminResolver } from './resolvers/admin.resolver';
import { AppConfigResolver } from './resolvers/app-config.resolver';
import { provideConfig } from '@open-commerce/nestjs-config';
import {
  DaveBustersServiceConfig,
  DAVE_BUSTERS_CONFIG_TOKEN,
} from './dave-busters-service.config';
import { DaveAndBustersServiceGraphqlClient } from '@open-commerce/db-internal-service-client';
import { MobilePassManagementServiceClient } from './services/mobile-pass-management.service';
import { DaveBustersService } from './services/dave-busters.service';

export const daveBustersProviders: Provider[] = [
  CustomerPowercardWalletResolver,
  PowercardResolver,
  LocationResolver,
  AdminResolver,
  AppConfigResolver,
  DaveAndBustersServiceGraphqlClient,
  MobilePassManagementServiceClient,
  DaveBustersService,
  // RabbitmqService,
  // PubSub,
  // rabbitmqListenerProvider,
  provideConfig(DAVE_BUSTERS_CONFIG_TOKEN, DaveBustersServiceConfig),
];
