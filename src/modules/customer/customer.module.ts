import { AuthModule } from './../auth/auth.module';
import { Module, forwardRef } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CommonModule } from '../common/common.module';
import { ThrottlingModule } from '@open-commerce/nestjs-throttling';
import { ThrottlingConfigModule } from '../throttling-config/throttling-config.module';
import { RedisService } from 'nestjs-redis';
import { customerProviders } from './customer.providers';
import { CUSTOMER_CONFIG_TOKEN } from './customer.config';

@Module({
  imports: [
    forwardRef(() => CommonModule),
    forwardRef(() => AuthModule),
    ThrottlingModule.forRootAsync({
      inject: [RedisService],
      useFactory: redisService => redisService,
    }),
    ThrottlingConfigModule,
  ],
  providers: customerProviders,
  exports: [CustomerService, CUSTOMER_CONFIG_TOKEN],
})
export class CustomerModule {}
