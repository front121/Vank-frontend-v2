import { useState } from "react";
import Vank from "../../assets/Vank.png";
import { useTranslation } from "react-i18next";
import World from "../../assets/Icon/World";
import ModoLight from "../../assets/Icon/ModoLight";
import ModoDark from "../../assets/Icon/ModoDark";
import { useTheme } from "../../Context/ThemeContext";
import SingIn from "./SingIn/SingIn";
import SingUp from "./SingUp/SingUp";

import video_vank from "../../assets/Icon/video-bg-dark.mp4";
import AuthSkeleton from "./AuthSkeleton";

const Auth = () => {
  const { t } = useTranslation("global");
  const [isvisible, setIsvisible] = useState(false);
  const { theme, toggleDarkMode } = useTheme();
  const [rotate, setRotate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // cambio de modo
  const toggle = () => {
    setRotate(true);

    setTimeout(() => {
      setRotate(false);
      toggleDarkMode();
    }, 200); // Ajusta la duración de la transición según tus necesidades
  };

  const handleLoad = () => {
    setLoading(false);
  };

  const handleError = () => {
    setLoading(false);
    setError(true);
  };

  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden dark:bg-[#13171d]">
      {/* {loading && <AuthSkeleton />} */}
      {/* <AuthSkeleton /> */}
      {error && <p>Error al cargar el video</p>}
      <video
        src={video_vank}
        autoPlay
        className="absolute object-cover w-full h-full"
        loop
        muted
        onLoadedData={handleLoad}
        onError={handleError}
        // preload="none"
      />
      <div className="hidden h-full w-[52%] 2xl:w-[55%] xl:flex flex-col items-center justify-center bg-transparent transition-all duration-300 ">
        <div className="w-[450px] h-[250px] flex flex-col justify-center items-center z-50">
          <div className="flex justify-center items-center w-[446px] h-[220px] ">
            <img src={Vank} className="w-full h-full object-cover" alt="" />
          </div>
          <p className="text-lg text-[--text-body] mb-3 min-w-[491px] text-center ">
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
          <p className="text-xl text-[--text-body] font-bold mb-3">
            {t("Auth.common.welcome")}
          </p>
        </div>
      </div>
      <div className="h-full w-full md:w-[70%] lg:w-[48%] 2xl:w-[41%] flex justify-center items-center  bg-transparent transition-all duration-300">
        <div className="w-full sm:w-[80%] flex flex-col bg-[--background-soft-blue] py-[40px] px-[40px] rounded-[32px]  transition-all duration-700 overflow-hidden z-50">
          <div className="flex items-center justify-between mb-7">
            <div className="flex gap-2 items-center justify-center">
              <p
                className={`transition-colors duration-300 ease-in-out text-sm sm:text-base  font-sans flex justify-center items-center min-w-[93.5px] max-w-max px-3 py-3 h-[32px] ${
                  !isvisible && "bg-[--dark-gray]"
                }  text-[--text-body] rounded-[50px] cursor-pointer`}
                onClick={() => setIsvisible(false)}
              >
                {t("Auth.login.loginButton")}
              </p>
              <p
                className={`transition-colors duration-500 ease-in-out text-[16px] text-sm sm:text-base flex justify-center items-center min-w-[93.5px] max-w-max px-3 py-3 h-[32px] ${
                  isvisible && "bg-[--dark-gray]"
                }  text-[--text-body] rounded-[50px] cursor-pointer`}
                onClick={() => setIsvisible(true)}
              >
                {t("Auth.register.registerButton")}
              </p>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="flex justify-center items-center gap-2">
                <span className="text-[--text-body] text-sm">{"Eng"}</span>
                <World className="sm:w-[20px]  h-[23px] cursor-pointer transform  transition duration-300 ease-in-out" />
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
            </div>
          </div>
          <div
            className={`w-full flex  relative transition-all duration-1000 ${
              !isvisible ? "h-[415px]" : "h-[450px]"
            }`}
          >
            <SingIn isvisible={isvisible} setIsvisible={setIsvisible} />
            <SingUp isvisible={isvisible} setIsvisible={setIsvisible} />
            {/* <SingUp /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
