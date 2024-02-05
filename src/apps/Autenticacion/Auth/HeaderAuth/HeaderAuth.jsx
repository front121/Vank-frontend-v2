import React, { useState } from "react";
import CustomImage from "../../../Shared/CustomImage/CustomImage";
import CustomInput from "../../../Shared/CustomInput/CustomInput";

import world from "../../../../assets/Icon/world.svg";
import ModoDark from "../../../../assets/Icon/ModoDark.svg";
import ModoLight from "../../../../assets/Icon/ModoLight.svg";
import Vanks from "../../../../assets/Vanks.png";
import { useTheme } from "../../../../Context/ThemeContext";
import { useTranslation } from "react-i18next";

const HeaderAuth = () => {
  const [t, i18n] = useTranslation("global");

  const [searchTerm, setSearchTerm] = useState("");
  const [rotate, setRotate] = useState(false);
  const { theme, toggleDarkMode } = useTheme();

  const handleChangeInput = (event) => {
    setSearchTerm(event.target.value);
  };

  // Lista de idiomas
  const languages = [
    { name: "English", len: "en" },
    { name: "Español", len: "es" },
    // Agrega más idiomas según sea necesario
  ];

  // Mapeo de equivalencias
  const equivalenceMap = {
    spanish: "español",
    english: "ingles",
    // Agrega más equivalencias según sea necesario
  };

  // Función para nohandleChangeInputrmalizar el término de búsqueda
  const normalizeTerm = (term) =>
    equivalenceMap[term.toLowerCase()] || term.toLowerCase();

  // Filtrar idiomas según el término de búsqueda
  const filteredLanguages = languages.filter((language) =>
    normalizeTerm(language.name).includes(normalizeTerm(searchTerm))
  );

  // cambio de modo
  const toggle = () => {
    setRotate(true);

    setTimeout(() => {
      setRotate(false);
      toggleDarkMode();
    }, 200); // Ajusta la duración de la transición según tus necesidades
  };

  const toogleLenguaje = (leng) => {
    i18n.changeLanguage(leng);
    localStorage.setItem("lenguaje", leng);
  };

  return (
    <div className="fixed top-0 w-full flex justify-between items-center  px-5 py-5 z-50 dark:bg-[#191E25]">
      <div className="flex justify-center items-center w-[141.6px] h-[50px]">
        <CustomImage
          src={Vanks}
          alt="Logo"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex gap-5 mr-4">
        {/* cambio idioma */}
        <div className="relative group cursor-pointer">
          <CustomImage
            src={world}
            alt="Logo"
            className="w-[20px]  h-[23px] cursor-pointer transform  transition duration-300 ease-in-out"
          />
          <div className="absolute top-0 right-0 transition group-hover:translate-y-2 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[220px] transform">
            <div className="relative top-6 py-5 px-4 dark:bg-[#191E25] rounded-md shadow-xl w-full text-white">
              <p className="mb-3 text-[#A7A7AF] font-bold">{t("common.commonLanguaje.languaje")}</p>
              <CustomInput
                inputClassName={`w-full dark:bg-[#13171d] p-[8px] pl-[12px] rounded-[8px] text-sm mb-3 placeholder:text-[#A7A7AF]`}
                onChange={handleChangeInput}
                value={searchTerm}
                type="text"
                placeholder={t("common.commonLanguaje.search")}
              />
              <ul className="space-y-2">
                {filteredLanguages.map((language, index) => (
                  <li
                    key={index}
                    className={`p-2 hover:text-[#FAE100] ${
                      i18n.language === language.len && "text-[#FAE100]"
                    }`}
                    onClick={() => toogleLenguaje(language.len)}
                  >
                    {language.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Theme */}
        <CustomImage
          src={theme === "dark" ? ModoLight : ModoDark}
          alt="Modo"
          className={`w-[24px] h-[24px] flex justify-center items-center cursor-pointer transform ${
            rotate ? "rotate-45 scale-50" : ""
          } transition duration-300 ease-in-out`}
          onClick={toggle}
        />
      </div>
    </div>
  );
};

export default HeaderAuth;
