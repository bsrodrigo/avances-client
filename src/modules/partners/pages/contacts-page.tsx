import { Header } from "@/modules/core/components/molecules";

const ContactsPage = (): JSX.Element => {
  return (
    <div>
      <Header
        title="Contatos"
        breadcrumbs={[
          {
            label: "Home",
            redirectTo: "/",
          },
          {
            label: "Parceiros",
            redirectTo: "/partners/contacts",
          },
          { label: "Contatos" },
        ]}
      />
    </div>
  );
};

ContactsPage.displayName = "ContactsPage";

export default ContactsPage;
