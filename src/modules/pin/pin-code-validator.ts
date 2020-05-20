import { OCPasscodeTooWeakError } from '../../errors/OCPasscodeTooWeakError';
import { OCPasscodesMustBeDifferentError } from '../../errors/OCPasscodesMustBeDifferentError';

export class PinCodeValidator {
  private blackList = '1234|0000|1111|2222|3333|4444|5555|6666|7777|8888|9999';

  public validate(newPinCode: string, oldPinCode?: string) {
    if (this.blackList.includes(newPinCode)) {
      throw new OCPasscodeTooWeakError();
    }

    if (oldPinCode && newPinCode === oldPinCode) {
      throw new OCPasscodesMustBeDifferentError();
    }
  }
}
