import React, { useEffect, useState } from "react";
import Vank from "../../../assets/Vank.png";
import ModoLight from "../../../assets/Icon/ModoLight.svg";
import ModoDark from "../../../assets/Icon/ModoDark.svg";
import world from "../../../assets/Icon/world.svg";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../Context/ThemeContext";
import i18next from "i18next";
import Singup from "./Singup/Singup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import SingIn from "./SingIn/SingIn";
import CreateUser from "./Singup/CreateUser/CreateUser";
import Otp from "./SingIn/Otp/Otp";
import CustomImage from "../../Shared/CustomImage/CustomImage";

const Auth = () => {
  const [t, i18n] = useTranslation("global");
  const navigate = useNavigate();
  const [isvisible, setIsvisible] = useState(false);
  const currentLanguage = i18next.language;
  const [rotate, setRotate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentViewRegister, setCurrentViewRegister] = useState(1);
  const [currentViewLogin, setCurrentViewLogin] = useState(1);
  const { theme, toggleDarkMode } = useTheme();

  // registro
  const [email, setEmail] = useState("");
  //

  // login
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (currentViewRegister === 1) {
      setEmail("");
    }
  }, [currentViewRegister]);

  // handle login
  const onLogin = async () => {
    try {
      setIsLoading(true);
      // setTimeout(() => {
      //   toast.warning("Usuario no encontrado!", {
      //     theme: theme === "dark" ? "dark" : "light",
      //     position: "top-left",
      //   });
      //   setIsLoading(false);
      //   console.log(formData);
      // }, 1500);
      setTimeout(() => {
        setIsLoading(false);
        handleVisibleLog();
        toast.success("Credenciales correcto!", {
          theme: theme === "dark" ? "dark" : "light",
          position: "top-left",
        });
      }, 1500);
    } catch (error) {
      console.log(error);
    }
  };

  // handle registro
  const onRegister = async (newValue) => {
    try {
      setIsLoading(true);
      localStorage.setItem("Auth", JSON.stringify(newValue));

      setTimeout(() => {
        toast.success("Usuario creado correctamente!", {
          theme: theme === "dark" ? "dark" : "light",
          position: "top-left",
        });
        setIsLoading(false);
        // handleVisibleLog();
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  // visible el login
  const handleVisibleLog = () => {
    setIsvisible(false);
    setFormData({ email: "", password: "" });
  };

  // visible el registro
  const handleVisibleReg = () => {
    setIsvisible(true);
    setEmail("");
  };

  // cambio de modo
  const toggle = () => {
    setRotate(true);

    setTimeout(() => {
      setRotate(false);
      toggleDarkMode();
    }, 200); // Ajusta la duración de la transición según tus necesidades
  };

  // cambio de idioma
  const toogleLenguaje = () => {
    if (currentLanguage === "es") {
      i18n.changeLanguage("en");
      localStorage.setItem("lenguaje", "en");
    } else if (currentLanguage === "en") {
      i18n.changeLanguage("es");
      localStorage.setItem("lenguaje", "es");
    }
  };

  const handleNextRegister = () => {
    setCurrentViewRegister((prevCount) => prevCount + 1);
  };

  const handleBackRegister = () => {
    setCurrentViewRegister((prevCount) => prevCount - 1);
  };

  const handleNextLogin = () => {
    setCurrentViewLogin((prevCount) => prevCount + 1);
  };

  const handleBackLogin = () => {
    setCurrentViewLogin((prevCount) => prevCount - 1);
  };

  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden dark:bg-[#13171d]">
      <div
        className={`h-full w-full flex justify-center items-center transition-transform duration-300 dark:bg-[#13171d] visible ${
          currentViewRegister === 1 && currentViewLogin === 1
            ? "translate-x-0"
            : "-translate-x-full invisible"
        }`}
      >
        <div className=" flex w-screen h-screen transition-all duration-300">
          <div className="w-[50%] hidden lg:flex flex-col items-center justify-center bg-[#191E25] transition-all duration-300 ">
            <div className="w-[499px] h-[295px] flex flex-col justify-center items-center">
              <div className="flex justify-center items-center w-[446px] h-[214px] ">
                <img src={Vank} className="w-full h-full object-cover" alt="" />
              </div>
              <p className="text-lg text-white mb-3 min-w-[491px] text-center ">
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
              <p className="text-xl text-white font-bold mb-3">
                {t("Auth.common.welcome")}
              </p>
            </div>
          </div>

          <div
            className={`w-full h-full lg:w-[50%] p-3 flex justify-center items-center  bg-[#FFED00] transition-all duration-300`}
          >
            <div className="flex flex-col bg-[#191E25] py-[30px] px-[30px] rounded-[32px]  transition-all duration-300">
              <div className="flex items-center justify-between h-[36px] ">
                <div className="flex gap-2 ">
                  <p
                    className={`transition-colors duration-300 ease-in-out text-sm sm:text-base font-normal font-sans flex justify-center items-center min-w-[93.5px] max-w-max px-3 py-3 h-[32px] ${
                      !isvisible && "bg-[#373D46]"
                    }  text-[#F8F8F8] rounded-[50px] cursor-pointer`}
                    onClick={handleVisibleLog}
                  >
                    {t("Auth.login.loginButton")}
                  </p>
                  <p
                    className={`transition-colors duration-300 ease-in-out text-[16px] text-sm sm:text-base font-normal flex justify-center items-center min-w-[93.5px] max-w-max px-3 py-3 h-[32px] ${
                      isvisible && "bg-[#373D46]"
                    }  text-[#F8F8F8] rounded-[50px] cursor-pointer`}
                    onClick={handleVisibleReg}
                  >
                    {t("Auth.register.registerButton")}
                  </p>
                </div>
                <div className="flex justify-center items-center gap-3">
                  <CustomImage
                    src={world}
                    alt="Logo"
                    className="sm:w-[20px]  h-[23px] cursor-pointer transform  transition duration-300 ease-in-out"
                  />
                  <CustomImage
                    src={theme === "dark" ? ModoLight : ModoDark}
                    alt="Modo"
                    className={`sm:w-[25.55px] h-[25.67px] cursor-pointer transform ${
                      rotate ? "rotate-45 scale-50" : ""
                    } transition duration-300 ease-in-out`}
                    onClick={toggle}
                  />
                </div>
              </div>

              <SingIn
                toogleLenguaje={toogleLenguaje}
                formData={formData}
                setFormData={setFormData}
                handleVisibleReg={handleVisibleReg}
                onLogin={onLogin}
                handleNextLogin={handleNextLogin}
                isvisible={isvisible}
              />
              <Singup
                toogleLenguaje={toogleLenguaje}
                // formDataSing={formDataSing}
                // setFormDataSing={setFormDataSing}
                // onRegister={onRegister}
                // isLoading={isLoading}
                handleVisibleLog={handleVisibleLog}
                currentViewRegister={currentViewRegister}
                handleNextRegister={handleNextRegister}
                email={email}
                setEmail={setEmail}
                isvisible={isvisible}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 w-full h-full invisible">
        <CreateUser
          currentViewRegister={currentViewRegister}
          handleNextRegister={handleNextRegister}
          handleBackRegister={handleBackRegister}
          email={email}
          theme={theme}
          rotate={rotate}
          toggle={toggle}
        />
      </div>
      <div className="fixed inset-0 w-full h-full invisible">
        <Otp
          currentViewLogin={currentViewLogin}
          // handleNextRegister={handleNextRegister}
          handleBackLogin={handleBackLogin}
          // email={email}
          // theme={theme}
          // rotate={rotate}
          // toggle={toggle}
        />
      </div>
    </div>
  );
};

export default Auth;
