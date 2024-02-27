import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Root } from "./apps/Root/Root";

const router = createBrowserRouter([
  {
    path: "/Auth",
    Component: lazy(() => import("./apps/Autenticacion/Auth/Auth")),
  },
  {
    path: "*",
    Component: lazy(() => import("./apps/Shared/NotFound/NotFound")),
  },
    {
      element: <Root/>,
      children: [
        {
          path: "/",
          Component: lazy(() => import('./apps/Vank/page/Home/Home'))
        },
        {
          path:"/transactions",
          Component: lazy(() => import('./apps/Vank/page/Transactions/Transactions'))
        },
      ],
    },
]);

export default router;
