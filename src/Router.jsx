import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/Auth",
    Component: lazy(() => import("./apps/Autenticacion/Auth/Auth")),
  },
  {
    path: "/AuthOpt/:email",
    Component: lazy(() => import("./apps/Autenticacion/AuthOpt/AuthOpt")),
  },
  {
    path: "*",
    Component: lazy(() => import("./apps/Shared/NotFound/NotFound")),
  },
    {
      // element: <h1>Hola</h1>,
      children: [
        {
          path: "/",
          Component: lazy(() => import('./apps/Vank/Home/Home'))
        },
      ],
    },
]);

export default router;
