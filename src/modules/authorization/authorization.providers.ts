import { JwtStrategy } from './services/jwt.strategy';
import { JwtAuthGuard } from './services/auth-guard.service';
import { BlacklistTokenRepositoryService } from './services/blacklist-token-repository.service';
import {
  AuthorizationConfig,
  AUTHORIZATION_CONFIG_TOKEN,
} from './authorization.config';
import { provideConfig } from '@open-commerce/nestjs-config';

export const authorizationProviders = [
  JwtStrategy,
  JwtAuthGuard,
  BlacklistTokenRepositoryService,
  provideConfig(AUTHORIZATION_CONFIG_TOKEN, AuthorizationConfig),
];
