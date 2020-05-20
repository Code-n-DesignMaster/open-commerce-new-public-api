import { PaymentInstrumentExpirationDto } from './payment-instrument-expiration-date.dto';
import { CustomerAddressCreateDto } from './customer-address-create.dto';
import { PAYMENT_INSTRUMENT_TYPE } from '../constants/payment-instrument-type.enum';
import { NameDto } from './name.dto';

export class CustomerPaymentInstrumentCreateDto {
  public readonly alias: string;
  public readonly accountNumber: string;
  public readonly nonce: string;
  public readonly name: NameDto;
  public readonly address: CustomerAddressCreateDto;
  public readonly paymentType: PAYMENT_INSTRUMENT_TYPE;
  public readonly expiration: PaymentInstrumentExpirationDto;
}
