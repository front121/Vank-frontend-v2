import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";

import Check from "../../../../assets/Check.svg";
import XIcon from "../../../../assets/XIcon.svg";

import CustomButton from "../../../Shared/CustomButton/CustomButton";
import CustomInput from "../../../Shared/CustomInput/CustomInput";
import CustomImage from "../../../Shared/CustomImage/CustomImage";
import { toast } from "react-toastify";

import loadinss from "../../../../assets/loading-white.gif";

export const EmailValidationSchema = Yup.object({
  email: Yup.string()
    .email("Not valid")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Not valid")
    .required("email is required"),
});

const length = 6;

const Singup = ({
  toogleLenguaje,
  handleVisibleLog,
  currentView,
  handleNext,
  email,
  setEmail,
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
        handleNext();
        // setChecked();
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

  return (
    <div className="h-full w-full flex flex-col ">
      <div>
        <p className="text-base font-bold text-[#FFFFFF] mt-6 mb-6 leading-[20.8px]">
          Create personal account
        </p>

        <CustomInput
          className="w-full flex flex-col gap-y-2 mb-6"
          inputClassName={`h-[42px] pt-[11px] pb-[13px] pr-[30px] pl-[13px] rounded-[10px] bg-[#3E4347] text-white outline-none focus:outline-none placeholder:text-[#7A7878] `}
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

        <p className="text-base font-normal text-[#FFFFFF]">
          We will send you a code to your email to confirm
        </p>

        <div className="flex items-center gap-4 mt-6">
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
                  src={Check}
                  alt="Check"
                  className="text-[#FAE100] w-[15px] h-[10px]"
                />
              </div>
            )}
          </div>
          <p className="text-base text-[#FFFFFF] ">
            By creating an account , i agree to Vank´s{" "}
            <span className="font-bold underline cursor-pointer">
              Terms of service
            </span>{" "}
            and
            <span className="font-bold underline cursor-pointer">
              privacy policy
            </span>
          </p>
        </div>
      </div>

      <CustomButton
        className={`w-full h-[42px] flex justify-center items-center bg-[#FFED00] rounded-[60px] px-7 py-4 text-lg font-bold mt-9 mb-8 `}
        onclick={handleSubmitReg}
      >
        {isLoading ? (
          <span className="text-base font-bold flex gap-1 items-center py-1">
            <CustomImage
              src={loadinss}
              alt="Check"
              className="text-black w-[30px] h-[30px]"
            />
          </span>
        ) : (
          t("Auth.register.button")
        )}
      </CustomButton>

      <div className="space-y-6 transition-all duration-200 ease-out">
        <div className="w-full text-center text-[#FFFFFF] text-base font-normal mb-1 transition-all duration-300">
          {t("Auth.register.newUserPrompt")}
          <span
            className=" text-[#E5D714] ml-1 cursor-pointer font-bold"
            onClick={handleVisibleLog}
          >
            {t("Auth.register.createAccount")}
          </span>
        </div>

        <div className="w-full text-center text-[#FFFFFF] text-base font-normal transition-all duration-200 ease-out">
          {t("Auth.login.changeLanguage")}
          <CustomButton
            className="text-[#E5D714] ml-1 cursor-pointer font-bold"
            onclick={toogleLenguaje}
          >
            {t("Auth.login.language")}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default Singup;
