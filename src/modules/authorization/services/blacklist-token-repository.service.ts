import { Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';
import { OCAccessTokenExpiredError } from '../../../errors/OCAccessTokenExpiredError';

const TOKEN_PREFIX = 'accessToken:';

@Injectable()
export class BlacklistTokenRepositoryService {
  constructor(private readonly redisService: RedisService) {}

  public async saveToken(accessToken, expiresIn): Promise<void> {
    const redis = await this.redisService.getClient();
    const accessTokenKey = this.getTokenKey(accessToken);
    await redis.set(accessTokenKey, '', 'PX', this.getExpireTime(expiresIn));
  }

  public async exists(accessToken: string): Promise<boolean> {
    const redis = await this.redisService.getClient();
    const accessTokenKey = this.getTokenKey(accessToken);
    const exists = await redis.exists(accessTokenKey);
    return exists === 1;
  }

  private getExpireTime(expiresIn: number): number {
    const delta = expiresIn - Date.now();
    if (delta <= 0) {
      throw new OCAccessTokenExpiredError('Access token already expired');
    }
    return delta;
  }

  private getTokenKey(accessToken: string): string {
    return `${TOKEN_PREFIX}${accessToken}`;
  }
}
