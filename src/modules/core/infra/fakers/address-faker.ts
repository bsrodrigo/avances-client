import { Address } from "@/modules/core/models";

export const addressFaker = (): Address => ({
  city: "São Paulo",
  country: "Brasil",
  number: "123",
  postalCode: "123456",
  state: "SP",
  street: "Rua Teste",
  complement: "Complemento",
  ibgeCode: "123",
  neighborhood: "Bairro Teste",
});
