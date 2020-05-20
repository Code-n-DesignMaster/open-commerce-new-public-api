import { INestApplication } from '@nestjs/common/interfaces';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import {
  expectPowercardAttrsToBeDefined,
  expectResponseAttrsToBeDefined,
  getAccessToken,
  createPaymentInstrumentAndReturnUuid,
  X_API_KEY,
  completeRegistrationForCustomer,
  virtualCreatePowercard,
  addFundsToPowercard,
  getRateCard,
} from '../../../../test/helpers';
import { AppModule } from '../../../../src/app.module';
import {
  fragmentPowercard,
  fragmentResponse,
  assertNoError,
} from '@open-commerce/test-utils';
import { isServiceUp } from '@open-commerce/test-utils';
import { POWERCARD_STATUS_TYPE } from '../constants/powercard-status.enum';
import { get } from 'lodash';
import { ISchemaConfig } from '../../../config/schema.interface';
import { CONFIG_TOKEN } from '@open-commerce/nestjs-config';

// const authServiceUri = process.env.REMOTE_SCHEMAS__AUTH_SERVICE_URI;

describe('Dave-Busters powercards', () => {
  let app: INestApplication;
  let accessToken: string;
  let headers: any;

  function buildSuperTest(
    app: INestApplication,
    query: string,
    variables: any = {},
  ): request.Test {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({ operationName: null, query, variables })
      .set(headers);
  }

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
  });

  afterAll(async () => await app.close());

  beforeEach(async () => {
    accessToken = await getAccessToken(app, X_API_KEY);
    headers = {
      'content-type': 'application/json',
      'x-api-key': X_API_KEY,
      authorization: `Bearer ${accessToken}`,
    };

    await completeRegistrationForCustomer(app, headers);
  });

  it('purchasing a virtual powercard returns new powercard', async () => {
    const paymentInstrumentUuid = await createPaymentInstrumentAndReturnUuid();
    const rateCard = await getRateCard(app, headers);

    const query = `
      ${fragmentPowercard}
      mutation {
        powercardVirtualPurchaseCreate(input:{
          storeId: "5",
          rateCardItemIds:[${rateCard.menuItemList[0].itemId}],
          paymentInstrumentUuid:"${paymentInstrumentUuid}",
          paymentInstrumentType: VISA,
          alias:"ryans card",
          country:"USA",
          dollarsPaid:${rateCard.menuItemList[0].price},
        }) {
          powercard {
            ...PowercardFragment
          }
        }
      }`;

    const expectedResponse: object = {
      data: {
        powercardVirtualPurchaseCreate: {
          powercard: {
            isPhysical: false,
            status: 'OPEN',
            cardType: 'POWER',
            cardAlias: 'ryans card',
            videoChips: 0,
            rewardChips: 0,
            attractionChips: 0,
            tickets: 0,
            isRegisteredReward: false,
            easyRechargeEnabled: false,
          },
        },
      },
    };

    return await request(app.getHttpServer())
      .post('/graphql')
      .set(headers)
      .send({ operationName: null, variables: {}, query })
      .expect(res => {
        assertNoError(res);
        expect(res.body).toMatchObject(expectedResponse);

        const powercard =
          res.body.data.powercardVirtualPurchaseCreate.powercard;
        expect(powercard.gameChips).toBeGreaterThan(0);
        expect(powercard.pointsToNextReward).toBeGreaterThan(0);
      })
      .expect(200);
  });

  it('can add a powercard to the wallet of a user and return that data', async () => {
    // TODO: note this is the only known working combination of card number and pin
    // at the time of the writing of this code (4/23/2019)
    const cardNumber = '26312001';
    const pin = 6752;

    const query = `
      ${fragmentPowercard}
      mutation powercardCreate($powercardCreate: PowercardCreate) {
        powercardCreate(input: $powercardCreate) {
          ...PowercardFragment
        }
      }`;

    const variables = {
      powercardCreate: {
        cardNumber,
        alias: 'fave card',
        pin,
      },
    };

    const response = {
      data: {
        powercardCreate: {
          cardNumber,
          status: 'OPEN',
          cardType: 'POWER',
          cardAlias: 'fave card',
          videoChips: 0,
          rewardChips: 0,
          attractionChips: 0,
          tickets: 0,
          easyRechargeEnabled: false,
        },
      },
    };

    return buildSuperTest(app, query, variables)
      .expect(200)
      .expect(res => {
        assertNoError(res);
        expect(res.body).toMatchObject(response);

        const powercard = res.body.data.powercardCreate;
        expect(powercard.uuid).toBeTruthy();
        expect(powercard.imagePack.uuid).toBeTruthy();
        expect(powercard.gameChips).toBeGreaterThan(0);
        expect(powercard.pointsToNextReward).toBeGreaterThan(0);
        expect(powercard.isRegisteredReward).not.toBeNull();
      });
  });

  it('removing a powercard from a wallet returns success response', async () => {
    const powercard = await virtualCreatePowercard(app, headers);

    const query = `
      ${fragmentResponse}
      mutation powercardDelete {
        powercardDelete(
          powercardId:"${powercard.uuid}"
        ) {
          ...ResponseFragment
        }
      }`;

    return request(app.getHttpServer())
      .post('/graphql')
      .send({ operationName: null, variables: {}, query })
      .set(headers)
      .expect(res => {
        assertNoError(res);
      })
      .expect(200)
      .expect(res => {
        expect(res.body.data.powercardDelete).toBeDefined();
        expectResponseAttrsToBeDefined(res.body.data.powercardDelete);
      });
  });

  it.skip('updating a powercard returns updated data', async () => {
    const query = `
      ${fragmentPowercard}
      mutation updatePowercardAttributes {
        updatePowercardAttributes(
          powercardId:"asdfasdfasdfasdfasdfs"
          attributes: {
            cardAlias:"My new alias"
            image:{
              id:1234
              url: "my_url"
              imageType: "MyImageType"
            }
          }
        ) {
          ...PowercardFragment
        }
      }`;

    return request(app.getHttpServer())
      .post('/graphql')
      .send({ operationName: null, variables: {}, query })
      .set(headers)
      .expect(res => {
        assertNoError(res);
      })
      .expect(200)
      .expect(res => {
        expect(res.body.data.updatePowercardAttributes).toBeDefined();
        expectResponseAttrsToBeDefined(res.body.data.updatePowercardAttributes);
      });
  });

  it.skip('getPowercards returns mocked data', async () => {
    const query = `
      ${fragmentPowercard}
      query getPowercards {
        getPowercards {
          ...PowercardFragment
        }
      }`;

    return request(app.getHttpServer())
      .post('/graphql')
      .send({ operationName: null, variables: {}, query })
      .set('x-api-key', X_API_KEY)
      .expect(200)
      .expect(res => {
        assertNoError(res);
        expect(res.body.data.getPowercards.length).toBeDefined();
        expect(res.body.data.getPowercards.length).toBeGreaterThan(0);

        res.body.data.getPowercards.forEach((powercard: any) => {
          expectPowercardAttrsToBeDefined(powercard);
        });
      });
  });

  it('can add funds to an existing powercard', async () => {
    const paymentInstrumentUuid = await createPaymentInstrumentAndReturnUuid();
    const createdPowercard = await virtualCreatePowercard(app, headers);
    const rateCard = await getRateCard(app, headers);

    const query = `
        ${fragmentPowercard}
        mutation {
          powercardFundsAdd(input:{
            uuid:"${createdPowercard.uuid}",
            storeId:5,
            rateCardItemIds:[${rateCard.menuItemList[0].itemId}],
            paymentInstrumentUuid:"${paymentInstrumentUuid}",
            paymentInstrumentType: VISA,
            country:"USA",
            dollarsPaid:${rateCard.menuItemList[0].price}
          }) {
            powercard {
              ...PowercardFragment
            }
          }
        }`;

    const expectedResponse: object = {
      data: {
        powercardFundsAdd: {
          powercard: {
            cardNumber: createdPowercard.cardNumber,
            status: 'OPEN',
            cardType: 'POWER',
            cardAlias: 'ryans card',
            videoChips: 0,
            rewardChips: 0,
            attractionChips: 0,
            tickets: 0,
            isRegisteredReward: false,
            easyRechargeEnabled: false,
          },
        },
      },
    };

    return await request(app.getHttpServer())
      .post('/graphql')
      .set(headers)
      .send({ operationName: null, variables: {}, query })
      .expect(200)
      .expect(res => {
        assertNoError(res);
        expect(res.body).toMatchObject(expectedResponse);
      });
  });

  it('can disable an existing powercard', async () => {
    const createdPowercard = await virtualCreatePowercard(app, headers);
    const status = POWERCARD_STATUS_TYPE.STOLEN;

    const query = `
        mutation {
          powercardDisable(
            id:"${createdPowercard.uuid}",
            reason: ${status},
          ) {
            uuid
            status
          }
        }`;

    return await request(app.getHttpServer())
      .post('/graphql')
      .set(headers)
      .send({ operationName: null, variables: {}, query })
      .expect(200)
      .expect(res => {
        assertNoError(res);
        const powercard = get(res, 'body.data.powercardDisable');
        expect(powercard.uuid).toBe(createdPowercard.uuid);
        expect(powercard.status).toBe(status);
      });
  });

  it('can enable an existing powercard', async () => {
    const createdPowercard = await virtualCreatePowercard(app, headers);
    const query = `
        mutation {
          powercardEnable(
            id:"${createdPowercard.uuid}",
          ) {
            uuid
            status
          }
        }`;

    return await request(app.getHttpServer())
      .post('/graphql')
      .set(headers)
      .send({ operationName: null, variables: {}, query })
      .expect(200)
      .expect(res => {
        assertNoError(res);
        const powercard = get(res, 'body.data.powercardEnable');
        expect(powercard.uuid).toBe(createdPowercard.uuid);
        expect(powercard.status).toBe(POWERCARD_STATUS_TYPE.OPEN);
      });
  });

  // Dave and Buster's currently removed all offers so this is not testable
  // TODO:: Re-enable once Dave and Buster's has added offers again
  it.skip('can get the offer list for a specified store ID', async done => {
    const query = `{
      offerList(input:{
        storeId:5
      }) {
        activationFee
        offerList {
          item {
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
          offerId
          title
          description
          offerAmount
          imageUrl
          validFrom
          validTo
          disclaimer
          termsAndConditions
          autoApply
        }
      }
    }`;

    await request(app.getHttpServer())
      .post('/graphql')
      .set('x-api-key', X_API_KEY)
      .set(headers)
      .send({ operationName: null, variables: {}, query })
      .expect(res => {
        assertNoError(res);
        const { offerList, activationFee } = res.body.data.offerList;
        expect(offerList).toBeTruthy();
        expect(offerList.length).toBeGreaterThan(0);
        const offerListItem = offerList[0];
        expect(offerListItem.autoApply).not.toBeNull();
        expect(offerListItem.description).toBeTruthy();
        expect(offerListItem.disclaimer).toBeTruthy();
        expect(offerListItem.offerId).toBeGreaterThan(0);
        expect(offerListItem.offerAmount).toBeGreaterThan(0);
        expect(offerListItem.termsAndConditions).toBeTruthy();
        expect(offerListItem.title).toBeTruthy();
        expect(offerListItem.validFrom).toBeTruthy();
        expect(offerListItem.validTo).toBeTruthy();
        const offerListItemItem = offerListItem.item;
        expect(offerListItemItem).toBeTruthy();

        expect(offerListItemItem).toBeTruthy();
        expect(offerListItemItem.categoryId).toBeGreaterThan(-1);
        expect(offerListItemItem.chips).toBeGreaterThan(-1);
        expect(offerListItemItem.color).toBeTruthy();
        expect(offerListItemItem.isBestValue).not.toBeNull();
        expect(offerListItemItem.itemId).toBeGreaterThan(-1);
        expect(offerListItemItem.originalPrice).toBeGreaterThan(-1);
        expect(offerListItemItem.price).toBeGreaterThan(-1);
        expect(offerListItemItem.sequence).toBeGreaterThan(-1);
        expect(offerListItemItem.upSellId).toBeGreaterThan(-1);
        expect(activationFee).toBeTruthy();
      })
      .expect(200);
    done();
  });

  it('can get reward history for a user', async done => {
    // Can't test actually creating transaction and setting a reward card due to not being able to verify email address
    const createdPowercard = await virtualCreatePowercard(app, headers);

    await addFundsToPowercard(app, headers, createdPowercard);

    const query = `{
      rewardHistory {
        rewardPoints
        pointsToNextReward
        eligibleRewardCount
        transactions {
          transactionType
          transactionDate
          numberOfPoints
          numberOfChips
          chipBalance
          expirationDate
        }
        lastUpdated
      }
    }`;

    await request(app.getHttpServer())
      .post('/graphql')
      .send({ operationName: null, variables: {}, query })
      .set(headers)
      .expect(res => {
        assertNoError(res);
        const history = res.body.data.rewardHistory;
        expect(history.rewardPoints).toBeDefined();
        expect(history.pointsToNextReward).toBeDefined();
        expect(history.eligibleRewardCount).toBeDefined();
        expect(history.transactions).toBeDefined();
        expect(history.lastUpdated).toBeDefined();
      })
      .expect(200);

    done();
  });
});
