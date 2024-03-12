import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../Context/ThemeContext";
import Vank from "../../../assets/Vank.png";
import World from "../../../assets/Icon/World";
import CustomInput from "../../Shared/CustomInput/CustomInput";
import ModoLight from "../../../assets/Icon/ModoLight";
import ModoDark from "../../../assets/Icon/ModoDark";

const Header = () => {
  const [t, i18n] = useTranslation("global");

  const [searchTerm, setSearchTerm] = useState("");
  const [rotate, setRotate] = useState(false);
  const { theme, toggleDarkMode } = useTheme();

  const handleChangeInput = (event: any) => {
    setSearchTerm(event.target.value);
  };

  // Lista de idiomas
  const languages = [
    { name: "English", len: "en" },
    { name: "Español", len: "es" },
    // Agrega más idiomas según sea necesario
  ];

  // Mapeo de equivalencias
  const equivalenceMap: { [key: string]: string } = {
    spanish: "español",
    english: "ingles",
    // Agrega más equivalencias según sea necesario
  };

  // Función para nohandleChangeInputrmalizar el término de búsqueda
  const normalizeTerm = (term: string): string =>
    equivalenceMap[term.toLowerCase()] || term.toLowerCase();

  // Filtrar idiomas según el término de búsqueda
  const filteredLanguages = languages.filter((language) =>
    normalizeTerm(language.name).includes(normalizeTerm(searchTerm))
  );

  const toogleLenguaje = (leng: string) => {
    i18n.changeLanguage(leng);
    localStorage.setItem("lenguaje", leng);
  };

  const toggle = () => {
    setRotate(true);

    setTimeout(() => {
      setRotate(false);
      toggleDarkMode();
    }, 200); // Ajusta la duración de la transición según tus necesidades
  };

  return (
    <div className="absolute top-0 left-0 w-full px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="flex items-center w-full justify-between">
        <div className="flex-1 md:flex md:items-center md:gap-12">
          <a className="block" href="/Auth">
            <div className="w-[150px] h-[80px] font-semibold flex items-center">
              <img src={Vank} className="w-full h-full object-cover" alt="" />
            </div>
          </a>
        </div>
        <div className="md:flex md:items-center md:gap-5 mr-3">
          <div className="relative group cursor-pointer">
            <div className="flex justify-center items-center gap-1">
              <span className="text-[--text-body] text-base">
                {i18n.language === "es" ? "Es" : "Eng"}
              </span>
              <World className="sm:w-[23px]  h-[23px] cursor-pointer transform  transition duration-300 ease-in-out" />
            </div>
            {/* <World className="w-[20px]  h-[23px] cursor-pointer transform  transition duration-300 ease-in-out" /> */}
            <div className="absolute top-0 right-0 transition group-hover:translate-y-2 translate-y-0 opacity-0 invisible group-hover:opacity-100 z-50 group-hover:visible duration-500 ease-in-out group-hover:transform min-w-[220px] transform">
              <div className="relative top-6 py-5 px-4 dark:bg-[--background-soft-blue] rounded-md shadow-xl w-full text-[--text-body]">
                <p className="mb-3 text-[--text-light-body] font-bold">
                  {t("common.commonLanguaje.languaje")}
                </p>
                <CustomInput
                  className="w-full outline-none dark:bg-[--background-dark-blue] p-[8px] pl-[12px] rounded-[8px] text-sm placeholder:text-[--text-light-body] mb-2"
                  onChange={handleChangeInput}
                  value={searchTerm}
                  type="text"
                  placeholder={t("common.commonLanguaje.search")}
                />
                <ul className="space-y-2">
                  {filteredLanguages.map((language, index) => (
                    <li
                      key={index}
                      className={`p-2 hover:text-[--yellow] ${
                        i18n.language === language.len && "text-[--yellow]"
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
          <label
            htmlFor="check"
            className="bg-[--dark-gray] relative w-[60px] h-[30px] rounded-[50px] cursor-pointer flex items-center"
          >
            <input
              type="checkbox"
              id="check"
              checked={theme === "dark" ? true : false}
              className="sr-only peer"
              onClick={toggle}
            />
            <ModoLight
              className={`w-[18px] h-[18px] z-10 cursor-pointer transform absolute left-[6.5px] top-1/2 -translate-y-1/2  ${
                theme === "dark" ? "opacity-0" : "opacity-100"
              } transition duration-300 ease-in-out`}
            />
            <div className="w-[24px] h-[24px] bg-[--background-dark-blue]  absolute rounded-full left-1 top-1/2 -translate-y-1/2 peer-checked:bg-[--background-dark-blue] peer-checked:left-[20%] md:peer-checked:left-8 transition-all duration-300 flex justify-center items-center" />
            <ModoDark
              className={`w-[18px] h-[18px] z-10 cursor-pointer transform absolute right-[5px] top-1/2 -translate-y-1/2 mt-[0.5px] mr-[1.2px]  ${
                theme === "dark" ? "opacity-100" : "opacity-0"
              } transition duration-300 ease-in-out`}
            />
          </label>
          {/* {theme === "dark" ? (
            <ModoLight
              className={`w-[24px] h-[24px] flex justify-center items-center cursor-pointer transform ${
                rotate ? "rotate-45 scale-50" : ""
              } transition duration-300 ease-in-out`}
              onClick={toggle}
            />
          ) : (
            <ModoDark
              className={`w-[24px] h-[24px] flex justify-center items-center cursor-pointer transform ${
                rotate ? "rotate-45 scale-50" : ""
              } transition duration-300 ease-in-out`}
              onClick={toggle}
            />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Header;
