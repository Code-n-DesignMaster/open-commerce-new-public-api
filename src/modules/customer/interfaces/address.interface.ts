import { IGeoLocation } from './geo-location.interface';

export interface IAddress {
  alias: string;
  street1: string;
  street2: string;
  city: string;
  state: string;
  zipCode: string;
  geoLocation: IGeoLocation;
}
