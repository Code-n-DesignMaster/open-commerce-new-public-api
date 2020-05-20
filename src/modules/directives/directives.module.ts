import { HttpModule, Module, forwardRef } from '@nestjs/common';

import { AuthModule } from '../auth/auth.module';
import { DirectivesFactory } from './directives.factory';
import { InAuthDirective } from './inauth-directive';
import { AdminDirective } from './admin-directive';

@Module({
  imports: [HttpModule, forwardRef(() => AuthModule)],
  providers: [DirectivesFactory, InAuthDirective, AdminDirective],
  exports: [DirectivesFactory],
})
export class DirectivesModule {}
