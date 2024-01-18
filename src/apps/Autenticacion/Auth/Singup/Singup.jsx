import React from "react";
import Input from "../Input/Input";
import { useTranslation } from "react-i18next";
import { registrationValidationSchema } from "../Auth";

const Singup = ({
  isValid,
  setValid,
  errors,
  setErrors,
  validateInput,
  toogleLenguaje,
  formDataSing,
  setFormDataSing,
  onRegister,
}) => {
  const [t] = useTranslation("global");

  const handleChangeSing = (e) => {
    // Obtén el nombre y el valor del input que cambió
    const { name, value } = e.target;

    // Actualiza el estado con el nuevo valor
    setFormDataSing({
      ...formDataSing,
      [name]: value,
    });
    setValid((prevValid) => ({
      ...prevValid,
      [name]: validateInput(name, value, "sing"),
    }));
  };

  const handleSubmitReg = async (e) => {
    e.preventDefault();
    try {
      await registrationValidationSchema.validate(formDataSing, {
        abortEarly: false,
      });
      onRegister(formDataSing);
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
        <div
          className={`grid grid-cols-2 gap-x-5 gap-y-1 justify-center transition-all duration-200 `}
        >
          <Input
            type="text"
            value={formDataSing.fullNameSing}
            handleChange={handleChangeSing}
            label={t("Auth.register.fullNameLabel")}
            name="fullNameSing"
            isValid={isValid?.fullNameSing}
            nameError={errors?.fullNameSing}
          />

          <Input
            type="number"
            value={formDataSing.phoneSing}
            handleChange={handleChangeSing}
            label={t("Auth.register.PhoneLabel")}
            name="phoneSing"
            isValid={isValid?.phoneSing}
            nameError={errors?.phoneSing}
          />

          <Input
            type="email"
            value={formDataSing.emailSing}
            handleChange={handleChangeSing}
            label={t("Auth.register.emailLabel")}
            name="emailSing"
            isValid={isValid?.emailSing}
            nameError={errors?.emailSing}
          />

          <Input
            type="password"
            value={formDataSing.passwordSing}
            handleChange={handleChangeSing}
            label={t("Auth.register.passwordLabel")}
            name="passwordSing"
            isValid={isValid?.passwordSing}
            nameError={errors?.passwordSing}
          />
        </div>
        <button
          className={`w-full flex justify-center items-center bg-[#FFED00] rounded-[60px] 2xl:py-2 py-[6px] text-lg font-bold mt-2 mb-5 `}
          onClick={handleSubmitReg}
        >
          {t("Auth.register.registerButton")}
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
    </div>
  );
};

export default Singup;
