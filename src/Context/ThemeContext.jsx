// ThemeContext.js

import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const storedMode = localStorage.getItem("mode");
    return storedMode ? storedMode : "dark";
  });
  // const [theme, setTheme] = useState(() => {
  //   if (window.matchMedia("(prefers-color-scheme: light)").matches) {
  //     return "light";
  //   }
  //   return "dark";
  // });

  useEffect(() => {
    if (theme === "dark") {
      localStorage.setItem("mode", theme);
      document.querySelector("html").classList.add("dark");
    } else {
      localStorage.setItem("mode", theme);
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  const value = {
    theme,
    toggleDarkMode,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
