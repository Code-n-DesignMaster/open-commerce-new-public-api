import { LoggerService } from '@open-commerce/nestjs-logger';
import { IPowercard } from '../interfaces/powercard.interface';
import { PowercardCreateDto } from '../dtos/powercard-create.dto';
import { PowercardAttributesUpdateDto } from '../dtos/powercard-attributes-update.dto';
import { IResponse } from '../interfaces/response.interface';
import { RateCardFilterDto } from '../dtos/rate-card-filter.dto';
import { IRateCard } from '../interfaces/rate-card.interface';
import { get, merge } from 'lodash';
import { VirtualPowercardCreateDto } from '../dtos/powercard-virtual-purchase-create.dto';
import { PowercardFundsAddDto } from '../dtos/powercard-funds-add.dto';
import { ILocationConnection } from '../interfaces/location-connection.interface';
import { LocationFilterDto } from '../dtos/location-filter.dto';
import { IPowercardImagePack } from '../interfaces/powercard-image-pack.interface';
import {
  CheckPaymentApplyInputDto,
  GeoLocationDto,
  ICheck,
  IFeatureEnabledResponse,
  IFeaturesResponse,
  IPowercardConfigItem,
  OFFER_PAYMENT_TYPE,
  Receipt,
  IAppConfig,
  ITransaction,
} from '@open-commerce/data-objects';
import { POWERCARD_STATUS_TYPE } from '../constants/powercard-status.enum';
import { PowercardOfferListDto } from '../dtos/powercard-offer-list.dto';
import { IPowercardOfferListResponse } from '../interfaces/powercard-offer-list-response.interface';
import assert = require('assert');
import { IImage } from '../interfaces/image.interface';
import { Inject } from '@nestjs/common';
import {
  DAVE_BUSTERS_CONFIG_TOKEN,
  DaveBustersServiceConfig,
} from '../dave-busters-service.config';
import { GraphQLResolveInfo } from 'graphql';
import { DAVE_AND_BUSTERS_GRAPHQL_CLIENT_SERVICE_TOKEN } from '../../graphql-clients/graphql-clients.constants';
import { DaveAndBustersGraphqlClientService } from '../../graphql-clients/clients/dave-and-busters-graphql-client.service';
import { IBrand } from '../interfaces/brand.interface';

export class DaveBustersService {
  protected loggerContext = this.constructor.name;

  constructor(
    private logger: LoggerService,
    @Inject(DAVE_BUSTERS_CONFIG_TOKEN)
    private config: DaveBustersServiceConfig,
    @Inject(DAVE_AND_BUSTERS_GRAPHQL_CLIENT_SERVICE_TOKEN)
    private daveBustersClient: DaveAndBustersGraphqlClientService,
  ) {}

  public async receiptEmail(
    emailAddress: string,
    storeId: number,
    payCode: string,
  ): Promise<boolean> {
    return await this.daveBustersClient.receiptEmail(
      emailAddress,
      storeId,
      payCode,
    );
  }

  public async powercardConfig(
    customerUuid: string,
  ): Promise<IPowercardConfigItem[]> {
    const powercards = await this.daveBustersClient.powercardConfig(
      customerUuid,
    );

    return powercards.map(
      (p: IPowercard) =>
        ({
          powercardUuid: p.uuid,
          easyRechargeEnabled: p.easyRechargeEnabled,
        } as IPowercardConfigItem),
    );
  }

  public async powercardConfigSet(
    config: IPowercardConfigItem[],
  ): Promise<IPowercardConfigItem[]> {
    return await this.daveBustersClient.powercardConfigSet(config);
  }

  public async appConfig(): Promise<Partial<IAppConfig>> {
    this.logger.log('processing appConfig', this.loggerContext);

    const brand = await this.brand();
    const agreements = get(brand, 'agreements');
    const customerPreferences = get(brand, 'preferences');

    const termsConditions = agreements.find(
      obj => obj.name === 'Terms and Conditions',
    );
    const privacyPolicy = agreements.find(obj => obj.name === 'Privacy Policy');

    const biometricPreference = customerPreferences.find(
      obj => obj.name === 'Biometric',
    );
    const marketingOptInPreference = customerPreferences.find(
      obj => obj.name === 'Market Opt In',
    );

    const [tip1, tip2, tip3] = this.config.payAtTableTipLabels;

    // Get feature toggle values and add them to the appConfig
    // TODO: refactor this when we begin building out the "admin tool" that
    // will ultimately control feature toggling.
    const enableAppRatingPopup = this.config.toggleAppRatingPopup;
    const enableRemovePowercardButton = this.config.toggleRemovePowercardButton;

    const appConfig: Partial<IAppConfig> = {
      termsConditions,
      privacyPolicy,
      biometricPreference,
      marketingOptInPreference,
      supportedPaymentTypes: get(brand, 'supportedPaymentTypes'),
      supportedApplePayPaymentTypes: get(
        brand,
        'supportedApplePayPaymentTypes',
      ),
      supportedGoogleWalletPaymentTypes: get(
        brand,
        'supportedGoogleWalletPaymentTypes',
      ),
      backgroundImage: get(brand, 'backgroundImage'),
      enableAppRatingPopup,
      enableRemovePowercardButton,
      payAtTable: {
        tip1,
        tip2,
        tip3,
      },
    };

    this.logger.debug(
      `got appConfig: ${JSON.stringify(appConfig)}`,
      this.loggerContext,
    );

    return appConfig;
  }

  public async brand(): Promise<IBrand> {
    this.logger.log('processing brand', this.loggerContext);

    this.logger.debug(
      JSON.stringify({
        msg: 'sending query brand to dave-busters internal service',
      }),
      this.loggerContext,
    );

    return await this.daveBustersClient.brand();
  }

  public async powercardImages(
    resolveInfo: GraphQLResolveInfo,
  ): Promise<IPowercardImagePack[]> {
    this.logger.log('processing powercardImages', this.loggerContext);

    this.logger.debug(
      JSON.stringify({
        msg: 'sending query powercardImages to dave-busters internal service',
      }),
      this.loggerContext,
    );

    return await this.daveBustersClient.powercardImages(resolveInfo);
  }

  public async promoImages(resolveInfo: GraphQLResolveInfo): Promise<IImage[]> {
    this.logger.log({ msg: 'processing promoImages' }, this.loggerContext);

    this.logger.debug(
      {
        msg: 'sending query promoImages to dave-busters internal service',
      },
      this.loggerContext,
    );

    const images = await this.daveBustersClient.promoImages(resolveInfo);

    this.logger.log(
      JSON.stringify({
        msg: 'got images from dave-busters internal service',
        response: images,
      }),
      this.loggerContext,
    );

    return images;
  }

  public async powercardCreate(
    resolveInfo: GraphQLResolveInfo,
    customerUuid: string,
    input: PowercardCreateDto,
  ): Promise<IPowercard> {
    this.logger.log('processing powercardCreate', this.loggerContext);

    assert(
      customerUuid,
      Error('powercardCreate: customerUuid must be defined'),
    );

    this.logger.debug(
      JSON.stringify({
        msg: 'sending mutation to dave-busters internal service',
      }),
      this.loggerContext,
    );

    const requestDto = merge(input, { customerUuid });

    const retval = await this.daveBustersClient.powercardCreate(
      resolveInfo,
      requestDto,
    );

    this.logger.debug(
      `got result from powercard internal service: ${JSON.stringify(retval)}`,
      this.loggerContext,
    );

    return retval;
  }

  public async powercardUpdate(
    resolveInfo: GraphQLResolveInfo,
    powercardId: string,
    customerEmail: string,
    attributes: PowercardAttributesUpdateDto,
  ): Promise<IPowercard> {
    this.logger.log('processing powercardUpdate', this.loggerContext);

    return await this.daveBustersClient.powercardUpdate(
      resolveInfo,
      powercardId,
      customerEmail,
      attributes,
    );
  }

  public async powercardDelete(powercardId: string): Promise<IResponse> {
    return await this.daveBustersClient.powercardDelete(powercardId);
  }

  public async checkPaymentApply(
    resolveInfo: GraphQLResolveInfo,
    input: CheckPaymentApplyInputDto,
  ): Promise<Receipt> {
    return await this.daveBustersClient.checkPaymentApply(resolveInfo, input);
  }

  public async check(
    resolveInfo: GraphQLResolveInfo,
    storeId: number,
    payCode: string,
  ): Promise<ICheck> {
    return await this.daveBustersClient.check(resolveInfo, storeId, payCode);
  }

  public async checkList(
    resolveInfo: GraphQLResolveInfo,
    tableUuid: string,
  ): Promise<ICheck[]> {
    return await this.daveBustersClient.checkList(resolveInfo, tableUuid);
  }

  public async powercardVirtualPurchaseCreate(
    resolveInfo: GraphQLResolveInfo,
    customerUuid: string,
    emailAddress: string,
    isNewCustomer: boolean,
    input: VirtualPowercardCreateDto,
  ): Promise<ITransaction> {
    this.logger.log(
      'processing powercardVirtualPurchaseCreate',
      this.loggerContext,
    );

    assert(
      customerUuid,
      Error('powercardVirtualPurchaseCreate: customerUuid must be defined'),
    );
    assert(customerUuid, Error('customerUuid must be defined'));
    assert(emailAddress, Error('emailAddress must be defined'));

    this.logger.debug(
      JSON.stringify({
        msg: 'sending mutation to dave-busters internal service',
      }),
      this.loggerContext,
    );

    const requestDto = merge(input, {
      customerUuid,
      emailAddress,
      isNewCustomer,
    });

    return await this.daveBustersClient.powercardVirtualPurchaseCreate(
      resolveInfo,
      requestDto,
    );
  }

  public async customerPowercardWalletGet(
    resolveInfo: GraphQLResolveInfo,
    customerUuid: string,
  ): Promise<IPowercard[]> {
    this.logger.log(
      {
        msg: 'processing customerPowercardWalletGet',
        customerUuid,
      },
      this.loggerContext,
    );

    assert(
      customerUuid,
      Error(`customerPowercardWalletGet: customerUuid must be defined`),
    );

    const result = await this.daveBustersClient.customerPowercardWalletGet(
      resolveInfo,
      customerUuid,
    );

    this.logger.log(
      {
        msg: `returning powercards`,
        resultNum: result.length + '',
      },
      this.loggerContext,
    );
    return result;
  }

  public async getRateCardByPowerCardUuid(
    resolveInfo: GraphQLResolveInfo,
    powerCardUuid: string,
    isNewCustomer: boolean,
    paymentType: OFFER_PAYMENT_TYPE,
  ): Promise<IRateCard> {
    this.logger.log(
      'processing getRateCardByPowerCardUuid',
      this.loggerContext,
    );

    return await this.daveBustersClient.getRateCardByPowerCardUuid(
      resolveInfo,
      powerCardUuid,
      isNewCustomer,
      paymentType,
    );
  }

  public async getRateCards(
    resolveInfo: GraphQLResolveInfo,
    input: RateCardFilterDto,
  ): Promise<IRateCard> {
    this.logger.log('processing getRateCards', this.loggerContext);

    return await this.daveBustersClient.getRateCards(resolveInfo, input);
  }

  public async powercardFundsAdd(
    resolveInfo: GraphQLResolveInfo,
    customerUuid: string,
    emailAddress: string,
    isNewCustomer: boolean,
    input: PowercardFundsAddDto,
  ): Promise<ITransaction> {
    this.logger.log('processing powercardFundsAdd', this.loggerContext);

    const requestDto = merge(input, {
      customerUuid,
      emailAddress,
      isNewCustomer,
    });

    return await this.daveBustersClient.powercardFundsAdd(
      resolveInfo,
      requestDto,
    );
  }

  public async powercardDisable(
    resolveInfo: GraphQLResolveInfo,
    id: string,
    reason: POWERCARD_STATUS_TYPE,
  ): Promise<IPowercard> {
    this.logger.log('processing powercardDisable', this.loggerContext);

    return await this.daveBustersClient.powercardDisable(
      resolveInfo,
      id,
      reason,
    );
  }

  public async powercardEnable(
    resolveInfo: GraphQLResolveInfo,
    id: string,
  ): Promise<IPowercard> {
    this.logger.log('processing powercardEnable', this.loggerContext);

    return await this.daveBustersClient.powercardEnable(resolveInfo, id);
  }

  public async locations(
    resolveInfo: GraphQLResolveInfo,
    filter: LocationFilterDto,
  ): Promise<ILocationConnection> {
    this.logger.log(`processing locations`, this.loggerContext);

    return await this.daveBustersClient.locations(resolveInfo, filter);
  }

  public async rewardHistory(
    resolveInfo: GraphQLResolveInfo,
    email: string,
    lastPage: number,
  ) {
    this.logger.warn(`processing rewardHistory`, this.loggerContext);

    return await this.daveBustersClient.rewardHistory(
      resolveInfo,
      email,
      lastPage,
    );
  }

  public async receiptsClear(
    storeId: number,
    payCode: string,
  ): Promise<boolean> {
    return await this.daveBustersClient.receiptsClear(storeId, payCode);
  }

  public async offerList(
    resolveInfo: GraphQLResolveInfo,
    input: PowercardOfferListDto,
    emailAddress: string,
    isNewCustomer: boolean,
  ): Promise<IPowercardOfferListResponse> {
    this.logger.warn(`processing offerList`, this.loggerContext);

    const requestDto = merge(input, {
      emailAddress,
      isNewCustomer,
    });

    return await this.daveBustersClient.offerList(resolveInfo, requestDto);
  }

  public async adminFeatures(
    resolveInfo: GraphQLResolveInfo,
  ): Promise<IFeaturesResponse> {
    return await this.daveBustersClient.adminFeatures(resolveInfo);
  }

  public async adminIsFeatureEnabled(
    name: string,
    storeId: number,
  ): Promise<boolean> {
    return await this.daveBustersClient.adminIsFeatureEnabled(name, storeId);
  }

  public async adminIsFeatureEnabledForLatAndLong(
    resolveInfo: GraphQLResolveInfo,
    name: string,
    geoLocation: GeoLocationDto,
  ): Promise<IFeatureEnabledResponse> {
    return await this.daveBustersClient.adminIsFeatureEnabledForLatAndLong(
      resolveInfo,
      name,
      geoLocation,
    );
  }

  public async adminFeatureEnableForStore(
    name: string,
    enabled: boolean,
    storeId?: number,
  ): Promise<boolean> {
    return await this.daveBustersClient.adminFeatureEnableForStore(
      name,
      enabled,
      storeId,
    );
  }

  public async triggerEasyRechargeNotificationForPowercard(
    customerUuid: string,
    powercardUuid: string,
  ): Promise<boolean> {
    return await this.daveBustersClient.triggerEasyRechargeNotificationForPowercard(
      customerUuid,
      powercardUuid,
    );
  }

  public async triggerFastEasyRechargeNotificationForPowercard(
    customerUuid: string,
    powercardUuid: string,
    rateCardItemId: string,
  ): Promise<boolean> {
    return await this.daveBustersClient.triggerFastEasyRechargeNotificationForPowercard(
      customerUuid,
      powercardUuid,
      rateCardItemId,
    );
  }

  public async triggerPowercardBalanceUpdateMessage(
    cardNumber: string,
    gameChips: string,
  ): Promise<boolean> {
    return await this.daveBustersClient.triggerPowercardBalanceUpdateMessage(
      cardNumber,
      gameChips,
    );
  }

  public async triggerCheckUpdate(
    storeId: number,
    payCode: string,
  ): Promise<boolean> {
    return await this.daveBustersClient.triggerCheckUpdate(storeId, payCode);
  }

  public async triggerTableUpdate(tableUuid: string): Promise<boolean> {
    return await this.daveBustersClient.triggerTableUpdate(tableUuid);
  }

  public async ratingCreate(
    transactionUuid: string,
    numberOfStars: number,
  ): Promise<boolean> {
    return await this.daveBustersClient.ratingCreate(
      transactionUuid,
      numberOfStars,
    );
  }

  // TODO: Let's replace query with variables, it's nearly useless to include the noise of the graphql
  // query in these logs.  The variables / inputs are what we want to see.
  // private throwServiceError(error: ApolloError, query = '') {
  //   throw new ApolloError(
  //     error.message,
  //     get(error, 'extensions.code') || error.code,
  //     {
  //       details: error.details,
  //       query,
  //     },
  //   );
  // }
}
