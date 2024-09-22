import { createBrowserRouter, Outlet } from "react-router-dom";

import { MenuBar } from "@/modules/core/components/organisms";

import { partnersRoutes } from "@/modules/partners/routes";
import { inventoryRoutes } from "@/modules/inventory/routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MenuBar />,
    children: [
      // TODO Rotas não criadas
      { index: true, element: <div>Home Page</div> },
      { path: "items", element: <div>Itens Page</div> },
      { path: "event-association", element: <div>event association Page</div> },
      ...inventoryRoutes,
      ...partnersRoutes,
      {
        path: "*",
        element: <div>A página não existe</div>,
      },
    ],
    errorElement: "Error",
  },
]);
