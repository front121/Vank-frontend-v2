import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import * as Yup from "yup";
import XIcon from "../../../../assets/Icon/XIcon.svg";
import Check from "../../../../assets/Icon/Check.svg";
import Login from "../../../../assets/Icon/Login.svg";

// import { loginValidationSchema } from "../Auth";
import CustomInput from "../../../Shared/CustomInput/CustomInput";
import CustomButton from "../../../Shared/CustomButton/CustomButton";
import CustomImage from "../../../Shared/CustomImage/CustomImage";
import CustomLenguaje from "../../../Shared/CustomLenguaje/CustomLenguaje";

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
  formData,
  setFormData,
  handleVisibleReg,
  onLogin,
  handleNextLogin,
  isvisible,
}) => {
  const [t, i18n] = useTranslation("global");

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [hasError, setHasError] = useState({});
  const [hasInput, setHasInput] = useState(false);

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
      setHasError(false); // Indicar que hay un error si el email no es válido
      return;
    }
    try {
      await Yup.reach(loginValidationSchema, name).validate(value);
      setErrors({ ...errors, [name]: "" });
      setHasError({ ...hasError, [name]: false });
    } catch (error) {
      setErrors({ ...errors, [name]: error.message });
      setHasError({ ...hasError, [name]: true });
    }
    setTimeout(() => {
      setHasError({ ...hasError, [name]: false });
    }, 700);
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
        handleNextLogin();
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

  useEffect(() => {
    if (!isvisible) {
      setErrors({});
    }
  }, [isvisible]);

  // isvisible
  return (
    <div
      className={`h-full w-full flex flex-col transition-all duration-1000 ${
        isvisible
          ? "translate-x-full hidden opacity-0"
          : "translate-x-0 block opacity-100"
      }`}
    >
      <CustomInput
        className="w-full flex flex-col gap-y-2 mt-7 mb-7"
        inputClassName={`h-[42px] pt-[11px] pb-[13px] pr-[30px] pl-[13px] rounded-[10px] dark:bg-[#3E4347] text-white outline-none focus:outline-none placeholder:text-sm  placeholder:sm:text-base placeholder:text-[#7A7878] `}
        label={"Email"}
        onChange={handleChangeLog}
        value={formData?.email}
        hasError={hasError?.email}
        error={errors.email}
        icon={XIcon}
        iconCheck={Check}
        type="email"
        name="email"
        placeholder="Enter email"
      />
      <CustomInput
        className="w-full flex flex-col gap-y-2 mb-7"
        inputClassName={`h-[42px] pt-[11px] pb-[11px] pr-[55px] pl-[13px] rounded-[10px] dark:bg-[#3E4347] text-white outline-none focus:outline-none placeholder:text-[#7A7878] `}
        label={"Password"}
        onChange={handleChangeLog}
        value={formData?.password}
        hasError={hasError?.password}
        error={errors.password}
        icon={XIcon}
        iconCheck={Check}
        showPassword={showPassword}
        togglePasswordVisibility={togglePasswordVisibility}
        type="password"
        name="password"
        placeholder="Enter Password"
      />

      <div className="py-2  sm:w-[429px] h-full flex flex-col items-center">
        <CustomButton
          className={`w-full h-[42px] flex justify-center items-center gap-x-2 bg-[#FAE100] rounded-[60px] px-[12px] text-lg font-bold  text-[#14181F]`}
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
            <>
              <span className="min-w-[70px] px-3">
                {t("Auth.login.loginButton")}
              </span>
              <CustomImage src={Login} alt="Login" className="w-[28px]" />
            </>
          )}
        </CustomButton>

        <div className="sm:w-[429px] pt-9 pb-5 space-y-7 transition-all duration-200 ease-out">
          {/* <div> */}
          <div className="sm:w-[429px] text-center text-[#FFFFFF] text-sm sm:text-base font-normal transition-all duration-300">
            {t("Auth.login.newUserPrompt")}
            <span
              className=" text-[#E5D714] ml-1 cursor-pointer font-bold"
              onClick={handleVisibleReg}
            >
              {t("Auth.login.createAccount")}
            </span>
          </div>
          <p className="font-bold text-[#E5D714] text-center text-sm sm:text-base ">
            {t("Auth.login.ForgotPassword")}
          </p>
          {/* </div> */}
          {/* <div className="w-full flex justify-center items-center">
              <CustomLenguaje className="" toogleLenguaje={toogleLenguaje} />
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default SingIn;
