import React from "react";
import Input from "../Input/Input";
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
  isLoading,
  handleVisibleReg,
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
      <div className={`grid grid-cols-1 transition-all duration-300`}>
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
      {/* <button
        className={`w-full flex justify-center items-center bg-[#FFED00] rounded-[60px] 2xl:py-2 py-[6px] text-lg font-bold mt-2 mb-5 `}
        onClick={handleSubmitLog}
      >
        {t("Auth.login.loginButton")}
      </button> */}

      <button
        className={`w-full flex justify-center items-center bg-[#FFED00] rounded-[60px] 2xl:py-2 py-[6px] text-lg font-bold mt-2 mb-5 `}
        onClick={handleSubmitLog}
      >
        {isLoading ? (
          <span className="text-sm flex items-center py-1">
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
            loading
          </span>
        ) : (
          t("Auth.login.loginButton")
        )}
      </button>

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
