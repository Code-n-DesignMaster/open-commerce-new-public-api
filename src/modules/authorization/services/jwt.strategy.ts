import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Inject } from '@nestjs/common';
import { passportJwtSecret } from './passport-twt-secret';
import {
  AuthorizationConfig,
  AUTHORIZATION_CONFIG_TOKEN,
} from '../authorization.config';
import { OCNotAuthorizedError } from '../../../errors/OCNotAuthorizedError';
import { BlacklistTokenRepositoryService } from './blacklist-token-repository.service';
import { OCAccessTokenExpiredError } from '../../../errors/OCAccessTokenExpiredError';
import { LoggerService } from '@open-commerce/nestjs-logger';

const tokenExtractor = ExtractJwt.fromAuthHeaderAsBearerToken();
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private blacklistTokenRepo: BlacklistTokenRepositoryService;
  constructor(
    @Inject(AUTHORIZATION_CONFIG_TOKEN)
    config: AuthorizationConfig,
    blacklistTokenRepo: BlacklistTokenRepositoryService,
    private logger: LoggerService,
  ) {
    super({
      passReqToCallback: true,
      jwtFromRequest: tokenExtractor,
      issuer: config.trustedIssuer,
      secretOrKey: passportJwtSecret({
        strictSsl: true, // Default value
        cache: true,
        cacheMaxEntries: 5, // Default value
        cacheMaxAge: 10 * 60 * 60 * 1000, // 10h in ms
        jwksUri: config.jwksUri,
      }),
    });

    this.blacklistTokenRepo = blacklistTokenRepo;
  }

  public async validate(req, user: any) {
    if (!user) {
      this.logger.log(
        {
          req,
          method: 'jwt.strategy.validate',
        },
        this.constructor.name,
      );
      throw new OCNotAuthorizedError();
    }
    const accessToken = tokenExtractor(req);

    this.logger.log('Check access token in blacklist', this.constructor.name);
    const tokenExist = await this.blacklistTokenRepo.exists(accessToken);
    if (tokenExist) {
      throw new OCAccessTokenExpiredError();
    }

    user.accessToken = accessToken;
    user.expiresIn = this.makeCognitoExpiresLocal(user.exp);
    return user;
  }
  private makeCognitoExpiresLocal(exp: number): number {
    // I don't know why, but cognito return exp in format 1556106362 and here not enough length for UTC.
    // To make it valid UTC time we need to multiply to 1000.
    return exp * 1000;
  }
}
