import { ApolloError } from 'apollo-server-core';

export const OC_INAUTH_VALIDATION_ERROR = 'OC_INAUTH_VALIDATION_ERROR';

export class OCInAuthValidationError extends ApolloError {
  constructor(
    message: string = 'Unable to validate device',
    properties?: Record<string, any>,
  ) {
    super(message, OC_INAUTH_VALIDATION_ERROR, properties);

    Object.defineProperty(this, 'name', { value: 'OCInAuthValidationError' });
  }
}
