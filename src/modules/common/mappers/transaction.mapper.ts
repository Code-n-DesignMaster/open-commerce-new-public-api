import {
  ITransaction,
  ITransactionItem,
  TRANSACTION_ITEM_TYPE,
} from '@open-commerce/data-objects';

const DESCRIPTION_MAPPING = {
  CHIP: 'Chip',
  ATTRACTION: 'VR Play',
  ACTIVATION: 'Card Activation Fee',
};

export class TransactionReceiptMapper {
  public static mapTransactionToDisplayTransaction(
    transaction: ITransaction,
  ): ITransaction {
    if (transaction.items) {
      transaction.items.map(item => this.mapItemToDisplayItem(item));
    }

    return transaction;
  }

  public static mapItemToDisplayItem(item: ITransactionItem): ITransactionItem {
    item.itemDescription = this.mapItemDescription(
      item.itemType,
      item.itemDescription,
      item.qty,
    );

    return item;
  }

  public static mapItemDescription(
    itemType: TRANSACTION_ITEM_TYPE,
    itemDescription: string,
    qty: number,
  ) {
    let mappedItemDescription =
      DESCRIPTION_MAPPING[itemDescription] || itemDescription;

    // Only add qty based prefix/suffix if this is chips or VR plays
    if (!['ACTIVATION', 'TIP', 'TENDER'].includes(itemType)) {
      // Prefix with qty amount and add trailing 's' if appropriate
      mappedItemDescription =
        qty + ' ' + mappedItemDescription + (qty > 1 ? 's' : '');
    }

    return mappedItemDescription;
  }
}
