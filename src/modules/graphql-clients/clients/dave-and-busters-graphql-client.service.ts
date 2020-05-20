import {
  GraphqlParameterDto,
  BuildGraphqlOperationDto,
  DaveAndBustersServiceGraphqlClient,
  GraphqlOperationBuilder,
  BaseInternalServiceGraphqlClientService,
} from '@open-commerce/db-internal-service-client';
import { Inject } from '@nestjs/common';
import { DAVE_AND_BUSTERS_SERVICE_GRAPHQL_CLIENT_TOKEN } from '../graphql-clients.constants';
import {
  IPowercardConfigItem,
  IPowercardImagePack,
  IImage,
  CheckPaymentApplyInputDto,
  Receipt,
  ICheck,
  OFFER_PAYMENT_TYPE,
  IRateCard,
  POWERCARD_STATUS_TYPE,
  IFeaturesResponse,
  GeoLocationDto,
  IFeatureEnabledResponse,
  ITransaction,
} from '@open-commerce/data-objects';
import { PowercardAttributesUpdateDto } from '../../dave-busters/dtos/powercard-attributes-update.dto';
import { IResponse } from '../../dave-busters/interfaces/response.interface';
import { GraphQLResolveInfo } from 'graphql';
import { ILocationConnection } from '../../dave-busters/interfaces/location-connection.interface';
import { IPowercardOfferListResponse } from '../../dave-busters/interfaces/powercard-offer-list-response.interface';
import { LoggerService } from '@open-commerce/nestjs-logger';
import { IPowercard } from '../../dave-busters/interfaces/powercard.interface';
import { PowercardCreateDto } from '../../dave-busters/dtos/powercard-create.dto';
import { VirtualPowercardCreateDto } from '../../dave-busters/dtos/powercard-virtual-purchase-create.dto';
import { RateCardFilterDto } from '../../dave-busters/dtos/rate-card-filter.dto';
import { PowercardFundsAddDto } from '../../dave-busters/dtos/powercard-funds-add.dto';
import { LocationFilterDto } from '../../dave-busters/dtos/location-filter.dto';
import { PowercardOfferListDto } from '../../dave-busters/dtos/powercard-offer-list.dto';
import { IBrand } from '../../dave-busters/interfaces/brand.interface';

export class DaveAndBustersGraphqlClientService extends BaseInternalServiceGraphqlClientService {
  constructor(
    protected logger: LoggerService,
    @Inject(DAVE_AND_BUSTERS_SERVICE_GRAPHQL_CLIENT_TOKEN)
    private daveBustersClient: DaveAndBustersServiceGraphqlClient,
  ) {
    super(logger);
  }

  public async triggerPowercardBalanceUpdateMessage(
    cardNumber: string,
    gameChips: string,
  ): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'cardNumber',
        type: 'String!',
      },
      {
        name: 'gameChips',
        type: 'String!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      type: 'query',
      name: 'triggerPowercardBalanceUpdateMessage',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const response = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        cardNumber,
        gameChips,
      },
    );

    return !!response.data;
  }

  public async triggerEasyRechargeNotificationForPowercard(
    customerUuid: string,
    powercardUuid: string,
  ): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'customerUuid',
        type: 'ID!',
      },
      {
        name: 'powercardUuid',
        type: 'ID!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      type: 'query',
      name: 'triggerEasyRechargeNotificationForPowercard',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const response = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        customerUuid,
        powercardUuid,
      },
    );

    return !!response.data;
  }

  public async triggerFastEasyRechargeNotificationForPowercard(
    customerUuid: string,
    powercardUuid: string,
    rateCardItemId: string,
  ): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'customerUuid',
        type: 'ID!',
      },
      {
        name: 'powercardUuid',
        type: 'ID!',
      },
      {
        name: 'rateCardItemId',
        type: 'String',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      type: 'query',
      name: 'triggerFastEasyRechargeNotificationForPowercard',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const response = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        customerUuid,
        powercardUuid,
        rateCardItemId,
      },
    );

    return !!response.data;
  }

  public async triggerCheckUpdate(
    storeId: number,
    payCode: string,
  ): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'storeId',
        type: 'Int!',
      },
      {
        name: 'payCode',
        type: 'ID!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      type: 'query',
      name: 'triggerCheckUpdate',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const response = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        storeId,
        payCode,
      },
    );

    return !!response.data;
  }

  public async triggerTableUpdate(tableUuid: string): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'tableUuid',
        type: 'ID!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      type: 'query',
      name: 'triggerTableUpdate',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const response = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        tableUuid,
      },
    );

    return !!response.data;
  }

  public async receiptEmail(
    emailAddress: string,
    storeId: number,
    payCode: string,
  ): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'emailAddress',
        type: 'String!',
      },
      {
        name: 'storeId',
        type: 'Int!',
      },
      {
        name: 'payCode',
        type: 'ID!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'receiptEmail',
      type: 'mutation',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        emailAddress,
        storeId,
        payCode,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async powercardConfig(customerUuid: string): Promise<IPowercard[]> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'customerUuid',
        type: 'ID!',
      },
    ];
    const operationDetails: BuildGraphqlOperationDto = {
      name: 'powercards',
      type: 'query',
      parameters,
      fields: `
        uuid
        easyRechargeEnabled
      `,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        customerUuid,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async powercardConfigSet(
    config: IPowercardConfigItem[],
  ): Promise<IPowercardConfigItem[]> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'config',
        type: '[PowercardConfigItemInput]',
      },
    ];
    const operationDetails: BuildGraphqlOperationDto = {
      name: 'powercardConfigSet',
      type: 'mutation',
      parameters,
      fields: `
        powercardUuid
        easyRechargeEnabled
      `,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        config,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async brand(): Promise<IBrand> {
    const operationDetails: BuildGraphqlOperationDto = {
      name: 'brand',
      type: 'query',
      fields: `
        agreements{
          url
          name
          activeAt
          uuid
        }
        preferences{
          uuid
          name
          description
        }
        supportedPaymentTypes
        supportedApplePayPaymentTypes
        supportedGoogleWalletPaymentTypes
        backgroundImage{
          images{
            url
            width
            height
          }
          activeAt
        }
      `,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
    );

    return this.dataOrThrowFrom(result);
  }

  public async powercardImages(
    info: GraphQLResolveInfo,
  ): Promise<IPowercardImagePack[]> {
    const operationDetails: BuildGraphqlOperationDto = {
      name: 'powercardImages',
      type: 'query',
      info,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
    );

    return this.dataOrThrowFrom(result);
  }

  public async promoImages(info: GraphQLResolveInfo): Promise<IImage[]> {
    const operationDetails: BuildGraphqlOperationDto = {
      name: 'promoImages',
      type: 'query',
      info,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
    );

    return this.dataOrThrowFrom(result);
  }

  public async powercardCreate(
    info: GraphQLResolveInfo,
    input: PowercardCreateDto,
  ): Promise<IPowercard> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'input',
        type: 'PowercardCreate!',
      },
    ];
    const operationDetails: BuildGraphqlOperationDto = {
      name: 'powercardCreate',
      type: 'mutation',
      parameters,
      info,
      additionalFields: ['customerUuid'],
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        input,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async powercardUpdate(
    info: GraphQLResolveInfo,
    powercardId: string,
    customerEmail: string,
    attributes: PowercardAttributesUpdateDto,
  ): Promise<IPowercard> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'powercardId',
        type: 'ID!',
      },
      {
        name: 'customerEmail',
        type: 'OCEmailAddress',
      },
      {
        name: 'attributes',
        type: 'PowercardAttributesUpdate!',
      },
    ];
    const operationDetails: BuildGraphqlOperationDto = {
      name: 'powercardUpdate',
      type: 'mutation',
      parameters,
      info,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        powercardId,
        customerEmail,
        attributes,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async powercardDelete(powercardId: string): Promise<IResponse> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'powercardId',
        type: 'ID!',
      },
    ];
    const operationDetails: BuildGraphqlOperationDto = {
      name: 'powercardDelete',
      type: 'mutation',
      parameters,
      fields: `
        status
        success
      `,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        powercardId,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async checkPaymentApply(
    info: GraphQLResolveInfo,
    input: CheckPaymentApplyInputDto,
  ): Promise<Receipt> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'input',
        type: 'CheckPaymentApplyInput!',
      },
    ];
    const operationDetails: BuildGraphqlOperationDto = {
      name: 'checkPaymentApply',
      type: 'mutation',
      parameters,
      info,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        input,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async check(
    info: GraphQLResolveInfo,
    storeId: number,
    payCode: string,
  ): Promise<ICheck> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'storeId',
        type: 'Int!',
      },
      {
        name: 'payCode',
        type: 'ID!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'check',
      type: 'query',
      parameters,
      info,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        storeId,
        payCode,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async checkList(
    info: GraphQLResolveInfo,
    tableUuid: string,
  ): Promise<ICheck[]> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'tableUuid',
        type: 'ID!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'checkList',
      type: 'query',
      parameters,
      info,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        tableUuid,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async powercardVirtualPurchaseCreate(
    info: GraphQLResolveInfo,
    input: VirtualPowercardCreateDto,
  ): Promise<ITransaction> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'input',
        type: 'VirtualPowercardCreate!',
      },
    ];
    const operationDetails: BuildGraphqlOperationDto = {
      name: 'powercardVirtualPurchaseCreate',
      type: 'mutation',
      parameters,
      info,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        input,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async customerPowercardWalletGet(
    info: GraphQLResolveInfo,
    customerUuid: string,
  ): Promise<IPowercard[]> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'customerUuid',
        type: 'ID!',
      },
    ];
    const operationDetails: BuildGraphqlOperationDto = {
      name: 'powercards',
      type: 'query',
      parameters,
      info,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        customerUuid,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async getRateCardByPowerCardUuid(
    info: GraphQLResolveInfo,
    powerCardUuid: string,
    isNewCustomer: boolean,
    paymentType: OFFER_PAYMENT_TYPE,
  ): Promise<IRateCard> {
    const parameters: GraphqlParameterDto[] = [
      { name: 'powerCardUuid', type: 'ID!' },
      { name: 'isNewCustomer', type: 'Boolean!' },
      { name: 'paymentType', type: 'OFFER_PAYMENT_TYPE' },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'getRateCardByPowerCardUuid',
      type: 'query',
      parameters,
      info,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        powerCardUuid,
        isNewCustomer,
        paymentType,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async getRateCards(
    info: GraphQLResolveInfo,
    input: RateCardFilterDto,
  ): Promise<IRateCard> {
    const parameters: GraphqlParameterDto[] = [
      { name: 'input', type: 'RateCardFilter' },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'getRateCards',
      type: 'query',
      parameters,
      info,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        input,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async powercardFundsAdd(
    info: GraphQLResolveInfo,
    input: PowercardFundsAddDto,
  ): Promise<ITransaction> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'input',
        type: 'PowercardFundsAdd!',
      },
    ];
    const operationDetails: BuildGraphqlOperationDto = {
      name: 'powercardFundsAdd',
      type: 'mutation',
      parameters,
      info,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        input,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async powercardDisable(
    info: GraphQLResolveInfo,
    id: string,
    reason: POWERCARD_STATUS_TYPE,
  ): Promise<IPowercard> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'id',
        type: 'ID!',
      },
      {
        name: 'reason',
        type: 'POWERCARD_STATUS_TYPE',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'powercardDisable',
      type: 'mutation',
      parameters,
      info,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        id,
        reason,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async powercardEnable(
    info: GraphQLResolveInfo,
    id: string,
  ): Promise<IPowercard> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'id',
        type: 'ID!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'powercardEnable',
      type: 'mutation',
      parameters,
      info,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        id,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async locations(
    info: GraphQLResolveInfo,
    filter: LocationFilterDto,
  ): Promise<ILocationConnection> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'filter',
        type: 'LocationFilter',
      },
    ];
    const operationDetails: BuildGraphqlOperationDto = {
      name: 'locations',
      type: 'query',
      parameters,
      info,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        filter,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async rewardHistory(
    info: GraphQLResolveInfo,
    emailAddress: string,
    lastPage: number,
  ) {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'emailAddress',
        type: 'OCEmailAddress!',
      },
      {
        name: 'lastPage',
        type: 'Int',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'rewardHistory',
      type: 'query',
      parameters,
      info,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        emailAddress,
        lastPage,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async receiptsClear(
    storeId: number,
    payCode: string,
  ): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'storeId',
        type: 'Int!',
      },
      {
        name: 'payCode',
        type: 'ID!',
      },
    ];
    const operationDetails: BuildGraphqlOperationDto = {
      name: 'receiptsClear',
      type: 'mutation',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        storeId,
        payCode,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async offerList(
    info: GraphQLResolveInfo,
    input: PowercardOfferListDto,
  ): Promise<IPowercardOfferListResponse> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'input',
        type: 'PowercardOfferList!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'offerList',
      type: 'query',
      parameters,
      info,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        input,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async adminFeatures(
    info: GraphQLResolveInfo,
  ): Promise<IFeaturesResponse> {
    const operationDetails: BuildGraphqlOperationDto = {
      name: 'adminFeatures',
      type: 'query',
      info,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
    );

    return this.dataOrThrowFrom(result);
  }

  public async adminIsFeatureEnabled(
    name: string,
    storeId: number,
  ): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'name',
        type: 'DAVE_AND_BUSTERS_FEATURE!',
      },
      {
        name: 'storeId',
        type: 'Int!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'adminIsFeatureEnabled',
      type: 'query',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        name,
        storeId,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async adminIsFeatureEnabledForLatAndLong(
    info: GraphQLResolveInfo,
    name: string,
    geoLocation: GeoLocationDto,
  ): Promise<IFeatureEnabledResponse> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'name',
        type: 'DAVE_AND_BUSTERS_FEATURE!',
      },
      {
        name: 'geoLocation',
        type: 'GeoLocationCreate',
      },
    ];
    const operationDetails: BuildGraphqlOperationDto = {
      name: 'adminIsFeatureEnabledForLatAndLong',
      type: 'query',
      parameters,
      info,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        name,
        geoLocation,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async adminFeatureEnableForStore(
    name: string,
    enabled: boolean,
    storeId?: number,
  ): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'name',
        type: 'DAVE_AND_BUSTERS_FEATURE!',
      },
      {
        name: 'enabled',
        type: 'Boolean!',
      },
      {
        name: 'storeId',
        type: 'Int',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'adminFeatureEnableForStore',
      type: 'mutation',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        name,
        enabled,
        storeId,
      },
    );

    return this.dataOrThrowFrom(result);
  }

  public async ratingCreate(
    transactionUuid: string,
    numberOfStars: number,
  ): Promise<boolean> {
    const parameters: GraphqlParameterDto[] = [
      {
        name: 'transactionUuid',
        type: 'ID!',
      },
      {
        name: 'numberOfStars',
        type: 'Float!',
      },
    ];

    const operationDetails: BuildGraphqlOperationDto = {
      name: 'ratingCreate',
      type: 'mutation',
      parameters,
      formatted: true,
    };

    const operation = GraphqlOperationBuilder.buildGraphqlOperation(
      operationDetails,
    );

    const result = await this.daveBustersClient.executeQuery(
      operationDetails.name,
      operation,
      {
        transactionUuid,
        numberOfStars,
      },
    );

    return this.dataOrThrowFrom(result);
  }
}
