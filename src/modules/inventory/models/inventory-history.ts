import { dateTimeCreate } from "@/modules/core/utils";
import { InventoryTransactionType, Product } from "@/modules/inventory/models";

export class InventoryHistory {
  public readonly product: Product;
  public readonly usedQuantity: number;
  public readonly priorQuantity: number;
  public readonly updatedQuantity: number;
  public readonly transactionType: InventoryTransactionType;
  public readonly createdAt: Date;

  constructor(data: InventoryHistory.Data) {
    this.product = data.product;
    this.usedQuantity = data.usedQuantity;
    this.priorQuantity = data.priorQuantity;
    this.updatedQuantity = data.updatedQuantity;
    this.transactionType = data.transactionType;
    this.createdAt = dateTimeCreate(data.createdAt);
  }
}

export namespace InventoryHistory {
  export type Data = {
    product: Product;
    usedQuantity: number;
    priorQuantity: number;
    updatedQuantity: number;
    transactionType: InventoryTransactionType.Data;
    createdAt: Date | string;
  };
}
