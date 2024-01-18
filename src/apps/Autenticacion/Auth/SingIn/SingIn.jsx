import React, { useState } from "react";
import Input from "../input/Input";
import { useTranslation } from "react-i18next";
import { loginValidationSchema } from "../Auth";

const SingIn = ({
  isValid,
  setValid,
  errors,
  setErrors,
  validateInput,
  toogleLenguaje,
  formDataLog,
  setFormDataLog,
  onLogin,
}) => {
  const [t] = useTranslation("global");

  const handleChangeLog = (e) => {
    // Obtén el nombre y el valor del input que cambió
    const { name, value } = e.target;
    // Actualiza el estado con el nuevo valor
    setFormDataLog({
      ...formDataLog,
      [name]: value,
    });
    setValid((prevValid) => ({
      ...prevValid,
      [name]: validateInput(name, value, "log"),
    }));
  };

  const handleSubmitLog = async (e) => {
    e.preventDefault();
    try {
      await loginValidationSchema.validate(formDataLog, { abortEarly: false });
      // toast.success("Login!", {
      //   theme: theme === "dark" ? "dark" : "light",
      //   position: "top-left",
      // });
      await onLogin(formDataLog);
    } catch (error) {
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
        setValid((prevValid) => ({
          ...prevValid,
          [err.path]: false,
        }));
      });
      setErrors(newErrors);
    }
  };

  return (
    <div className="h-full w-full flex flex-col mt-6">
      <div className={`transition-all duration-300`}>
        <Input
          type="email"
          value={formDataLog.email}
          handleChange={handleChangeLog}
          label={t("Auth.login.emailTeleLabel")}
          name="email"
          isValid={isValid?.email}
          nameError={errors?.email}
        />
        <Input
          type="password"
          value={formDataLog.password}
          handleChange={handleChangeLog}
          label={t("Auth.login.passwordLabel")}
          name="password"
          isValid={isValid?.password}
          nameError={errors?.password}
        />
      </div>
      <button
        className={`w-full flex justify-center items-center bg-[#FFED00] rounded-[60px] 2xl:py-2 py-[6px] text-lg font-bold mt-2 mb-5 `}
        onClick={handleSubmitLog}
      >
        {t("Auth.login.loginButton")}
      </button>
      <div className="space-y-4 transition-all duration-200 ease-out">
        <div>
          <div className="w-full text-center text-[#FFFFFF] text-base font-bold mb-2">
            {t("Auth.login.newUserPrompt")}
            <span className=" text-[#E5D714] ml-1 cursor-pointer">
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
