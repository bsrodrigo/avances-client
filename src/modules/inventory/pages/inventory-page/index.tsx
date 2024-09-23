import { Header } from "@/modules/core/components/molecules";

import { InventoryProvider } from "@/modules/inventory/contexts";
import { InventoryContent } from "@/modules/inventory/components/organisms";

const InventoryPage: React.FC = () => (
  <InventoryProvider>
    <Header
      breadcrumbs={[
        { label: "Home", redirectTo: "/home" },
        { label: "Estoque" },
      ]}
      title="Estoque"
    />
    <InventoryContent />
  </InventoryProvider>
);

export default InventoryPage;
