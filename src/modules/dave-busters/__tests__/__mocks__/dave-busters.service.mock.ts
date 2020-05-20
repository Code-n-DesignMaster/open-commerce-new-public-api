import { DaveBustersClientService } from '../../services/dave-busters.service';
import { IViewer } from '../../../common/interfaces/viewer.interface';

export class MockDaveBustersClientService extends DaveBustersClientService {
  public powercardCreate = jest.fn().mockReturnValue({
    powercardCreate: {},
  });
  public powercardUpdate = jest.fn().mockReturnValue({
    powercardUpdate: {},
  });
  public powercardDelete = jest.fn().mockReturnValue({
    powercardDelete: {},
  });
}

export const mockDaveBustersClientService = new MockDaveBustersClientService(
  null,
  null,
);

export const mockClientFactory = {
  create: (arg: any) => {
    return mockDaveBustersClientService;
  },
};

export const mockViewer: IViewer = {
  apiKey: 'testApiKey',
  verifyApiKey: async () => Promise.resolve(null),
};
