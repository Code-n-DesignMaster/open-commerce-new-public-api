import { ApolloError } from 'apollo-server-core';

export const OC_INVALID_REFRESH_TOKEN_ERROR = 'OC_INVALID_REFRESH_TOKEN_ERROR';

const defaultMessage = 'Invalid refresh token';
export class OCInvalidRefreshTokenError extends ApolloError {
  constructor(message?: string) {
    super(message || defaultMessage, OC_INVALID_REFRESH_TOKEN_ERROR);

    Object.defineProperty(this, 'name', {
      value: 'OCInvalidRefreshTokenError',
    });
  }
}
