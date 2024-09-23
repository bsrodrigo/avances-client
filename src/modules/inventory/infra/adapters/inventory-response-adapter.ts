import { Inventory, Measurement, Product } from "@/modules/inventory/models";

export const inventoryResponseAdapter = (item: any): Inventory =>
  new Inventory({
    product: {
      measurement: {
        id: item?.measurement?._id,
        acronym: item?.measurement?.acronym,
        description: item?.measurement?.description,
      } as Measurement,
      id: item?.product?._id,
      name: item?.product?.name,
      price: item?.product?.price,
      isActive: !item?.product?.isInactive,
    } as Product,
    quantity: item?.quantity,
    updatedAt: item?.updatedAt,
  });
