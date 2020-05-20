import { ApolloError } from 'apollo-server-core';

export const OC_PIN_CODE_UPDATE_ERROR = 'OC_PIN_CODE_UPDATE_ERROR';

export class OCPinCodeUpdateError extends ApolloError {
  constructor(message = 'The old pin is not valid') {
    super(message, OC_PIN_CODE_UPDATE_ERROR);

    Object.defineProperty(this, 'name', { value: 'OCPinCodeUpdateError' });
  }
}
