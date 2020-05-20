import { ExecutionContext, Injectable, Inject } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from '@nestjs/graphql';
import { OCAccessTokenExpiredError } from '../../../errors/OCAccessTokenExpiredError';
import { OCInvalidAccessTokenError } from '../../../errors/OCInvalidAccessTokenError';
import { OCNotAuthorizedError } from '../../../errors/OCNotAuthorizedError';
import { IPassportInfo } from '../interfaces/passport-info.interface';
import { LoggerService } from '@open-commerce/nestjs-logger';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  @Inject(LoggerService)
  private logger: LoggerService;

  public getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }
  public handleRequest(err, user, info) {
    this.handleErrorByInfo(info);
    if (err || !user) {
      this.logger.log(
        JSON.stringify({
          err,
          user,
          method: 'JwtAuthGuard',
        }),
        this.constructor.name,
      );
      throw err || new OCNotAuthorizedError();
    }
    return user;
  }
  private handleErrorByInfo(info: IPassportInfo = {}) {
    switch (info.name) {
      case 'TokenExpiredError':
        throw new OCAccessTokenExpiredError();
      case 'JsonWebTokenError':
        throw new OCInvalidAccessTokenError();
    }
  }
}
