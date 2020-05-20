import { DaveAndBustersGraphqlClientService } from '../clients/dave-and-busters-graphql-client.service';
import { Test } from '@nestjs/testing';
import { DAVE_AND_BUSTERS_SERVICE_GRAPHQL_CLIENT_TOKEN } from '../graphql-clients.constants';
import { LoggerService } from '@open-commerce/nestjs-logger';
import { mockGraphqlClientExecuteQuery } from './mock-graphql-client-execute-query';
import {
  IPowercardConfigItem,
  PowercardCreateDto,
  VirtualPowercardCreateDto,
  PAYMENT_INSTRUMENT_TYPE,
  PowercardFundsAddDto,
  POWERCARD_STATUS_TYPE,
  OFFER_PAYMENT_TYPE,
  RateCardFilterDto,
  PowercardOfferListDto,
  CheckPaymentApplyInputDto,
} from '@open-commerce/data-objects';
import { mockPowercardResolveInfo } from './__mocks__/mock-powercard-resolve-info';
import { PowercardAttributesUpdateDto } from '../../dave-busters/dtos/powercard-attributes-update.dto';
import { mockRateCardResolveInfo } from './__mocks__/mock-rate-card-resolve-info';
import { mockRewardHistoryResolveInfo } from './__mocks__/mock-reward-history-resolve-info';
import { mockCheckResolveInfo } from './__mocks__/mock-check-resolve-info';
import { mockOfferListResolveInfo } from './__mocks__/mock-offer-list-resolve-info';
import { mockFeaturesResolveInfo } from './__mocks__/mock-features-resolve-info';
import { mockFeatureEnabledResolveInfo } from './__mocks__/mock-feature-enabled-resolve-info';

const mockLogger = {
  debug: jest.fn(),
  warn: jest.fn(),
  info: jest.fn(),
  error: jest.fn(),
  log: jest.fn(),
};

const mockGraphqlClient = {
  executeQuery: jest.fn(),
};

describe('DaveAndBustersGraphqlClientService', () => {
  let service: DaveAndBustersGraphqlClientService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        DaveAndBustersGraphqlClientService,
        {
          provide: LoggerService,
          useValue: mockLogger,
        },
        {
          provide: DAVE_AND_BUSTERS_SERVICE_GRAPHQL_CLIENT_TOKEN,
          useValue: mockGraphqlClient,
        },
      ],
    }).compile();

    service = module.get(DaveAndBustersGraphqlClientService);
  });

  describe('triggerPowercardBalanceUpdateMessage', () => {
    const testCardNumber = 'testCardNumber';
    const testGameChips = 'testGameChips';

    beforeAll(() => {
      mockGraphqlClientExecuteQuery(
        'triggerPowercardBalanceUpdateMessage',
        mockGraphqlClient,
      );
    });
    it('should match snapshot', async () => {
      await service.triggerPowercardBalanceUpdateMessage(
        testCardNumber,
        testGameChips,
      );
    });
  });

  describe('triggerEasyRechargeNotificationForPowercard', () => {
    const testCustomerUuid = 'testCustomerUuid';
    const testPowercardUuid = 'testPowercardUuid';

    beforeAll(() => {
      mockGraphqlClientExecuteQuery(
        'triggerEasyRechargeNotificationForPowercard',
        mockGraphqlClient,
      );
    });
    it('should match snapshot', async () => {
      await service.triggerEasyRechargeNotificationForPowercard(
        testCustomerUuid,
        testPowercardUuid,
      );
    });
  });

  describe('triggerFastEasyRechargeNotificationForPowercard', () => {
    const testCustomerUuid = 'testCustomerUuid';
    const testPowercardUuid = 'testPowercardUuid';
    const testRateCardItemId = 'testRateCardItemId';

    beforeAll(() => {
      mockGraphqlClientExecuteQuery(
        'triggerFastEasyRechargeNotificationForPowercard',
        mockGraphqlClient,
      );
    });
    it('should match snapshot', async () => {
      await service.triggerFastEasyRechargeNotificationForPowercard(
        testCustomerUuid,
        testPowercardUuid,
        testRateCardItemId,
      );
    });
  });

  describe('triggerCheckUpdate', () => {
    const testStoreId = 1234;
    const testPayCode = 'testPayCode';

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('triggerCheckUpdate', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.triggerCheckUpdate(testStoreId, testPayCode);
    });
  });

  describe('triggerTableUpdate', () => {
    const testTableUuid = 'testTableUuid';

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('triggerTableUpdate', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.triggerTableUpdate(testTableUuid);
    });
  });

  describe('receiptEmail', () => {
    const testStoreId = 1234;
    const testPayCode = 'testPayCode';
    const testEmail = 'testEmail';

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('receiptEmail', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.receiptEmail(testEmail, testStoreId, testPayCode);
    });
  });

  describe('powercardConfig', () => {
    const testCustomerUuid = 'testCustomerUuid';

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('powercards', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.powercardConfig(testCustomerUuid);
    });
  });

  describe('powercardConfigSet', () => {
    const input: IPowercardConfigItem = {
      powercardUuid: 'testPowercardUuid',
      easyRechargeEnabled: true,
    };

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('powercardConfigSet', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.powercardConfigSet([input]);
    });
  });

  describe('brand', () => {
    beforeAll(() => {
      mockGraphqlClientExecuteQuery('brand', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.brand();
    });
  });

  describe('powercardImages', () => {
    beforeAll(() => {
      mockGraphqlClientExecuteQuery('powercardImages', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.powercardImages(mockPowercardResolveInfo);
    });
  });

  describe('promoImages', () => {
    beforeAll(() => {
      mockGraphqlClientExecuteQuery('promoImages', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.promoImages(mockPowercardResolveInfo);
    });
  });

  describe('powercardCreate', () => {
    const input: PowercardCreateDto = {
      customerUuid: 'testCustomerUuid',
      cardNumber: 'testCardNumber',
      cardEncoding: 'testCardEncoding',
      pin: 1234,
      rfidData: 'testRfidData',
      alias: 'testAlias',
      easyRechargeEnabled: true,
      imagePackUuid: null,
    };

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('powercardCreate', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.powercardCreate(mockPowercardResolveInfo, input);
    });
  });

  describe('powercardVirtualPurchaseCreate', () => {
    const input: VirtualPowercardCreateDto = {
      customerUuid: 'testCustomerUuid',
      emailAddress: 'testEmail@address.com',
      storeId: 5,
      rateCardItemIds: [1],
      paymentInstrumentUuid: 'testPaymentInstrumentUuid',
      country: 'USA',
      dollarsPaid: 12,
      paymentInstrumentType: PAYMENT_INSTRUMENT_TYPE.VISA,
      nonce: 'testNonce',
      displayName: 'testDisplayName',
      networkName: 'testNetworkName',
      alias: 'testAlias',
      imagePackUuid: null,
      easyRechargeEnabled: true,
      offerId: 12,
      isNewCustomer: true,
      billing: {
        zipCode: '12345',
      },
    };

    beforeAll(() => {
      mockGraphqlClientExecuteQuery(
        'powercardVirtualPurchaseCreate',
        mockGraphqlClient,
      );
    });
    it('should match snapshot', async () => {
      await service.powercardVirtualPurchaseCreate(
        mockPowercardResolveInfo,
        input,
      );
    });
  });

  describe('powercardUpdate', () => {
    const input: PowercardAttributesUpdateDto = {
      alias: 'testAliasUpdate',
      imagePackUuid: null,
      isRegisteredReward: true,
      easyRechargeEnabled: false,
    };
    const powercardId = 'testPowercardId';
    const customerEmail = 'testCustomerEmail';

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('powercardUpdate', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.powercardUpdate(
        mockPowercardResolveInfo,
        powercardId,
        customerEmail,
        input,
      );
    });
  });

  describe('powercardDelete', () => {
    const powercardId = 'testPowercardId';

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('powercardDelete', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.powercardDelete(powercardId);
    });
  });

  describe('powercardFundsAdd', () => {
    const input: PowercardFundsAddDto = {
      uuid: 'testPowercardUuid',
      customerUuid: 'testCustomerUuid',
      emailAddress: 'testEmail@address.com',
      storeId: 5,
      rateCardItemIds: [1],
      paymentInstrumentUuid: 'testPaymentInstrumentUuid',
      country: 'USA',
      dollarsPaid: 12,
      paymentInstrumentType: PAYMENT_INSTRUMENT_TYPE.VISA,
      nonce: 'testNonce',
      displayName: 'testDisplayName',
      networkName: 'testNetworkName',
      easyRechargeEnabled: true,
      offerId: 12,
      isNewCustomer: true,
      billing: {
        zipCode: '12345',
      },
    };

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('powercardFundsAdd', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.powercardFundsAdd(mockPowercardResolveInfo, input);
    });
  });

  describe('powercardDisable', () => {
    const powercardId = 'testPowercardUuid';
    const reason = POWERCARD_STATUS_TYPE.DISABLED;

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('powercardDisable', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.powercardDisable(
        mockPowercardResolveInfo,
        powercardId,
        reason,
      );
    });
  });

  describe('powercardEnable', () => {
    const powercardId = 'testPowercardUuid';

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('powercardEnable', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.powercardEnable(mockPowercardResolveInfo, powercardId);
    });
  });

  describe('customerPowercardWalletGet', () => {
    const customerUuid = 'testCustomerUuid';

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('powercards', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.customerPowercardWalletGet(
        mockPowercardResolveInfo,
        customerUuid,
      );
    });
  });

  describe('getRateCardByPowerCardUuid', () => {
    const powercardUuid = 'testPowercardUuid';
    const isNewCustomer = true;
    const paymentType = OFFER_PAYMENT_TYPE.GOOGLE_PAY;

    beforeAll(() => {
      mockGraphqlClientExecuteQuery(
        'getRateCardByPowerCardUuid',
        mockGraphqlClient,
      );
    });
    it('should match snapshot', async () => {
      await service.getRateCardByPowerCardUuid(
        mockRateCardResolveInfo,
        powercardUuid,
        isNewCustomer,
        paymentType,
      );
    });
  });

  describe('getRateCards', () => {
    const input: RateCardFilterDto = {
      storeId: 5,
      epicenter: null,
      radius: null,
      simpleClosest: false,
      isNewCustomer: true,
      paymentType: OFFER_PAYMENT_TYPE.NONE,
    };

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('getRateCards', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.getRateCards(mockRateCardResolveInfo, input);
    });
  });

  describe('locations', () => {
    beforeAll(() => {
      mockGraphqlClientExecuteQuery('locations', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.locations(mockRateCardResolveInfo, null);
    });
  });

  describe('rewardHistory', () => {
    const emailAddress = 'testEmail@address.com';
    const lastPage = 0;

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('rewardHistory', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.rewardHistory(
        mockRewardHistoryResolveInfo,
        emailAddress,
        lastPage,
      );
    });
  });

  describe('receiptsClear', () => {
    const storeId = 5;
    const payCode = 'testPayCode';

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('receiptsClear', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.receiptsClear(storeId, payCode);
    });
  });

  describe('offerList', () => {
    const input: PowercardOfferListDto = {
      storeId: 42,
      epicenter: null,
      radius: null,
      simpleClosest: false,
      emailAddress: 'testEmailAddress',
      isNewCustomer: false,
      paymentType: OFFER_PAYMENT_TYPE.NONE,
    };

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('offerList', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.offerList(mockOfferListResolveInfo, input);
    });
  });

  describe('ratingCreate', () => {
    const transactionUuid = 'testUuid';
    const numberOfStars = 4;

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('ratingCreate', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.ratingCreate(transactionUuid, numberOfStars);
    });
  });

  describe('check', () => {
    const storeId = 42;
    const payCode = 'testPayCode';

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('check', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.check(mockCheckResolveInfo, storeId, payCode);
    });
  });

  describe('checkList', () => {
    const tableUuid = 'testTableUuid';

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('checkList', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.checkList(mockCheckResolveInfo, tableUuid);
    });
  });

  describe('checkPaymentApply', () => {
    const input: CheckPaymentApplyInputDto = {
      dollarsPaid: 12,
      emailAddress: 'testEmail@address.com',
      customerUuid: 'testCustomerUuid',
      nonce: 'testNonce',
      payCode: 'testPayCode',
      paymentInstrumentUuid: 'testPaymentInstrumentUuid',
      paymentInstrumentType: PAYMENT_INSTRUMENT_TYPE.VISA,
      storeId: 42,
      tax: 1.23,
      tip: 4.56,
      billing: {
        zipCode: '12345',
      },
    };

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('checkPaymentApply', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.checkPaymentApply(mockCheckResolveInfo, input);
    });
  });

  describe('adminFeatures', () => {
    beforeAll(() => {
      mockGraphqlClientExecuteQuery('adminFeatures', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.adminFeatures(mockFeaturesResolveInfo);
    });
  });

  describe('adminIsFeatureEnabled', () => {
    const featureName = 'testFeatureName';
    const storeId = 42;

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('adminIsFeatureEnabled', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.adminIsFeatureEnabled(featureName, storeId);
    });
  });

  describe('adminIsFeatureEnabledForLatAndLong', () => {
    const featureName = 'testFeatureName';
    const geoLocation = {
      latitude: 0,
      longitude: 1,
    };

    beforeAll(() => {
      mockGraphqlClientExecuteQuery(
        'adminIsFeatureEnabledForLatAndLong',
        mockGraphqlClient,
      );
    });
    it('should match snapshot', async () => {
      await service.adminIsFeatureEnabledForLatAndLong(
        mockFeatureEnabledResolveInfo,
        featureName,
        geoLocation,
      );
    });
  });

  describe('adminFeatureEnableForStore', () => {
    const featureName = 'testFeatureName';
    const storeId = 42;

    beforeAll(() => {
      mockGraphqlClientExecuteQuery(
        'adminFeatureEnableForStore',
        mockGraphqlClient,
      );
    });
    it('should match snapshot', async () => {
      await service.adminFeatureEnableForStore(featureName, true, storeId);
    });
  });
});
