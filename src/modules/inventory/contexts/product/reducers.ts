/* eslint-disable */
import {
  InitialState,
  ActionTypes,
  FIND_MEASUREMENTS,
  FIND_PRODUCTS,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  DELETE_PRODUCT,
} from "./types";

export const initialState: InitialState = {
  measurements: undefined!,
  products: undefined!,
};

export function reducer(
  state = initialState,
  action: ActionTypes
): InitialState {
  switch (action.type) {
    case CREATE_PRODUCT:
      return {
        ...state,
        products: [action.payload, ...state.products],
      };

    case DELETE_PRODUCT: {
      const newProducts = state.products?.filter(
        (product) => product?.id !== action.payload
      );

      return {
        ...state,
        products: newProducts,
      };
    }

    case FIND_MEASUREMENTS:
      return {
        ...state,
        measurements: action.payload,
      };

    case FIND_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case UPDATE_PRODUCT: {
      const newProducts = state.products?.map((product) =>
        product?.id === action.payload.id ? action.payload : product
      );

      return {
        ...state,
        products: newProducts,
      };
    }

    default:
      return state;
  }
}
