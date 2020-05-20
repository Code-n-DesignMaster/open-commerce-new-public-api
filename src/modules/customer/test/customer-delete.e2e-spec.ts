import { INestApplication } from '@nestjs/common/interfaces';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import {
  assertNoError,
  isServiceUp,
  getAccessToken,
} from '../../../../test/helpers';
import { AppModule } from '../../../app.module';
import { ISchemaConfig } from '../../../config/schema.interface';
import { CONFIG_TOKEN } from '@open-commerce/nestjs-config';

const X_API_KEY = 'S2SI5501q3SeKQR3ZLqpxcrVPuHUAxV0jCPCN8em8QRGoQyt';
// const authServiceUri = process.env.REMOTE_SCHEMAS__AUTH_SERVICE_URI;

describe('Customer delete', () => {
  let app: INestApplication;
  let accessToken: string;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const config: ISchemaConfig = moduleFixture.get(CONFIG_TOKEN);
    const authServiceUri = config.authService.remoteSchemaUri;

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
    accessToken = await getAccessToken(app, X_API_KEY);
  });

  afterAll(() => app.close());

  it('can delete the current customer', async () => {
    const query = `mutation {
      customerDelete
    }`;

    return request(app.getHttpServer())
      .post('/graphql')
      .set({
        'content-type': 'application/json',
        'x-api-key': X_API_KEY,
        authorization: `Bearer ${accessToken}`,
      })
      .send({ operationName: null, variables: {}, query })
      .expect(res => {
        assertNoError(res);
        const data = res.body.data.customerDelete;

        expect(data).toBeTruthy();
      })
      .expect(200);
  });

  it('cannot delete the current customer due to logout', async () => {
    const query = `mutation {
      customerDelete
    }`;

    return request(app.getHttpServer())
      .post('/graphql')
      .set({
        'content-type': 'application/json',
        'x-api-key': X_API_KEY,
        authorization: `Bearer ${accessToken}`,
      })
      .send({ operationName: null, variables: {}, query })
      .expect(res => {
        expect(res.body.errors[0].extensions.code).toBe(
          'OC_ACCESS_TOKEN_EXPIRED_ERROR',
        );
      })
      .expect(200);
  });
});
