import React, { useEffect, useState } from "react";

const FullScreenLoader = () => {
  const [theme, setTheme] = useState(() => {
    const storedMode = localStorage.getItem("mode");
    return storedMode ? storedMode : "dark";
  });

  return (
    <div
      className={`w-screen h-screen ${
        theme === "dark" ? "bg-[#14181F]" : " bg-white"
      }`}
    >
      <h1
        className={`text-2xl font-bold  ${
          theme === "dark" ? "text-[#14181F]" : " text-white"
        }`}
      >
        Cargando...
      </h1>
    </div>
  );
};

export default FullScreenLoader;
