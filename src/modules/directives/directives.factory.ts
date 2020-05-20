import { Inject, Injectable } from '@nestjs/common';
import { InAuthDirective } from './inauth-directive';
import { AdminDirective } from './admin-directive';

@Injectable()
export class DirectivesFactory {
  @Inject()
  public inAuthDirective: InAuthDirective;

  @Inject()
  public adminDirective: AdminDirective;

  public register() {
    return {
      [InAuthDirective.DIRECTIVE_NAME]: this.inAuthDirective.build(),
      [AdminDirective.DIRECTIVE_NAME]: this.adminDirective.build(),
    };
  }
}
