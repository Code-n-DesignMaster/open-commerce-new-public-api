import { InjectableConfig } from '@open-commerce/nestjs-config';

export const RATE_LIMIT_CONFIG_TOKEN = 'RATE_LIMIT_CONFIG_TOKEN';

export class RateLimitDirectiveConfig extends InjectableConfig {
  public static CONFIG_KEY = 'rateLimitDirective';

  public message: string;
  public limit: number;
  public durationSeconds: number;
  public blockDurationSeconds: number;
}
