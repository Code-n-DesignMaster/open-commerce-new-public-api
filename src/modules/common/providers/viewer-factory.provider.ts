import { IViewer } from '../interfaces/viewer.interface';
import { VIEWER_FACTORY_TOKEN } from '../constants/common.constant';
import { API_VERIFICATION_GRAPHQL_CLIENT_SERVICE_TOKEN } from '../../graphql-clients/graphql-clients.constants';

export const viewerFactoryProvider = {
  provide: VIEWER_FACTORY_TOKEN,
  useFactory: () => ({
    create(
      apiKey: string,
      deviceId: string,
      osType: string,
      language: string,
      traceId: string,
      deviceIpAddress: string,
      appVersion: string,
    ): IViewer {
      return new Viewer(
        apiKey,
        deviceId,
        osType,
        language,
        traceId,
        deviceIpAddress,
        appVersion,
      );
    },
  }),
  inject: [API_VERIFICATION_GRAPHQL_CLIENT_SERVICE_TOKEN],
};

class Viewer implements IViewer {
  constructor(
    public apiKey: string,
    public deviceId: string,
    public osType: string,
    public language: string,
    public traceId: string,
    public deviceIpAddress: string,
    public appVersion: string,
  ) {}
}
