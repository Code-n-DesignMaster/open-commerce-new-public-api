import { BaseError } from './base.error';

export const OC_PASSCODES_MUST_BE_DIFFERENT_ERROR =
  'OC_PASSCODES_MUST_BE_DIFFERENT_ERROR';
export class OCPasscodesMustBeDifferentError extends BaseError {
  constructor() {
    super(
      'New pin code and old pin code can not be the same',
      OC_PASSCODES_MUST_BE_DIFFERENT_ERROR,
    );
  }
}
