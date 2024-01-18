import React, { useState } from "react";
import Vank from "../../../assets/Vank.png";
import ModoLight from "../../../assets/ModoLight.svg";
import ModoDark from "../../../assets/ModoDark.svg";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../../Context/ThemeContext";
import i18next from "i18next";
import * as Yup from "yup";
import SingIn from "./SingIn/SingIn";
import Singup from "./Singup/Singup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import CryptoJS from 'crypto-js';


export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^(?:[^\s@]+@[^\s@]+\.[^\s@]+|\d{10})$/,
      "Invalid email or Invalid phone (10 digits)"
    )
    .required("email or phone is required"),
  password: Yup.string()
    .min(6, "Min. 6 characters required.")
    .required("Password is required"),
});

export const registrationValidationSchema = Yup.object({
  fullNameSing: Yup.string()
    .matches(/^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s']+$/, "Invalid full name")
    .required("Full ame is required"),
  phoneSing: Yup.string()
    .matches(/^\d{10}$/, "Invalid phone (10 digits)")
    .required("phone is required"),
  emailSing: Yup.string()
    .email("Invalid email address.")
    .required("email is required"),
  passwordSing: Yup.string()
    .min(6, "Min. 6 characters required.")
    .required("Password is required"),
});

const Auth = () => {
  const [t, i18n] = useTranslation("global");
  const [isvisible, setIsvisible] = useState(false);
  const currentLanguage = i18next.language;
  const [rotate, setRotate] = useState(false);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


  const { theme, toggleDarkMode } = useTheme();

  // Estado para almacenar los valores de los inputs
  const [formDataLog, setFormDataLog] = useState({
    email: "",
    password: "",
  });

  const [formDataSing, setFormDataSing] = useState({
    fullNameSing: "",
    phoneSing: "",
    emailSing: "",
    passwordSing: "",
  });

  const [isValid, setValid] = useState({
    email: true,
    password: true,
    fullNameSing: true,
    phoneSing: true,
    emailSing: true,
    passwordSing: true,
  });

  const validateInput = (name, value, type) => {
    if (value.trim() === "") {
      // Si el valor está vacío, se considera válido
      setErrors({ ...errors, [name]: "" });
      return true;
    }

    try {
      if (type === "sing") {
        registrationValidationSchema.validateSyncAt(name, { [name]: value });
        setErrors({ ...errors, [name]: "" });
        return true;
      } else {
        loginValidationSchema.validateSyncAt(name, { [name]: value });
        setErrors({ ...errors, [name]: "" });
        return true;
      }
    } catch (error) {
      setErrors({ ...errors, [name]: error.message });
      return false;
    }
  };

  const onLogin = async (value) => {
    try {
      // Expresión regular para verificar si es un correo electrónico
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Expresión regular para verificar si es un número de teléfono (sólo dígitos)
      const phoneRegex = /^\d+$/;

      if (emailRegex.test(value?.email)) {
        console.log("Ingresaste un correo electrónico:", value?.email);
        const encryptedEmail = CryptoJS.AES.encrypt(value?.email, 'secret_key').toString();
        navigate(`/AuthOpt/${encryptedEmail}`)
      } else if (phoneRegex.test(value?.email)) {
        const encryptedEmail = CryptoJS.AES.encrypt(value?.email, 'secret_key').toString();
        navigate(`/AuthOpt/${encryptedEmail}`)
      }
      toast.success("Credenciales correctas!", {
        theme: theme === "dark" ? "dark" : "light",
        position: "top-left",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onRegister = async (newValue) => {
    try {
      console.log(newValue);
      toast.success("Usuario creado correctamente!", {
        theme: theme === "dark" ? "dark" : "light",
        position: "top-left",
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleVisibleLog = () => {
    setIsvisible(false);
    setFormDataSing({
      fullNameSing: "",
      phoneSing: "",
      emailSing: "",
      passwordSing: "",
    });
    setValid((prevValid) => ({
      ...prevValid,
      fullNameSing: true,
      phoneSing: true,
      emailSing: true,
      passwordSing: true,
    }));
  };

  const handleVisibleReg = () => {
    setIsvisible(true);
    setFormDataLog({
      email: "",
      password: "",
    });
    setValid((prevValid) => ({
      ...prevValid,
      email: true,
      password: true,
    }));
  };

  const toggle = () => {
    setRotate(true);

    setTimeout(() => {
      setRotate(false);
      toggleDarkMode();
    }, 200); // Ajusta la duración de la transición según tus necesidades
  };

  const toogleLenguaje = () => {
    if (currentLanguage === "es") {
      i18n.changeLanguage("en");
      localStorage.setItem("lenguaje", "en");
    } else {
      i18n.changeLanguage("es");
      localStorage.setItem("lenguaje", "es");
    }
  };

  return (
    <div className="min-h-screen py-10 flex justify-center items-center dark:bg-[#13171d]">
      <div className="container mx-auto ">
        <div className=" flex flex-col lg:flex-row w-11/12 rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-[#191E25]">
            <div className="flex justify-center items-center w-[70%] sm:h-[112px] 2xl:h-[182px]">
              <img src={Vank} className="w-full h-full object-contain" alt="" />
            </div>
            <p className="text-lg lg:text-xl text-white font-bold mb-3">
              {t("Auth.common.welcome")}
            </p>
            <p className="text-base lg:text-lg text-white font-bold mb-3">
              {t("Auth.common.joinPlatform")}
            </p>
          </div>

          <div className="w-full lg:w-1/2 bg-[#FFED00] py-8 max-2xl:px-3 sm:px-12 md:px-7 xl:px-14 2xl:px-28">
            <div className="w-full h-full flex flex-col bg-[#191E25] py-7 px-10 rounded-[14px] overflow-y-auto">
              <div className="flex items-center justify-between">
                <div className="flex gap-4">
                  <p
                    className={`transition-colors duration-300 ease-in-out text-base font-bold py-2 px-7 ${
                      !isvisible && "bg-[#373D46]"
                    }  text-[#F8F8F8] rounded-[50px] cursor-pointer`}
                    onClick={handleVisibleLog}
                  >
                    {t("Auth.login.loginButton")}
                  </p>
                  <p
                    className={`transition-colors duration-300 ease-in-out text-base font-bold py-2 px-7 ${
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
                  isValid={isValid}
                  setValid={setValid}
                  errors={errors}
                  setErrors={setErrors}
                  validateInput={validateInput}
                  toogleLenguaje={toogleLenguaje}
                  formDataLog={formDataLog}
                  setFormDataLog={setFormDataLog}
                  onLogin={onLogin}
                />
              )}
              {isvisible && (
                <Singup
                  isValid={isValid}
                  setValid={setValid}
                  errors={errors}
                  setErrors={setErrors}
                  validateInput={validateInput}
                  toogleLenguaje={toogleLenguaje}
                  formDataSing={formDataSing}
                  setFormDataSing={setFormDataSing}
                  onRegister={onRegister}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Auth;
