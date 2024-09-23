import { Control, Controller, FieldValues } from "react-hook-form";

import { TextField, Autocomplete } from "@mui/material";

import { Product } from "@/modules/inventory/models";

interface IProductsAutocomplete {
  defaultValue?: Product;
  products: Product[];
  control: Control<FieldValues, any>;
}

export const ProductsAutocomplete: React.FC<IProductsAutocomplete> = ({
  defaultValue,
  products,
  control,
}) => (
  <div>
    <Controller
      name="product"
      defaultValue={defaultValue}
      control={control}
      render={({ field: { onChange, value } }) => {
        return (
          <Autocomplete
            disablePortal
            value={value as Product}
            onChange={(event, newValue) => {
              onChange(newValue!);
            }}
            getOptionLabel={(option) => option?.name}
            options={products || []}
            renderInput={(params) => (
              <TextField {...params} label="Movie" fullWidth />
            )}
          />
        );
      }}
    />
  </div>
);
