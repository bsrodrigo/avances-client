import { InventoryTransactionType } from "@/modules/inventory/models";

export const transactionTypesResponseAdapter = (
  item: any
): InventoryTransactionType =>
  new InventoryTransactionType({
    actionType: item?.actionType,
    description: item?.description,
    type: item?.type,
    id: item?._id,
  });
