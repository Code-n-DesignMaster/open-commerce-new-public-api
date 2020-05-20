import { OCPasscodeTooWeakError } from '../../../errors/OCPasscodeTooWeakError';
import { OCPasscodesMustBeDifferentError } from '../../../errors/OCPasscodesMustBeDifferentError';
import { PinCodeValidator } from '../pin-code-validator';

describe('Pin code validator', () => {
  const validator = new PinCodeValidator();

  it('value 0123 till 7890 should be invalid', () => {
    try {
      validator.validate('1234');
    } catch (error) {
      expect(error).toBeInstanceOf(OCPasscodeTooWeakError);
    }
  });

  it('value same 4 digits should be invalid', () => {
    for (let i = 0; i < 10; i++) {
      try {
        const value = i.toString().repeat(4);
        // tslint:disable-next-line: no-console
        console.log('testing value ' + value);
        validator.validate(value);
      } catch (error) {
        expect(error).toBeInstanceOf(OCPasscodeTooWeakError);
      }
    }
  });

  it('value 1222 should be valid', () => {
    expect(validator.validate('1222')).toBeUndefined();
  });

  it('random 4 digits should be valid', () => {
    const value = Math.random()
      .toString()
      .slice(2, 6);
    expect(validator.validate(value)).toBeUndefined();
  });

  it('throws error if old and new pin code do not match', () => {
    try {
      validator.validate('1243', '1243');
    } catch (error) {
      expect(error).toBeInstanceOf(OCPasscodesMustBeDifferentError);
    }
  });
});
