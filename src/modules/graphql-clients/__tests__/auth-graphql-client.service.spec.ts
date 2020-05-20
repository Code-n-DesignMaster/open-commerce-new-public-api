import { AuthGraphqlClientService } from '../clients/auth-graphql-client.service';
import { Test } from '@nestjs/testing';
import { AUTH_SERVICE_GRAPHQL_CLIENT_TOKEN } from '../graphql-clients.constants';
import { LoggerService } from '@open-commerce/nestjs-logger';
import { mockGraphqlClientExecuteQuery } from './mock-graphql-client-execute-query';
import { IInAuthPayloadOptions } from '../../auth/interfaces/inauth-payload-options';
import { InAuthDeviceRegistrationRequestInputDto } from '../../auth/dtos/inauth-device-registration-request-input.dto';
import { InauthTrustScoreValueInputDto } from '../../auth/dtos/inauth-trust-score-value-input.dto';
import { CustomerOtpRequestDto } from '../../auth/dtos/customer-otp-request.dto';
import { OTPChannel } from '../../auth/otp-channel.enum';
import { IAuthTokens } from '../../auth/interfaces/auth-tokens.interface';
import { CustomerLoginByOtpDto } from '../../auth/dtos/customer-login-by-otp.dto';

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

describe('AuthGraphqlClientService', () => {
  let service: AuthGraphqlClientService;

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AuthGraphqlClientService,
        {
          provide: LoggerService,
          useValue: mockLogger,
        },
        {
          provide: AUTH_SERVICE_GRAPHQL_CLIENT_TOKEN,
          useValue: mockGraphqlClient,
        },
      ],
    }).compile();

    service = module.get(AuthGraphqlClientService);
  });

  describe('customerUsernameChange', () => {
    const newUsername = 'testNewUsername';
    const sub = 'testSub';

    beforeAll(() => {
      mockGraphqlClientExecuteQuery(
        'customerUsernameChange',
        mockGraphqlClient,
      );
    });
    it('should match snapshot', async () => {
      await service.customerUsernameChange(newUsername, sub);
    });
  });

  describe('customerUsernameChangeVerify', () => {
    const otp = {
      otp: 'testOtp',
      session: 'testSession',
    };

    beforeAll(() => {
      mockGraphqlClientExecuteQuery(
        'customerUsernameChangeVerify',
        mockGraphqlClient,
      );
    });
    it('should match snapshot', async () => {
      await service.customerUsernameChangeVerify(otp);
    });
  });

  describe('inAuthPayloadValidate', () => {
    const input: IInAuthPayloadOptions = {
      auth: {
        sub: 'testSub',
        accessToken: 'testAccessToken',
        expiresIn: 655321,
      },
      deviceId: 'testDeviceId',
      deviceIpAddress: 'testIpAddress',
      inAuthLogPayload: 'testInAuthPayload',
      transactionId: 'testTransactionId',
    };

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('inAuthPayloadValidate', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.inAuthPayloadValidate(input);
    });
  });

  describe('inAuthMobileDeviceRegister', () => {
    const input: InAuthDeviceRegistrationRequestInputDto = {
      deviceId: 'testDeviceId',
      payload: 'testInAuthPayload',
    };

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('inauthDeviceRegister', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.inAuthMobileDeviceRegister(input);
    });
  });

  describe('inauthDeviceTrustScoreThresholdUpdate', () => {
    const input: InauthTrustScoreValueInputDto = {
      value: 42,
    };

    beforeAll(() => {
      mockGraphqlClientExecuteQuery(
        'inauthDeviceTrustScoreThresholdUpdate',
        mockGraphqlClient,
      );
    });
    it('should match snapshot', async () => {
      await service.inauthDeviceTrustScoreThresholdUpdate(input);
    });
  });

  describe('inauthCustomerToDeviceConnect', () => {
    const input = {
      deviceId: 'testDeviceId',
      customerId: 42,
    };

    beforeAll(() => {
      mockGraphqlClientExecuteQuery(
        'inauthCustomerToDeviceConnect',
        mockGraphqlClient,
      );
    });
    it('should match snapshot', async () => {
      await service.inauthCustomerToDeviceConnect(input);
    });
  });

  describe('inauthBlacklistedDeviceUnblockedStatusSet', () => {
    const deviceId = 'testDeviceId';

    beforeAll(() => {
      mockGraphqlClientExecuteQuery(
        'inauthBlacklistedDeviceUnblockedStatusSet',
        mockGraphqlClient,
      );
    });
    it('should match snapshot', async () => {
      await service.inauthBlacklistedDeviceUnblockedStatusSet(deviceId, false);
    });
  });

  describe('inauthDeviceBlacklistRemove', () => {
    const deviceId = 'testDeviceId';

    beforeAll(() => {
      mockGraphqlClientExecuteQuery(
        'inauthDeviceBlacklistRemove',
        mockGraphqlClient,
      );
    });
    it('should match snapshot', async () => {
      await service.inauthDeviceBlacklistRemove(deviceId);
    });
  });

  describe('inAuthGetSigfiles', () => {
    const input = {
      deviceId: 'testDeviceId',
      deviceType: 'testDeviceType',
    };

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('inauthGetSigfiles', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.inAuthGetSigfiles(input);
    });
  });

  describe('customerOTPRequest', () => {
    const input: CustomerOtpRequestDto = {
      identifier: 'testIdentifier',
      channel: OTPChannel.EMAIL,
    };

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('customerOTPRequest', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.customerOTPRequest(input);
    });
  });

  describe('updateUserAttrs', () => {
    const input = {
      name: {
        first: 'testFirstName',
      },
    };
    const accessToken = 'testAccessToken';

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('updateUserAttrs', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.updateUserAttrs(input, accessToken);
    });
  });

  describe('logout', () => {
    const accessToken = 'testAccessToken';

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('logout', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.logout(accessToken);
    });
  });

  describe('getAccessTokenByRefreshToken', () => {
    const input: IAuthTokens = {
      tokens: {
        accessToken: 'testAccessToken',
        refreshToken: 'testRefreshToken',
      },
    };

    beforeAll(() => {
      mockGraphqlClientExecuteQuery(
        'getAccessTokenByRefreshToken',
        mockGraphqlClient,
      );
    });
    it('should match snapshot', async () => {
      await service.getAccessTokenByRefreshToken(input);
    });
  });

  describe('customerLoginByOTP', () => {
    const deviceId = 'testDeviceId';

    const input: CustomerLoginByOtpDto = {
      otp: 'testOtp',
      session: 'testSession',
    };

    beforeAll(() => {
      mockGraphqlClientExecuteQuery('customerLoginByOTP', mockGraphqlClient);
    });
    it('should match snapshot', async () => {
      await service.customerLoginByOTP(input, deviceId);
    });
  });
});
