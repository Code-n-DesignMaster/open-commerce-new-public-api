import { ApolloError } from 'apollo-server-core';

export const OC_PIN_CODE_DOES_NOT_EXIST_ERROR =
  'OC_PIN_CODE_DOES_NOT_EXIST_ERROR';

export class OCPinCodeDoesNotExistError extends ApolloError {
  constructor(message = 'Customer has no pin code.') {
    super(message, OC_PIN_CODE_DOES_NOT_EXIST_ERROR);

    Object.defineProperty(this, 'name', {
      value: 'OCPinCodeDoesNotExistError',
    });
  }
}
