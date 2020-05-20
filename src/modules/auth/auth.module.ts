import { Module, forwardRef } from '@nestjs/common';
import { AUTH_SERVICE_CONFIG_TOKEN } from './auth-service.config';
import { AuthClientService } from './services/auth-client.service';
import { CommonModule } from '../common/common.module';
import { CustomerModule } from '../customer/customer.module';
import { LogoutService } from './services/logout.service';
import { ThrottlingConfigModule } from '../throttling-config/throttling-config.module';
import { ThrottlingModule } from '@open-commerce/nestjs-throttling';
import { RedisService } from 'nestjs-redis';
import { authProviders } from './auth.providers';

@Module({
  imports: [
    forwardRef(() => CustomerModule),
    forwardRef(() => CommonModule),
    ThrottlingModule.forRootAsync({
      inject: [RedisService],
      useFactory: redisService => redisService,
    }),
    ThrottlingConfigModule,
  ],
  providers: authProviders,
  exports: [AUTH_SERVICE_CONFIG_TOKEN, LogoutService, AuthClientService],
})
export class AuthModule {}
