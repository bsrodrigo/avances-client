import { Address } from "@/modules/core/models";
import {
  Partner,
  PartnerRelationship,
  PartnerType,
} from "@/modules/partners/models";
import { PartnersListFaker } from "@/modules/partners/infra/fakers";

export const getPartnersService = async (): Promise<Partner[]> => {
  const partners = PartnersListFaker();
  console.log({ partners });
  return partners;
};
