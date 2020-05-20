import { BaseError } from './base.error';

export const OC_INVALID_PHONE_NUMBER_ERROR = 'OC_INVALID_PHONE_NUMBER_ERROR';
export class OCInvalidPhoneNumberError extends BaseError {
  constructor() {
    super('Please enter a valid phone number', OC_INVALID_PHONE_NUMBER_ERROR);
  }
}
