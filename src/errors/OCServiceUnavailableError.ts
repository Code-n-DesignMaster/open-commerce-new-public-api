import { BaseError } from './base.error';

export const OC_SERVICE_UNAVAILABLE_ERROR = 'OC_SERVICE_UNAVAILABLE_ERROR';
const message = `Failed to communicate with one or more internal services`;
const code = OC_SERVICE_UNAVAILABLE_ERROR;

// NOTE: this error is thrown from a property resolver, so we have
// to pass message and code as JSON in order to prevent the code
// from being stripped by Apollo when it becomes a graphql error.
export class OCServiceUnavailableError extends BaseError {
  constructor() {
    super(
      JSON.stringify({
        message,
        code,
      }),
      code,
    );
  }
}
