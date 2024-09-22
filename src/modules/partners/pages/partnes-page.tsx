import { Header } from "@/modules/core/components/molecules";
import { Card, CardHeader } from "@mui/material";

const PartnersPage = (): JSX.Element => {
  return (
    <div>
      <Header
        title="Parceiros"
        breadcrumbs={[
          {
            label: "Home",
            redirectTo: "/",
          },
          { label: "Parceiros" },
        ]}
      />

      <Card>
        <CardHeader title="Lista de parceiros" />
      </Card>
    </div>
  );
};

PartnersPage.displayName = "PartnersPage";

export default PartnersPage;
