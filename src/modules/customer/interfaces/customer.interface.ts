import { IPaymentInstrument } from './payment-instrument.interface';
import { IPowercard } from '../../dave-busters/interfaces/powercard.interface';

export interface ICustomer {
  username: string;
  paymentWallet: IPaymentInstrument[];
  powercardWallet: IPowercard[];
}
