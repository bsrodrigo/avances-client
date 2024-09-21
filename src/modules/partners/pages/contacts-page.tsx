import { Box, Breadcrumbs, Link, Typography } from "@mui/material";

const ContactsPage = (): JSX.Element => {
  return (
    <div>
      <Box>
        <Typography variant="h4">Contatos</Typography>
        <Box>
          <Breadcrumbs separator="›">
            <Link underline="hover" color="textSecondary" href="/">
              Home
            </Link>
            <Link
              underline="hover"
              color="textSecondary"
              href="/partners/contacts"
            >
              Parceiros
            </Link>
            <Typography color="primary">Contatos</Typography>
          </Breadcrumbs>
        </Box>
      </Box>
      <h1>Contacts</h1>
    </div>
  );
};

ContactsPage.displayName = "ContactsPage";

export default ContactsPage;
