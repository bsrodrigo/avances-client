import { currencyFormatted } from "@/modules/core/utils";
import { Product } from "@/modules/inventory/models";

import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useProductContext } from "@/modules/inventory/contexts";
import { Delete01Icon, Edit01Icon } from "hugeicons-react";

const columns: any[] = [
  { id: "table-product-product", label: "Produto" },
  { id: "table-product-description", label: "Descrição" },
  { id: "table-product-price", label: "Valor" },
  { id: "table-product-actions", label: "" },
];

interface IProductsTable {
  onDelete: (id: Product) => void;
  onEdit: (id: Product) => void;
}

export const ProductsTable: React.FC<IProductsTable> = ({
  onDelete,
  onEdit,
}) => {
  const { products } = useProductContext();

  return (
    <>
      <TableContainer
        style={{
          overflowX: "auto",
          position: "relative",
          height: "60vh",
        }}
      >
        <Table
          style={{
            position: "absolute",
          }}
        >
          <TableHead>
            <TableRow>
              {columns?.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((product, index) => (
              <TableRow hover key={`${product?.id}-${index}`}>
                <TableCell key={`${product?.id}-name`}>
                  {product?.name || "-"}
                </TableCell>
                <TableCell key={`${product?.id}-description`}>
                  {product?.description || "-"}
                </TableCell>
                <TableCell key={`${product?.id}-price`}>
                  {product?.price ? currencyFormatted(product.price) : "-"}
                </TableCell>
                <TableCell key={`${product?.id}-actions`}>
                  <IconButton color="primary" onClick={() => onEdit(product)}>
                    <Edit01Icon />
                  </IconButton>
                  <IconButton color="error" onClick={() => onDelete(product)}>
                    <Delete01Icon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
