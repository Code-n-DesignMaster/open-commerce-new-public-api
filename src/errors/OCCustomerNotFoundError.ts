import { BaseError } from './base.error';

export const OC_CUSTOMER_NOT_FOUND_ERROR = 'OC_CUSTOMER_NOT_FOUND_ERROR';

export class OCCustomerNotFoundError extends BaseError {
  constructor() {
    super(`Customer not found in database`, OC_CUSTOMER_NOT_FOUND_ERROR);
  }
}
