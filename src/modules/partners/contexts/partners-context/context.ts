import { createContext, useContext } from "react";
import { Partner } from "@/modules/partners/models";

export interface PartnersContextProps {
  partners: Partner[];
  getPartners: () => Promise<void>;
}

export const PartnersContext = createContext<PartnersContextProps>(
  {} as PartnersContextProps
);

export const usePartnersContext = (): PartnersContextProps =>
  useContext(PartnersContext);
