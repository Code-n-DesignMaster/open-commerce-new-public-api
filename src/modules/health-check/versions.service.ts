import fetch from 'node-fetch';
import { HealthIndicatorResult } from '@nestjs/terminus';
import { version } from '../../version';
import {
  SERVICE_NAME,
  GraphqlServiceDirectory,
} from '@open-commerce/db-internal-service-client';
import { Inject } from '@nestjs/common';
import { SERVICES_DIRECTORY_TOKEN } from './health-check.constants';
const {
  TRANSACTION,
  PAYMENT,
  CUSTOMER,
  AUTH,
  NOTIFICATION,
  PASS_MANAGEMENT,
  DAVE_AND_BUSTERS,
  API_VERIFICATION,
} = SERVICE_NAME;

export class VersionsService {
  constructor(
    @Inject(SERVICES_DIRECTORY_TOKEN)
    private readonly services: GraphqlServiceDirectory,
  ) {}

  public async allServiceVersions(): Promise<HealthIndicatorResult> {
    const powercardVersion = await this.fetchVersionFor(DAVE_AND_BUSTERS);
    const authVersion = await this.fetchVersionFor(AUTH);
    const customerVersion = await this.fetchVersionFor(CUSTOMER);
    const mobilePassVersion = await this.fetchVersionFor(PASS_MANAGEMENT);
    const apiVerificationVersion = await this.fetchVersionFor(API_VERIFICATION);
    const paymentVersion = await this.fetchVersionFor(PAYMENT);
    const transactionVersion = await this.fetchVersionFor(TRANSACTION);
    const notificationVersion = await this.fetchVersionFor(NOTIFICATION);

    return ({
      apiVerification: {
        ...apiVerificationVersion.info,
      },
      auth: {
        ...authVersion.info,
      },
      customer: {
        ...customerVersion.info,
      },
      mobilePass: {
        ...mobilePassVersion.info,
      },
      newPublicApi: {
        ...version,
      },
      notification: {
        ...notificationVersion.info,
      },
      payment: {
        ...paymentVersion.info,
      },
      powercard: {
        ...powercardVersion.info,
      },
      transaction: {
        ...transactionVersion.info,
      },
    } as unknown) as HealthIndicatorResult;
  }

  private async fetchVersionFor(serviceName: SERVICE_NAME) {
    const url = this.services.getServiceUrl(serviceName);

    return fetch(url.replace('graphql', 'health-check'))
      .then(res => res.json())
      .catch(error => {
        return {
          info: {
            status: 'FAIL',
            message: error.message,
          },
        };
      });
  }
}
