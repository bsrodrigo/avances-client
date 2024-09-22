import { Header } from "@/modules/core/components/molecules";
import { PartnersContent } from "@/modules/partners/components/organisms";
import { PartnersProvider } from "@/modules/partners/contexts/partners-context";

const PartnersPage = (): JSX.Element => {
  return (
    <PartnersProvider>
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

      <PartnersContent />
    </PartnersProvider>
  );
};

PartnersPage.displayName = "PartnersPage";

export default PartnersPage;
