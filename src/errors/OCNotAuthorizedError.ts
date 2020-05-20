import { ApolloError } from 'apollo-server-core';

export const OC_NOT_AUTHORIZED_ERROR = 'OC_NOT_AUTHORIZED_ERROR';
const defaultMessage = 'Not authorized';
export class OCNotAuthorizedError extends ApolloError {
  constructor(message?: string) {
    super(message || defaultMessage, OC_NOT_AUTHORIZED_ERROR);

    Object.defineProperty(this, 'name', { value: 'OCNotAuthorizedError' });
  }
}
