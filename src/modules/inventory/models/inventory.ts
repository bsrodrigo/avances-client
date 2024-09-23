import { dateTimeCreate } from "@/modules/core/utils";
import { Product } from "@/modules/inventory/models";

export class Inventory {
  public readonly product: Inventory.Data["product"];
  public readonly quantity: Inventory.Data["quantity"];
  public readonly updatedAt: Inventory.Data["updatedAt"];

  constructor(data: Inventory.Data) {
    this.product = data.product;
    this.quantity = data.quantity;
    this.updatedAt = dateTimeCreate(data?.updatedAt)!;
  }
}

export namespace Inventory {
  export type Data = {
    product: Product;
    quantity: number;
    updatedAt?: Date;
  };
}
