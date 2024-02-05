import React, { useState } from "react";


import Opt from "../Opt/Opt";
import CreatePassword from "../CreatePassword/CreatePassword";
import HeaderAuth from "../../HeaderAuth/HeaderAuth";
import FooterAuth from "../../FooterAuth/FooterAuth";

const CreateUser = ({
  currentViewRegister,
  handleNextRegister,
  handleBackRegister,
  email,
}) => {
  // const [t, i18n] = useTranslation("global");

  const [isModalInfo, setIsModalInfo] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div
      className={`w-full h-full absolute flex flex-col justify-center items-center transition-transform duration-300 dark:bg-[#191E25] ${
        currentViewRegister !== 2 ? "translate-x-full" : "translate-x-0 visible z-10"
      } `}
    >
      {/* Header */}
      <HeaderAuth />

      {/* Modal */}
      <div className="absolute inset-0 flex justify-center items-center transition-transform duration-300 ">
        <Opt
          handleNextRegister={handleNextRegister}
          handleBackRegister={handleBackRegister}
          nextPage={nextPage}
          email={email}
          isModalInfo={isModalInfo}
          setIsModalInfo={setIsModalInfo}
          currentPage={currentPage}
          currentViewRegister={currentViewRegister}
        />
        <CreatePassword currentPage={currentPage} prevPage={prevPage} />
      </div>

      {/* Footer */}
      <FooterAuth />
    </div>
  );
};

export default CreateUser;
