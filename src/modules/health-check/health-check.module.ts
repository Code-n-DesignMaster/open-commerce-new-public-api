import { Module } from '@nestjs/common';
import { VERSIONS_SERVICE_TOKEN } from './health-check.constants';
import { healthCheckProviders } from './health-check.providers';
import { TerminusModule } from '@nestjs/terminus';
import { HealthCheckController } from './health-check.controller';

@Module({
  imports: [TerminusModule],
  providers: healthCheckProviders,
  controllers: [HealthCheckController],
  exports: [VERSIONS_SERVICE_TOKEN],
})
export class HealthCheckModule {}
