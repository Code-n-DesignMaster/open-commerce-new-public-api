import { GeoLocationUpdateDto } from './geo-location-update.dto';

export class CustomerAddressUpdateDto {
  public readonly alias: string;
  public readonly street1: string;
  public readonly street2: string;
  public readonly city: string;
  public readonly state: string;
  public readonly zipCode: string;
  public readonly geoLocation: GeoLocationUpdateDto;
}
