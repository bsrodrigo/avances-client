import { Header } from "@/modules/core/components/molecules";
// import { InventoryContent } from "@/modules/inventory/presenters/components/organisms";

// import { InventoryProvider } from "@/modules/inventory/presenters/contexts";

const InventoryPage: React.FC = () => (
  // <InventoryProvider>
  <Header
    breadcrumbs={[{ label: "Home", redirectTo: "/home" }, { label: "Estoque" }]}
    title="Estoque"
  />
  //   <InventoryContent />
  // </InventoryProvider>
);

export default InventoryPage;
