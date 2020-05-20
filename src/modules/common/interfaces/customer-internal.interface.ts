import { ITransactionConnection } from '@open-commerce/data-objects';

export interface ICustomerInternal {
  id: number;
  uuid: string;
  username: string;
  defaultLocationId: number;
  identityProviderId: string;
  name: object;
  email: string;
  addresses: [object];
  paymentWallet: [object];
  loyaltyWallet: [object];
  powercardWallet: [object];
  demographics: object;
  phoneNumbers: [object];
  status: CUSTOMER_STATUS;
  agreements: [object];
  brands: [object];
  preferences: [object];
  devices: [object];
  privacyGovernance: string;
  isNewCustomer: boolean;
  transactions?: ITransactionConnection;
  shouldShowAppRatingPopup: boolean;
  tappedNfc: boolean;

  loginHistory(
    first: number,
    after: string,
    last: number,
    before: string,
    filter: object,
  ): object;
}

enum CUSTOMER_STATUS {
  ACTIVE = 'ACTIVE',
  BLACKLISTED = 'BLACKLISTED',
  FLAGGED_FOR_REVIEW = 'FLAGGED_FOR_REVIEW',
  INACTIVE = 'INACTIVE',
  SIGNED_UP = 'SIGNED_UP',
  SIGNUP_NOT_COMPLETED = 'SIGNUP_NOT_COMPLETED',
  WAITING_FOR_VERIFICATION = 'WAITING_FOR_VERIFICATION',
  WHITELISTED = 'WHITELISTED',
}
