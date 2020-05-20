import { NotificationGraphqlClientService } from '../clients/notification-graphql-client.service';
import { Test } from '@nestjs/testing';
import { NOTIFICATION_SERVICE_GRAPHQL_CLIENT_TOKEN } from '../graphql-clients.constants';
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

describe('NotificationGraphqlClientService', () => {
  let service: NotificationGraphqlClientService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        NotificationGraphqlClientService,
        {
          provide: LoggerService,
          useValue: mockLogger,
        },
        {
          provide: NOTIFICATION_SERVICE_GRAPHQL_CLIENT_TOKEN,
          useValue: mockGraphqlClient,
        },
      ],
    }).compile();

    service = module.get(NotificationGraphqlClientService);
  });

  describe('iosAppNotificationTokenRegister', () => {
    const testCustomerUuid = 'testCustomerUuid';
    const testRawIosToken = 'testRawIosToken';

    beforeAll(() => {
      mockGraphqlClientExecuteQuery(
        'notificationTokenRegister',
        mockGraphqlClient,
      );
    });
    it('should match snapshot', async () => {
      await service.iosAppNotificationTokenRegister(
        testRawIosToken,
        testCustomerUuid,
      );
    });
  });
});
