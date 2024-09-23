import { Controller } from "react-hook-form";
import { StandardTextFieldProps, TextField } from "@mui/material";

interface ICurrencyTextField extends StandardTextFieldProps {
  control: any;
}

export const CurrencyTextField: React.FC<ICurrencyTextField> = ({
  defaultValue,
  name = "currencyTextField",
  control,
  ...props
}) => {
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    onChange: (value: any) => void
  ): void => {
    const currentValue = Number(event.target.value?.replace(/\D/gim, ""));
    onChange(currentValue);
  };

  const getValueFormatted = (value: any): string => {
    if (!value) return "";

    const valueFloat = value > 0 ? value / 100 : 0;
    const valueFormatted = Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(valueFloat);

    return valueFormatted;
  };

  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      render={({ field: { ref, onChange, value } }) => {
        const valueFormatted = getValueFormatted(value);
        return (
          <>
            <TextField
              {...props}
              value={valueFormatted}
              onChange={(event) => handleChange(event, onChange)}
            />
          </>
        );
      }}
    />
  );
};
