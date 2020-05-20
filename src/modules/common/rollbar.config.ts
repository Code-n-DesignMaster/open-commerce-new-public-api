import { InjectableConfig } from '@open-commerce/nestjs-config';

export class RollbarConfig extends InjectableConfig {
  public static CONFIG_KEY = 'rollbar';

  public environment: string;
  public accessToken: string;

  public captureUncaught: true;
  public captureUnhandledRejections: true;
}
