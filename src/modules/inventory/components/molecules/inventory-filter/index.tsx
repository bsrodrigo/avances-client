import { useState } from "react";

import { Badge, Button, Card, CardHeader, Collapse, Grid, TextField } from "@mui/material";

export const InventoryFilter: React.FC = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(true);
  const [filterCounter, setFilterCounter] = useState<string>(null!);

  return (
    <>
      <Card elevation={2}>
        <CardHeader
          title={
            filterCounter ? (
              <Badge badgeContent={1} color="primary">
                Filtro
              </Badge>
            ) : (
              "Filtro"
            )
          }
          subtitle="Pesquise por produtos específicos utilizando o filtro"
          actionElement={
            <Button
              variant="outlined"
              onClick={() => setOpenFilter((value) => !value)}
            >
              {openFilter ? "Fechar" : "Abrir"}
            </Button>
          }
        />

        <Collapse in={openFilter}>
          <Grid container columnSpacing={2} rowSpacing={3}>
            <Grid item xs={12} md={3}>
              <TextField label="Produto" fullWidth />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField label="Estoque a baixo de" type="number" fullWidth />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                label="Estoque a cima de"
                InputLabelProps={{ shrink: !!filterCounter }}
                value={filterCounter}
                onChange={(e) => setFilterCounter(e.target?.value)}
                type="number"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField label="Atualizado em" fullWidth />
            </Grid>
            <Grid item xs={12} justifyContent="flex-end" display="flex">
              <Button>Limpar</Button>
              <Button variant="contained">Filtrar</Button>
            </Grid>
          </Grid>
        </Collapse>
      </Card>
    </>
  );
};
