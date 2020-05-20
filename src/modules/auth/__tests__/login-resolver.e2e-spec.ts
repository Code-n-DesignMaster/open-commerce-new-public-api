import { INestApplication } from '@nestjs/common/interfaces';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AUTH_FACTORY_TOKEN } from '../auth.constants';
import { CustomerService } from '../../customer/services/customer.service';
import { AppModule } from '../../../app.module';

describe('Login Resolver', () => {
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
    return await app.close();
  });

  it('customerOTPRequest without x-api-key', async () => {
    const query = `mutation customerOTPRequest($input: CustomerOTPRequest!){
      customerOTPRequest(input: $input){
       session
       success
      }
    }`;

    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        variables: {
          input: {
            channel: 'SMS',
            identifier: '+15555123456',
          },
        },
        query,
      })
      .expect(401)
      .expect(res => expect(res.body.error).toBe('Unauthorized'));
  });

  it('customerOTPRequest login successfully', async () => {
    const query = `mutation customerOTPRequest($input: CustomerOTPRequest!){
      customerOTPRequest(input: $input){
       session
       success
      }
    }`;
    return request(app.getHttpServer())
      .post('/graphql')
      .set({ 'content-type': 'application/json', 'x-api-key': xApiKey })
      .send({
        operationName: 'customerOTPRequest',
        variables: {
          input: {
            channel: 'SMS',
            identifier: '+15555123456',
          },
        },
        query,
      })
      .expect(200)
      .expect(res => {
        const result = res.body.data.customerOTPRequest;
        expect(result).toHaveProperty('session');
        expect(result).toHaveProperty('success', true);
      });
  });

  it.skip('customerOTPRequest fails with correct error response when auth service config is invalid', async () => {
    const query = `mutation customerOTPRequest($input: CustomerOTPRequest!){
      customerOTPRequest(input: $input){
       session
       success
      }
    }`;

    const loginService = moduleFixture.get(AUTH_FACTORY_TOKEN);

    const spy = jest.spyOn(loginService, 'create');
    spy.mockImplementationOnce(() => {
      return {
        async customerOTPRequest() {
          return await null;
        },
      };
    });

    return request(app.getHttpServer())
      .post('/graphql')
      .set({ 'content-type': 'application/json', 'x-api-key': xApiKey })
      .send({
        operationName: 'customerOTPRequest',
        variables: {
          input: {
            channel: 'SMS',
            identifier: '+15555123456',
          },
        },
        query,
      })
      .expect(res =>
        expect(res.body.errors[0].message).toBe(
          'AssertionError [ERR_ASSERTION]: ' +
            'Error: received null result from loginFactory.create().customerOTPRequest; ' +
            'error is probably in auth service',
        ),
      );
  });

  it(`customerOTPRequest should create customer if it wasn't created`, async () => {
    const query = `mutation customerOTPRequest($input: CustomerOTPRequest!){
      customerOTPRequest(input: $input){
       session
       success
      }
    }`;

    const customerService = moduleFixture.get(CustomerService);

    const retrieveByIdentityIdSpy = jest.spyOn(
      customerService,
      'retrieveByIdentityId',
    );
    retrieveByIdentityIdSpy.mockImplementationOnce(async () => null);

    const customerCreateSpy = jest.spyOn(customerService, 'createCustomer');
    customerCreateSpy.mockImplementationOnce(async () => null);

    return request(app.getHttpServer())
      .post('/graphql')
      .set({ 'content-type': 'application/json', 'x-api-key': xApiKey })
      .send({
        operationName: 'customerOTPRequest',
        variables: {
          input: {
            channel: 'SMS',
            identifier: `+15555${Math.floor(100000 + Math.random() * 900000)}`,
          },
        },
        query,
      })
      .expect(() => expect(customerCreateSpy).toBeCalled());
  });

  it('customerOTPRequest login fail with invalid phone number', async () => {
    const query = `mutation customerOTPRequest($input: CustomerOTPRequest!){
      customerOTPRequest(input: $input){
       session
       success
      }
    }`;
    return request(app.getHttpServer())
      .post('/graphql')
      .set({ 'content-type': 'application/json', 'x-api-key': xApiKey })
      .send({
        operationName: 'customerOTPRequest',
        variables: {
          input: {
            channel: 'SMS',
            identifier: '+10000',
          },
        },
        query,
      })
      .expect(200)
      .expect(res => {
        expect(res.body.errors).toHaveLength(1);
        expect(res.body.errors[0].message).toMatch(
          'Invalid phone. Please enter a 10-digit phone number including area code.',
        );
        expect(res.body.errors[0].extensions.code).toMatch(
          'OC_BAD_USER_INPUT_ERROR',
        );
      });
  });

  it('customerOTPRequest login fail without chanel', async () => {
    const query = `mutation customerOTPRequest($input: CustomerOTPRequest!){
      customerOTPRequest(input: $input){
       session
       success
      }
    }`;
    return request(app.getHttpServer())
      .post('/graphql')
      .set({ 'content-type': 'application/json', 'x-api-key': xApiKey })
      .send({
        operationName: 'customerOTPRequest',
        variables: {
          input: {
            identifier: '+1555512345',
          },
        },
        query,
      })
      .expect(200)
      .expect(res => {
        expect(res.body.errors).toHaveLength(1);
        expect(res.body.errors[0].message).toMatch(
          'Failed validation of identifier with channel: undefined',
        );
        expect(res.body.errors[0].extensions.code).toMatch(
          'OC_BAD_USER_INPUT_ERROR',
        );
      });
  });
});
