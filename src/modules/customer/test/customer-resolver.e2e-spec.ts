import { INestApplication } from '@nestjs/common/interfaces';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { get } from 'lodash';
import { assertNoError } from '@open-commerce/test-utils';
import { getAccessToken } from '../../../../test/helpers';
import { AppModule } from '../../../app.module';
import assert = require('assert');

describe('Customer Resolver', () => {
  let app: INestApplication;
  let moduleFixture: TestingModule;
  const xApiKey: string = 'S2SI5501q3SeKQR3ZLqpxcrVPuHUAxV0jCPCN8em8QRGoQyt';

  beforeAll(async () => {
    moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    return await app.init();
  });

  afterAll(async () => {
    jest.resetAllMocks();
    jest.clearAllMocks();
    await app.close();
  });

  it('retrieve currentCustomer using accessToken is successful', async () => {
    const query = `
    query currentCustomer {
      currentCustomer {
       username
      }
    }`;
    const accessToken = await getAccessToken(app, xApiKey);

    assert(accessToken, Error('could not get accessToken'));

    return request(app.getHttpServer())
      .post('/graphql')
      .set({
        'content-type': 'application/json',
        'x-api-key': xApiKey,
        authorization: `Bearer ${accessToken}`,
      })
      .send({ operationName: 'currentCustomer', variables: null, query })
      .expect(200)
      .expect(res => {
        assertNoError(res);

        const currentCustomer = get(res, 'body.data.currentCustomer');
        expect(currentCustomer).not.toBeUndefined();
      });
  });
});
