import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { Root } from "./apps/Root/Root";

const router = createBrowserRouter([
  // {
  //   path: "",
  //   Component: lazy(() => import("./apps/Auth/Auth")),
  // },
  {
    path: "Auth",
    children: [
      {
        path: "",
        Component: lazy(() => import("./apps/Auth/Auth")),
      },
      {
        path: "SingUp/Otp",
        Component: lazy(() => import("./apps/Auth/SingUp/Opt/Opt")),
      },
      {
        path: "SingIn/Otp",
        Component: lazy(() => import("./apps/Auth/SingIn/Otp/Otp")),
      },
      {
        path: "MultiStepForm",
        Component: lazy(
          () => import("./apps/Auth/SingUp/MultiStepFormView/MultiStepFormView")
        ),
      },
      {
        path: "ForgotPassword",
        Component: lazy(
          () => import("./apps/Auth/ForgotPassword/ForgotPassword")
        ),
      },
      {
        path: "forgot-password-code",
        Component: lazy(
          () =>
            import(
              "./apps/Auth/ForgotPassword/PassResetVerifier/PassResetVerifier"
            )
        ),
      },
      {
        path: "forgot-password-reset",
        Component: lazy(
          () => import("./apps/Auth/ForgotPassword/NewPassword/NewPassword")
        ),
      },
    ],
  },
  {
    element: <Root />,
    children: [
      {
        path: "/",
        Component: lazy(() => import("./apps/Vank/Page/Home/Home")),
      },
      {
        path: "/transactions",
        Component: lazy(
          () => import("./apps/Vank/Page/Transactions/Transactions")
        ),
      },
    ],
  },
]);

export default router;
