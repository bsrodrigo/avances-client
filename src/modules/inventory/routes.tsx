import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const InventoryPage = lazy(
  () => import("@/modules/inventory/pages/inventory-page")
);
const InventoryHistoryPage = lazy(
  () => import("@/modules/inventory/pages/inventory-history-page")
);
const ProductPage = lazy(
  () => import("@/modules/inventory/pages/product-page")
);

export const inventoryRoutes: RouteObject[] = [
  {
    path: "inventory",
    children: [
      {
        index: true,
        element: <InventoryPage />,
      },
      {
        path: "history",
        element: <InventoryHistoryPage />,
      },
      {
        path: "products",
        element: <ProductPage />,
      },
    ],
  },
];
