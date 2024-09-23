export const currencyFormatted = (value: number): string => {
  if (!value) return "";

  const valueFormatted = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value / 100);

  return valueFormatted;
};
