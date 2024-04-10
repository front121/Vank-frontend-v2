import { useCallback, useEffect, useState, useRef } from "react";
import _Vank from "../../assets/Vank.png";
import { useTranslation } from "react-i18next";
import SingUp from "./SingUp/SingUp";

import video_vank from "@assets/Icon/video-bg-dark.mp4";
// import video_vank from "../../assets/Icon/video-bg-dark.mp4";
import CustomSwitch from "@shared/CustomSwitch/CustomSwitch";
import RevealText from "@shared/RevealText/RevealText";
import SingIn from "./SingIn/SingIn";
import World from "@/assets/Icon/World";
import Vank from "@/assets/Icon/Vank";
import { useService } from "@redtea/react-inversify";
import { CountryRepository } from "@/Context/Country/domain/domain";
import CustomNotification from "../Shared/CustomNotification/CustomNotification";
import { FlagIcon } from "react-flag-kit";
import { AnimatePresence, motion } from "framer-motion";

const Auth = () => {
  const [isvisible, setIsvisible] = useState(false);
  const [t, i18n] = useTranslation("global");

  const [loading, setLoading] = useState(true);
  const [isMenu, setIsMenu] = useState(false);
  const [error, setError] = useState(false);

  const menuRef = useRef<any>(null);

  const [showModal, setShowModal] = useState({
    show: false,
    title: "",
    descripcion: "",
  });

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

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

  // useEffect(() => {
  //   const video = document.getElementById("background-video");
  //   video.addEventListener("loadeddata", () => {
  //     console.log(video);

  //     setLoading(false);
  //   });
  // }, []);

  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden dark:bg-[#13171d]">
      {/* {loading && <AuthSkeleton />} */}
      {/* <AuthSkeleton /> */}
      {/* {error && <p>Error al cargar el video</p>} */}
      {/* <video
        id="background-video"
        src={video_vank}
        autoPlay
        className="absolute object-cover w-full h-full"
        loop
        muted
        // onLoadedData={handleLoad}
        onError={handleError}
        preload="auto"
      /> */}
      <div className="hidden h-full w-[52%] 2xl:w-[55%] xl:flex flex-col items-center justify-center bg-transparent transition-all duration-300 z-40">
        <div className="w-[450px] h-[250px] flex flex-col justify-center items-center z-50">
          {/* <div className="flex justify-center items-center w-[446px] h-[220px] ">
            <img src={_Vank} className="w-full h-full object-cover" alt="" />
          </div> */}
          <Vank className="w-[270px]" />
          <RevealText>
            <p className="text-base text-[--text-body] mb-3 min-w-[491px] text-center ">
              {t("Auth.common.joinPlatform.joinToThe")}{" "}
              <span className="font-bold">
                {t("Auth.common.joinPlatform.bestPlatform")}{" "}
              </span>
              {t("Auth.common.joinPlatform.to")}{" "}
              <span className="font-bold">
                {t("Auth.common.joinPlatform.save")}{" "}
              </span>
              {t("Auth.common.joinPlatform.and")}{" "}
              <span className="font-bold">
                {t("Auth.common.joinPlatform.send")}{" "}
              </span>
              {t("Auth.common.joinPlatform.your")}{" "}
              <span className="font-bold">
                {t("Auth.common.joinPlatform.money")}{" "}
              </span>
            </p>
          </RevealText>
          <RevealText>
            <p className="text-lg text-[--text-body] font-bold mb-3">
              {t("Auth.common.welcome")}
            </p>
          </RevealText>
        </div>
      </div>
      <div className="h-full w-full md:w-[70%] lg:w-[48%]  2xl:w-[41%] flex justify-center items-center  bg-transparent transition-all duration-300 z-40">
        <div className="relative w-[90%] sm:w-[75%] md:w-[85%] lg:w-[78%] 2xl:w-[70%] flex flex-col bg-[--background-soft-blue] p-[35px] rounded-[32px]  transition-all duration-700 overflow-hidden z-50 scale-90 2xl:scale-100">
          <div className="flex items-center justify-between mb-7 ">
            <div className="flex gap-2 items-center justify-center">
              <p
                className={`transition-colors duration-300 ease-in-out text-sm sm:text-[15px]  font-sans flex justify-center items-center min-w-[93.5px] max-w-max px-3 py-3 h-[32px] ${
                  !isvisible && "bg-[--dark-gray]"
                }  text-[--text-body] rounded-[50px] cursor-pointer`}
                onClick={() => setIsvisible(false)}
              >
                {t("Auth.login.button")}
              </p>
              <p
                className={`transition-colors duration-500 ease-in-out text-[16px] text-sm sm:text-[15px] flex justify-center items-center min-w-[93.5px] max-w-max px-3 py-3 h-[32px] ${
                  isvisible && "bg-[--dark-gray]"
                }  text-[--text-body] rounded-[50px] cursor-pointer`}
                onClick={() => setIsvisible(true)}
              >
                {t("Auth.register.button")}
              </p>
            </div>
            <div className=" flex justify-center items-center gap-3 ">
              <div
                className="relative flex justify-center items-center gap-2"
                ref={menuRef}
              >
                <span className="text-[--text-body] text-sm">
                  {i18n.language === "es" ? "Es" : "Eng"}
                </span>
                {/* <World className="sm:w-[20px]  h-[23px] cursor-pointer transform  transition duration-300 ease-in-out" /> */}
                <World
                  className="sm:w-[20px] cursor-pointer transform  transition duration-300 ease-in-out"
                  // onClick={toogleLenguaje}
                  onClick={() => setIsMenu(true)}
                />
                <AnimatePresence>
                  {isMenu && (
                    <motion.ul
                      className="bg-[--dark-gray] absolute w-28 z-50 right-0 top-7 rounded-lg p-2 flex flex-col justify-between gap-1"
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
                          i18n.language === "es" &&
                          "bg-[--background-dark-blue]"
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
                          i18n.language === "en" &&
                          "bg-[--background-dark-blue]"
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
                          i18n.language === "pt" &&
                          "bg-[--background-dark-blue]"
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
              <CustomSwitch />
            </div>
          </div>
          <div
            className={`w-full flex  relative transition-all duration-1000 ${
              !isvisible ? "h-[410px]" : "h-[470px] 2xl:h-[470px]"
            }`}
          >
            <SingIn
              isvisible={isvisible}
              setIsvisible={setIsvisible}
              showModal={showModal}
              setShowModal={setShowModal}
            />
            <SingUp isvisible={isvisible} setIsvisible={setIsvisible} />
            {/* <SingUp /> */}
          </div>
        </div>
      </div>

      <CustomNotification
        title={showModal.title}
        description={showModal.descripcion}
        showModal={showModal.show}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default Auth;
