import {
  Alert,
  AlertTitle,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import { Cancel01Icon } from "hugeicons-react";

interface InventoryAlerts {
  onFilter: (typeFilter?: string) => void;
}

const InventoryAlerts: React.FC<InventoryAlerts> = ({ onFilter }) => (
  <div style={{ marginBottom: 24 }}>
    <Alert
      severity="error"
      action={
        <IconButton>
          <Cancel01Icon fontSize="small" />
        </IconButton>
      }
      style={{ marginBottom: 16 }}
    >
      <AlertTitle>Estoque Zerado!</AlertTitle>

      <Typography>
        Existem <b>produtos sem estoque</b> - verifique e se necessário atualize
        seu estoque.
      </Typography>
      <Button
        variant="contained"
        color="error"
        style={{ float: "right" }}
        onClick={() => onFilter()}
      >
        Verificar
      </Button>
    </Alert>
    <Alert
      severity="warning"
      action={
        <IconButton>
          <Cancel01Icon fontSize="small" />
        </IconButton>
      }
      style={{ marginBottom: 16 }}
    >
      <AlertTitle>Estoque Baixo!</AlertTitle>

      <Typography>
        Existem produtos com <b>estoque baixo</b> - verifique e se necessário
        atualize seu estoque.
      </Typography>
      <Button
        variant="contained"
        color="warning"
        style={{ float: "right" }}
        onClick={() => onFilter()}
      >
        Verificar
      </Button>
    </Alert>
  </div>
);
