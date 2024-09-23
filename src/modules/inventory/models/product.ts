import { Measurement } from "@/modules/inventory/models";

export class Product {
  public readonly id?: string;
  public readonly name: string;
  public readonly description?: string;
  public readonly price: number;
  public readonly measurement: Measurement;
  public readonly activeSale?: boolean;
  public readonly activeRental?: boolean;
  public readonly fixedPrice?: boolean;
  public readonly isActive?: boolean;

  constructor(data: Product.Data) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.price = data.price;
    this.measurement = new Measurement(data.measurement);
    this.activeSale = data.activeSale;
    this.activeRental = data.activeRental;
    this.fixedPrice = data.fixedPrice;
    this.isActive = data.isActive;
  }
}

export namespace Product {
  export type Data = {
    id?: string;
    name: string;
    description?: string;
    price: number;
    measurement: Measurement.Data;
    activeSale: boolean;
    activeRental: boolean;
    fixedPrice: boolean;
    isActive: boolean;
  };
}
