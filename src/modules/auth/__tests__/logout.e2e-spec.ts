import { INestApplication } from '@nestjs/common/interfaces';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import assert = require('assert');
import {
  assertNoError,
  isServiceUp,
  getAccessToken,
} from '../../../../test/helpers';
import { AppModule } from '../../../app.module';
import { BlacklistTokenRepositoryService } from '../../authorization/services/blacklist-token-repository.service';
import { ISchemaConfig } from '../../../config/schema.interface';
import { CONFIG_TOKEN } from '@open-commerce/nestjs-config';

const X_API_KEY = 'S2SI5501q3SeKQR3ZLqpxcrVPuHUAxV0jCPCN8em8QRGoQyt';

class MockAccessTokenRedisService {
  // @ts-ignore
  public db: Map = new Map();
  public async saveToken(key, expire) {
    this.db.set(key, expire);
  }
  public async exists(key) {
    return this.db.has(key);
  }
}

describe('Public api logout functionality (e2e)', () => {
  let app: INestApplication;
  let mockAccessTokenRedisService: MockAccessTokenRedisService;
  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(BlacklistTokenRepositoryService)
      .useValue(mockAccessTokenRedisService)
      .compile();

    const config: ISchemaConfig = moduleFixture.get(CONFIG_TOKEN);
    const authServiceUri = config.authService.remoteSchemaUri;
    // const authServiceUri = process.env.REMOTE_SCHEMAS__AUTH_SERVICE_URI;

    assert(
      authServiceUri,
      Error('REMOTE_SCHEMAS__AUTH_SERVICE_URI must be defined in env vars'),
    );
    // make sure required services are up
    if (!(await isServiceUp(authServiceUri))) {
      throw Error(
        JSON.stringify({
          msg: `service must be up`,
          serviceName: 'auth',
          uri: authServiceUri,
        }),
      );
    }
    mockAccessTokenRedisService = new MockAccessTokenRedisService();

    app = moduleFixture.createNestApplication();
    return await app.init();
  });

  afterAll(() => app.close());

  it('can logout', async () => {
    const mutation = `mutation logout{
      logout
    }`;

    const variables = {};
    const accessToken = await getAccessToken(app, X_API_KEY);

    const headers = {
      'content-type': 'application/json',
      'x-api-key': X_API_KEY,
      authorization: `Bearer ${accessToken}`,
    };

    return request(app.getHttpServer())
      .post('/graphql')
      .send({ operationName: null, variables, query: mutation })
      .set(headers)
      .expect(200)
      .expect(res => {
        assertNoError(res);
        expect(res.body.data.logout).toBeTruthy();
      });
  });

  it('while logout access token should be stored in blacklist', async () => {
    const mutation = `mutation logout{
      logout
    }`;

    const variables = {};
    const accessToken = await getAccessToken(app, X_API_KEY);

    const headers = {
      'content-type': 'application/json',
      'x-api-key': X_API_KEY,
      authorization: `Bearer ${accessToken}`,
    };

    return request(app.getHttpServer())
      .post('/graphql')
      .send({ operationName: null, variables, query: mutation })
      .set(headers)
      .expect(200)
      .expect(async res => {
        assertNoError(res);
        return expect(
          await mockAccessTokenRedisService.exists(accessToken),
        ).toBeTruthy();
      });
  });

  it('after logout it should throw an error', async () => {
    const mutation = `mutation logout{
      logout
    }`;

    const variables = {};
    const accessToken = await getAccessToken(app, X_API_KEY);

    const headers = {
      'content-type': 'application/json',
      'x-api-key': X_API_KEY,
      authorization: `Bearer ${accessToken}`,
    };
    await request(app.getHttpServer())
      .post('/graphql')
      .send({ operationName: null, variables, query: mutation })
      .set(headers);

    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        variables,
        query: `query { currentCustomer {
        username
      } }`,
      })
      .set(headers)
      .expect(async res => {
        return expect(res.body.errors.length).toBeGreaterThan(0);
      });
  });
});
