import { ThrottlingConfig } from '../throttling-config.constants';
import { IThrottlingConfig } from './throttling-config.interface';

export interface IThrottlingConfigService {
  get(throttlingKey: ThrottlingConfig): Promise<IThrottlingConfig>;
}
