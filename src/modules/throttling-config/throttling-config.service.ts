import { Injectable, Inject } from '@nestjs/common';

import {
  ThrottlingConfig,
  THROTTLING_CONFIG_REPO_TOKEN,
} from './throttling-config.constants';
import { IThrottlingConfigRepository } from './interfaces/throttling-config.repository.interface';
import { IThrottlingConfigService } from './interfaces/throttling-config.service.interface';

@Injectable()
export class ThrottlingConfigService implements IThrottlingConfigService {
  @Inject(THROTTLING_CONFIG_REPO_TOKEN)
  private readonly throttlingConfigRepo: IThrottlingConfigRepository;

  public async get(throttlingKey: ThrottlingConfig) {
    return this.throttlingConfigRepo.get(throttlingKey);
  }
}
