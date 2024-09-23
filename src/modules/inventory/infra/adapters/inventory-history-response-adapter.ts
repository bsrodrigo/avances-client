import {
  InventoryHistory,
  InventoryTransactionType,
  Measurement,
  Product,
} from "@/modules/inventory/models";

export const inventoryHistoryResponseAdapter = (item: any): InventoryHistory =>
  new InventoryHistory({
    product: {
      measurement: {
        acronym: item?.measurement?.acronym,
        description: item?.measurement?.description,
      } as Measurement,
      name: item?.product?.name,
      price: item?.product?.price,
      isActive: !item?.product?.isInactive,
    } as Product,
    priorQuantity: item?.priorQuantity,
    usedQuantity: item?.usedQuantity,
    updatedQuantity: item?.updatedQuantity,
    transactionType: {
      actionType: item?.transactionType?.actionType,
      description: item?.transactionType?.description,
      type: item?.transactionType?.type,
      id: item?.transactionType?._id,
    } as InventoryTransactionType,
    createdAt: item?.createdAt,
  });
