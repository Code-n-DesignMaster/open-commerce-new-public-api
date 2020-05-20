import assert = require('assert');
import { get } from 'lodash';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { PaymentServiceGraphqlClient } from '@open-commerce/internal-services-api';
import uuidv4 = require('uuid/v4');
import { IRateCard, IPowercard } from '@open-commerce/data-objects';
import { fragmentPowercard, assertNoError } from '@open-commerce/test-utils';
import { IRateCardItem } from '../src/modules/dave-busters/interfaces/rate-card-item.interface';
import { IRateCardCategory } from '../src/modules/dave-busters/interfaces/rate-card-category.interface';
export {
  assertErrors,
  assertNoError,
  isServiceUp,
} from '@open-commerce/test-utils';

export const X_API_KEY = 'S2SI5501q3SeKQR3ZLqpxcrVPuHUAxV0jCPCN8em8QRGoQyt';

export const formatResponse = response => {
  return JSON.stringify(JSON.parse(response)) + '\n';
};

export const errorMessageFrom = res => get(res, 'body.errors.0.message');

export const expectString = (str: any): void => {
  expect(str).toBeDefined();
};
export const expectPowercardAttrsToBeDefined = (powercardData: any): void => {
  expect(powercardData.id).not.toBeNull();
  expect(powercardData.cardNumber).not.toBeNull();
  expect(powercardData.status).not.toBeNull();
  expect(powercardData.cardType).not.toBeNull();
  expect(powercardData.cardAlias).not.toBeNull();
  expectPowercardImageAttrsToBeDefined(powercardData.imagePack);
};

export const expectPowercardImageAttrsToBeDefined = (
  powercardImageData: any,
): void => {
  expect(powercardImageData.uuid).not.toBeNull();
  expect(powercardImageData.fullsizeImages).not.toBeNull();
  expect(powercardImageData.thumbnailImages).not.toBeNull();
};

export const expectResponseAttrsToBeDefined = (responseData: any): void => {
  expect(responseData.status).not.toBeNull();
  expect(responseData.success).not.toBeNull();
};

export const expectCustomerAttrsToBeDefined = (customerData: any): void => {
  const testKeys = ['username'];

  testKeys.forEach(key => expectString(customerData[key]));
  expectPersonNameAttrsToBeDefined(customerData.name);
};

export const expectPersonNameAttrsToBeDefined = (personNameData: any): void => {
  const testKeys = ['title', 'first', 'middle', 'last', 'suffix'];

  testKeys.forEach(key => expectString(personNameData[key]));
};

export async function getAccessToken(app: INestApplication, xApiKey: string) {
  const otp = Math.random()
    .toString()
    .substring(2, 8);
  const { session } = await requestOtp(app, xApiKey, otp);

  return getAccessTokenByOtp(app, xApiKey, otp, session);
}

async function requestOtp(app, xApiKey, otp) {
  const otpQuery = `mutation customerOTPRequest($input: CustomerOTPRequest!, $inAuthLog: String!){
    customerOTPRequest(input: $input, inAuthLog: $inAuthLog){
      session
    }
  }`;

  const otpResponse: any = await request(app.getHttpServer())
    .post('/graphql')
    .set({ 'x-api-key': xApiKey })
    .send({
      operationName: 'customerOTPRequest',
      variables: { input: { channel: 'SMS', identifier: `+15555${otp}` } },
      query: otpQuery,
    });
  const data = get(otpResponse, 'body.data.customerOTPRequest');
  assert(data, new Error('Can not request otp'));

  return data;
}

async function getAccessTokenByOtp(app, xApiKey, otp, session) {
  const loginQuery = `mutation customerLoginByOTP($input: OTP!, $inAuthRegistrationPayload: String!) {
    customerLoginByOTP(input: $input, inAuthRegistrationPayload: $inAuthRegistrationPayload) {
      ... on CustomerOTPPayload {
        session
      }
      ... on AuthTokens {
        tokens {
          accessToken
          refreshToken
        }
        inAuthDeviceResponse
      }
    }
  }`;

  const loginResponse: any = await request(app.getHttpServer())
    .post('/graphql')
    .set({ 'x-api-key': xApiKey })
    .send({
      operationName: 'customerLoginByOTP',
      variables: { input: { otp, session } },
      query: loginQuery,
    });

  const accessToken = get(
    loginResponse,
    'body.data.customerLoginByOTP.tokens.accessToken',
  );
  assert(accessToken, new Error('Can not login by otp'));

  return accessToken;
}

export const createPaymentInstrumentAndReturnUuid = async (
  nonce: string = 'fake-valid-visa-nonce',
) => {
  const result = await new PaymentServiceGraphqlClient().braintreePaymentInstrumentCreateFromPaymentTokenAndAddToWallet(
    uuidv4(),
    nonce,
    '12345',
  );

  return result.data.uuid;
};

export const getRateCard = async (
  app: INestApplication,
  headers: any,
): Promise<IRateCard> => {
  let rateCard: IRateCard;

  const query = `{
      getRateCards(input:{
        storeId:5
      }) {
        attractionPrice
        activationItem {
          itemId
          categoryId
          chips
          price
          originalPrice
          sequence
          isBestValue
          upSellId
          color
        }
        attractionItemList {
          itemId
          categoryId
          chips
          originalPrice
          price
          sequence
          isBestValue
          upSellId
          color
        }
        activationFee
        activationItem {
          itemId
          categoryId
          chips
          originalPrice
          price
          sequence
          isBestValue
          upSellId
          color
        }
        categoryList {
          categoryId
          label
          sequence
          color
        }
        menuItemList {
          itemId
          categoryId
          chips
          originalPrice
          price
          sequence
          isBestValue
          upSellId
          color
        }
        upSellItemList {
          itemId
          categoryId
          chips
          originalPrice
          price
          sequence
          isBestValue
          upSellId
          color
        }
      }
    }`;

  const expectItemAttributes = (item: IRateCardItem) => {
    expect(item).toBeTruthy();
    expect(item.categoryId).toBeGreaterThan(-1);
    expect(item.chips).toBeGreaterThan(-1);
    expect(item.color).toBeTruthy();
    expect(item.isBestValue).not.toBeNull();
    expect(item.itemId).toBeGreaterThan(-1);
    expect(item.originalPrice).toBeGreaterThan(-1);
    expect(item.price).toBeGreaterThan(-1);
    expect(item.sequence).toBeGreaterThan(-1);
    expect(item.upSellId).toBeGreaterThan(-1);
  };

  const expectCategoryItemAttributes = (item: IRateCardCategory) => {
    expect(item).toBeTruthy();
    expect(item.categoryId).toBeGreaterThan(-1);
    expect(item.color).toBeTruthy();
    expect(item.label).toBeTruthy();
    expect(item.sequence).toBeGreaterThan(-1);
  };

  const expectItemListAttributes = (list: IRateCardItem[]) => {
    expect(list).toBeTruthy();
    expect(list.length).toBeGreaterThan(0);
    expectItemAttributes(list[0]);
  };

  await request(app.getHttpServer())
    .post('/graphql')
    .send({ operationName: null, variables: {}, query })
    .set(headers)
    .expect(200)
    .expect(res => {
      assertNoError(res);
      rateCard = res.body.data.getRateCards;
      expect(rateCard.activationFee).toBeGreaterThan(-1);
      expect(rateCard.attractionPrice).toBeGreaterThan(-1);
      const item = rateCard.activationItem;
      expectItemAttributes(item);
      const categoryList = rateCard.categoryList;
      expect(categoryList).toBeTruthy();
      expect(categoryList.length).toBeGreaterThan(0);
      expectCategoryItemAttributes(categoryList[0]);
      const attractionItemList = rateCard.attractionItemList;
      expectItemListAttributes(attractionItemList);
      const menuItemList = rateCard.menuItemList;
      expectItemListAttributes(menuItemList);
      const upSellItemList = rateCard.upSellItemList;
      if (upSellItemList.length > 0) {
        expectItemListAttributes(upSellItemList);
      }
    });

  return rateCard;
};

export const virtualCreatePowercard = async (
  app: INestApplication,
  headers: any,
): Promise<IPowercard> => {
  let createdPowercard: IPowercard;

  const paymentInstrumentUuid = await createPaymentInstrumentAndReturnUuid();
  const rateCard = await getRateCard(app, headers);

  const createQuery = `
      ${fragmentPowercard}
      mutation {
        powercardVirtualPurchaseCreate(input:{
          storeId: "5",
          rateCardItemIds:[${rateCard.menuItemList[0].itemId}],
          paymentInstrumentUuid:"${paymentInstrumentUuid}",
          paymentInstrumentType:VISA,
          alias:"ryans card",
          country:"USA",
          dollarsPaid:${rateCard.menuItemList[0].price},
          offerId: 1,
        }) {
          powercard {
            ...PowercardFragment
          }
        }
      }`;

  await request(app.getHttpServer())
    .post('/graphql')
    .set(headers)
    .send({ operationName: null, variables: {}, query: createQuery })
    .expect(200)
    .expect(res => {
      assertNoError(res);
      createdPowercard = res.body.data.powercardVirtualPurchaseCreate.powercard;
      expect(createdPowercard.uuid).toBeTruthy();
    });

  return createdPowercard;
};

export const updatePowercard = async (
  app: INestApplication,
  headers: any,
  powercardId: string,
  powercard: IPowercard,
) => {
  // This ignores imagePack
  const { cardAlias, isRegisteredReward, easyRechargeEnabled } = powercard;

  const powercardUpdateQuery = `
      mutation powercardUpdate($powercardId: ID!, $attributes: PowercardAttributesUpdate!) {
        powercardUpdate(powercardId: $powercardId, attributes: $attributes) {
          uuid
          cardNumber
          isRegisteredReward
        }
      }`;

  const variables = {
    powercardId,
    attributes: {
      alias: cardAlias,
      isRegisteredReward,
      easyRechargeEnabled,
    },
  };

  const response = await request(app.getHttpServer())
    .post('/graphql')
    .set(headers)
    .send({
      operationName: null,
      variables,
      query: powercardUpdateQuery,
    })
    .expect(res => {
      assertNoError(res);
    });

  return get(response, 'body.data.powercardUpdate') as IPowercard;
};

export const setRewardCard = async (
  app: INestApplication,
  headers: any,
  powercard: IPowercard,
) => {
  powercard.isRegisteredReward = true;

  // Make this the existing rewards card, this should be set to false when we choose a new one
  return await updatePowercard(app, headers, powercard.uuid, powercard);
};

export const addFundsToPowercard = async (
  app: INestApplication,
  headers: any,
  powercard: IPowercard,
) => {
  const paymentInstrumentUuid = await createPaymentInstrumentAndReturnUuid();
  const rateCard = await getRateCard(app, headers);

  const query = `mutation {
      powercardFundsAdd(input:{
        uuid:"${powercard.uuid}",
        storeId:5,
        rateCardItemIds:[${rateCard.menuItemList[0].itemId}],
        paymentInstrumentUuid:"${paymentInstrumentUuid}",
        paymentInstrumentType:VISA,
        country:"USA",
        dollarsPaid:${rateCard.menuItemList[0].price},
      }) {
        powercard {
          cardNumber
          status
        }
      }
    }`;

  await request(app.getHttpServer())
    .post('/graphql')
    .set(headers)
    .send({ operationName: null, variables: {}, query })
    .expect(res => {
      assertNoError(res);
    })
    .expect(200);
};

export const completeRegistrationForCustomer = async (
  app: INestApplication,
  headers: any,
  email: string = 'test@email.com',
) => {
  let query = `query currentCustomer {
    currentCustomer {
      email
      privacyGovernance
      hasPasscode
      status
    }
  }`;

  let currentCustomer: any;
  await request(app.getHttpServer())
    .post('/graphql')
    .set('x-api-key', X_API_KEY)
    .set(headers)
    .send({ operationName: null, variables: {}, query })
    .expect(res => {
      assertNoError(res);
      currentCustomer = res.body.data.currentCustomer;
    })
    .expect(200);

  if (currentCustomer.status === 'SIGNUP_NOT_COMPLETED') {
    // if current customer is not yet regisetered, get the uuids of the privacy policy and terms and conditions
    // for inclusion in the completeRegistration call
    const { privacyUuid, termsUuid } = await agreementUuids(app, headers);

    query = `mutation completeRegistration($input: CustomerRegistrationComplete!) {
      customerRegistrationComplete(input: $input) {
        email
        privacyGovernance
        hasPasscode
      }
    }`;

    const variables = {
      input: {
        email,
        // name: {
        //  first: 'ryan',
        // },
        demographics: {
          birthday: '1977-12-14',
        },
        defaultLocationId: 5,
        acceptAgreement: [termsUuid, privacyUuid],
      },
    };

    await request(app.getHttpServer())
      .post('/graphql')
      .set('x-api-key', X_API_KEY)
      .set(headers)
      .send({ operationName: null, variables, query })
      .expect((res: any) => {
        assertNoError(res);
        expect(res.body.data.customerRegistrationComplete.email).toBe(email);
      })
      .expect(200);
  }
};

export const agreementUuids = async (app: INestApplication, headers: any) => {
  const query = `query appConfig {
      appConfig {
        privacyPolicy {
          uuid
        }
        termsConditions {
          uuid
        }
      }
    }`;

  let appConfig: any;
  await request(app.getHttpServer())
    .post('/graphql')
    .set('x-api-key', X_API_KEY)
    .set(headers)
    .send({ operationName: null, variables: {}, query })
    .expect(res => {
      assertNoError(res);
      appConfig = res.body.data.appConfig;
    })
    .expect(200);

  const privacyUuid = appConfig.privacyPolicy.uuid;
  const termsUuid = appConfig.termsConditions.uuid;

  return {
    privacyUuid,
    termsUuid,
  };
};
