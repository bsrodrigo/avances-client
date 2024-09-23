import { avancesApi } from "@/modules/core/infra/api";
import {
  Inventory,
  InventoryHistory,
  InventoryTransactionType,
} from "@/modules/inventory/models";
import {
  inventoryHistoryResponseAdapter,
  inventoryResponseAdapter,
  transactionTypesResponseAdapter,
} from "../adapters";
import { InventoryHistoryRequest } from "@/modules/inventory/infra/interfaces";

export class InventoryService {
  async createInventoryHistory(
    data: InventoryHistoryRequest
  ): Promise<InventoryHistory> {
    const response = await avancesApi.post(`inventory`, data);

    return inventoryHistoryResponseAdapter(response?.data);
  }

  async findInventory(): Promise<Inventory[]> {
    const response = await avancesApi.get(`inventory`);
    const responseData = response.data?.map((item: any) =>
      inventoryResponseAdapter(item)
    );

    return responseData;
  }

  async findInventoryHistory(): Promise<InventoryHistory[]> {
    const response = await avancesApi.get(`inventory/history`);
    const responseData = response.data?.map((item: any) =>
      inventoryHistoryResponseAdapter(item)
    );

    return responseData;
  }

  async findTransactionTypes(): Promise<InventoryTransactionType[]> {
    const response = await avancesApi.get(`Inventory/transaction-types`);
    const responseData = response.data?.map((item: any) =>
      transactionTypesResponseAdapter(item)
    );

    return responseData;
  }
}
