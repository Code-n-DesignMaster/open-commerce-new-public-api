import { Module, forwardRef } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { AuthModule } from '../auth/auth.module';
import { CustomerModule } from '../customer/customer.module';
import { ThrottlingConfigModule } from '../throttling-config/throttling-config.module';
import { PinResolver } from './pin.resolver';
import { PinService } from './pin.service';
import { PinCodeValidator } from './pin-code-validator';

@Module({
  providers: [PinResolver, PinService, PinCodeValidator],
  imports: [
    CommonModule,
    AuthModule,
    CustomerModule,
    forwardRef(() => ThrottlingConfigModule),
  ],
})
export class PinModule {}
