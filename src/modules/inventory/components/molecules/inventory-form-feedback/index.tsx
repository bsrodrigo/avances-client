import { useMemo } from "react";
import {
  Alert,
  AlertColor,
  AlertTitle,
  Collapse,
  Grid,
  Typography,
} from "@mui/material";

import { formatWithLeading } from "@/modules/core/utils";
import { InventoryActionTypes } from "@/modules/inventory/models";

interface InventoryFormFeedback {
  actionType: InventoryActionTypes;
  usedQuantity: number;
  priorQuantity: number;
}

export const InventoryFormFeedback: React.FC<InventoryFormFeedback> = ({
  actionType,
  usedQuantity,
  priorQuantity,
}) => {
  const open = !!(usedQuantity || priorQuantity?.toString());

  const updatedQuantity: string = useMemo(() => {
    if (!actionType) return "--";

    if (actionType === "ADDITION")
      return formatWithLeading(priorQuantity + usedQuantity);

    if (priorQuantity < usedQuantity) return "--";

    return formatWithLeading(priorQuantity - usedQuantity);
  }, [actionType, usedQuantity, priorQuantity]);

  const configAlert: { title: string; subtitle?: string; type: AlertColor } =
    useMemo(() => {
      if (actionType !== "SUBTRACTION")
        return { title: "Detalhes da movimentação", type: "info" };

      const remainder = priorQuantity - usedQuantity;

      if (remainder < 0)
        return {
          title: "Não há estoque suficiente!",
          subtitle:
            "Infelizmente não há a quantidade necessária no estoque para fazer a movimentação",
          type: "error",
        };

      if (usedQuantity && remainder === 0)
        return {
          title: "O estoque ficará zerado!",
          subtitle:
            "Após finalizar essa movimentação, o produto não terá mais estoque",
          type: "error",
        };

      if (usedQuantity && remainder < 10)
        return {
          title: "O estoque ficará baixo!",
          subtitle:
            "Após finalizar essa movimentação, o produto ficará com estoque baixo",
          type: "warning",
        };

      return { title: "Detalhes da movimentação", type: "info" };
    }, [actionType, usedQuantity, priorQuantity]);

  return (
    <Collapse in={open}>
      <Alert severity={configAlert.type} style={{ marginBottom: 16 }}>
        <AlertTitle>
          {configAlert.title}
          {configAlert?.subtitle && (
            <Typography variant="body2">{configAlert.subtitle}</Typography>
          )}
        </AlertTitle>

        <Grid container columnSpacing={1} rowSpacing={0}>
          <Grid item xs={12} md={4}>
            <Typography variant="caption">Estoque Atual</Typography>
            <Typography>{formatWithLeading(priorQuantity || 0)}</Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="caption">Quantidade usada</Typography>
            <Typography>{formatWithLeading(usedQuantity)}</Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography variant="caption">Estoque atualizado</Typography>
            <Typography>{updatedQuantity}</Typography>
          </Grid>
        </Grid>
      </Alert>
    </Collapse>
  );
};
