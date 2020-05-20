import { InjectableConfig } from '@open-commerce/nestjs-config';
import { IsNotEmpty } from 'class-validator';

export const THROTTLING_CONFIG_TOKEN = 'THROTTLING_CONFIG_TOKEN';

export class ThrottlingServiceConfig extends InjectableConfig {
  public static CONFIG_KEY = 'throttling';

  @IsNotEmpty()
  public requests: number;

  @IsNotEmpty()
  public timeInMinutes: number;

  @IsNotEmpty()
  public throttledInMinutes: number;
}
