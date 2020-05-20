import { MobilePassGraphqlClientService } from '../clients/mobile-pass-graphql-client.service';
import { Test } from '@nestjs/testing';
import { MOBILE_PASS_SERVICE_GRAPHQL_CLIENT_TOKEN } from '../graphql-clients.constants';
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

const testPowercardUuid = 'testPowercardUuid';
const testDeviceId = 'testDeviceId';

describe('MobilePassGraphqlClientService', () => {
  let service: MobilePassGraphqlClientService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        MobilePassGraphqlClientService,
        {
          provide: LoggerService,
          useValue: mockLogger,
        },
        {
          provide: MOBILE_PASS_SERVICE_GRAPHQL_CLIENT_TOKEN,
          useValue: mockGraphqlClient,
        },
      ],
    }).compile();

    service = module.get(MobilePassGraphqlClientService);
  });

  describe('isPowercardInGoogleWallet', () => {
    beforeAll(() => {
      mockGraphqlClientExecuteQuery(
        'isPowercardInGoogleWallet',
        mockGraphqlClient,
      );
    });
    it('should match snapshot', async () => {
      await service.isPowercardInGoogleWallet(testPowercardUuid, testDeviceId);
    });
  });

  describe('getWalletPassUrls', () => {
    beforeAll(() => {
      mockGraphqlClientExecuteQuery('walletPass', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.getWalletPassUrls(testPowercardUuid, testDeviceId);
    });
  });
});
