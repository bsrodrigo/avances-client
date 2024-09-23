import React, { ReactNode, useEffect, useReducer, useState } from "react";

import { LoadingContent } from "@/modules/core/components/molecules";
import { Product } from "@/modules/inventory/models";
import { ProductsService } from "@/modules/inventory/infra/service";

import {
  fetchCreateProduct,
  fetchDeleteProduct,
  fetchFindMeasurements,
  fetchFindProducts,
  fetchUpdateProduct,
} from "./actions";
import { ProductContext } from "./context";
import { initialState, reducer } from "./reducers";

interface IProductProvider {
  children: ReactNode;
}

export const ProductProvider: React.FC<IProductProvider> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();

  const load = async (): Promise<void> => {
    try {
      await findMeasurements();
      await findProducts();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createProduct = async (data: Product): Promise<void> => {
    const remoteProductRepository = new ProductsService();
    const responseData = await remoteProductRepository.createProduct(data);
    dispatch(fetchCreateProduct(responseData));
  };

  const deleteProduct = async (id: string): Promise<void> => {
    const remoteProductRepository = new ProductsService();
    await remoteProductRepository.deleteProduct(id);
    dispatch(fetchDeleteProduct(id));
  };

  const findMeasurements = async (): Promise<void> => {
    const remoteProductRepository = new ProductsService();
    const responseData = await remoteProductRepository.findMeasurements();
    dispatch(fetchFindMeasurements(responseData));
  };

  const findProducts = async (): Promise<void> => {
    const remoteProductRepository = new ProductsService();
    const responseData = await remoteProductRepository.findProducts();
    dispatch(fetchFindProducts(responseData));
  };

  const updateProduct = async (data: Product): Promise<void> => {
    const remoteProductRepository = new ProductsService();
    await remoteProductRepository.updateProduct(data);
    dispatch(fetchUpdateProduct(data));
  };

  useEffect(() => {
    if (loading) load();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        measurements: state.measurements,
        products: state.products,
        createProduct,
        deleteProduct,
        findMeasurements,
        findProducts,
        updateProduct,
      }}
    >
      <LoadingContent loading={loading}>{error || children}</LoadingContent>
    </ProductContext.Provider>
  );
};
