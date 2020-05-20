import { CustomerGraphqlClientService } from '../clients/customer-graphql-client.service';
import { Test } from '@nestjs/testing';
import { CUSTOMER_SERVICE_GRAPHQL_CLIENT_TOKEN } from '../graphql-clients.constants';
import { LoggerService } from '@open-commerce/nestjs-logger';
import { mockGraphqlClientExecuteQuery } from './mock-graphql-client-execute-query';
import { mockCustomerResolveInfo } from './__mocks__/mock-customer-resolve-info';
import { CustomerPaymentInstrumentCreateDto } from '../../customer/dtos/customer-payment-instrument-create.dto';
import { mockPaymentInstrumentResolveInfo } from './__mocks__/mock-payment-instrument-resolve-info';
import { CustomerPaymentInstrumentUpdateDto } from '@open-commerce/data-objects';
import { ICustomerInternal } from '../../common/interfaces/customer-internal.interface';
import { CustomerRegistrationCompleteDto } from '../../auth/dtos/customer-registration-complete.dto';

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

const testCustomerUuid = 'testCustomerUuid';

describe('CustomerGraphqlClientService', () => {
  let service: CustomerGraphqlClientService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        CustomerGraphqlClientService,
        {
          provide: LoggerService,
          useValue: mockLogger,
        },
        {
          provide: CUSTOMER_SERVICE_GRAPHQL_CLIENT_TOKEN,
          useValue: mockGraphqlClient,
        },
      ],
    }).compile();

    service = module.get(CustomerGraphqlClientService);
  });

  describe('clientPaymentToken', () => {
    const customerId = 'testCustomerId';

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('clientPaymentToken', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.clientPaymentToken(customerId);
    });
  });

  describe('customerByIdentityProviderId', () => {
    const identityProviderId = 'testIdentityProviderId';

    beforeEach(() => {
      mockGraphqlClientExecuteQuery(
        'customerByIdentityProviderId',
        mockGraphqlClient,
      );
    });

    describe('with resolve info', () => {
      it('should match snapshot', async () => {
        await service.customerByIdentityProviderId(
          mockCustomerResolveInfo,
          identityProviderId,
        );
      });
    });
    describe('without resolve info', () => {
      it('should match snapshot', async () => {
        await service.customerByIdentityProviderId(null, identityProviderId);
      });
    });
  });

  describe('customerPaymentInstrumentCreate', () => {
    const input = {
      alias: 'testAlias',
      nonce: 'testNonce',
    } as CustomerPaymentInstrumentCreateDto;

    beforeAll(() => {
      mockGraphqlClientExecuteQuery(
        'customerPaymentInstrumentCreate',
        mockGraphqlClient,
      );
    });
    it('should match snapshot', async () => {
      await service.customerPaymentInstrumentCreate(
        mockPaymentInstrumentResolveInfo,
        testCustomerUuid,
        input,
      );
    });
  });

  describe('customerServiceConfig', () => {
    beforeAll(() => {
      mockGraphqlClientExecuteQuery('customerServiceConfig', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.customerServiceConfig();
    });
  });

  describe('customerDelete', () => {
    beforeAll(() => {
      mockGraphqlClientExecuteQuery('customerDelete', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.customerDelete(testCustomerUuid);
    });
  });

  describe('currentCustomerByUsername', () => {
    const username = 'testUsername';

    beforeEach(() => {
      mockGraphqlClientExecuteQuery('customerByUsername', mockGraphqlClient);
    });

    describe('with resolve info', () => {
      it('should match snapshot', async () => {
        await service.currentCustomerByUsername(
          mockCustomerResolveInfo,
          username,
        );
      });
    });
    describe('without resolve info', () => {
      it('should match snapshot', async () => {
        await service.currentCustomerByUsername(null, username);
      });
    });
  });

  describe('customerUpdate', () => {
    const input = {
      email: 'tetsuo000+2222222222420@gmail.com',
      demographics: {
        birthday: '1977-12-14',
      },
    } as Partial<ICustomerInternal>;

    beforeEach(() => {
      mockGraphqlClientExecuteQuery('customerUpdate', mockGraphqlClient);
    });
    describe('with resolve info', () => {
      it('should match snapshot', async () => {
        await service.customerUpdate(
          mockCustomerResolveInfo,
          testCustomerUuid,
          input,
        );
      });
    });
    describe('without resolve info', () => {
      it('should match snapshot', async () => {
        await service.customerUpdate(null, testCustomerUuid, input);
      });
    });
  });

  describe('customerEmailVerificationSend', () => {
    beforeAll(() => {
      mockGraphqlClientExecuteQuery(
        'customerEmailVerificationSend',
        mockGraphqlClient,
      );
    });
    it('should match snapshot', async () => {
      await service.customerEmailVerificationSend(testCustomerUuid);
    });
  });

  describe('customerPaymentInstrumentUpdate', () => {
    const input = {
      alias: 'testAlias',
      nonce: 'testNonce',
    } as CustomerPaymentInstrumentUpdateDto;

    beforeAll(() => {
      mockGraphqlClientExecuteQuery(
        'customerPaymentInstrumentUpdate',
        mockGraphqlClient,
      );
    });
    it('should match snapshot', async () => {
      await service.customerPaymentInstrumentUpdate(
        mockPaymentInstrumentResolveInfo,
        input,
      );
    });
  });

  describe('customerPaymentInstrumentDelete', () => {
    const uuid = 'testUuid';

    beforeAll(() => {
      mockGraphqlClientExecuteQuery(
        'customerPaymentInstrumentDelete',
        mockGraphqlClient,
      );
    });
    it('should match snapshot', async () => {
      await service.customerPaymentInstrumentDelete(
        mockPaymentInstrumentResolveInfo,
        testCustomerUuid,
        uuid,
      );
    });
  });

  describe('customerCreate', () => {
    const input = {
      email: 'tetsuo000+2222222222420@gmail.com',
      demographics: {
        birthday: '1977-12-14',
      },
    } as Partial<ICustomerInternal>;

    beforeEach(() => {
      mockGraphqlClientExecuteQuery('customerCreate', mockGraphqlClient);
    });
    describe('with resolve info', () => {
      it('should match snapshot', async () => {
        await service.customerCreate(mockCustomerResolveInfo, input);
      });
    });
    describe('without resolve info', () => {
      it('should match snapshot', async () => {
        await service.customerCreate(null, input);
      });
    });
  });

  describe('customerRegistrationComplete', () => {
    const input: CustomerRegistrationCompleteDto = {
      acceptAgreement: [
        'testTermsAndConditionsAgreementUuid',
        'testPrivacyAgreementUuid',
      ],
      email: 'ryan.oboril@stuzo.com',
      name: {
        first: 'Ryan',
        middle: 'H',
        last: 'Test',
        title: 'Sir',
        suffix: 'TheFirst',
      },
      demographics: {
        birthday: '1977-12-14',
        gender: 'm',
        zipCode: '12345',
        customDemographics: {},
      },
      defaultLocationId: 5,
    };

    beforeAll(() => {
      mockGraphqlClientExecuteQuery(
        'customerRegistrationComplete',
        mockGraphqlClient,
      );
    });
    it('should match snapshot', async () => {
      await service.customerRegistrationComplete(
        mockCustomerResolveInfo,
        testCustomerUuid,
        input,
      );
    });
  });

  describe('customerPinCodeSet', () => {
    const input = {
      pinCode: {
        pinCode: 'testPinCode',
      },
    };

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('customerPinCodeSet', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.customerPinCodeSet(testCustomerUuid, input);
    });
  });

  describe('customerPinCodeReset', () => {
    beforeAll(() => {
      mockGraphqlClientExecuteQuery('customerPinCodeReset', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.customerPinCodeReset(testCustomerUuid);
    });
  });

  describe('customerPinCodeChange', () => {
    const input = {
      oldPinCode: {
        pinCode: '1112',
      },
      newPinCode: {
        pinCode: '4321',
      },
    };

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('customerPinCodeChange', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.customerPinCodeChange(testCustomerUuid, input);
    });
  });

  describe('customerPinCodeVerify', () => {
    const input = {
      pinCode: {
        pinCode: 'testPinCode',
      },
    };

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('customerPinCodeVerify', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.customerPinCodeVerify(testCustomerUuid, input);
    });
  });
});
