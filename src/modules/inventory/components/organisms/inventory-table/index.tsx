import { formatDate } from "@/modules/core/utils";
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
import { useInventoryContext } from "@/modules/inventory/contexts";
import { Edit01Icon } from "hugeicons-react";

const columns: any[] = [
  { id: "table-product-product", label: "Produto" },
  { id: "table-product-quantity", label: "Quantidade" },
  { id: "table-product-updatedAt", label: "Última Atualização" },
  { id: "table-product-actions", label: "" },
];

interface IInventoryTable {
  onEdit: (id: Product) => void;
}

export const InventoryTable: React.FC<IInventoryTable> = ({ onEdit }) => {
  const { inventory } = useInventoryContext();

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
            {inventory?.map((item, index) => {
              const quantity = `${item?.quantity} ${item?.product?.measurement?.acronym}`;
              return (
                <TableRow
                  hover
                  key={`row-item-${item?.product?.name}-${index}`}
                >
                  <TableCell>{item?.product?.name || "-"}</TableCell>
                  <TableCell align="center">{quantity}</TableCell>
                  <TableCell>{formatDate(item?.updatedAt)}</TableCell>
                  <TableCell>
                    <IconButton
                      color="primary"
                      onClick={() => onEdit(item?.product)}
                    >
                      <Edit01Icon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
