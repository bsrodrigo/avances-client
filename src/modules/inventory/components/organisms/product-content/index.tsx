import { useState } from "react";

import { useProductContext } from "@/modules/inventory/contexts";

import { DeleteProduct } from "@/modules/inventory/components/molecules";
import {
  ProductForm,
  ProductsTable,
} from "@/modules/inventory/components/organisms";

import { Product } from "@/modules/inventory/models";
import { Button, Card, CardHeader } from "@mui/material";

export const ProductContent: React.FC = () => {
  const [openForm, setOpenForm] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [productSelected, setProductSelected] = useState<Product>(null!);

  const { deleteProduct } = useProductContext();

  const handleOpenDelete = (product: Product): void => {
    setProductSelected(product);
    setOpenDelete(true);
  };

  const handleCloseDelete = (): void => {
    setOpenDelete(false);
    setProductSelected(null!);
  };

  const handleOpenForm = (product?: Product): void => {
    if (product?.id) setProductSelected(product);
    setOpenForm(true);
  };

  const handleCloseForm = (): void => {
    setOpenForm(false);
    setProductSelected(null!);
  };

  const handleDelete = async (id: string): Promise<void> => {
    try {
      await deleteProduct(id);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (product: Product): void => {
    if (!product) return;

    setProductSelected(product);
    handleOpenForm();
  };

  return (
    <>
      <Card elevation={2}>
        <CardHeader
          title="Lista de produtos"
          subtitle="Gerencie seu estoque controlando seus produtos. Visualize, adicione, edite ou exclua os items para melhor gerir o estoque."
          actionElement={
            <Button variant="outlined" onClick={() => handleOpenForm()}>
              Adicionar
            </Button>
          }
        />

        <ProductsTable onDelete={handleOpenDelete} onEdit={handleEdit} />
      </Card>

      <ProductForm
        open={openForm}
        onClose={handleCloseForm}
        product={productSelected}
      />

      <DeleteProduct
        product={productSelected}
        onClose={handleCloseDelete}
        onDelete={handleDelete}
        open={openDelete}
      />
    </>
  );
};
