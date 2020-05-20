import { PAYMENT_INSTRUMENT_TYPE } from '../../customer/constants/payment-instrument-type.enum';

export class VirtualPowercardCreateDto {
  public storeId: number;
  public rateCardItemIds!: number[];
  public paymentInstrumentUuid!: string;
  public alias: string;
  public imagePackUuid: string;
  public country!: string;
  public easyRechargeEnabled: boolean;
  public dollarsPaid!: number;
  public offerId: number;
  public nonce: string;
  public paymentInstrumentType: PAYMENT_INSTRUMENT_TYPE;
  public displayName: string;
  public networkName: string;
}
