import { INestApplication } from '@nestjs/common/interfaces';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { assertNoError } from '../../../../test/helpers';
import { AppModule } from '../../../app.module';
import { IAppConfig } from '@open-commerce/data-objects';

const X_API_KEY = 'S2SI5501q3SeKQR3ZLqpxcrVPuHUAxV0jCPCN8em8QRGoQyt';

describe('App Config GraphQL (e2e)', () => {
  let app: INestApplication;
  let headers: any;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    headers = {
      'content-type': 'application/json',
      'x-api-key': X_API_KEY,
    };
  });

  afterAll(async () => await app.close());

  it('can get valid app config', async done => {
    const query = `{
      appConfig {
        backgroundImage{
          images{
            url
            width
            height
          }
          activeAt
        }
        termsConditions{
          uuid
          url
          name
          activeAt
        }
        privacyPolicy{
          uuid
          url
          name
          activeAt
        }
        powercardImages{
          uuid
          name
          fullsizeImages{
            url
            width
            height
          }
          thumbnailImages{
            url
            width
            height
          }
        }
        biometricPreference{
          uuid
          name
          description
        }
        marketingOptInPreference{
          uuid
          name
          description
        }
        supportedPaymentTypes
        supportedApplePayPaymentTypes
        supportedGoogleWalletPaymentTypes
      }
    }`;

    return request(app.getHttpServer())
      .post('/graphql')
      .send({ operationName: null, variables: {}, query })
      .set(headers)
      .expect(200)
      .expect(res => {
        assertNoError(res);
        const appConfig: IAppConfig = res.body.data.appConfig;
        expect(appConfig.backgroundImage.images).not.toBeNull();
        expect(appConfig.biometricPreference).not.toBeNull();
        expect(appConfig.marketingOptInPreference).not.toBeNull();
        expect(appConfig.powercardImages).not.toBeNull();
        expect(appConfig.privacyPolicy).not.toBeNull();
        expect(appConfig.supportedApplePayPaymentTypes).not.toBeNull();
        expect(appConfig.supportedGoogleWalletPaymentTypes).not.toBeNull();
        expect(appConfig.supportedPaymentTypes).not.toBeNull();
        expect(appConfig.termsConditions).not.toBeNull();
        done();
      });
  });
});
