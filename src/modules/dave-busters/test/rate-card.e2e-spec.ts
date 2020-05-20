import { INestApplication } from '@nestjs/common/interfaces';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import {
  assertNoError,
  completeRegistrationForCustomer,
  getAccessToken,
  isServiceUp,
} from '../../../../test/helpers';
import { AppModule } from '../../../app.module';
import { IRateCard } from '../interfaces/rate-card.interface';
import { IRateCardItem } from '../interfaces/rate-card-item.interface';
import { IRateCardCategory } from '../interfaces/rate-card-category.interface';
import { ISchemaConfig } from '../../../config/schema.interface';
import { CONFIG_TOKEN } from '@open-commerce/nestjs-config';

const X_API_KEY = 'S2SI5501q3SeKQR3ZLqpxcrVPuHUAxV0jCPCN8em8QRGoQyt';

describe('Dave Busters Rate Card GraphQL (e2e)', () => {
  let app: INestApplication;
  let accessToken: string;
  let headers: any;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const config: ISchemaConfig = moduleFixture.get(CONFIG_TOKEN);
    const authServiceUri = config.authService.remoteSchemaUri;
    // const authServiceUri = process.env.REMOTE_SCHEMAS__AUTH_SERVICE_URI;

    // make sure required services are up
    const authServiceIsDown = !(await isServiceUp(authServiceUri));
    if (authServiceIsDown) {
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

    await completeRegistrationForCustomer(app, headers);
  });

  afterAll(async () => await app.close());

  it('can get rate card data', async done => {
    const query = `{
      getRateCards(input:{
        storeId:81,
        epicenter:{
          latitude:23,
          longitude:34,
        },
        radius:23.4,
        simpleClosest:true
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

    return request(app.getHttpServer())
      .post('/graphql')
      .send({ operationName: null, variables: {}, query })
      .set(headers)
      .expect(200)
      .expect(res => {
        assertNoError(res);
        const rateCard: IRateCard = res.body.data.getRateCards;
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
        done();
      });
  });
});

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
