import { UseGuards } from '@nestjs/common';
import { Mutation, Resolver } from '@nestjs/graphql';
import { Auth } from '../../common/decorators/auth.decorator';
import { IAuth } from '../../common/interfaces/auth.interface';
import { JwtAuthGuard } from '../../authorization/services/auth-guard.service';
import { LogoutService } from '../services/logout.service';

@Resolver('Auth')
@UseGuards(JwtAuthGuard)
export class LogoutResolver {
  constructor(private logoutService: LogoutService) {}

  @Mutation('logout')
  public async logout(@Auth() auth: IAuth): Promise<boolean> {
    return this.logoutService.logout(auth);
  }
}
