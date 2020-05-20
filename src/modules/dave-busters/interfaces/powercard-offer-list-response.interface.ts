import { IPowercardOffer } from './powercard-offer.interface';
import { IRateCardItem } from './rate-card-item.interface';

export interface IPowercardOfferListResponse {
  readonly activationFee: number;
  readonly activationItem: IRateCardItem;
  readonly offerList: IPowercardOffer[];
}
