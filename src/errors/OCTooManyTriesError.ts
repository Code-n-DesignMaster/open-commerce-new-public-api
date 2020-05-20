import { ApolloError } from 'apollo-server-core';

export const OC_TOO_MANY_TRIES_ERROR = 'OC_TOO_MANY_TRIES_ERROR';
export class OCTooManyTriesError extends ApolloError {
  constructor() {
    super('Too many tries to verify phone number', OC_TOO_MANY_TRIES_ERROR);

    Object.defineProperty(this, 'name', { value: 'OCTooManyTriesError' });
  }
}
