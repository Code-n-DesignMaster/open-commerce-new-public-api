import { Module } from '@nestjs/common';
import { ThrottlingConfigService } from './throttling-config.service';
import {
  THROTTLING_CONFIG_REPO_TOKEN,
  THROTTLING_CONFIG_SERVICE_TOKEN,
} from './throttling-config.constants';
import { ThrottlingConfigInMemoryRepository } from './throttling-config.in-memory.repository';
import {
  THROTTLING_CONFIG_TOKEN,
  ThrottlingServiceConfig,
} from './throttling-service.config';
import { provideConfig } from '@open-commerce/nestjs-config';
import {
  RATE_LIMIT_CONFIG_TOKEN,
  RateLimitDirectiveConfig,
} from './rate-limit-directive.config';

@Module({
  providers: [
    {
      provide: THROTTLING_CONFIG_REPO_TOKEN,
      useClass: ThrottlingConfigInMemoryRepository,
    },
    {
      provide: THROTTLING_CONFIG_SERVICE_TOKEN,
      useClass: ThrottlingConfigService,
    },
    provideConfig(THROTTLING_CONFIG_TOKEN, ThrottlingServiceConfig),
    provideConfig(RATE_LIMIT_CONFIG_TOKEN, RateLimitDirectiveConfig),
  ],
  exports: [THROTTLING_CONFIG_SERVICE_TOKEN],
})
export class ThrottlingConfigModule {}
