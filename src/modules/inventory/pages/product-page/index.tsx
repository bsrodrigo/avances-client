import { Header } from "@/modules/core/components/molecules";

import { ProductProvider } from "@/modules/inventory/contexts";
import { ProductContent } from "@/modules/inventory/components/organisms";

const ProductPage: React.FC = () => (
  <ProductProvider>
    <Header
      breadcrumbs={[
        { label: "Home", redirectTo: "/home" },
        { label: "Estoque", redirectTo: "/estoque" },
        { label: "Produtos" },
      ]}
      title="Produtos"
    />
    <ProductContent />
  </ProductProvider>
);

export default ProductPage;
