import { ApolloError } from 'apollo-server-core';

export const OC_THROTTLING_ERROR = 'OC_THROTTLING_ERROR';

export class OCThrottlingError extends ApolloError {
  constructor(message: string) {
    super(message, OC_THROTTLING_ERROR);

    Object.defineProperty(this, 'name', { value: 'OCThrottlingError' });
  }
}
