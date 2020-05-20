import { ApolloError } from 'apollo-server-core';

export const OC_ACCESS_TOKEN_EXPIRED_ERROR = 'OC_ACCESS_TOKEN_EXPIRED_ERROR';
const defaultMessage = 'Expired token';
export class OCAccessTokenExpiredError extends ApolloError {
  constructor(message?: string) {
    super(message || defaultMessage, OC_ACCESS_TOKEN_EXPIRED_ERROR);

    Object.defineProperty(this, 'name', { value: 'OCAccessTokenExpiredError' });
  }
}
