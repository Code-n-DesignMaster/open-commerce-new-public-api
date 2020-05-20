import { InjectableConfig } from '@open-commerce/nestjs-config';
import { ILoggerOptions } from '@open-commerce/nestjs-logger';

export class LogConfig extends InjectableConfig implements ILoggerOptions {
  public static CONFIG_KEY = 'log';

  public level: any;
  public format: any;
}
