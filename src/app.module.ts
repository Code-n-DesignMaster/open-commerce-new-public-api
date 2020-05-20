import { MiddlewareConsumer, Module, NestModule, Global } from '@nestjs/common';
import { CommonModule } from './modules/common/common.module';
import { AuthModule } from './modules/auth/auth.module';
import { DaveBustersModule } from './modules/dave-busters/dave-busters.module';
import { PinModule } from './modules/pin/pin.module';
import { CustomerModule } from './modules/customer/customer.module';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { ResolverActionTimerInterceptor } from './modules/common/interceptors/resolver-action-timer.interceptor';
import { ViewerMiddleware } from './modules/common/middlewares/viewer.middleware';
import { ApolloValidationPipe } from './apollo-validation.pipe';
import { AuthorizationModule } from './modules/authorization/authorization.module';
import { ConfigModule, provideConfig } from '@open-commerce/nestjs-config';
import { config } from './config/config';
import { RedisModule } from '@open-commerce/nestjs-redis';
import {
  LoggerModule,
  LoggerService,
  LOGGER_OPTIONS,
} from '@open-commerce/nestjs-logger';
import { LogConfig } from './log.config';
import { RedisConfig, REDIS_CONFIG_TOKEN } from './redis.config';
import { HealthCheckModule } from './modules/health-check/health-check.module';
import { GraphqlClientsModule } from './modules/graphql-clients/graphql-clients.module';
import { DirectivesModule } from './modules/directives/directives.module';

@Global()
@Module({
  imports: [
    AuthorizationModule,
    AuthModule,
    CommonModule,
    CustomerModule,
    PinModule,
    RedisModule,
    DirectivesModule,
    DaveBustersModule,
    HealthCheckModule,
    GraphqlClientsModule,
    ConfigModule.forRoot(config),
    RedisModule.forRootAsync(provideConfig(REDIS_CONFIG_TOKEN, RedisConfig)),
    LoggerModule.forRoot(provideConfig(LOGGER_OPTIONS, LogConfig)),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useFactory: (logger: LoggerService) =>
        new ResolverActionTimerInterceptor(logger),
      inject: [LoggerService],
    },
    {
      provide: APP_PIPE,
      useClass: ApolloValidationPipe,
    },
  ],
})
export class AppModule implements NestModule {
  public configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    consumer.apply(ViewerMiddleware).forRoutes('graphql');
  }
}
