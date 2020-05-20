import { INestApplication } from '@nestjs/common/interfaces';
import { Test } from '@nestjs/testing';
import { isServiceUp } from '@open-commerce/test-utils';
import { AppModule } from '../../../app.module';
import * as request from 'supertest';
import { getAccessToken } from '../../../../test/helpers';
import { assertNoError } from '@open-commerce/test-utils/dist';
import { ISchemaConfig } from '../../../config/schema.interface';
import { CONFIG_TOKEN } from '@open-commerce/nestjs-config';
// const authServiceUri = process.env.REMOTE_SCHEMAS__AUTH_SERVICE_URI;
const X_API_KEY = 'S2SI5501q3SeKQR3ZLqpxcrVPuHUAxV0jCPCN8em8QRGoQyt';

describe('Customer Payment Instruments', () => {
  let app: INestApplication;
  let accessToken: string;
  let headers: any;
  let validPaymentInstrumentUuid: string;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const config: ISchemaConfig = moduleFixture.get(CONFIG_TOKEN);
    const authServiceUri = config.authService.remoteSchemaUri;

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
  });

  afterAll(async () => await app.close());

  it('can create a payment instrument', async () => {
    const query = `mutation {
        customerPaymentInstrumentCreate(input:{
          alias:"visa1111",
          nonce:"fake-valid-nonce",
          paymentType: CREDIT,
          expiration:{
            expirationYear:"2026",
            expirationMonth:"02"
          },
          address:{
            alias:"home",
            street1:"432 north 3rd street",
            street2:"Apt B",
            city:"Philadelphia",
            state:"PA",
            zipCode:"19104",
            geoLocation:{
              latitude:80.1,
              longitude:-71.2,
            }
          },
          rawResponse:{
            a: "a",
            b: "b",
            c: "c"
          }
        }) {
          uuid
          alias
          providerNickName
          accountNumber
          address {
            alias
            street1
            street2
            city
            state
            zipCode
            geoLocation {
              latitude
              longitude
            }
          }
          paymentType
          expiration{
            expirationYear
            expirationMonth
          }
          status
          isDefault
          displayNumber
          paymentProvider {
            name
          }
        }
      }`;

    return await request(app.getHttpServer())
      .post('/graphql')
      .set(headers)
      .send({ operationName: null, variables: {}, query })
      .expect(res => {
        assertNoError(res);
        const data = res.body.data.customerPaymentInstrumentCreate;

        expect(data.uuid).toBeTruthy();
        expect(data.alias).toBeTruthy();
        expect(data.providerNickName).toBeTruthy();
        expect(data.accountNumber).toBeTruthy();
        expect(data.paymentType).toBeTruthy();
        expect(data.status).toBeTruthy();
        expect(data.displayNumber).toBeTruthy();

        validPaymentInstrumentUuid = data.uuid;
      })
      .expect(200);
  });

  it('can delete a payment instrument', async () => {
    const query = `mutation {
      customerPaymentInstrumentDelete(
        uuid: "${validPaymentInstrumentUuid}"
      ){
        uuid
        alias
        accountNumber
        displayNumber
        providerNickName
        address{
          alias
          zipCode
        }
      }
    }`;

    return await request(app.getHttpServer())
      .post('/graphql')
      .set(headers)
      .send({ operationName: null, variables: {}, query })
      .expect(res => {
        assertNoError(res);
      })
      .expect(200);
  });
});
