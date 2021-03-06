import { INestApplication } from '@nestjs/common/interfaces';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { assertNoError, isServiceUp } from '@open-commerce/test-utils';
import { AppModule } from '../../../app.module';
import { getAccessToken } from '../../../../test/helpers';
import { get } from 'lodash';
import { ISchemaConfig } from '../../../config/schema.interface';
import { CONFIG_TOKEN } from '@open-commerce/nestjs-config';

const X_API_KEY = 'S2SI5501q3SeKQR3ZLqpxcrVPuHUAxV0jCPCN8em8QRGoQyt';

describe('Dave Busters Customer GraphQL (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const config: ISchemaConfig = moduleFixture.get(CONFIG_TOKEN);
    const authServiceUri = config.authService.remoteSchemaUri;

    // const authServiceUri = process.env.REMOTE_SCHEMAS__AUTH_SERVICE_URI;

    // make sure required services are up
    const isAuthServiceDown = !(await isServiceUp(authServiceUri));
    if (isAuthServiceDown) {
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

  it('can get client payment token', async () => {
    const accessToken = await getAccessToken(app, X_API_KEY);
    const query = `
      query {
        clientPaymentToken {
          token
        }
      }`;

    return await request(app.getHttpServer())
      .post('/graphql')
      .set({
        'content-type': 'application/json',
        'x-api-key': X_API_KEY,
        authorization: `Bearer ${accessToken}`,
      })
      .send({ operationName: null, variables: {}, query })
      .expect(res => {
        assertNoError(res);
        expect(get(res, 'body.data.clientPaymentToken')).toBeTruthy();
      })
      .expect(200);
  });
});
