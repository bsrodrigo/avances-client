import { useState } from "react";
import { useForm } from "react-hook-form";

import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  FormLabel,
  Grid,
  MenuItem,
  Switch,
  TextField,
} from "@mui/material";

import { CurrencyTextField, Dialog } from "@/modules/core/components/molecules";
import { useProductContext } from "@/modules/inventory/contexts";
import { Product } from "@/modules/inventory/models";

interface IProductForm {
  product?: Product;
  open: boolean;
  onClose: () => void;
}

export const ProductForm: React.FC<IProductForm> = ({
  product,
  open,
  onClose,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { measurements, createProduct, updateProduct } = useProductContext();

  const handleSubmitForm = async (data: any) => {
    try {
      setLoading(true);

      const dataFormatted: Product = {
        ...data,
        id: product?.id,
        measurement: { id: data?.measurement },
      };

      if (product?.id) {
        await updateProduct(dataFormatted);
      } else {
        await createProduct(dataFormatted);
      }

      onClose();
    } catch (error: any) {
      console.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      confirmLabel={product?.id ? "Alterar" : "Adicionar"}
      loading={loading}
      open={open}
      subtitle="Adicione um novo produto disponível na gestão de seu negócio"
      title="Adicionar Produto"
      onCancel={onClose}
      onConfirm={handleSubmit(handleSubmitForm)}
      onClose={onClose}
    >
      <form>
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="Nome do Produto"
              defaultValue={product?.name}
              {...register("name")}
              placeholder="Informe o produto"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Descrição"
              defaultValue={product?.description}
              id="description"
              {...register("description")}
              placeholder="Adicione uma descrição"
              helperText="Informação opcional"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Unidade de medida"
              defaultValue={product?.measurement?.id}
              id="measurement"
              inputProps={register("measurement")}
              fullWidth
            >
              <MenuItem value="">Selecione uma opção</MenuItem>
              {measurements?.map((measurement) => (
                <MenuItem
                  key={measurement?.id}
                  value={measurement?.id}
                >{`${measurement?.acronym?.toUpperCase()} - ${
                  measurement?.description
                }`}</MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6}>
            <CurrencyTextField
              control={control}
              defaultValue={product?.price}
              label="Valor do Produto"
              id="price"
              name="price"
              placeholder="Informe o valor"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <FormLabel component="legend">Configurações do produto</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    id="activeSale"
                    defaultChecked={product?.activeSale}
                    {...register("activeSale")}
                  />
                }
                label="Disponível para venda"
                labelPlacement="end"
              />
              <FormControlLabel
                control={
                  <Switch
                    id="activeRental"
                    defaultChecked={product?.activeRental}
                    {...register("activeRental")}
                  />
                }
                label="Disponível para locação"
                labelPlacement="end"
              />
              <FormControl>
                <FormControlLabel
                  control={
                    <Switch
                      id="fixedPrice"
                      defaultChecked={product?.fixedPrice}
                      {...register("fixedPrice")}
                    />
                  }
                  label="Valor fixo"
                  labelPlacement="end"
                />
                <FormHelperText>
                  Na venda o valor não será alterado
                </FormHelperText>
              </FormControl>
            </FormGroup>
          </Grid>
          <Grid item visibility={product?.id ? "visible" : "hidden"}>
            <FormControl>
              <FormLabel component="legend">Produto Ativo</FormLabel>
              <FormControlLabel
                control={
                  <Switch
                    id="isActive"
                    {...register("isActive")}
                    defaultChecked={product?.isActive ?? true}
                  />
                }
                label="Ativo"
                labelPlacement="bottom"
              />
            </FormControl>
          </Grid>
        </Grid>
      </form>
    </Dialog>
  );
};
