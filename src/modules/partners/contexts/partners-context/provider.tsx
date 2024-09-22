import { ReactNode, useEffect, useReducer, useState } from "react";

import { ActionTypes, initialState, reducer } from "./reducer";
import { getPartnersService } from "../../infra/service";
import { PartnersContext } from "./context";

interface PartnersProviderProps {
  children: ReactNode;
}

export const PartnersProvider = ({
  children,
}: PartnersProviderProps): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [loading, setLoading] = useState<boolean>(false);
  const [pageLoading, setPageLoading] = useState<boolean>(false);

  useEffect(() => {
    const load = async () => {
      setPageLoading(true);
      await getPartners();
      setPageLoading(false);
    };

    load();
  }, []);

  const getPartners = async () => {
    try {
      setLoading(true);

      const response = await getPartnersService();
      console.log({ response });
      dispatch({ type: ActionTypes.GET_PARTNERS, payload: response });
    } catch (error) {
      console.error({ error });
    } finally {
      setLoading(false);
    }
  };

  return (
    <PartnersContext.Provider
      value={{
        partners: state.partners,
        getPartners,
      }}
    >
      {pageLoading ? "Loading..." : children}
    </PartnersContext.Provider>
  );
};
