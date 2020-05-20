import {
  AuthServiceConfig,
  AUTH_SERVICE_CONFIG_TOKEN,
} from './auth-service.config';
import { provideConfig } from '@open-commerce/nestjs-config';
import { LoginResolver } from './resolvers/login.resolver';
import { AuthClientService } from './services/auth-client.service';
import { RegistrationResolver } from './resolvers/registration.resolver';
import { LogoutResolver } from './resolvers/logout.resolver';
import { OtpPayloadOrAuthTokensResolver } from './resolvers/otp-payload-or-auth-tokens.resolver';
import { UsernameResolver } from './resolvers/username.resolver';
import { LogoutService } from './services/logout.service';
import { InAuthResolver } from './resolvers/inauth.resolver';
import { IdentifierValidatorConstraint } from './dtos/identifier.validator';
import { API_VERIFICATION_GRAPHQL_CLIENT_SERVICE_TOKEN } from '../graphql-clients/graphql-clients.constants';
import { ApiVerificationGraphqlClientService } from '../graphql-clients/clients/api-verification-graphql-client.service';

export const authProviders = [
  LoginResolver,
  AuthClientService,
  RegistrationResolver,
  LogoutResolver,
  OtpPayloadOrAuthTokensResolver,
  UsernameResolver,
  LogoutService,
  InAuthResolver,
  IdentifierValidatorConstraint,
  provideConfig(AUTH_SERVICE_CONFIG_TOKEN, AuthServiceConfig),
  {
    provide: API_VERIFICATION_GRAPHQL_CLIENT_SERVICE_TOKEN,
    useClass: ApiVerificationGraphqlClientService,
  },
];
