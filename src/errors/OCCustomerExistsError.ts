import { ApolloError } from 'apollo-server-core';

export const OC_CUSTOMER_EXISTS_ERROR = 'OC_CUSTOMER_EXISTS_ERROR';

export class OCCustomerExistsError extends ApolloError {
  constructor(message = 'Customer already exists with such username.') {
    super(message, OC_CUSTOMER_EXISTS_ERROR);

    Object.defineProperty(this, 'name', { value: 'OCCustomerExistsError' });
  }
}
