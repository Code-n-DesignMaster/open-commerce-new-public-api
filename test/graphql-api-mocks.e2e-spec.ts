import { INestApplication } from '@nestjs/common/interfaces';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { assertNoError } from './helpers';
import { AppModule } from '../src/app.module';

describe.skip('Mocked data in AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(() => app.close());

  it('can return a mocked customer id string', async () => {
    const query = `query getCurrentCustomer {
      currentCustomer {
        username
      }
  }`;

    return request(app.getHttpServer())
      .post('/graphql')
      .send({ operationName: null, variables: {}, query })
      .set('x-api-key', 'S2SI5501q3SeKQR3ZLqpxcrVPuHUAxV0jCPCN8em8QRGoQyt')
      .expect(res => {
        assertNoError(res);
      })
      .expect(200)
      .expect(res => {
        expect(res.body.data.currentCustomer.username).toMatch(/^[\w\s]+$/);
      });
  });
});
