import { Box, Breadcrumbs, Link as MuiLink, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface HeaderBreadcrumbsProps {
  redirectTo?: string;
  label: string;
}

export interface HeaderProps {
  title: string;
  breadcrumbs: HeaderBreadcrumbsProps[];
}

export const Header = ({ title, breadcrumbs }: HeaderProps): JSX.Element => {
  return (
    <Box>
      <Typography variant="h4">{title}</Typography>
      <Box>
        <Breadcrumbs separator="›">
          {breadcrumbs.map(({ label, redirectTo }, index) =>
            redirectTo ? (
              <MuiLink
                key={`breadcrumb-item-${title}-${index}`}
                underline="hover"
                color="textSecondary"
                to={redirectTo}
                component={Link}
              >
                {label}
              </MuiLink>
            ) : (
              <Typography
                key={`breadcrumb-item-${title}-${index}`}
                color="primary"
              >
                {label}
              </Typography>
            )
          )}
        </Breadcrumbs>
      </Box>
    </Box>
  );
};
