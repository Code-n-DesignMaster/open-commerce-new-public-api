import {
  Resolver,
  Query,
  Args,
  Mutation,
  Parent,
  Subscription,
  ResolveField,
  Info,
} from '@nestjs/graphql';
import { Inject, UseGuards } from '@nestjs/common';
import { Viewer } from '../../common/decorators/viewer.decorator';
import { IPowercard } from '../interfaces/powercard.interface';
import { PowercardCreateDto } from '../dtos/powercard-create.dto';
import { IViewer } from '../../common/interfaces/viewer.interface';
import { PowercardAttributesUpdateDto } from '../dtos/powercard-attributes-update.dto';
import { IResponse } from '../interfaces/response.interface';
import { RateCardFilterDto } from '../dtos/rate-card-filter.dto';
import { IRateCard } from '../interfaces/rate-card.interface';
import assert = require('assert');
import { isEmpty } from 'lodash';
import { VirtualPowercardCreateDto } from '../dtos/powercard-virtual-purchase-create.dto';
import { PowercardFundsAddDto } from '../dtos/powercard-funds-add.dto';
import { IPowercardImagePack } from '../interfaces/powercard-image-pack.interface';
import { POWERCARD_STATUS_TYPE } from '../constants/powercard-status.enum';
import { Auth } from '../../common/decorators/auth.decorator';
import { IAuth } from '../../common/interfaces/auth.interface';
import { IWalletPass } from '../interfaces/wallet-pass.interface';
import { IRewardHistory } from '../interfaces/reward-history.interface';
import { PowercardOfferListDto } from '../dtos/powercard-offer-list.dto';
import { CustomerService } from '../../customer/customer.service';
import { JwtAuthGuard } from '../../authorization/services/auth-guard.service';
import { ICustomerInternal } from '../../common/interfaces/customer-internal.interface';
import {
  CUSTOMER_STATUS,
  ITransaction,
  IPowercardConfigItem,
  OFFER_PAYMENT_TYPE,
  ICheck,
  CheckPaymentApplyInputDto,
  Receipt,
} from '@open-commerce/data-objects';
import { TransactionReceiptMapper } from '../../common/mappers/transaction.mapper';
import { IPowercardOfferListResponse } from '../interfaces/powercard-offer-list-response.interface';
import { IPowercardOffer } from '../interfaces/powercard-offer.interface';
import { ValidateNumberOfStars } from '../pipes/powercard.pipe';
import { LoggerService } from '@open-commerce/nestjs-logger';
import { GraphQLResolveInfo } from 'graphql';
import { MOBILE_PASS_GRAPHQL_CLIENT_SERVICE_TOKEN } from '../../graphql-clients/graphql-clients.constants';
import { MobilePassGraphqlClientService } from '../../graphql-clients/clients/mobile-pass-graphql-client.service';
import { OS_TYPE } from '../../common/constants/os-type.enum';
import { DaveBustersService } from '../services/dave-busters.service';

@Resolver('Powercard')
@UseGuards(JwtAuthGuard)
export class PowercardResolver {
  protected loggerContext: string = this.constructor.name;

  constructor(
    private readonly daveBustersService: DaveBustersService,
    private readonly logger: LoggerService,
    @Inject(MOBILE_PASS_GRAPHQL_CLIENT_SERVICE_TOKEN)
    private mobilepassService: MobilePassGraphqlClientService,
    private readonly customerService: CustomerService,
  ) {}

  @Mutation('checkPaymentApply')
  public async checkPaymentApply(
    @Info() resolveInfo: GraphQLResolveInfo,
    @Args('input') input: CheckPaymentApplyInputDto,
    @Auth() auth: IAuth,
  ): Promise<Receipt> {
    const customer = await this.getCustomer(auth);
    const { email, uuid } = customer;
    input.customerUuid = uuid;
    input.emailAddress = email;
    return await this.daveBustersService.checkPaymentApply(resolveInfo, input);
  }

  @Mutation('receiptEmail')
  public async receiptEmail(
    @Args('storeId') storeId: number,
    @Args('payCode') payCode: string,
    @Auth() auth: IAuth,
  ): Promise<boolean> {
    const { email } = await this.getCustomer(auth);

    return await this.daveBustersService.receiptEmail(email, storeId, payCode);
  }

  @Query('check')
  public async check(
    @Info() resolveInfo: GraphQLResolveInfo,
    @Args('storeId') storeId: number,
    @Args('payCode') payCode: string,
  ): Promise<ICheck> {
    return await this.daveBustersService.check(resolveInfo, storeId, payCode);
  }

  @Query('checkList')
  public async checkList(
    @Info() resolveInfo: GraphQLResolveInfo,
    @Args('tableUuid') tableUuid: string,
  ): Promise<ICheck[]> {
    return await this.daveBustersService.checkList(resolveInfo, tableUuid);
  }

  @Mutation('ratingCreate')
  public async ratingCreate(
    @Args('transactionUuid') transactionUuid: string,
    @Args('numberOfStars', ValidateNumberOfStars) numberOfStars: number,
  ): Promise<boolean> {
    return await this.daveBustersService.ratingCreate(
      transactionUuid,
      numberOfStars,
    );
  }

  @Mutation('receiptsClear')
  public async receiptsClear(
    @Args('storeId') storeId: number,
    @Args('payCode') payCode: string,
  ): Promise<boolean> {
    return await this.daveBustersService.receiptsClear(storeId, payCode);
  }

  @Query('triggerEasyRechargeNotificationForPowercard')
  public async triggerEasyRechargeNotificationForPowercard(
    @Args('customerUuid') customerUuid: string,
    @Args('powercardUuid') powercardUuid: string,
  ): Promise<boolean> {
    return await this.daveBustersService.triggerEasyRechargeNotificationForPowercard(
      customerUuid,
      powercardUuid,
    );
  }

  @Query('triggerFastEasyRechargeNotificationForPowercard')
  public async triggerFastEasyRechargeNotificationForPowercard(
    @Args('customerUuid') customerUuid: string,
    @Args('powercardUuid') powercardUuid: string,
    @Args('rateCardItemId') rateCardItemId: string,
  ): Promise<boolean> {
    return await this.daveBustersService.triggerFastEasyRechargeNotificationForPowercard(
      customerUuid,
      powercardUuid,
      rateCardItemId,
    );
  }

  @Query('triggerPowercardBalanceUpdateMessage')
  public async triggerPowercardBalanceUpdateMessage(
    @Args('cardNumber') cardNumber: string,
    @Args('gameChips') gameChips: string,
  ): Promise<boolean> {
    return await this.daveBustersService.triggerPowercardBalanceUpdateMessage(
      cardNumber,
      gameChips,
    );
  }

  @Query('triggerCheckUpdate')
  public async triggerCheckUpdate(
    @Args('storeId') storeId: number,
    @Args('payCode') payCode: string,
  ): Promise<boolean> {
    return await this.daveBustersService.triggerCheckUpdate(storeId, payCode);
  }

  @Query('triggerTableUpdate')
  public async triggerTableUpdate(
    @Args('tableUuid') tableUuid: string,
  ): Promise<boolean> {
    return await this.daveBustersService.triggerTableUpdate(tableUuid);
  }

  @Query('triggerException')
  public triggerException(): void {
    this.logger.log(`processing triggerException`, this.loggerContext);

    throw Error('Triggered error in triggerException resolver');
  }

  @Query('powercardConfig')
  public async powercardConfig(
    @Auth() auth: IAuth,
  ): Promise<IPowercardConfigItem[]> {
    const customer = await this.customerService.retrieveByIdentityId(auth.sub);

    return await this.daveBustersService.powercardConfig(customer.uuid);
  }

  @Mutation('powercardConfigSet')
  public async powercardConfigSet(
    @Args('config') config: IPowercardConfigItem[],
  ): Promise<IPowercardConfigItem[]> {
    return await this.daveBustersService.powercardConfigSet(config);
  }

  @Query('powercardImages')
  public async powercardImages(
    @Info() resolveInfo: GraphQLResolveInfo,
  ): Promise<IPowercardImagePack[]> {
    const powercardImages = await this.daveBustersService.powercardImages(
      resolveInfo,
    );

    this.logger.log(
      {
        msg: `processing response powercardImages response from internal api`,
        response: powercardImages,
      },
      this.loggerContext,
    );

    return powercardImages;
  }

  @Mutation('powercardCreate')
  public async powercardCreate(
    @Info() resolveInfo: GraphQLResolveInfo,
    @Args('input') input: PowercardCreateDto,
    @Auth() auth: IAuth,
  ): Promise<IPowercard> {
    const customer = await this.getCustomer(auth);

    this.logger.log(
      `sending powercardCreate request to internal api`,
      this.loggerContext,
    );

    const response = await this.daveBustersService.powercardCreate(
      resolveInfo,
      customer.uuid,
      input,
    );

    this.logger.log(
      {
        msg: `processing response powercardCreate response from internal api`,
        response,
      },
      this.loggerContext,
    );

    const powercardData = response;

    assert(
      powercardData.customerUuid,
      Error(`customerUuid should have been returned`),
    );

    return powercardData;
  }

  @Mutation('powercardUpdate')
  public async powercardUpdate(
    @Info() resolveInfo: GraphQLResolveInfo,
    @Args('powercardId') powercardId: string,
    @Args('attributes') attributes: PowercardAttributesUpdateDto,
    @Auth() auth: IAuth,
  ): Promise<IPowercard> {
    this.logger.log(`processing powercardUpdate`, this.loggerContext);

    const customer = await this.getCustomer(auth);
    const customerEmail = customer.email;

    return await this.daveBustersService.powercardUpdate(
      resolveInfo,
      powercardId,
      customerEmail,
      attributes,
    );
  }

  @Mutation('powercardDelete')
  public async powercardDelete(
    @Args('powercardId') powercardId: string,
  ): Promise<IResponse> {
    this.logger.log(`processing powercardDelete`, this.loggerContext);

    return await this.daveBustersService.powercardDelete(powercardId);
  }

  @Query('getRateCardByPowerCardUuid')
  public async getRateCardByPowerCardUuid(
    @Info() resolveInfo: GraphQLResolveInfo,
    @Args('powerCardUuid') powerCardUuid: string,
    @Args('paymentType') paymentType: OFFER_PAYMENT_TYPE,
    @Auth() auth: IAuth,
  ): Promise<IRateCard> {
    const customer = await this.getCustomer(auth);

    return await this.daveBustersService.getRateCardByPowerCardUuid(
      resolveInfo,
      powerCardUuid,
      customer.isNewCustomer,
      paymentType,
    );
  }

  @Query('getRateCards')
  public async getRateCards(
    @Info() resolveInfo: GraphQLResolveInfo,
    @Args('input') input: RateCardFilterDto,
    @Auth() auth: IAuth,
  ): Promise<IRateCard> {
    const customer = await this.getCustomer(auth);

    if (!input) {
      input = new RateCardFilterDto();
    }

    input.isNewCustomer = customer.isNewCustomer;

    if (!input.storeId) {
      // Alays pass a storeId, default to customer's store if none provided by client
      input.storeId = customer.defaultLocationId;
    }

    return await this.daveBustersService.getRateCards(resolveInfo, input);
  }

  @Mutation('powercardVirtualPurchaseCreate')
  public async powercardVirtualPurchaseCreate(
    @Info() resolveInfo: GraphQLResolveInfo,
    @Args('input') input: VirtualPowercardCreateDto,
    @Auth() auth: IAuth,
  ): Promise<ITransaction> {
    this.logger.log(
      'processing powercardVirtualPurchaseCreate',
      this.loggerContext,
    );

    const customer = await this.getCustomer(auth);
    const { email, uuid, isNewCustomer, status, defaultLocationId } = customer;

    if (!input.storeId) {
      // Always set the store id, default to the customer's store id if not passed from client
      input.storeId = defaultLocationId;
    }
    assert(
      status !== CUSTOMER_STATUS.SIGNUP_NOT_COMPLETED,
      'ERROR: customer has not completed sign up, email is blank, this should never happen',
    );

    assert(email, 'powercardVirtualPurchaseCreate: email must not be blank');
    assert(uuid, 'powercardVirtualPurchaseCreate: uuid must not be blank');
    assert(
      typeof isNewCustomer === 'boolean',
      'isNewCustomer is undefined in customer received from customer service!',
    );

    const response = await this.daveBustersService.powercardVirtualPurchaseCreate(
      resolveInfo,
      uuid,
      email,
      isNewCustomer,
      input,
    );

    const mappedResponse = TransactionReceiptMapper.mapTransactionToDisplayTransaction(
      response,
    );
    return mappedResponse;
  }

  @Mutation('powercardFundsAdd')
  public async powercardFundsAdd(
    @Info() resolveInfo: GraphQLResolveInfo,
    @Args('input') input: PowercardFundsAddDto,
    @Auth() auth: IAuth,
  ): Promise<ITransaction> {
    this.logger.log('processing powercardFundsAdd', this.loggerContext);

    const customer = await this.getCustomer(auth);
    const { email, uuid, isNewCustomer, status, defaultLocationId } = customer;

    if (!input.storeId) {
      // Always set the store id, default to the customer's store id if not passed from client
      input.storeId = defaultLocationId;
    }
    assert(
      status !== CUSTOMER_STATUS.SIGNUP_NOT_COMPLETED,
      'ERROR: customer has not completed sign up, email is blank, this should never happen',
    );
    assert(
      typeof isNewCustomer === 'boolean',
      'isNewCustomer is undefined in customer received from customer service!',
    );

    const response = await this.daveBustersService.powercardFundsAdd(
      resolveInfo,
      uuid,
      email,
      isNewCustomer,
      input,
    );

    const mappedResponse = TransactionReceiptMapper.mapTransactionToDisplayTransaction(
      response,
    );

    return mappedResponse;
  }

  @Mutation('powercardDisable')
  public async powercardDisable(
    @Info() resolveInfo: GraphQLResolveInfo,
    @Args('id') id: string,
    @Args('reason') reason: POWERCARD_STATUS_TYPE,
  ): Promise<IPowercard> {
    this.logger.log('processing powercardDisable', this.loggerContext);

    return await this.daveBustersService.powercardDisable(
      resolveInfo,
      id,
      reason,
    );
  }

  @Mutation('powercardEnable')
  public async powercardEnable(
    @Info() resolveInfo: GraphQLResolveInfo,
    @Args('id') id: string,
  ): Promise<IPowercard> {
    this.logger.log('processing powercardEnable', this.loggerContext);

    return await this.daveBustersService.powercardEnable(resolveInfo, id);
  }

  @ResolveField('walletPass')
  public async walletPassInPowerCard(
    @Parent() powercard: IPowercard,
    @Viewer() viewer: IViewer,
  ): Promise<IWalletPass> {
    if (powercard.isPhysical) {
      // we shouldn't return mobile passes for physical cards
      return null;
    }

    return await this.walletPass(powercard.uuid, viewer);
  }

  @Query('powercardWalletPassUrl')
  public async walletPass(
    @Args('powercardUuid') powercardUuid: string,
    @Viewer() viewer: IViewer,
  ): Promise<IWalletPass> {
    const urls = await this.mobilepassService.getWalletPassUrls(
      powercardUuid,
      viewer.deviceId,
    );
    return urls
      ? {
          pkPassUrl: urls.pkPassUrl,
          googlePayUrl: urls.googlePayUrl,
        }
      : null;
  }

  @Query('isPowercardInGoogleWallet')
  public async isPowercardInGoogleWallet(
    @Args('powercardUuid') powercardUuid: string,
    @Viewer() viewer: IViewer,
  ): Promise<boolean> {
    const result = await this.mobilepassService.isPowercardInGoogleWallet(
      powercardUuid,
      viewer.deviceId,
    );
    return result;
  }

  @Query('rewardHistory')
  public async rewardHistory(
    @Info() resolveInfo: GraphQLResolveInfo,
    @Args('lastPage') lastPage: number = 0,
    @Auth() auth: IAuth,
  ): Promise<IRewardHistory> {
    this.logger.log(
      `retrieving reward history from internal api`,
      this.loggerContext,
    );

    const customer = await this.getCustomer(auth);
    const email = customer.email;

    try {
      const response = await this.daveBustersService.rewardHistory(
        resolveInfo,
        email,
        lastPage,
      );

      return response;
    } catch (error) {
      // HOTFIX: DB-1431 - Do not throw if user has not
      // yet registered a reward card.

      // We have no numeric error codes or constants from MARS
      // so we must do a dirty string compare on the error message.
      if (error.message === 'Invalid Email Address') {
        return {
          rewardPoints: null,
          transactions: [],
          eligibleRewardCount: null,
          pointsToNextReward: null,
        };
      }
    }
  }

  @Query('offerList')
  public async offerList(): Promise<IPowercardOffer[]> {
    this.logger.log('processing OLD DEPRECATED offerList', this.loggerContext);

    return [];
  }

  @Query('offerListWithActivationFees')
  public async offerListWithActivationFees(
    @Info() resolveInfo: GraphQLResolveInfo,
    @Args('input') input: PowercardOfferListDto,
    @Viewer() viewer: IViewer,
    @Auth() auth: IAuth,
  ): Promise<IPowercardOfferListResponse> {
    this.logger.log('processing offerList', this.loggerContext);
    // Check for app version here, we do not want to show offers to users
    // with app version === 1.2 or lower, or if app version is missing from
    // headers.
    // We will use the build number associated with version 1.2 for each
    // mobile platform.

    // iOS was not sending a version number in the version we want to ignore,
    // so null check covers iOS.  For android, it's build 351465.
    const minVersion = 351465;
    const { appVersion, osType } = viewer;

    if (
      !appVersion ||
      (osType === OS_TYPE.ANDROID && parseFloat(appVersion) <= minVersion)
    ) {
      const blankOfferListResponse = {
        activationFee: null,
        activationItem: null,
        offerList: [],
      } as IPowercardOfferListResponse;
      return blankOfferListResponse;
    }

    if (!input) {
      input = new PowercardOfferListDto();
    }

    const customer = await this.getCustomer(auth);
    const { email, isNewCustomer } = customer;

    if (!input.storeId) {
      // Always set the store id, default to the customer's store id if not passed from client
      input.storeId = customer.defaultLocationId;
    }

    return await this.daveBustersService.offerList(
      resolveInfo,
      input,
      email,
      isNewCustomer,
    );
  }

  @Subscription('checkUpdated')
  public checkUpdated(
    @Args('storeId') storeId: number,
    @Args('payCode') payCode: string,
  ) {
    // return {
    //   subscribe: withFilter(
    //     () => this.pubSub.asyncIterator<ICheck>('checkUpdated'),
    //     (payload, variables) =>
    //       payload.checkUpdated.storeId === variables.storeId &&
    //       payload.checkUpdated.payCode === variables.payCode,
    //   ),
    // };
  }

  @Subscription('tableUpdated')
  public tableUpdated(@Args('tableUuid') tableUuid: string) {
    // return {
    //   subscribe: withFilter(
    //     () => this.pubSub.asyncIterator<ICheck[]>('tableUpdated'),
    //     (payload, variables) => payload.tableUuid === variables.tableUuid,
    //   ),
    // };
  }

  private async getCustomer(auth: IAuth, resolveInfo?: GraphQLResolveInfo) {
    this.logger.log('fetching customer', this.loggerContext);
    const customer: ICustomerInternal = await this.customerService.retrieveByIdentityId(
      auth.sub,
      resolveInfo,
    );

    assert(
      !isEmpty(customer),
      'recieved empty result from customerService.retrieveByIdentityId ' +
        'mutation response; auth service is probably the issue',
    );

    return customer;
  }
}
