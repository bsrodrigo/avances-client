import { Measurement, Product } from "@/modules/inventory/models";
import {
  ActionTypes,
  CREATE_PRODUCT,
  DELETE_PRODUCT,
  FIND_MEASUREMENTS,
  FIND_PRODUCTS,
  UPDATE_PRODUCT,
} from "./types";

export function fetchCreateProduct(payload: Product): ActionTypes {
  return { type: CREATE_PRODUCT, payload };
}

export function fetchDeleteProduct(payload: string): ActionTypes {
  return { type: DELETE_PRODUCT, payload };
}

export function fetchFindMeasurements(payload: Measurement[]): ActionTypes {
  return { type: FIND_MEASUREMENTS, payload };
}

export function fetchFindProducts(payload: Product[]): ActionTypes {
  return { type: FIND_PRODUCTS, payload };
}

export function fetchUpdateProduct(payload: Product): ActionTypes {
  return { type: UPDATE_PRODUCT, payload };
}
