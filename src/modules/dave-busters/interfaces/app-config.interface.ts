import { IBrandAgreement } from './brand-agreement.interface';
import { IBrandCustomerPreference } from './brand-customer-preference.interface';
import { PAYMENT_INSTRUMENT_TYPE } from '../../customer/constants/payment-instrument-type.enum';
import { IPowercardImagePack } from './powercard-image-pack.interface';
import { IBackgroundImage } from './background-image.interface';

export interface IAppConfig {
  backgroundImage: IBackgroundImage;
  powercardImages: IPowercardImagePack[];
  termsConditions: IBrandAgreement;
  privacyPolicy: IBrandAgreement;
  biometricPreference: IBrandCustomerPreference;
  marketingOptInPreference: IBrandCustomerPreference;
  supportedPaymentTypes: PAYMENT_INSTRUMENT_TYPE[];
  supportedApplePayPaymentTypes: PAYMENT_INSTRUMENT_TYPE[];
  supportedGoogleWalletPaymentTypes: PAYMENT_INSTRUMENT_TYPE[];
  enableAppRatingPopup: boolean;
  enableRemovePowercardButton: boolean;
  payAtTable: {
    tip1: string;
    tip2: string;
    tip3: string;
  };
}
