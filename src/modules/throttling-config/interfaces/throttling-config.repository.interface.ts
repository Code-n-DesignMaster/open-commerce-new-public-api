import { IThrottlingConfig } from '../interfaces/throttling-config.interface';
import { ThrottlingConfig } from '../throttling-config.constants';

export interface IThrottlingConfigRepository {
  get(key: ThrottlingConfig): Promise<IThrottlingConfig>;
}
