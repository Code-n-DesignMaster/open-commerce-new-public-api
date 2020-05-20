import { BaseError } from './base.error';

export const OC_EMAIL_ALREADY_EXISTS_ERROR = 'OC_EMAIL_ALREADY_EXISTS_ERROR';
export class OCEmailAlreadyExistsError extends BaseError {
  constructor() {
    super('email is already registered', OC_EMAIL_ALREADY_EXISTS_ERROR);
  }
}
