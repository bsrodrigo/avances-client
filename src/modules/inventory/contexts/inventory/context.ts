import {
  Inventory,
  InventoryHistory,
  InventoryTransactionType,
  Product,
} from "@/modules/inventory/models";
import { InventoryHistoryRequest } from "@/modules/inventory/infra/interfaces";
import { createContext, useContext } from "react";

type PropsInventoryContext = {
  inventory: Inventory[];
  inventoryHistory: InventoryHistory[];
  transactionTypes: InventoryTransactionType[];
  createInventoryHistory: (data: InventoryHistoryRequest) => Promise<void>;
  findProducts: () => Promise<Product[]>;
  findTransactionTypes: () => void;
};

export const InventoryContext = createContext<PropsInventoryContext>(
  {} as PropsInventoryContext
);

export const useInventoryContext = (): PropsInventoryContext =>
  useContext(InventoryContext);
