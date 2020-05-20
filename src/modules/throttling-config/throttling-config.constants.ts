export const THROTTLING_CONFIG_REPO_TOKEN = 'THROTTLING_CONFIG_REPO_TOKEN';
export const THROTTLING_CONFIG_SERVICE_TOKEN =
  'THROTTLING_CONFIG_SERVICE_TOKEN';

export enum ThrottlingConfig {
  CustomerPaymentInstrumentCreate,
  CustomerOTPRequest,
  CustomerUsernameChange,
  PinCodeVerify,
}
