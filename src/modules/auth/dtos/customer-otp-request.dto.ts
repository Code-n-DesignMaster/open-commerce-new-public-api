import { OTPChannel } from '../otp-channel.enum';
import { IdentifierValidator } from './identifier.validator';

export class CustomerOtpRequestDto {
  @IdentifierValidator()
  public identifier: string;

  public channel: OTPChannel;
}
