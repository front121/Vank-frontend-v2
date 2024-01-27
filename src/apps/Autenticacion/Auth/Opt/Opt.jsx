import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import CryptoJS from "crypto-js";
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import world from "../../../../assets/world.svg";
import Support from "../../../../assets/Support.svg";
import ModoDark from "../../../../assets/ModoDark.svg";
import ModoLight from "../../../../assets/ModoLight.svg";
import Vanks from "../../../../assets/Vanks.png";
import close from "../../../../assets/close.svg";
import CustomButton from "../../../Shared/CustomButton/CustomButton";
import CustomImage from "../../../Shared/CustomImage/CustomImage";
import CustomInput from "../../../Shared/CustomInput/CustomInput";

const length = 6;

const Opt = ({ currentView, handleNext, email, theme, rotate, toggle }) => {
  const [t, i18n] = useTranslation("global");

  const [searchTerm, setSearchTerm] = useState("");

  const [count, setCount] = useState(0);

  const [isModalInfo, setIsModalInfo] = useState(true);

  const [otp, setOtp] = useState(new Array(length).fill(""));

  const inputRefs = useRef([]);

  const [fieldValidity, setFieldValidity] = useState(
    new Array(length).fill(true)
  );

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, [currentView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
    }, 1000);

    if (count === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    if (!currentView) {
      setCount(30);
    }
  }, [currentView]);

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

  const _replace = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d+$/; // Expresión regular para verificar si es un número de teléfono (sólo dígitos)

    if (emailRegex.test(value)) {
      return value.replace(/(?<=.{5}).(?=[^@]*@)/g, "*");
    } else if (phoneRegex.test(value)) {
      return value.replace(/(?<=.{3}).(?=.{4})/g, "*");
    }

    return "";
  };

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return false;
    const newOtp = [...otp];

    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger
    // const combineOtp = newOtp.join("");
    // if (combineOtp.length === length) onOtpSubmit(combineOtp);

    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
    const newFieldValidity = [...fieldValidity];
    newFieldValidity[index] = true;
    setFieldValidity(newFieldValidity);
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
    const newFieldValidity = new Array(length).fill(true);
    setFieldValidity(newFieldValidity);
    // optional
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  const onOtpSubmit = () => {
    // Validar el código OTP (aquí puedes agregar tus propias condiciones)
    const isValid = otp.every((digit) => !isNaN(digit) && digit !== "");
    if (!isValid) {
      const newFieldValidity = otp.map(
        (digit) => !isNaN(digit) && digit !== ""
      );
      setFieldValidity(newFieldValidity);
      return;
    }

    try {
      if (otp.join("") !== "23232") {
        throw new Error("Codigo invalido");
      }
      toast.success("Codigo correcto!", {
        theme: "dark",
        position: "top-left",
      });
    } catch (error) {
      const newFieldValidity = new Array(length).fill(false);
      setFieldValidity(newFieldValidity);
      toast.error("Codigo Incorrecto!", {
        theme: "dark",
        position: "top-left",
      });
    }
  };

  const generateSecurityCode = () => {
    // Reinicia el contador a 90 segundos
    setCount(60);
  };

  // Función para nohandleChangeInputrmalizar el término de búsqueda
  const normalizeTerm = (term) =>
    equivalenceMap[term.toLowerCase()] || term.toLowerCase();

  // Filtrar idiomas según el término de búsqueda
  const filteredLanguages = languages.filter((language) =>
    normalizeTerm(language.name).includes(normalizeTerm(searchTerm))
  );

  return (
    <div
      className={`w-full h-full absolute flex flex-col justify-center items-center transition-transform duration-300 dark:bg-[#13171d] ${
        currentView ? "translate-x-full" : "translate-x-0 visible"
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

      {/* modal de verificacion */}
      <div className="w-11/12 lg:w-[40%]  p-8  rounded-xl m-auto shadow-lg overflow-hidden bg-[#191E25] relative">
        <p
          className="mb-3 text-base font-normal leading-[20.8px] text-[#FFFFFF] cursor-pointer"
          onClick={handleNext}
        >
          Back
        </p>
        <h2 className="text-[#FFFFFF] text-lg leading-[22.1px] font-bold">
          Email Verification
        </h2>
        <div className="mt-4 space-y-7 mb-5">
          <p className="text-base text-white">
            Please enter the 6 digit verification code that was sent to
            <span className="ml-1 font-bold">{email}</span>, the code is valid
            for 30 minutes.
          </p>
        </div>
        <div className="flex flex-col w-full overflow-hidden">
          <div className="w-full flex justify-between items-center">
            {otp.map((value, i) => {
              return (
                <input
                  key={i}
                  type="text"
                  ref={(input) => (inputRefs.current[i] = input)}
                  value={value}
                  name="otp"
                  onChange={(e) => handleChange(i, e)}
                  onClick={() => handleClick(i)}
                  onKeyDown={(e) => handleKeyDown(i, e)}
                  className={`w-[54px] h-[54px] rounded-[10px] bg-[#777777] text-center outline-none text-white text-xl font-bold ${
                    !fieldValidity[i] && "border-2 border-red-600"
                  }  focus:border-2 focus:border-[#E5D714]`}
                  maxLength={1}
                />
              );
            })}
          </div>
          <div className="w-full flex gap-2 items-center justify-start mt-3">
            {count === 0 ? (
              <CustomButton
                className={`text-right  text-[#E5D714] text-sm font-bold leading-[18.2px] cursor-pointer `}
                onclick={generateSecurityCode}
                disabled={false}
              >
                Resend Code
              </CustomButton>
            ) : (
              <span className="text-sm text-white font-bold">
                Resend in {count}s
              </span>
            )}
          </div>
          <div className="w-full flex  justify-center items-center mb-5 mt-5">
            <CustomButton
              className="group relative bg-[#E5D714] w-[445px] h-[42px] rounded-[60px] text-base font-bold leading-[20.8px] text-[#000000] "
              onclick={onOtpSubmit}
            >
              {t("Auth.Otp.OtpButton")}
              <div className="absolute inset-0 h-full w-full scale-0 rounded-[60px] transition-all duration-300 group-hover:scale-100 group-hover:bg-white/25" />
            </CustomButton>
          </div>
          <p
            className="text-sm text-white font-bold cursor-pointer leading-[18.2px]"
            onClick={() => setIsModalInfo(false)}
          >
            Didn't receive the code?
          </p>
        </div>
      </div>

      {/* info por si no recibe el codigo */}
      <div
        className={`fixed inset-0 z-20 bg-gray-800 bg-opacity-50 transition-all duration-300 flex justify-center items-center ${
          !isModalInfo ? "" : "invisible"
        }`}
      >
        <div
          className={`w-[450px] max-h-[540px] mx-auto dark:bg-[#13171d] rounded-[10px] p-7 transition-transform duration-500 ${
            isModalInfo ? "-translate-y-[170%]" : "translate-y-0"
          }`}
        >
          <h2 className="text-xl font-bold w-[80%] text-[#FFFFFF] mb-5">
            Didn't Receive the Email Verification Code?
          </h2>
          <p className="text-left w-[95%] text-base text-[#b6b9be] mb-5">
            The email verification code has been sent to your email. If you have
            not received the code after several attempts, please try the
            following:
          </p>
          <ol className="list-decimal list-inside mb-7">
            <li className="mb-2 text-base text-[#b6b9be]">
              Check if it is in your junk/spam mail.
            </li>
            <li className="mb-2 text-base text-[#b6b9be]">
              Make sure your email address is {email}
            </li>
            <li className="mb-2 text-base text-[#b6b9be] w-[350px]">
              The message may be delayed for a few minutes. Try again after 20
              minutes.
            </li>
            <li className="mb-2 text-base text-[#b6b9be]">
              Set up a whitelist of email addresses.
              <span className="text-[#E5D714] ml-1 underline">
                How to set email whitelists.
              </span>
            </li>
          </ol>
          <CustomButton
            className="w-full h-[40px] bg-[#E5D714] rounded-[5px] text-lg font-bold"
            onclick={() => setIsModalInfo(true)}
            label={"ok"}
          />
        </div>
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

export default Opt;
