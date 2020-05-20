import { PaymentInstrumentExpirationDto } from './payment-instrument-expiration-date.dto';
import { CustomerAddressUpdateDto } from './customer-address-update.dto';
import { PAYMENT_INSTRUMENT_TYPE } from '../constants/payment-instrument-type.enum';

export class CustomerPaymentInstrumentUpdateDto {
  public readonly alias: string;
  public readonly nonce: string;
  public readonly address: CustomerAddressUpdateDto;
  public readonly paymentType: PAYMENT_INSTRUMENT_TYPE;
  public readonly expiration: PaymentInstrumentExpirationDto;
  public readonly isDefault: boolean;
}
