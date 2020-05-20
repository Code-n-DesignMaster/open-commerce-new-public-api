import { Injectable, Inject } from '@nestjs/common';

import { IThrottlingConfig } from './interfaces/throttling-config.interface';
import { ThrottlingConfig } from './throttling-config.constants';
import { IThrottlingConfigRepository } from './interfaces/throttling-config.repository.interface';
import {
  ThrottlingServiceConfig,
  THROTTLING_CONFIG_TOKEN,
} from './throttling-service.config';
import {
  RateLimitDirectiveConfig,
  RATE_LIMIT_CONFIG_TOKEN,
} from './rate-limit-directive.config';

type ThrottlingConfigRecord = Record<ThrottlingConfig, IThrottlingConfig>;

const THIRTY_MINUTES_IN_SECONDS = 30 * 60;

@Injectable()
export class ThrottlingConfigInMemoryRepository
  implements IThrottlingConfigRepository {
  @Inject(THROTTLING_CONFIG_TOKEN)
  private config: ThrottlingServiceConfig;

  @Inject(RATE_LIMIT_CONFIG_TOKEN)
  private rateLimitConfig: RateLimitDirectiveConfig;

  public async get(key: ThrottlingConfig): Promise<IThrottlingConfig> {
    const result = this.getAll()[key];
    if (!result) {
      throw new Error(`No throttling config found for ${key}`);
    }
    return this.getAll()[key];
  }

  // FIXME:  Refactor this, it needs to be more generic / extendable
  protected getAll(): ThrottlingConfigRecord {
    return {
      [ThrottlingConfig.CustomerOTPRequest]: {
        timeInSeconds: THIRTY_MINUTES_IN_SECONDS,
        limit: 10,
        blockDurationSeconds: THIRTY_MINUTES_IN_SECONDS,
      },
      [ThrottlingConfig.CustomerPaymentInstrumentCreate]: {
        timeInSeconds: this.rateLimitConfig.durationSeconds,
        limit: this.rateLimitConfig.limit,
        blockDurationSeconds: this.rateLimitConfig.blockDurationSeconds,
      },
      [ThrottlingConfig.CustomerUsernameChange]: {
        timeInSeconds: THIRTY_MINUTES_IN_SECONDS,
        limit: 10,
        blockDurationSeconds: THIRTY_MINUTES_IN_SECONDS,
      },
      [ThrottlingConfig.PinCodeVerify]: {
        timeInSeconds: this.config.timeInMinutes * 60,
        limit: this.config.requests,
        blockDurationSeconds: this.config.throttledInMinutes * 60,
      },
    };
  }
}
