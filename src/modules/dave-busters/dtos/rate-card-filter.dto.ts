import { GeoLocationDto } from './geo-location.dto';

export class RateCardFilterDto {
  public storeId: number;
  public epicenter: GeoLocationDto;
  public radius: number;
  public simpleClosest: boolean;
  public isNewCustomer: boolean;
}
