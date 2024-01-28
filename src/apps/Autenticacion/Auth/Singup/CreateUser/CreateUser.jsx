import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import CryptoJS from "crypto-js";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import world from "../../../../../assets/world.svg";
import Support from "../../../../../assets/Support.svg";
import ModoDark from "../../../../../assets/ModoDark.svg";
import ModoLight from "../../../../../assets/ModoLight.svg";
import Vanks from "../../../../../assets/Vanks.png";
import Check from "../../../../../assets/Check.svg";
import CustomButton from "../../../../Shared/CustomButton/CustomButton";
import CustomImage from "../../../../Shared/CustomImage/CustomImage";
import CustomInput from "../../../../Shared/CustomInput/CustomInput";
import Opt from "../Opt/Opt";
import CreatePassword from "../CreatePassword/CreatePassword";

const CreateUser = ({
  currentView,
  handleNext,
  handleBack,
  email,
  theme,
  rotate,
  toggle,
}) => {
  const [t, i18n] = useTranslation("global");

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalInfo, setIsModalInfo] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

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

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div
      className={`w-full h-full absolute flex flex-col justify-center items-center transition-transform duration-300 dark:bg-[#13171d] ${
        currentView !== 2 ? "translate-x-full" : "translate-x-0 visible"
      } `}
    >
      {/* header */}
      <div className="fixed top-0 w-full flex justify-between dark:bg-[#13171d] px-5 py-5">
        <div className="flex justify-center items-center w-[141.6px] h-[60px]">
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
              className="w-[20px]  h-[20px] cursor-pointer transform  transition duration-300 ease-in-out"
            />
            <div className="absolute top-0 right-0 transition group-hover:translate-y-2 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[220px] transform">
              <div className="relative top-6 py-5 px-4 dark:bg-[#191E25] rounded-md shadow-xl w-full text-white">
                <p className="mb-3 text-[#A7A7AF] font-bold">Languaje</p>
                <CustomInput
                  inputClassName={`w-full dark:bg-[#13171d] p-[8px] pl-[12px] rounded-[8px] text-sm mb-3 placeholder:text-[#A7A7AF]`}
                  onChange={handleChangeInput}
                  value={searchTerm}
                  type="text"
                  placeholder="Search"
                />
                <ul className="space-y-2">
                  {filteredLanguages.map((language, index) => (
                    <li
                      key={index}
                      className={`p-2 hover:text-[#FAE100] ${
                        i18n.language === language.len && "text-[#FAE100]"
                      }`}
                      onClick={() => i18n.changeLanguage(language.len)}
                    >
                      {language.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Theme */}
          {theme === "dark" ? (
            <CustomImage
              src={ModoLight}
              alt="light"
              className={`w-[20px] h-[20px] cursor-pointer transform ${
                rotate && "rotate-45 scale-50"
              } transition duration-300 ease-in-out`}
              onclick={toggle}
            />
          ) : (
            <CustomImage
              src={ModoDark}
              alt="light"
              className={`w-[20px] h-[20px] cursor-pointer transform ${
                rotate && "rotate-45 scale-50"
              } transition duration-300 ease-in-out`}
              onclick={toggle}
            />
          )}
        </div>
      </div>

      {/* Modal */}
      <div className="absolute inset-0 flex justify-center items-center transition-transform duration-300">
        <Opt
          handleNext={handleNext}
          handleBack={handleBack}
          nextPage={nextPage}
          email={email}
          isModalInfo={isModalInfo}
          setIsModalInfo={setIsModalInfo}
          currentPage={currentPage}
          currentView={currentView}
        />
        <CreatePassword currentPage={currentPage} prevPage={prevPage} />
      </div>

      {/* soporte */}
      <div className="absolute right-7 bottom-7 px-[12px] py-[11px]  bg-[#E5D714] rounded-full flex gap-2 justify-center items-center transition-all duration-500 cursor-pointer group">
        <img src={Support} alt="Support" className="font-bold transition-all" />
        {/* <span className=" font-semibold  group-hover:block transition-all duration-300 translate-x-5">Support</span> */}
      </div>

      {/* footer */}
      <p className="absolute left-7 bottom-7 text-base font-normal leading-[20.8px] text-[#FFFFFF]">
        Vank © 2024
      </p>
    </div>
  );
};

export default CreateUser;
