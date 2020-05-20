import { BaseError } from './base.error';

export const OC_PAY_AT_TABLE_INVALID_RATING_ERROR =
  'OC_PAY_AT_TABLE_INVALID_RATING_ERROR';
export class OCPayAtTableInvalidRatingError extends BaseError {
  constructor() {
    super('Invalid rating payload.', OC_PAY_AT_TABLE_INVALID_RATING_ERROR);
  }
}
