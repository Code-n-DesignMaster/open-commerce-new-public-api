import { Injectable } from '@nestjs/common';
import { BlacklistTokenRepositoryService } from '../../authorization/services/blacklist-token-repository.service';
import { IAuth } from '../../common/interfaces/auth.interface';
import { AuthClientService } from './auth-client.service';

@Injectable()
export class LogoutService {
  constructor(
    private readonly blacklistTokenRepo: BlacklistTokenRepositoryService,
    private authService: AuthClientService,
  ) {}

  public async logout(auth: IAuth): Promise<boolean> {
    const logout = await this.authService.logout(auth.accessToken);
    if (logout) {
      await this.blacklistTokenRepo.saveToken(auth.accessToken, auth.expiresIn);
    }
    return logout;
  }
}
