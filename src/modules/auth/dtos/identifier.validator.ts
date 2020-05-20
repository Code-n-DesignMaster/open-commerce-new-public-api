import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { OTPChannel } from '../otp-channel.enum';
import { isEmail, isMobilePhone } from 'validator';
import { OCUserInputError } from '../../../errors/OCUserInputError';

@ValidatorConstraint()
export class IdentifierValidatorConstraint
  implements ValidatorConstraintInterface {
  public validate(text: string, validationArguments: ValidationArguments) {
    return this.validateIdentifier(
      validationArguments.value,
      (validationArguments.object as any).channel,
    );
  }

  private validateIdentifier(identifier: string, channel: OTPChannel) {
    const validateMobile = isMobilePhone.bind(
      isMobilePhone,
      identifier,
      'en-US',
    );

    const validateEmail = isEmail.bind(isEmail, identifier);

    switch (channel) {
      case OTPChannel.EMAIL:
        this.ifNotValidThrowError(validateEmail, channel);
        break;
      case OTPChannel.SMS:
      default:
        this.ifNotValidThrowError(validateMobile, channel);
    }
    return true;
  }

  private ifNotValidThrowError(validatorFn, channel) {
    if (!validatorFn()) {
      switch (channel) {
        case OTPChannel.SMS:
          throw this.createError(
            `Invalid phone. Please enter a 10-digit phone number including area code.`,
            {
              identifier: `Invalid value of identifier for channel: ${channel}`,
            },
          );
          break;

        case OTPChannel.EMAIL:
          throw this.createError(`Please enter a valid email address`, {
            identifier: `Invalid value of identifier for channel: ${channel}`,
          });
          break;

        default:
          throw this.createError(
            `Failed validation of identifier with channel: ${channel}`,
            {
              identifier: `Invalid value of identifier for channel: ${channel}`,
            },
          );
          break;
      }
    }
  }

  private createError(
    message: string,
    props: { [key: string]: string },
  ): OCUserInputError {
    return new OCUserInputError(message, props);
  }
}

export function IdentifierValidator(validationOptions?: ValidationOptions) {
  return (object: object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IdentifierValidatorConstraint,
    });
  };
}
