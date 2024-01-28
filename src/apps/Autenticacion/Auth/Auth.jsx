import React, { useEffect, useState } from "react";
import Vank from "../../../assets/Vank.png";
import ModoLight from "../../../assets/ModoLight.svg";
import ModoDark from "../../../assets/ModoDark.svg";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../Context/ThemeContext";
import i18next from "i18next";
import Singup from "./Singup/Singup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Opt from "./Singup/Opt/Opt";
import SingIn from "./SingIn/SingIn";
import CreateUser from "./Singup/CreateUser/CreateUser";

const Auth = () => {
  const [t, i18n] = useTranslation("global");
  const navigate = useNavigate();
  const [isvisible, setIsvisible] = useState(false);
  const currentLanguage = i18next.language;
  const [rotate, setRotate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentView, setCurrentView] = useState(1);
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
    if (currentView === 1) {
      setEmail("");
    }
  }, [currentView]);

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
    } else {
      i18n.changeLanguage("es");
      localStorage.setItem("lenguaje", "es");
    }
  };

  const handleNext = () => {
    setCurrentView(prevCount => prevCount + 1);
  };
  
  const handleBack = () => {
    setCurrentView(prevCount => prevCount - 1);
  };

  return (
    <div className="relative h-screen flex justify-center items-center overflow-hidden dark:bg-[#13171d]">
      <div
        className={`h-full w-full flex justify-center items-center transition-transform duration-300 dark:bg-[#13171d] visible ${
          currentView === 1 ? "translate-x-0" : "-translate-x-full invisible"
        }`}
      >
        <div className=" flex w-screen h-screen transition-all duration-300">
          <div className="w-[50%] flex flex-col items-center justify-center bg-[#191E25] transition-all duration-300 ">
            <div className="flex justify-center items-center w-[100%] sm:h-[112px] 2xl:h-[30%]">
              <img src={Vank} className="w-full h-full object-contain" alt="" />
            </div>
            <p className="text-lg lg:text-xl text-white font-bold mb-3">
              {t("Auth.common.welcome")}
            </p>
            <p className="text-sm md:text-base xl:text-lg text-white font-bold mb-3">
              {t("Auth.common.joinPlatform")}
            </p>
          </div>

          <div
            className={`w-[50%] flex justify-center items-center  bg-[#FFED00] transition-all duration-300`}
          >
            <div className="w-[75%] h-[88%] flex flex-col bg-[#191E25] px-12 py-9 rounded-[32px]  transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <p
                    className={`transition-colors duration-300 ease-in-out text-base font-bold font-pp-object-sans flex justify-center items-center min-w-[93.5px] max-w-max px-3 py-3 h-[32px] ${
                      !isvisible && "bg-[#373D46]"
                    }  text-[#F8F8F8] rounded-[50px] cursor-pointer`}
                    onClick={handleVisibleLog}
                  >
                    {t("Auth.login.loginButton")}
                  </p>
                  <p
                    className={`transition-colors duration-300 ease-in-out text-[16px] font-bold font-pp-object-sans flex justify-center items-center min-w-[93.5px] max-w-max px-3 py-3 h-[32px] ${
                      isvisible && "bg-[#373D46]"
                    }  text-[#F8F8F8] rounded-[50px] cursor-pointer`}
                    onClick={handleVisibleReg}
                  >
                    {t("Auth.register.registerButton")}
                  </p>
                </div>
                {theme === "dark" ? (
                  <img
                    src={ModoLight}
                    alt=""
                    className={`w-[25.55px]  h-[25.67px] cursor-pointer transform ${
                      rotate && "rotate-45 scale-50"
                    } transition duration-300 ease-in-out`}
                    onClick={toggle}
                  />
                ) : (
                  <img
                    src={ModoDark}
                    alt=""
                    className={`w-[25.55px] h-[25.67px] cursor-pointer transform ${
                      rotate && "rotate-45 scale-50"
                    } transition duration-300 ease-in-out`}
                    onClick={toggle}
                  />
                )}
              </div>

              {!isvisible && (
                <SingIn
                  toogleLenguaje={toogleLenguaje}
                  formData={formData}
                  setFormData={setFormData}
                  handleVisibleReg={handleVisibleReg}
                  onLogin={onLogin}
                />
              )}
              {isvisible && (
                <Singup
                  toogleLenguaje={toogleLenguaje}
                  // formDataSing={formDataSing}
                  // setFormDataSing={setFormDataSing}
                  // onRegister={onRegister}
                  // isLoading={isLoading}
                  handleVisibleLog={handleVisibleLog}
                  currentView={currentView}
                  handleNext={handleNext}
                  email={email}
                  setEmail={setEmail}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 w-full h-full invisible">
        <CreateUser
          currentView={currentView}
          handleNext={handleNext}
          handleBack={handleBack}
          email={email}
          theme={theme}
          rotate={rotate}
          toggle={toggle}
        />
      </div>
    </div>
  );
};
export default Auth;
