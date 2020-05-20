import * as assert from 'assert';
import { isEmpty, get } from 'lodash';
import { Resolver, Args, Mutation, Info } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { CustomerRegistrationCompleteDto } from '../dtos/customer-registration-complete.dto';
import { IAuthInput } from '../interfaces/auth-input.interface';
import { Auth } from '../../common/decorators/auth.decorator';
import { IAuth } from '../../common/interfaces/auth.interface';
import { JwtAuthGuard } from '../../authorization/services/auth-guard.service';
import { AuthClientService } from '../services/auth-client.service';
import { CustomerService } from '../../customer/customer.service';
import { LoggerService } from '@open-commerce/nestjs-logger';
import { GraphQLResolveInfo } from 'graphql';

@Resolver('Registration')
@UseGuards(JwtAuthGuard)
export class RegistrationResolver {
  protected loggerContext: string = this.constructor.name;

  constructor(
    private readonly logger: LoggerService,
    private authFactory: AuthClientService,
    private customerService: CustomerService,
  ) {}

  @Mutation('customerRegistrationComplete')
  public async customerRegistrationComplete(
    @Info() resolveInfo: GraphQLResolveInfo,
    @Args('input') input: CustomerRegistrationCompleteDto,
    @Auth() auth: IAuth,
  ) {
    this.logger.log(
      JSON.stringify({
        msg: 'processing customerRegistrationComplete',
        input,
      }),
      this.loggerContext,
    );

    const customer = await this.customerService.retrieveByIdentityId(auth.sub);

    assert(
      !isEmpty(customer),
      'recieved empty result from customerService.retrieveByIdentityId ' +
        'mutation response; auth service is probably the issue',
    );

    assert(
      customer.status === 'SIGNUP_NOT_COMPLETED',
      'Customer already finished his/her registration ',
    );

    const inputForAuthService = this.getInputForAuthService(input);

    this.logger.log(
      {
        msg: 'Updating customer in identity provider',
      },
      this.loggerContext,
    );

    await this.authFactory.updateAttributes(
      inputForAuthService,
      auth.accessToken,
    );

    this.logger.log(
      {
        msg: 'Updating customer in customer service',
      },
      this.loggerContext,
    );

    return await this.customerService.customerRegistrationComplete(
      resolveInfo,
      customer.uuid,
      this.customerService.makeBirthdayValid(input),
    );
  }

  private getInputForAuthService(
    input: CustomerRegistrationCompleteDto,
  ): IAuthInput {
    this.logger.log(
      JSON.stringify({
        msg: 'getting input for auth service',
        input,
      }),
      this.loggerContext,
    );
    const birthday = get(input, 'demographics.birthday', null);
    return {
      email: get(input, 'email', ''),
      birthdate: this.customerService.getBirthdayInValidFormat(birthday),
    };
  }
}
