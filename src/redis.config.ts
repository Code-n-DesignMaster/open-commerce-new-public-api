import { RedisModuleOptions } from 'nestjs-redis';
import { InjectableConfig } from '@open-commerce/nestjs-config';
import { IsNotEmpty } from 'class-validator';

export const REDIS_CONFIG_TOKEN = 'REDIS_CONFIG_TOKEN';

export class RedisConfig extends InjectableConfig
  implements RedisModuleOptions {
  public static CONFIG_KEY = 'redis';

  @IsNotEmpty()
  public host: string;
}
