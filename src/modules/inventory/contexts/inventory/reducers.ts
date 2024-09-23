/* eslint-disable */
import {
  InitialState,
  ActionTypes,
  FIND_INVENTORY,
  FIND_INVENTORY_HISTORY,
  FIND_TRANSACTION_TYPES,
} from "./types";

export const initialState: InitialState = {
  inventory: undefined!,
  inventoryHistory: undefined!,
  transactionTypes: undefined!,
};

export function reducer(
  state = initialState,
  action: ActionTypes
): InitialState {
  switch (action.type) {
    case FIND_INVENTORY:
      return {
        ...state,
        inventory: action.payload,
      };

    case FIND_INVENTORY_HISTORY:
      return { ...state, inventoryHistory: action.payload };

    case FIND_TRANSACTION_TYPES:
      return {
        ...state,
        transactionTypes: action.payload,
      };

    default:
      return state;
  }
}
