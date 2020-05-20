import { GraphqlConfig } from '../modules/common/graphql.config';
import { AuthServiceConfig } from '../modules/auth/auth-service.config';

import { CommonConfig } from '../modules/common/common.config';
import { DaveBustersServiceConfig } from '../modules/dave-busters/dave-busters-service.config';
import { AuthorizationConfig } from '../modules/authorization/authorization.config';
import { CustomerConfig } from '../modules/customer/customer.config';
import { RateLimitDirectiveConfig } from '../modules/throttling-config/rate-limit-directive.config';
import { RollbarConfig } from '../modules/common/rollbar.config';
import { RedisConfig } from '../redis.config';
import { LogConfig } from '../log.config';
import { ThrottlingServiceConfig } from '../modules/throttling-config/throttling-service.config';

export interface ISchemaConfig {
  environment: string;
  port: number;

  common: CommonConfig;
  graphql: GraphqlConfig;
  rollbar: RollbarConfig;
  customer: CustomerConfig;
  authService: AuthServiceConfig;
  authorization: AuthorizationConfig;
  redis: RedisConfig;
  daveBusters: DaveBustersServiceConfig;
  rateLimitDirective: RateLimitDirectiveConfig;
  throttling: ThrottlingServiceConfig;
  log: LogConfig;
}
