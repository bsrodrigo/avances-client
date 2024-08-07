import { Header } from "@/modules/core/presenters/components/organisms";
import { ProductContent } from "@/modules/inventory/presenters/components/organisms";

import { ProductProvider } from "@/modules/inventory/presenters/contexts";

const ProductPage: React.FC = () => (
  <ProductProvider>
    <Header
      breadcrumbs={[
        { label: "Home", link: "/home" },
        { label: "Estoque", link: "/estoque" },
        { label: "Produtos" },
      ]}
      title="Produtos"
    />
    <ProductContent />
  </ProductProvider>
);

export default ProductPage;
