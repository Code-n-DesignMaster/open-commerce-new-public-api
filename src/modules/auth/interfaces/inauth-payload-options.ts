import { IAuth } from '../../common/interfaces/auth.interface';

export interface IInAuthPayloadOptions {
  auth?: IAuth;
  deviceId: string;
  deviceIpAddress: string;
  transactionId: string;
  inAuthLogPayload: string;
}
