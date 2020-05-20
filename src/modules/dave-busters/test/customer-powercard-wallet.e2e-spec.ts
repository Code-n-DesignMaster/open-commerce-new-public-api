import { INestApplication } from '@nestjs/common/interfaces';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { assertNoError, getAccessToken } from '../../../../test/helpers';
import { AppModule } from '../../../app.module';
import { isServiceUp } from '@open-commerce/test-utils';
import { ISchemaConfig } from '../../../config/schema.interface';
import { CONFIG_TOKEN } from '@open-commerce/nestjs-config';

const X_API_KEY = 'S2SI5501q3SeKQR3ZLqpxcrVPuHUAxV0jCPCN8em8QRGoQyt';

describe('Customer powercard wallet', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const config: ISchemaConfig = moduleFixture.get(CONFIG_TOKEN);
    const authServiceUri = config.authService.remoteSchemaUri;

    // const authServiceUri = process.env.REMOTE_SCHEMAS__AUTH_SERVICE_URI;

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

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(() => app.close());

  it('can get current customer', async () => {
    const query = `
      query currentCustomer {
        currentCustomer {
          powercardWallet {
            uuid
          }
        }
      }`;

    const accessToken: string = await getAccessToken(app, X_API_KEY);

    return request(app.getHttpServer())
      .post('/graphql')
      .send({ operationName: null, variables: {}, query })
      .set({
        'content-type': 'application/json',
        'x-api-key': X_API_KEY,
        authorization: `Bearer ${accessToken}`,
      })
      .expect(200)
      .expect(res => {
        assertNoError(res);
      });
  });
});
