export const formatWithLeading = (
  number: number | string,
  leadingStringQuantity = 2,
  leadingString = "0"
) => {
  const numberLength = number?.toString()?.length;
  const newLeadingStringQuantity =
    numberLength > leadingStringQuantity ? numberLength : leadingStringQuantity;

  return number?.toString()
    ? (leadingString.repeat(newLeadingStringQuantity) + Number(number)).slice(
        -newLeadingStringQuantity
      )
    : "-".repeat(newLeadingStringQuantity);
};
