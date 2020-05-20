import { InjectableConfig } from '@open-commerce/nestjs-config';

export const AUTH_SERVICE_CONFIG_TOKEN = 'AUTH_SERVICE_CONFIG_TOKEN';

export class AuthServiceConfig extends InjectableConfig {
  public static CONFIG_KEY = 'authService';

  public inAuthTestMode: boolean;
}
