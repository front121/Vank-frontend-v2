import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import XIcon from "../../../../assets/XIcon.svg";
import Check from "../../../../assets/Check.svg";

// import { loginValidationSchema } from "../Auth";
import CustomInput from "../../../Shared/CustomInput/CustomInput";
import CustomButton from "../../../Shared/CustomButton/CustomButton";

export const loginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Not valid")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Not valid")
    .required("email is required"),
  password: Yup.string()
    .min(6, "Min. 8 characters required.")
    .matches(/[A-Z]/, "At least 1 uppercase letter")
    .matches(/[0-9]/, "At least 1 number")
    .required("Password is required"),
});

const SingIn = ({
  toogleLenguaje,
  currentView,
  handleNext,
  formData,
  setFormData,
  handleVisibleReg,
  onLogin,
}) => {
  const [t] = useTranslation("global");

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChangeLog = async (e) => {
    const { name, value } = e.target;

    if (value.trim() === "") {
      // Si el valor está vacío, se considera válido
      setErrors({ ...errors, [name]: "" });
      setFormData({ ...formData, [name]: value });
      return;
    }
    try {
      await Yup.reach(loginValidationSchema, name).validate(value);
      setErrors({ ...errors, [name]: "" });
    } catch (error) {
      setErrors({ ...errors, [name]: error.message });
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitLog = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await loginValidationSchema.validate(formData, { abortEarly: false });
      await onLogin();
      setTimeout(() => {
        setIsLoading(false);
      }, 1500);
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      console.log(newErrors);
      setErrors({ ...errors, ...newErrors });
      setIsLoading(false);
    }
  };

  return (
    <div className="h-full w-full flex flex-col mt-10">
      <CustomInput
        className="w-full flex flex-col gap-y-2 mb-6"
        inputClassName={`h-[42px] pt-[11px] pb-[13px] pr-[30px] pl-[13px] rounded-[10px] bg-[#3E4347] text-white outline-none focus:outline-none placeholder:text-[#7A7878] `}
        label={"Email"}
        onChange={handleChangeLog}
        value={formData?.email}
        error={errors.email}
        icon={XIcon}
        iconCheck={Check}
        type="email"
        name="email"
        placeholder="Enter email"
      />
      <CustomInput
        className="w-full flex flex-col gap-y-2 mb-2"
        inputClassName={`h-[42px] pt-[11px] pb-[13px] pr-[30px] pl-[13px] rounded-[10px] bg-[#3E4347] text-white outline-none focus:outline-none placeholder:text-[#7A7878] `}
        label={"Password"}
        onChange={handleChangeLog}
        value={formData?.password}
        error={errors.password}
        icon={XIcon}
        iconCheck={Check}
        showPassword={showPassword}
        togglePasswordVisibility={togglePasswordVisibility}
        type="password"
        name="password"
        placeholder="Enter Password"
      />

      <CustomButton
        className={`w-full h-[42px] flex justify-center items-center bg-[#FFED00] rounded-[60px] px-7 py-4 text-lg font-bold mt-9 mb-8 `}
        onclick={handleSubmitLog}
      >
        {isLoading ? (
          <span className="text-base font-bold flex items-center py-1">
            <svg
              width="15"
              height="15"
              fill="currentColor"
              className="mr-1 animate-spin"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
            </svg>
            Verificando
          </span>
        ) : (
          t("Auth.register.button")
        )}
      </CustomButton>

      <div className="space-y-4 transition-all duration-200 ease-out">
        <div>
          <div className="w-full text-center text-[#FFFFFF] text-base font-bold mb-2 transition-all duration-300">
            {t("Auth.login.newUserPrompt")}
            <span
              className=" text-[#E5D714] ml-1 cursor-pointer"
              onClick={handleVisibleReg}
            >
              {t("Auth.login.createAccount")}
            </span>
          </div>
          <p className="font-bold text-[#E5D714] text-center text-base ">
            {t("Auth.login.ForgotPassword")}
          </p>
        </div>
        <div className="w-full text-center text-[#FFFFFF] text-base font-bold transition-all duration-200 ease-out">
          {t("Auth.login.changeLanguage")}
          <button
            className="text-[#E5D714] ml-1 cursor-pointer"
            onClick={toogleLenguaje}
          >
            {t("Auth.login.language")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
