import { MenuBar } from "@/modules/core/components/organisms";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { partnersRoutes } from "../partners/routes";

// TODO: Adicionar tracker pageview

// import { createBrowserHistory } from 'history'

// const customHistory = createBrowserHistory()
// window.PLURALL_CUSTOM_HISTORY = customHistory
// customHistory.listen(() => window.PLURALL_TRACKER.pageView())

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <MenuBar />
        <Outlet />
      </div>
    ),
    children: [
      // TODO Rotas não criadas
      { index: true, element: <div>Home Page</div> },
      { path: "items", element: <div>Itens Page</div> },
      { path: "event-association", element: <div>event association Page</div> },
      ...partnersRoutes,
      {
        path: "*",
        element: <div>A página não existe</div>,
      },
    ],
    errorElement: "Error",
  },
]);
