import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { getAccessToken } from '../../../../test/helpers';
import { AppModule } from '../../../app.module';
import { OC_ACCESS_TOKEN_EXPIRED_ERROR } from '../../../errors/OCAccessTokenExpiredError';
import { OC_CUSTOMER_SESSION_TERMINATED_ERROR } from '../../../errors/OCCustomerSessionTerminatedError';

interface IHeaders {
  authorization: string;
  'x-api-key': string;
}

describe('Pin modules', () => {
  jest.setTimeout(60000);
  let app: INestApplication;
  const xApiKey = 'S2SI5501q3SeKQR3ZLqpxcrVPuHUAxV0jCPCN8em8QRGoQyt';
  let headers: IHeaders;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    const accessToken = await getAccessToken(app, xApiKey);
    headers = {
      'x-api-key': xApiKey,
      authorization: `Bearer ${accessToken}`,
    };

    return null;
  });

  afterAll(() => app.close());
  describe('Pin main functionality', () => {
    it('Should return true on set pin code', async () => {
      await resetPin(app, headers);

      return setPin(app, headers, '7564')
        .expect(200)
        .expect({
          data: {
            customerPinCodeSet: true,
          },
        });
    });

    it('Should get an error if pin code already exists', async () => {
      await resetPin(app, headers);

      await setPin(app, headers, '7564');

      return setPin(app, headers, '7564')
        .expect(200)
        .expect(res => {
          expect(res.body.errors[0].message).toBe(
            'Customer already has a pin code.',
          );
          expect(res.body.errors[0].extensions.code).toBe(
            'OC_PIN_CODE_EXIST_ERROR',
          );
        });
    });

    it('Should return true on change pin code', async () => {
      const pins = {
        oldPinCode: {
          pinCode: '7564',
        },
        newPinCode: {
          pinCode: '9374',
        },
      };

      await resetPin(app, headers);

      await setPin(app, headers, pins.oldPinCode.pinCode);

      return changePin(app, headers, pins)
        .expect(200)
        .expect({
          data: {
            customerPinCodeChange: true,
          },
        });
    });

    it('Should return the error on change pin code with invalid oldPinCode', async () => {
      const pins = {
        oldPinCode: {
          pinCode: '7564',
        },
        newPinCode: {
          pinCode: '9374',
        },
      };

      await resetPin(app, headers);

      await setPin(app, headers, '6474');

      return changePin(app, headers, pins)
        .expect(200)
        .expect(res => {
          expect(res.body.errors[0].message).toBe('The old pin is not valid');
          expect(res.body.errors[0].extensions.code).toBe(
            'OC_PIN_CODE_UPDATE_ERROR',
          );
        });
    });

    it('Should return the true on valid pin code verification', async () => {
      const pin = '6474';
      await resetPin(app, headers);

      await setPin(app, headers, pin);

      return verifyPin(app, headers, pin)
        .expect(200)
        .expect({
          data: {
            customerPinCodeVerify: true,
          },
        });
    });

    it('Should return the false on invalid pin code verification', async () => {
      const pin = '7478';
      const invalidPin = '2345';
      await resetPin(app, headers);

      await setPin(app, headers, pin);

      return verifyPin(app, headers, invalidPin)
        .expect(200)
        .expect({
          data: {
            customerPinCodeVerify: false,
          },
        });
    });

    it('Should return the false if no pin code exists', async () => {
      const invalidPin = '2345';
      await resetPin(app, headers);

      return verifyPin(app, headers, invalidPin)
        .expect(200)
        .expect(res => {
          expect(res.body.errors[0].message).toBe('Customer has no pin code.');
          expect(res.body.errors[0].extensions.code).toBe(
            'OC_PIN_CODE_DOES_NOT_EXIST_ERROR',
          );
        });
    });

    it('Should throw throttling error if validate invalid pin more then 6 times per 3 minutes', async () => {
      const accessToken = await getAccessToken(app, xApiKey);
      const headers = {
        'x-api-key': xApiKey,
        authorization: `Bearer ${accessToken}`,
      };
      const pin = '7478';
      const invalidPin = '2345';
      await resetPin(app, headers);

      await setPin(app, headers, pin);

      for (let i = 1; i < 6; i++) {
        await verifyPin(app, headers, invalidPin);
      }

      return verifyPin(app, headers, invalidPin)
        .expect(200)
        .expect(res => {
          expect(res.body.errors[0].extensions.code).toBe(
            OC_CUSTOMER_SESSION_TERMINATED_ERROR,
          );
        });
    });

    it('Should log out the customer if validate invalid pin more then 6 times per 3 minutes', async () => {
      const accessToken = await getAccessToken(app, xApiKey);
      const headers = {
        'x-api-key': xApiKey,
        authorization: `Bearer ${accessToken}`,
      };
      const pin = '7478';
      const invalidPin = '2345';
      await resetPin(app, headers);

      await setPin(app, headers, pin);

      for (let i = 1; i <= 6; i++) {
        await verifyPin(app, headers, invalidPin);
      }

      return verifyPin(app, headers, invalidPin)
        .expect(200)
        .expect(res => {
          expect(res.body.errors[0].extensions.code).toBe(
            OC_ACCESS_TOKEN_EXPIRED_ERROR,
          );
        });
    });
  });

  describe('Pin code validation', () => {
    it('Should return error on set pin code like 1234', async () => {
      await resetPin(app, headers);

      return setPin(app, headers, '1234')
        .expect(200)
        .expect(res => {
          expect(res.body.errors[0].message).toBe(
            'This passcode is too weak. Please enter a stronger passcode.',
          );
        });
    });

    it('Should return error on set pin code like 1111', async () => {
      await resetPin(app, headers);

      return setPin(app, headers, '1111')
        .expect(200)
        .expect(res => {
          expect(res.body.errors[0].message).toBe(
            'This passcode is too weak. Please enter a stronger passcode.',
          );
        });
    });

    it('Should return set pin code 6475', async () => {
      await resetPin(app, headers);

      return setPin(app, headers, '6475')
        .expect(200)
        .expect({
          data: {
            customerPinCodeSet: true,
          },
        });
    });

    it('Should return error if try to change to the same pin codes', async () => {
      await resetPin(app, headers);

      await setPin(app, headers, '6475');

      return changePin(app, headers, {
        oldPinCode: {
          pinCode: '6475',
        },
        newPinCode: {
          pinCode: '6475',
        },
      })
        .expect(200)
        .expect(res => {
          expect(res.body.errors[0].message).toBe(
            'New pin code and old pin code can not be the same',
          );
        });
    });
  });
});

function resetPin(app: INestApplication, headers) {
  const query = `mutation customerPinCodeReset{
    customerPinCodeReset
  }`;

  return request(app.getHttpServer())
    .post('/graphql')
    .set(headers)
    .send({
      operationName: 'customerPinCodeReset',
      query,
    });
}

function setPin(app: INestApplication, headers, pinCode: string) {
  const query = `mutation customerPinCodeSet($input: CustomerPinCodeSet!){
    customerPinCodeSet(input: $input)
  }`;

  return request(app.getHttpServer())
    .post('/graphql')
    .set(headers)
    .send({
      operationName: 'customerPinCodeSet',
      variables: { input: { pinCode: { pinCode } } },
      query,
    });
}

function changePin(app, headers, input) {
  const query = `mutation customerPinCodeChange($input: CustomerPinCodeChange!){
    customerPinCodeChange(input: $input)
  }`;

  return request(app.getHttpServer())
    .post('/graphql')
    .set(headers)
    .send({
      operationName: 'customerPinCodeChange',
      variables: { input },
      query,
    });
}

function verifyPin(app, headers, pinCode) {
  const query = `mutation customerPinCodeVerify($input: CustomerPinCodeVerify!){
    customerPinCodeVerify(input: $input)
  }`;

  return request(app.getHttpServer())
    .post('/graphql')
    .set(headers)
    .send({
      operationName: 'customerPinCodeVerify',
      variables: { input: { pinCode: { pinCode } } },
      query,
    });
}
