import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import global_es from "./i18n/es/global.json";
import global_en from "./i18n/en/global.json";

import { ThemeProvider } from "./Context/ThemeContext";
import FullScreenLoader from "./apps/Shared/FullScreenLoader/FullScreenLoader.jsx";

i18next.init({
  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
  lng: localStorage.getItem("lenguaje")
    ? localStorage.getItem("lenguaje")
    : "en",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<FullScreenLoader />}>
      <I18nextProvider i18n={i18next}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </I18nextProvider>
    </Suspense>

    <ToastContainer />
  </React.StrictMode>
);
