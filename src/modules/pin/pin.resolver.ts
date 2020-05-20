import * as assert from 'assert';
import { isEmpty } from 'lodash';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { SetPinCodeDto, ChangePinCodeDto } from '@open-commerce/data-objects';
import { RedisService } from '@open-commerce/nestjs-redis';
import { ApolloError } from 'apollo-server-express';
import { Auth } from '../common/decorators/auth.decorator';
import { IAuth } from '../common/interfaces/auth.interface';
import {
  OC_PIN_CODE_DOES_NOT_EXIST_ERROR,
  OCPinCodeDoesNotExistError,
} from '../../errors/OCPinCodeDoesNotExistError';
import {
  OC_PIN_CODE_EXIST_ERROR,
  OCPinCodeExistError,
} from '../../errors/OCPinCodeExistError';
import {
  OC_PIN_CODE_UPDATE_ERROR,
  OCPinCodeUpdateError,
} from '../../errors/OCPinCodeUpdateError';
import { CustomerService } from '../customer/customer.service';
import { JwtAuthGuard } from '../authorization/services/auth-guard.service';
import { THROTTLING_ERROR } from '@open-commerce/nestjs-throttling';
import { OCCustomerSessionTerminatedError } from '../../errors/OCCustomerSessionTerminatedError';
import { LogoutService } from '../auth/services/logout.service';
import { PinCodeValidator } from './pin-code-validator';
import { PinService } from './pin.service';

@Resolver('Pin')
@UseGuards(JwtAuthGuard)
export class PinResolver {
  constructor(
    private pinService: PinService,
    private customerService: CustomerService,
    private logoutService: LogoutService,
    private pinCodeValidator: PinCodeValidator,
    private redisService: RedisService,
  ) {}
  @Mutation('customerPinCodeSet')
  public async setPinCode(
    @Args('input') input: SetPinCodeDto,
    @Auth() auth: IAuth,
  ): Promise<boolean> {
    this.pinCodeValidator.validate(input.pinCode.pinCode);

    const uuid = await this.retrieveCustomerUuid(auth.sub);
    try {
      return await this.pinService.setPinCode(input, uuid);
    } catch (e) {
      throw await this.handleError(e);
    }
  }

  @Mutation('customerPinCodeVerify')
  public async verifyPinCode(
    @Args('input') input: any,
    @Auth() auth: IAuth,
  ): Promise<boolean> {
    const uuid = await this.retrieveCustomerUuid(auth.sub);
    try {
      return await this.pinService.verifyPinCode(input, uuid);
    } catch (e) {
      throw await this.handleError(e, auth, uuid);
    }
  }

  @Mutation('customerPinCodeChange')
  public async changePinCode(
    @Args('input') input: ChangePinCodeDto,
    @Auth() auth: IAuth,
  ): Promise<boolean> {
    this.pinCodeValidator.validate(
      input.newPinCode.pinCode,
      input.oldPinCode.pinCode,
    );

    const uuid = await this.retrieveCustomerUuid(auth.sub);
    try {
      return await this.pinService.changePinCode(input, uuid);
    } catch (e) {
      throw await this.handleError(e);
    }
  }

  @Mutation('customerPinCodeReset')
  public async resetPinCode(@Auth() auth: IAuth): Promise<boolean> {
    const uuid = await this.retrieveCustomerUuid(auth.sub);
    return await this.pinService.resetPinCode(uuid);
  }

  private async retrieveCustomerUuid(identityId: string) {
    assert(!isEmpty(identityId), Error(`auth.sub must be defined`));
    const customer = await this.customerService.retrieveByIdentityId(
      identityId,
    );

    assert(customer && customer.uuid, new Error('No customer founded'));

    return customer.uuid;
  }

  private async handleError(
    error: ApolloError,
    auth?: IAuth,
    customerUuid?: string,
  ) {
    switch (error.code) {
      case OC_PIN_CODE_DOES_NOT_EXIST_ERROR:
        return new OCPinCodeDoesNotExistError();
      case OC_PIN_CODE_EXIST_ERROR:
        return new OCPinCodeExistError();
      case OC_PIN_CODE_UPDATE_ERROR:
        return new OCPinCodeUpdateError();
      case THROTTLING_ERROR: {
        // let's remove throttling counter for this user, so after next login he will be able to verify pin
        await this.redisService
          .getClient()
          .del(`throttling:verifyPinCode_${customerUuid}`);
        await this.logoutService.logout(auth);
        return new OCCustomerSessionTerminatedError(
          'Maximum number of code attempts reached. You are now logged out.',
        );
      }
      default:
        return error;
    }
  }
}
