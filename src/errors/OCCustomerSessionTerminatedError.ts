import { ApolloError } from 'apollo-server-core';

export const OC_CUSTOMER_SESSION_TERMINATED_ERROR =
  'OC_CUSTOMER_SESSION_TERMINATED_ERROR';

export class OCCustomerSessionTerminatedError extends ApolloError {
  constructor(message: string) {
    super(message, OC_CUSTOMER_SESSION_TERMINATED_ERROR);

    Object.defineProperty(this, 'name', {
      value: 'OCCustomerSessionTerminatedError',
    });
  }
}
