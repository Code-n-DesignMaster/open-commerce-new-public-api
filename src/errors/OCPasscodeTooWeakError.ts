import { BaseError } from './base.error';

export const OC_PASSCODE_TOO_WEAK_ERROR = 'OC_PASSCODE_TOO_WEAK_ERROR';
export class OCPasscodeTooWeakError extends BaseError {
  constructor() {
    super(
      'This passcode is too weak. Please enter a stronger passcode.',
      OC_PASSCODE_TOO_WEAK_ERROR,
    );
  }
}
