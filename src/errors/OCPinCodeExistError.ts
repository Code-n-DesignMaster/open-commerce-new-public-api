import { ApolloError } from 'apollo-server-core';

export const OC_PIN_CODE_EXIST_ERROR = 'OC_PIN_CODE_EXIST_ERROR';

export class OCPinCodeExistError extends ApolloError {
  constructor(message = 'Customer already has a pin code.') {
    super(message, OC_PIN_CODE_EXIST_ERROR);

    Object.defineProperty(this, 'name', { value: 'OCPinCodeExistError' });
  }
}
