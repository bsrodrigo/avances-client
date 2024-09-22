import { faker } from "@faker-js/faker";

import {
  Contact,
  Partner,
  PartnerRelationship,
  PartnerType,
} from "@/modules/partners/models";
import { ContactsFaker } from "@/modules/partners/infra/fakers";
import { addressFaker } from "@/modules/core/infra/fakers";
import { Address } from "cluster";

export const PartnerFaker = (): Partner => ({
  contacts: ContactsFaker(2),
  name: faker.company.name(),
  relationship: [PartnerRelationship.CLIENT, PartnerRelationship.SUPPLIER],
  type: PartnerType.COMPANY,
  address: addressFaker(),
  createdAt: faker.date.recent(),
  updatedAt: faker.date.recent(),
  id: faker.database.mongodbObjectId(),
  notes: faker.lorem.sentence(),
});

export const PartnersListFaker = (dataLength: number = 20): Partner[] => {
  const contacts = Array.from(Array(dataLength).keys()).map(() => {
    return PartnerFaker();
  });

  return contacts;
};
