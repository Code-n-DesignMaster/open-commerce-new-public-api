import { HealthCheckService, HealthCheck } from '@nestjs/terminus';
import { Controller, Get, Inject } from '@nestjs/common';
import { VersionsService } from './versions.service';
import { VERSIONS_SERVICE_TOKEN } from './health-check.constants';

@Controller('health-check')
export class HealthCheckController {
  constructor(
    private health: HealthCheckService,
    @Inject(VERSIONS_SERVICE_TOKEN)
    private versionsService: VersionsService,
  ) {}

  @Get()
  @HealthCheck()
  public healthCheck() {
    return this.health.check([
      async () => this.versionsService.allServiceVersions(),
    ]);
  }
}
