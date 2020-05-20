import { Global, Module } from '@nestjs/common';
import { BlacklistTokenRepositoryService } from './services/blacklist-token-repository.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './services/jwt.strategy';
import { authorizationProviders } from './authorization.providers';

@Global()
@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt', property: 'auth' }),
  ],
  providers: authorizationProviders,
  exports: [JwtStrategy, BlacklistTokenRepositoryService, PassportModule],
})
export class AuthorizationModule {}
