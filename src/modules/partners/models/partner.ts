import { Address } from "@/modules/core/models";
import { Contact } from "@/modules/partners/models";

export enum PartnerType {
  INDIVIDUAL = "INDIVIDUAL",
  COMPANY = "COMPANY",
}

export enum PartnerTypeReadable {
  INDIVIDUAL = "Pessoa Física",
  COMPANY = "Empresa",
}

export enum PartnerRelationship {
  CLIENT = "CLIENT",
  SUPPLIER = "SUPPLIER",
}

export enum PartnerRelationshipReadable {
  CLIENT = "Cliente",
  SUPPLIER = "Fornecedor",
}

export interface Partner {
  id?: string;
  name: string;
  type: PartnerType;
  relationship: PartnerRelationship[];
  address?: Address;
  contacts: Contact[];
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
