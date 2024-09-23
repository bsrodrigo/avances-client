import { Measurement, Product } from "@/modules/inventory/models";

export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const FIND_MEASUREMENTS = "FIND_MEASUREMENTS";
export const FIND_PRODUCTS = "FIND_PRODUCTS";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export type InitialState = {
  measurements: Measurement[];
  products: Product[];
};

type CreateProductAction = {
  type: typeof CREATE_PRODUCT;
  payload: Product;
};

type DeleteProductAction = {
  type: typeof DELETE_PRODUCT;
  payload: string;
};

type FindMeasurementsAction = {
  type: typeof FIND_MEASUREMENTS;
  payload: Measurement[];
};

type FindProductsAction = {
  type: typeof FIND_PRODUCTS;
  payload: Product[];
};

type UpdateProductAction = {
  type: typeof UPDATE_PRODUCT;
  payload: Product;
};

export type ActionTypes =
  | DeleteProductAction
  | CreateProductAction
  | FindMeasurementsAction
  | FindProductsAction
  | UpdateProductAction;
