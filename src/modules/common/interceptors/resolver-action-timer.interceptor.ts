import { NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { LoggerService } from '@open-commerce/nestjs-logger';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

// NOTE: Adjusted code after upgrading NestJS npm modules,
// see here: https://github.com/xiz0r/nestjs-apm/issues/1

// NOTE2:  Component injection is not posisble in Interceptors,
// Guards, or anything outside of the AppModule scope:
// https://github.com/nestjs/nest/issues/244

export class ResolverActionTimerInterceptor<T>
  implements NestInterceptor<Partial<T>, T> {
  constructor(private readonly logger: LoggerService) {}

  public intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<T> {
    const startedDateTime = Date.now();

    return next.handle().pipe(
      tap(() => {
        const elapsedMilliseconds = Date.now() - startedDateTime;

        this.logger.log(
          {
            msg: `resolver action timed`,
            elapsedMilliseconds: elapsedMilliseconds + '',
          },
          this.constructor.name,
        );
      }),
    );
  }
}
