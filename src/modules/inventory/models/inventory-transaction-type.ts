export type InventoryActionTypes = "ADDITION" | "SUBTRACTION";

export class InventoryTransactionType {
  public readonly id?: string;
  public readonly type: string;
  public readonly description: string;
  public readonly actionType: InventoryActionTypes;

  constructor(data: InventoryTransactionType.Data) {
    this.id = data.id;
    this.type = data.type;
    this.description = data.description;
    this.actionType = data.actionType;
  }
}

export namespace InventoryTransactionType {
  export type Data = {
    id?: string;
    type: string;
    description: string;
    actionType: InventoryActionTypes;
  };
}
