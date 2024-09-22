import { Partner } from "@/modules/partners/models";

export interface InitialState {
  partners: Partner[];
}

export enum ActionTypes {
  GET_PARTNERS = "GET_PARTNERS",
}

export type ActionsProps = {
  type: ActionTypes.GET_PARTNERS;
  payload: Partner[];
};

export const initialState: InitialState = {
  partners: [],
};

export function reducer(
  state = initialState,
  action: ActionsProps
): InitialState {
  switch (action.type) {
    case ActionTypes.GET_PARTNERS:
      return {
        ...state,
        partners: [...action.payload],
      };

    default:
      return state;
  }
}
