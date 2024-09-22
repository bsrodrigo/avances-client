import { Header } from "@/modules/core/components/molecules";

const InventoryHistoryPage: React.FC = () => (
  // <ProductProvider>
  <Header
    title="Histórico do estoque"
    breadcrumbs={[
      { label: "Home", redirectTo: "/home" },
      { label: "Estoque", redirectTo: "/estoque" },
      { label: "Histórico" },
    ]}
  />
  // <InventoryContent />
  // </ProductProvider>
);

export default InventoryHistoryPage;
