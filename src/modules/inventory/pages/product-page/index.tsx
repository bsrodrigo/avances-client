import { Header } from "@/modules/core/components/molecules";
// import { ProductContent } from "@/modules/inventory/presenters/components/organisms";

// import { ProductProvider } from "@/modules/inventory/presenters/contexts";

const ProductPage: React.FC = () => (
  // <ProductProvider>
  <Header
    breadcrumbs={[
      { label: "Home", redirectTo: "/home" },
      { label: "Estoque", redirectTo: "/estoque" },
      { label: "Produtos" },
    ]}
    title="Produtos"
  />
  //   <ProductContent />
  // </ProductProvider>
);

export default ProductPage;
