import { isValid, parseISO, format } from "date-fns";

import ptBR from "date-fns/locale/pt-BR";

export const validateDateTime = (dateTime: Date): boolean => {
  if (!isValid(dateTime)) return false;
  return true;
};

export const dateTimeCreate = (dateTime?: string | Date): Date => {
  const dateTimeCreated =
    dateTime && (dateTime instanceof Date ? dateTime : parseISO(dateTime));

  if (
    (dateTimeCreated && validateDateTime(dateTimeCreated)) ||
    !dateTimeCreated
  ) {
    return null!;
  }

  return dateTimeCreated;
};

export const formatDate = (
  data?: Date,
  dataFormat: string = "dd/MM/yyyy"
): string => {
  if (!data || !isValid(data)) return "";

  const formattedData = format(data, dataFormat, { locale: ptBR });

  return formattedData;
};
