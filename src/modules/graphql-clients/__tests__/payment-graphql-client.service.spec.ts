import { PaymentGraphqlClientService } from '../clients/payment-graphql-client.service';
import { Test } from '@nestjs/testing';
import { PAYMENT_SERVICE_GRAPHQL_CLIENT_TOKEN } from '../graphql-clients.constants';
import { LoggerService } from '@open-commerce/nestjs-logger';
import { mockGraphqlClientExecuteQuery } from './mock-graphql-client-execute-query';

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

describe('PaymentGraphqlClientService', () => {
  let service: PaymentGraphqlClientService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        PaymentGraphqlClientService,
        {
          provide: LoggerService,
          useValue: mockLogger,
        },
        {
          provide: PAYMENT_SERVICE_GRAPHQL_CLIENT_TOKEN,
          useValue: mockGraphqlClient,
        },
      ],
    }).compile();

    service = module.get(PaymentGraphqlClientService);
  });

  describe('paymentWalletDelete', () => {
    const testCustomerId = 'testCustomerId';

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('paymentWalletDelete', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.paymentWalletDelete(testCustomerId);
    });
  });
});
