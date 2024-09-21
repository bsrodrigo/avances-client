import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const PartnersPage = lazy(
  () => import("@/modules/partners/pages/partnes-page")
);
const ContactsPage = lazy(
  () => import("@/modules/partners/pages/contacts-page")
);

export const partnersRoutes: RouteObject[] = [
  {
    path: "partners",
    children: [
      {
        index: true,
        element: <PartnersPage />,
      },
      {
        path: "contacts",
        element: <ContactsPage />,
      },
    ],
  },
];
