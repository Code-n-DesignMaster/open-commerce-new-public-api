import { INestApplication } from '@nestjs/common/interfaces';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { assertNoError, isServiceUp } from '@open-commerce/test-utils';
import { AppModule } from '../../../app.module';
import { ILocationConnection } from '../interfaces/location-connection.interface';
import { last } from 'lodash';
import {
  completeRegistrationForCustomer,
  getAccessToken,
} from '../../../../test/helpers';
import { ISchemaConfig } from '../../../config/schema.interface';
import { CONFIG_TOKEN } from '@open-commerce/nestjs-config';

const X_API_KEY = 'S2SI5501q3SeKQR3ZLqpxcrVPuHUAxV0jCPCN8em8QRGoQyt';

const attributes = `
  {
    pageInfo {
      startCursor
      endCursor
    }
    edges {
      cursor
      node {
        brandSpecificLocationId
        address {
          alias
          street1
          street2
          city
          state
          geoLocation {
            latitude
            longitude
          }
        }
        distance
        phoneNumbers {
          phoneType
          phoneNumber
        }
        hoursOfOperationGroup {
          hours {
            genericHoursString
          }
        }
        specialHours
      }
    }
  }`;

describe('Dave Busters Store Locations (e2e)', () => {
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

  afterAll(() => app.close());

  it('can get all store locations', async () => {
    const query = `{
      locations ${attributes}
    }`;

    return request(app.getHttpServer())
      .post('/graphql')
      .send({ operationName: null, variables: {}, query })
      .set(headers)
      .expect(200)
      .expect(res => {
        assertNoError(res);
        const locations: ILocationConnection = res.body.data.locations;
        expect(locations.edges).toBeTruthy();
        expect(locations.edges.length).toBeGreaterThan(0);
        expect(locations.edges[0].node).toBeTruthy();
        expect(locations.edges[0].node.address).toBeTruthy();
        expect(locations.edges[0].node.address.geoLocation).toBeTruthy();
        expect(locations.edges[0].node.brandSpecificLocationId).toBeTruthy();
        expect(locations.edges[0].node.hoursOfOperationGroup).toBeTruthy();
        expect(
          locations.edges[0].node.hoursOfOperationGroup.hours,
        ).toBeTruthy();
        expect(
          locations.edges[0].node.hoursOfOperationGroup.hours.length,
        ).toBeGreaterThan(0);

        expect(locations.edges[0].node.hoursOfOperationGroup).toBeTruthy();
        expect(locations.edges[0].node.phoneNumbers).toBeTruthy();
      });
  });

  it('can fetch a list of nearby store locations', async () => {
    const query = `{
      locations(filter:{
        radius:200,
        geoLocationEquals: {
          latitude:39.956512,
          longitude:-75.160332
        }
      }) ${attributes}
    }`;

    return request(app.getHttpServer())
      .post('/graphql')
      .set(headers)
      .send({ operationName: null, variables: {}, query })
      .expect(200)
      .expect(res => {
        assertNoError(res);

        const locations: ILocationConnection = res.body.data.locations;
        expect(locations.edges).toBeTruthy();
        expect(locations.edges.length).toBeGreaterThan(0);
        expect(locations.edges[0].node).toBeTruthy();
        expect(locations.edges[0].node.address).toBeTruthy();
        expect(locations.edges[0].node.address.geoLocation).toBeTruthy();
        expect(locations.edges[0].node.brandSpecificLocationId).toBeTruthy();
        expect(locations.edges[0].node.hoursOfOperationGroup).toBeTruthy();
        expect(
          locations.edges[0].node.hoursOfOperationGroup.hours,
        ).toBeTruthy();
        expect(
          locations.edges[0].node.hoursOfOperationGroup.hours.length,
        ).toBeGreaterThan(0);

        expect(locations.edges[0].node.hoursOfOperationGroup).toBeTruthy();
        expect(locations.edges[0].node.phoneNumbers).toBeTruthy();
        expect(locations.edges[0].node.distance).not.toBeNull();

        const lastItem = last(locations.edges).node;
        const firstItem = locations.edges[0].node;
        expect(lastItem.distance).toBeGreaterThan(firstItem.distance);
      });
  });
});
