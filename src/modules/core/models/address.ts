export interface Address {
  street: string;
  number: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  complement?: string;
  neighborhood?: string;
  ibgeCode?: string;
}
