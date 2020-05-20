import { LogoutService } from '../auth/services/logout.service';
import { CustomerService } from './customer.service';
import { CustomerResolver } from './customer.resolver';
import { CustomerConfig, CUSTOMER_CONFIG_TOKEN } from './customer.config';
import { provideConfig } from '@open-commerce/nestjs-config';
import { Provider } from '@nestjs/common';

export const customerProviders: Provider[] = [
  LogoutService,
  CustomerService,
  CustomerResolver,
  provideConfig(CUSTOMER_CONFIG_TOKEN, CustomerConfig),
];
