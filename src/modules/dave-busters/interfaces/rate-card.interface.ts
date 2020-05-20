import { IRateCardItem } from './rate-card-item.interface';
import { IRateCardCategory } from './rate-card-category.interface';

export interface IRateCard {
  attractionPrice: number;
  attractionItemList: IRateCardItem[];
  activationFee: number;
  activationItem: IRateCardItem;
  categoryList: IRateCardCategory[];
  menuItemList: IRateCardItem[];
  upSellItemList: IRateCardItem[];

  rateCardHeadingText?: string;
  offerHeadingText?: string;
  offerRateCardSubHeadingText?: string;
  offerCheckoutSubHeadingText?: string;
  offerCheckoutItemText?: string;
  discountPercent?: number;
}
