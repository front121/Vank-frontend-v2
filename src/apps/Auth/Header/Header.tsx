import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../Context/UseContext/ThemeContext";
import World from "@/assets/Icon/World";
import CustomInput from "@/apps/Shared/CustomInput/CustomInput";
import CustomSwitch from "@/apps/Shared/CustomSwitch/CustomSwitch";
import Vank from "@assets/Vanks.png";
import { AnimatePresence, motion } from "framer-motion";
import { FlagIcon } from "react-flag-kit";
// import World from "../../../assets/Icon/World";
// import CustomInput from "../../Shared/CustomInput/CustomInput";
// import CustomSwitch from "../../Shared/CustomSwitch/CustomSwitch";

const Header = () => {
  const [t, i18n] = useTranslation("global");

  const [searchTerm, setSearchTerm] = useState("");
  const [rotate, setRotate] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const { toggleDarkMode } = useTheme();
  const menuRef = useRef<any>(null);

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

  // const toogleLenguaje = (leng: string) => {
  //   i18n.changeLanguage(leng);
  //   localStorage.setItem("lenguaje", leng);
  // };

  // const toogleLenguaje = () => {
  //   console.log(i18n.language);

  //   const leng = i18n.language === "en" ? "es" : "en";

  //   i18n.changeLanguage(i18n.language === "en" ? "es" : "en");
  //   localStorage.setItem("lenguaje", leng);
  // };

  const toogleLenguaje = (len: string) => {
    console.log(len);

    // const leng = i18n.language === "en" ? "es" : "en";

    i18n.changeLanguage(len);
    localStorage.setItem("lenguaje", len);
  };

  useEffect(() => {
    function handleClickOutside(event?: any) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenu(false);
        return;
      }
    }

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.addEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full px-4 sm:px-6 lg:px-8 bg-transparent">
      <div className="flex items-center w-full justify-between">
        <div className="flex-1 md:flex md:items-center md:gap-12">
          <a className="block" href="/Auth">
            <div className="w-[150px] h-[70px] font-semibold flex items-center">
              <img src={Vank} className="w-full h-full object-cover" alt="" />
            </div>
          </a>
        </div>
        <div className="md:flex md:items-center md:gap-5 mr-3">
          <div className="relative group cursor-pointer">
            <div
              className="flex justify-center items-center gap-1 p-1"
              ref={menuRef}
            >
              <span className="text-[--text-body] text-base">
                {i18n.language === "es" ? "Es" : "Eng"}
              </span>
              <World
                className="sm:w-[23px]  h-[23px] cursor-pointer transform  transition duration-300 ease-in-out"
                // onClick={toogleLenguaje}
                onClick={() => setIsMenu(true)}
              />
              <AnimatePresence>
                {isMenu && (
                  <motion.ul
                    className="bg-[--dark-gray] absolute w-28 z-50 right-0 top-9 rounded-lg p-2 flex flex-col justify-between gap-1"
                    initial={{ opacity: 0, y: "-50%" }}
                    animate={{ opacity: 1, y: "0%" }}
                    exit={{
                      opacity: 0,
                      y: "-50%",
                      transition: { duration: "0.35" },
                    }}
                    transition={{
                      type: "spring",
                      stiffness: "100",
                      duration: "0.75",
                    }}
                  >
                    <li
                      className={`py-1 px-2 flex items-center gap-4 rounded-md text-[--text-body] hover:bg-[--background-dark-blue] ${
                        i18n.language === "es" && "bg-[--background-dark-blue]"
                      } cursor-pointer`}
                      onClick={() => {
                        toogleLenguaje("es");
                        setIsMenu(false);
                      }}
                    >
                      <FlagIcon code="ES" className="rounded-[3px]" />
                      Esp
                    </li>
                    <li
                      className={`py-1 px-2 flex items-center gap-4 rounded-md text-[--text-body] hover:bg-[--background-dark-blue] ${
                        i18n.language === "en" && "bg-[--background-dark-blue]"
                      } cursor-pointer`}
                      onClick={() => {
                        toogleLenguaje("en");
                        setIsMenu(false);
                      }}
                    >
                      <FlagIcon code="US" className="rounded-[3px]" />
                      Eng
                    </li>
                    <li
                      className={`py-1 px-2 flex items-center gap-4 rounded-md text-[--text-body] hover:bg-[--background-dark-blue] ${
                        i18n.language === "pt" && "bg-[--background-dark-blue]"
                      } cursor-pointer`}
                      onClick={() => {
                        toogleLenguaje("pt");
                        setIsMenu(false);
                      }}
                    >
                      <FlagIcon code="PT" className="rounded-[3px]" />
                      Por
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
            {/* <div className="absolute top-0 right-0 transition group-hover:translate-y-2 translate-y-0 opacity-0 invisible group-hover:opacity-100 z-50 group-hover:visible duration-500 ease-in-out group-hover:transform min-w-[220px] transform">
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
            </div> */}
          </div>
          <CustomSwitch />
        </div>
      </div>
    </div>
  );
};

export default Header;
