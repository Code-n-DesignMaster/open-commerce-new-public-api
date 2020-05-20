import { Resolver, Parent, ResolveField, Info } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { IPowercard } from '../interfaces/powercard.interface';
import assert = require('assert');
import { isEmpty } from 'lodash';
import { JwtAuthGuard } from '../../authorization/services/auth-guard.service';
import { ICustomerInternal } from '../../common/interfaces/customer-internal.interface';
import { LoggerService } from '@open-commerce/nestjs-logger';
import { GraphQLResolveInfo } from 'graphql';
import { DaveBustersService } from '../services/dave-busters.service';

@Resolver('Customer')
@UseGuards(JwtAuthGuard)
export class CustomerPowercardWalletResolver {
  private loggerContext = this.constructor.name;

  constructor(
    private readonly daveBustersService: DaveBustersService,
    private readonly logger: LoggerService,
  ) {}

  @ResolveField('powercardWallet')
  public async powercardWallet(
    @Info() resolveInfo: GraphQLResolveInfo,
    @Parent() customer: ICustomerInternal,
  ): Promise<IPowercard[]> {
    this.logger.log(
      {
        msg: 'getting powercardWallet for customer',
      },
      this.loggerContext,
    );

    assert(
      !isEmpty(customer),
      'recieved empty result from commonCustomerFactory.retrieveByIdentityId ' +
        'mutation response; auth service is probably the issue',
    );
    this.logger.log(
      {
        msg: 'got customer by identity uuid',
        customerUuid: customer.uuid,
      },
      this.loggerContext,
    );

    const powercards: IPowercard[] = await this.daveBustersService.customerPowercardWalletGet(
      resolveInfo,
      customer.uuid,
    );

    this.logger.log(
      {
        msg: `returning powercards for customer`,
        numPowercards: powercards.length,
      },
      this.loggerContext,
    );

    return powercards;
  }
}
