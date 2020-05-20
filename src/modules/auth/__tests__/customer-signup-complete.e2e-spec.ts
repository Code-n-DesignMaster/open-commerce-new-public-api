import { INestApplication } from '@nestjs/common/interfaces';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import assert = require('assert');
import {
  assertNoError,
  isServiceUp,
  expectCustomerAttrsToBeDefined,
  getAccessToken,
  agreementUuids,
  X_API_KEY,
} from '../../../../test/helpers';
import { AppModule } from '../../../app.module';
import {
  customerFragment,
  paymentInstrumentFragment,
  addressFragment,
} from './fragments';
import { values } from 'lodash';
import { ISchemaConfig } from '../../../config/schema.interface';
import { CONFIG_TOKEN } from '@open-commerce/nestjs-config';

describe('Dave Busters GraphQL Mocks (e2e)', () => {
  let app: INestApplication;
  const acceptedAgreementUuids = [];
  let headers: any;
  let accessToken: any;

  const mutation = `${addressFragment}
    ${paymentInstrumentFragment}
    ${customerFragment}
    mutation customerRegistrationComplete($customerRegistrationComplete: CustomerRegistrationComplete!) {
      customerRegistrationComplete(input: $customerRegistrationComplete) {
        ...CustomerFragment
      }
    }`;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

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

    app = moduleFixture.createNestApplication();
    await app.init();

    accessToken = await getAccessToken(app, X_API_KEY);
    headers = {
      'content-type': 'application/json',
      'x-api-key': X_API_KEY,
      authorization: `Bearer ${accessToken}`,
    };
    const uuids = await agreementUuids(app, headers);
    acceptedAgreementUuids.push(...values(uuids));
  });

  afterAll(() => app.close());

  it('can complete customer signup', async () => {
    const variables = {
      customerRegistrationComplete: {
        defaultLocationId: 10,
        email: 'myemail@email.com',
        demographics: {
          birthday: '2011-11-11',
        },
        acceptAgreement: acceptedAgreementUuids,
      },
    };

    return request(app.getHttpServer())
      .post('/graphql')
      .send({ operationName: null, variables, query: mutation })
      .set(headers)
      .expect(res => {
        assertNoError(res);
        expect(res.body.data.customerRegistrationComplete).toBeDefined();
        expectCustomerAttrsToBeDefined(
          res.body.data.customerRegistrationComplete,
        );
      })
      .expect(200);
  });

  it('location validation fail', async () => {
    const variables = {
      customerRegistrationComplete: {
        defaultLocationId: 'some_id',
        email: 'myemail@email.com',
        demographics: {
          birthday: '2011-11-11',
        },
        acceptAgreement: acceptedAgreementUuids,
      },
    };

    return request(app.getHttpServer())
      .post('/graphql')
      .send({ operationName: null, variables, query: mutation })
      .set(headers)
      .expect(res => {
        expect(res.body.errors[0].message).not.toBeUndefined();
      })
      .expect(400);
  });

  it('email validation fail', async () => {
    const variables = {
      customerRegistrationComplete: {
        defaultLocationId: 10,
        email: 'myemail@email',
        demographics: {
          birthday: '2011-11-11',
        },
        acceptAgreement: acceptedAgreementUuids,
      },
    };

    return request(app.getHttpServer())
      .post('/graphql')
      .send({ operationName: null, variables, query: mutation })
      .set(headers)
      .expect(res => {
        expect(res.body.errors[0].message).not.toBeNull();
      })
      .expect(200);
  });

  it('birthday validation fail', async () => {
    const variables = {
      customerRegistrationComplete: {
        defaultLocationId: 10,
        email: 'myemail@email.com',
        demographics: {
          birthday: 123,
        },
        acceptAgreement: acceptedAgreementUuids,
      },
    };

    return request(app.getHttpServer())
      .post('/graphql')
      .send({ operationName: null, variables, query: mutation })
      .set(headers)
      .expect(res => {
        expect(res.body.errors[0].message).not.toBeNull();
      })
      .expect(200);
  });
});
