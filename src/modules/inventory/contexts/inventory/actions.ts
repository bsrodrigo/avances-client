import {
  Inventory,
  InventoryHistory,
  InventoryTransactionType,
} from "@/modules/inventory/models";
import {
  ActionTypes,
  FIND_INVENTORY,
  FIND_INVENTORY_HISTORY,
  FIND_TRANSACTION_TYPES,
} from "./types";

export function fetchFindInventory(payload: Inventory[]): ActionTypes {
  return { type: FIND_INVENTORY, payload };
}

export function fetchFindInventoryHistory(
  payload: InventoryHistory[]
): ActionTypes {
  return { type: FIND_INVENTORY_HISTORY, payload };
}

export function fetchFindTransactionTypes(
  payload: InventoryTransactionType[]
): ActionTypes {
  return { type: FIND_TRANSACTION_TYPES, payload };
}
