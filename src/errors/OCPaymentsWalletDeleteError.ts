import { ApolloError } from 'apollo-server-core';

export const OC_PAYMENTS_WALLET_DELETE_ERROR =
  'OC_PAYMENTS_WALLET_DELETE_ERROR';

export class OCPaymentsWalletDeleteError extends ApolloError {
  constructor(message = 'An error was produced while wallet was deleting') {
    super(message, OC_PAYMENTS_WALLET_DELETE_ERROR);

    Object.defineProperty(this, 'name', {
      value: 'OCPaymentsWalletDeleteError',
    });
  }
}
