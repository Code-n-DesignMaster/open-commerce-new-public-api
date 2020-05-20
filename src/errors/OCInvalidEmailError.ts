import { BaseError } from './base.error';

export const OC_INVALID_EMAIL_ERROR = 'OC_INVALID_EMAIL_ERROR';
export class OCInvalidEmailError extends BaseError {
  constructor() {
    super('Please enter a valid email address', OC_INVALID_EMAIL_ERROR);
  }
}
