import { GeoLocationDto } from './geo-location.dto';
import { OFFER_PAYMENT_TYPE } from '@open-commerce/data-objects';

export class PowercardOfferListDto {
  public storeId: number;
  public epicenter: GeoLocationDto;
  public radius: number;
  public simpleClosest: boolean;
  public emailAddress: string;
  public paymentType: OFFER_PAYMENT_TYPE;
}
