import { usePartnersContext } from "@/modules/partners/contexts/partners-context";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";

export const PartnersContent = (): JSX.Element => {
  const { partners } = usePartnersContext();

  const columns: GridColDef[] = [
    { field: "name", headerName: "Nome", flex: 2 },
    { field: "relationship", headerName: "Relação", flex: 1 },
  ];

  return (
    <div>
      <Box marginBottom={2}>
        <Typography variant="h5">Lista de parceiros</Typography>
        <Typography variant="body2" color="textSecondary" maxWidth={500}>
          clientes, fornecedores, prestador de serviços...
        </Typography>
      </Box>

      <DataGrid
        sx={{
          borderRadius: 5,
          overflow: "hidden",
        }}
        slots={{ toolbar: GridToolbar }}
        rows={partners}
        columns={columns}
      />
    </div>
  );
};
