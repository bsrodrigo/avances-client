import { Header } from "@/modules/core/components/molecules";
import { ProductProvider } from "@/modules/inventory/contexts";
import { InventoryContent } from "@/modules/inventory/components/organisms";

const InventoryHistoryPage: React.FC = () => (
  <ProductProvider>
    <Header
      title="Histórico do estoque"
      breadcrumbs={[
        { label: "Home", redirectTo: "/home" },
        { label: "Estoque", redirectTo: "/estoque" },
        { label: "Histórico" },
      ]}
    />
    <InventoryContent />
  </ProductProvider>
);

export default InventoryHistoryPage;
