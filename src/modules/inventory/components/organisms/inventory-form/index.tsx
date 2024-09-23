import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import {
  Grid,
  ListSubheader,
  MenuItem,
  TextField,
  Autocomplete,
} from "@mui/material";

import { InventoryActionTypes, Product } from "@/modules/inventory/models";
import { useInventoryContext } from "@/modules/inventory/contexts";
import { Dialog } from "@/modules/core/components/molecules";
import { InventoryFormFeedback } from "../../molecules";
import { useMemo } from "react";
import { InventoryHistoryRequest } from "@/modules/inventory/infra/interfaces";

interface IInventoryForm {
  product?: Product;
  open: boolean;
  onClose: () => void;
}

export const InventoryForm: React.FC<IInventoryForm> = ({
  product,
  open,
  onClose,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();
  const { transactionTypes, inventory, createInventoryHistory, findProducts } =
    useInventoryContext();

  const [actionType, setActionType] = useState<InventoryActionTypes>(null!);
  const [priorQuantity, setPriorQuantity] = useState<number>(null!);
  const [usedQuantity, setUsedQuantity] = useState<number>(null!);
  const [products, setProducts] = useState<Product[]>(null!);
  const [productSelected, setProductSelected] = useState<Product>(product!);

  const confirmDisabled = useMemo(() => {
    if (actionType !== "SUBTRACTION") return false;

    const remainder = priorQuantity - usedQuantity;
    return !!(remainder < 0);
  }, [actionType, priorQuantity, usedQuantity]);

  const updateProducts = async (): Promise<void> => {
    try {
      const data = await findProducts();
      if (data?.length > 0) setProducts(data);
    } catch (error) {
      console.error({ error });
    }
  };

  const updateProductSelected = (data: Product): void => {
    const productInventory = inventory?.find(
      (item) => data?.id === item?.product?.id
    );
    setProductSelected({ ...data });
    setPriorQuantity(productInventory?.quantity || 0);
  };

  const handleSubmitForm = async (data: any) => {
    if (confirmDisabled) return;

    try {
      setLoading(true);

      const dataFormatted: InventoryHistoryRequest = {
        ...data,
        product: productSelected.id,
      };

      await createInventoryHistory(dataFormatted);

      handleClose();
    } catch (error: any) {
      console.error(error?.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = (): void => {
    setActionType(null!);
    setPriorQuantity(null!);
    setUsedQuantity(null!);
    setProductSelected(null!);
    setValue("quantity", null);
    setValue("transactionType", "");
    setValue("details", "");
    onClose();
  };

  console.log({
    actionType,
    priorQuantity,
    usedQuantity,
    products,
    productSelected,
  });

  useEffect(() => {
    updateProducts();
  }, []);

  useEffect(() => {
    if (products?.length > 0 && product?.id) updateProductSelected(product);
  }, [products, product]);

  console.log({ productSelected, product });
  return (
    <Dialog
      confirmLabel={"Atualizar"}
      confirmDisabled={confirmDisabled}
      loading={loading}
      open={open}
      subtitle="Atualize o estoque informando uma movimentação, podendo ser de entrada ou saída de produtos"
      title="Atualizar estoque"
      onCancel={handleClose}
      onConfirm={handleSubmit(handleSubmitForm)}
      onClose={handleClose}
      maxWidth="medium"
    >
      <form>
        <Grid container columnSpacing={2} rowSpacing={3}>
          <Grid item xs={12}>
            <Autocomplete
              disablePortal
              value={productSelected}
              onChange={(_, newValue) =>
                newValue?.id ? updateProductSelected(newValue) : null
              }
              getOptionLabel={(option) => option?.name}
              options={products || []}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Produto"
                  {...register("product")}
                  fullWidth
                />
              )}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Quantidade"
              type="number"
              id="quantity"
              {...register("quantity")}
              placeholder="Informe a quantidade"
              onChange={(event) =>
                setUsedQuantity(Number(event?.target?.value))
              }
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              type=""
              label="Tipo da movimentação"
              id="transactionType"
              inputProps={register("transactionType")}
              onChange={(event) => {
                const value = transactionTypes?.find(
                  (item) => item?.id === event?.target?.value
                );
                setActionType(value?.actionType!);
              }}
              fullWidth
            >
              <MenuItem value="">Selecione uma opção</MenuItem>
              <ListSubheader>Entrada no estoque</ListSubheader>
              {transactionTypes?.map(
                (transactionType) =>
                  transactionType?.actionType === "ADDITION" && (
                    <MenuItem
                      key={transactionType?.id}
                      value={transactionType?.id}
                    >
                      {transactionType?.type}
                    </MenuItem>
                  )
              )}
              <ListSubheader>Saída do estoque</ListSubheader>
              {transactionTypes?.map(
                (transactionType) =>
                  transactionType?.actionType === "SUBTRACTION" && (
                    <MenuItem
                      key={transactionType?.id}
                      value={transactionType?.id}
                    >
                      {transactionType?.type}
                    </MenuItem>
                  )
              )}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Informação adicional"
              id="details"
              {...register("details")}
              placeholder="Alguma informação adicional?"
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <InventoryFormFeedback
              actionType={actionType}
              priorQuantity={priorQuantity}
              usedQuantity={usedQuantity}
            />
          </Grid>
        </Grid>
      </form>
    </Dialog>
  );
};
