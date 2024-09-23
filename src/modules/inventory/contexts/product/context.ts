import { Measurement, Product } from "@/modules/inventory/models";
import { createContext, useContext } from "react";

type PropsProductContext = {
  measurements: Measurement[];
  products: Product[];
  createProduct: (data: Product) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
  findProducts: () => Promise<void>;
  findMeasurements: () => Promise<void>;
  updateProduct: (data: Product) => Promise<void>;
};

export const ProductContext = createContext<PropsProductContext>(
  {} as PropsProductContext
);

export const useProductContext = (): PropsProductContext =>
  useContext(ProductContext);
