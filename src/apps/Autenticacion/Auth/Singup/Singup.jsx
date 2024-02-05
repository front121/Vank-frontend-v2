import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

import Check2 from "../../../../assets/Icon/Check2.svg";
import Check from "../../../../assets/Icon/Check.svg";
import XIcon from "../../../../assets/Icon/XIcon.svg";
import Login from "../../../../assets/Icon/Login.svg";

import CustomButton from "../../../Shared/CustomButton/CustomButton";
import CustomInput from "../../../Shared/CustomInput/CustomInput";
import CustomImage from "../../../Shared/CustomImage/CustomImage";
import { toast } from "react-toastify";

import loadinss from "../../../../assets/loading-white.gif";
import CustomLenguaje from "../../../Shared/CustomLenguaje/CustomLenguaje";

export const EmailValidationSchema = Yup.object({
  email: Yup.string()
    .email("Not valid")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Not valid")
    .required("email is required"),
});

const Singup = ({
  toogleLenguaje,
  handleVisibleLog,
  currentView,
  handleNextRegister,
  email,
  setEmail,
  isvisible,
}) => {
  const [t] = useTranslation("global");

  const [checked, setChecked] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});


  const handleCheckboxChange = () => {
    setChecked(!checked);
    setIsChecked(false);
  };

  const handleChangeSing = async (e) => {
    const { name, value } = e.target;

    if (value.trim() === "") {
      // Si el valor está vacío, se considera válido
      setErrors("");
      setEmail(value);
      return;
    }

    try {
      await EmailValidationSchema.validate(
        { [name]: value },
        { abortEarly: false }
      );
      setErrors({ ...errors, [name]: "" });
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors({ ...errors, ...newErrors });
    }
    setEmail(value);
  };

  const onRegister = () => {};

  const handleSubmitReg = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    toast.dismiss();

    try {
      if (!checked && !email) {
        setIsChecked(true);
        toast.error("Llena todos los campos!!", {
          theme: "dark",
          position: "top-left",
        });
      }
      await EmailValidationSchema.validate({ email }, { abortEarly: false });
      if (!checked) {
        setIsLoading(false);
        toast.error("Acepta los terminos!", {
          theme: "dark",
          position: "top-left",
        });
        return setIsChecked(true);
      }

      // onRegister(email);
      setTimeout(() => {
        handleNextRegister();
        setChecked(false);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors({ ...errors, ...newErrors });
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isvisible) {
      setErrors({ });
      setIsChecked(false);
    }
  }, [isvisible]);

  // isvisible

  return (
    <div
      className={`h-full w-full flex flex-col transition duration-700 ${
        !isvisible
          ? "translate-x-full hidden opacity-0"
          : "translate-x-0 block opacity-100"
      }`}
    >
      <p className="text-sm sm:text-base font-bold text-[#FFFFFF] mt-4 mb-4 leading-[20.8px] w-[217px] h-[41px] py-[10px]">
        Create personal account
      </p>

      <CustomInput
        className="w-full flex flex-col gap-y-2 mb-5 py-2"
        inputClassName={`h-[42px] pt-[11px] pb-[13px] pr-[30px] pl-[13px] rounded-[10px] bg-[#3E4347] text-white outline-none focus:outline-none placeholder:text-[#7A7878] font-normal`}
        label={"Email"}
        onChange={handleChangeSing}
        value={email}
        error={errors.email}
        icon={XIcon}
        iconCheck={Check}
        type="email"
        name="email"
        placeholder="Enter email"
      />

      <p className="text-sm sm:text-base font-normal text-[#FFFFFF] w-full sm:w-[415px] sm:px-2 mb-7">
        {t("Auth.register.sendConfirmationCode.WeWillSendYouA")}
        <span className="font-bold ml-1">
          {t("Auth.register.sendConfirmationCode.code")}
        </span>
        <span className="font-normal ml-1">
          {t("Auth.register.sendConfirmationCode.toYour")}
        </span>
        <span className="font-bold ml-1">
          {t("Auth.register.sendConfirmationCode.email")}
        </span>
        <span className="font-normal ml-1">
          {t("Auth.register.sendConfirmationCode.toConfirm")}
        </span>
      </p>

      <div className="flex items-center gap-x-5 transition-transform duration-500 sm:w-[431px] h-[42px] sm:px-2 mb-6">
        <div className="flex items-center relative cursor-pointer">
          <input
            type="checkbox"
            className={`appearance-none w-[22px] h-[22px] rounded-[4px] relative bg-[#3E4347] cursor-pointer ${
              isChecked ? "border-2 border-red-600" : ""
            } `}
            onChange={handleCheckboxChange}
            checked={checked}
          />
          {checked && (
            <div
              className="absolute w-full h-full flex justify-center items-center"
              onClick={handleCheckboxChange}
            >
              <CustomImage
                src={Check2}
                alt="Check2"
                className="text-[#FAE100] w-[15px] h-[10px]"
              />
            </div>
          )}
        </div>
        <p className="text-sm sm:text-base text-[#FFFFFF] sm:w-[355px]">
          By creating an account , i agree to Vank´s{" "}
          <span className="font-bold underline cursor-pointer">
            Terms of service
          </span>{" "}
          and
          <span className="font-bold underline cursor-pointer ml-1">
            privacy policy
          </span>
        </p>
      </div>

      <div className="py-2 flex justify-center items-center mb-6">
        <CustomButton
          className={`w-full h-[42px] flex justify-center items-center  bg-[#FFED00] rounded-[60px] px-7 py-4 text-lg font-bold `}
          onclick={handleSubmitReg}
        >
          {isLoading ? (
            <span className="text-base font-bold  py-1">
              <CustomImage
                src={loadinss}
                alt="Check2"
                className="text-black w-[30px] h-[30px]"
              />
            </span>
          ) : (
            <>
              <span className="min-w-[70px] px-3">{t("Auth.register.button")}</span>

              <CustomImage src={Login} alt="Login" className="w-[28px]" />
            </>
          )}
        </CustomButton>
      </div>

      <div className="space-y-[20px] transition-all duration-200 ease-out max-h-[97px] pb-2">
        <div className="w-full text-center text-[#FFFFFF] text-base font-normal  transition-all duration-300">
          {t("Auth.register.newUserPrompt")}
          <span
            className=" text-[#E5D714] ml-1 cursor-pointer font-bold"
            onClick={handleVisibleLog}
          >
            {t("Auth.register.createAccount")}
          </span>
        </div>

        {/* <div className="w-full flex justify-center items-center">
          <CustomLenguaje className="" toogleLenguaje={toogleLenguaje} />
        </div> */}

        {/* <div className="w-full text-center text-[#FFFFFF] text-base font-normal transition-all duration-200 ease-out">
          {t("Auth.login.changeLanguage")}
          <CustomButton
            className="text-[#E5D714] ml-1 cursor-pointer font-bold"
            onclick={toogleLenguaje}
          >
            {t("Auth.login.language")}
          </CustomButton>
        </div> */}
      </div>
    </div>
  );
};

export default Singup;
