export interface IRateCardItem {
  itemId: number;
  categoryId: number;
  chips: number;
  price: number;
  originalPrice: number;
  sequence: number;
  isBestValue: boolean;
  upSellId: number;
  color: string;
}
