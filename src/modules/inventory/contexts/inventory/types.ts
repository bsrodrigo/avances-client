import {
  Inventory,
  InventoryHistory,
  InventoryTransactionType,
} from "@/modules/inventory/models";

export const FIND_INVENTORY = "FIND_INVENTORY";
export const FIND_INVENTORY_HISTORY = "FIND_INVENTORY_HISTORY";
export const FIND_TRANSACTION_TYPES = "FIND_TRANSACTION_TYPES";

export type InitialState = {
  inventory: Inventory[];
  inventoryHistory: InventoryHistory[];
  transactionTypes: InventoryTransactionType[];
};

type FindInventoryAction = {
  type: typeof FIND_INVENTORY;
  payload: Inventory[];
};

type FindInventoryHistoryAction = {
  type: typeof FIND_INVENTORY_HISTORY;
  payload: InventoryHistory[];
};

type FindTransactionTypesAction = {
  type: typeof FIND_TRANSACTION_TYPES;
  payload: InventoryTransactionType[];
};

export type ActionTypes =
  | FindInventoryAction
  | FindInventoryHistoryAction
  | FindTransactionTypesAction;
