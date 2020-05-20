import { ApolloError } from 'apollo-server-core';

export const OC_INVALID_ACCESS_TOKEN_ERROR = 'OC_INVALID_ACCESS_TOKEN_ERROR';
const defaultMessage = 'Invalid access token';
export class OCInvalidAccessTokenError extends ApolloError {
  constructor(message?: string) {
    super(message || defaultMessage, OC_INVALID_ACCESS_TOKEN_ERROR);

    Object.defineProperty(this, 'name', { value: 'OCInvalidAccessTokenError' });
  }
}
