import { PAYMENT_INSTRUMENT_TYPE } from '../../customer/constants/payment-instrument-type.enum';

export class PowercardFundsAddDto {
  public uuid!: string;
  public storeId!: number;
  public rateCardItemIds!: number[];
  public offerId: number;
  public paymentInstrumentUuid!: string;
  public country!: string;
  public dollarsPaid!: number;
  public easyRechargeEnabled: boolean;
  public emailAddress: string;
  public nonce: string;
  public paymentInstrumentType: PAYMENT_INSTRUMENT_TYPE;
  public displayName: string;
  public networkName: string;
}
