import { BaseError } from './base.error';

export const OC_CUSTOMER_NOTIFICATION_TOKEN_REGISTER_ERROR =
  'OC_CUSTOMER_NOTIFICATION_TOKEN_REGISTER_ERROR';

export class OCCustomerNotificationTokenRegisterError extends BaseError {
  constructor(notificationServiceError: string) {
    super(
      `Could not register new customer notification token. Issue is probably 
      with notification service. Message from notification service: ${notificationServiceError}`,
      OC_CUSTOMER_NOTIFICATION_TOKEN_REGISTER_ERROR,
    );
  }
}
