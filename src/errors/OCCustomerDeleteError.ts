import { BaseError } from './base.error';

export const OC_CUSTOMER_DELETE_ERROR = 'OC_CUSTOMER_DELETE_ERROR';

export class OCCustomerDeleteError extends BaseError {
  constructor() {
    super(`Unable to delete customer`, OC_CUSTOMER_DELETE_ERROR);
  }
}
