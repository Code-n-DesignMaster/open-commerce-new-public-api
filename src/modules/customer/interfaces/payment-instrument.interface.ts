import { IAddress } from './address.interface';
import { PAYMENT_INSTRUMENT_TYPE } from '../constants/payment-instrument-type.enum';
import { PAYMENT_INSTRUMENT_STATUS } from '../constants/payment-instrument-status.enum';
import { IPaymentProvider } from './payment-provider.interface';
import { IPaymentInstrumentExpiration } from './payment-instrument-expiration-date.dto';

export interface IPaymentInstrument {
  uuid: string;
  alias: string;
  providerNickName: string;
  accountNumber: string;
  address: IAddress;
  paymentType: PAYMENT_INSTRUMENT_TYPE;
  expiration: IPaymentInstrumentExpiration;
  status: PAYMENT_INSTRUMENT_STATUS;
  isDefault: boolean;
  displayNumber: string;
  paymentProvider: IPaymentProvider;
}
