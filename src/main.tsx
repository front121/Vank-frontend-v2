import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import i18next from "i18next";

import es from "./assets/i18n/es.json";
import en from "./assets/i18n/en.json";
import FullScreenLoader from "./apps/Shared/FullScreenLoader/FullScreenLoader.tsx";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "./Context/ThemeContext.tsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { RecoilRoot } from "recoil";

i18next.init({
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
  lng: localStorage.getItem("lenguaje")
    ? (localStorage.getItem("lenguaje") as string)
    : "en",
  resources: {
    es: {
      global: es,
    },
    en: {
      global: en,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Suspense fallback={<FullScreenLoader />}>
      <RecoilRoot>
        <I18nextProvider i18n={i18next}>
          <ThemeProvider>
            <Auth0Provider
              domain={import.meta.env.VITE_AUTH0_DOMAIN}
              clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
              authorizationParams={{
                redirect_uri: window.location.origin,
              }}
            >
              <App />
            </Auth0Provider>
          </ThemeProvider>
        </I18nextProvider>
      </RecoilRoot>
    </Suspense>
  </React.StrictMode>
);
