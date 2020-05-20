import { ApiVerificationGraphqlClientService } from '../clients/api-verification-graphql-client.service';
import { Test } from '@nestjs/testing';
import { API_VERIFICATION_SERVICE_GRAPHQL_CLIENT_TOKEN } from '../graphql-clients.constants';
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
const testApiKey = 'testApiKey';

describe('ApiVerificationGraphqlClientService', () => {
  let service: ApiVerificationGraphqlClientService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        ApiVerificationGraphqlClientService,
        {
          provide: LoggerService,
          useValue: mockLogger,
        },
        {
          provide: API_VERIFICATION_SERVICE_GRAPHQL_CLIENT_TOKEN,
          useValue: mockGraphqlClient,
        },
      ],
    }).compile();

    service = module.get(ApiVerificationGraphqlClientService);
  });

  describe('verifyApiKey', () => {
    beforeAll(() => {
      mockGraphqlClientExecuteQuery('verifyApiKey', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.verifyApiKey(testApiKey);
    });
  });

  describe('verifyAdminApiKey', () => {
    beforeAll(() => {
      mockGraphqlClientExecuteQuery('verifyAdminApiKey', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.verifyAdminApiKey(testApiKey);
    });
  });
});
