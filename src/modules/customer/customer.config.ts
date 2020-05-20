import { InjectableConfig } from '@open-commerce/nestjs-config';

export const CUSTOMER_CONFIG_TOKEN = 'CUSTOMER_CONFIG_TOKEN';

export class CustomerConfig extends InjectableConfig {
  public static CONFIG_KEY = 'customer';

  public isWhiteListForAutomatedQaEnabled: boolean;
}
