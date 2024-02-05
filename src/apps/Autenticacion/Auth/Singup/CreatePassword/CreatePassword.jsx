import React, { useState } from "react";
import CustomInput from "../../../../Shared/CustomInput/CustomInput";
import CustomImage from "../../../../Shared/CustomImage/CustomImage";
import Check2 from "../../../../../assets/Icon/Check2.svg";
import CheckGray from "../../../../../assets/Icon/CheckGray.svg";
import close from "../../../../../assets/Icon/close.svg";
import Login from "../../../../../assets/Icon/Login.svg";
import CustomButton from "../../../../Shared/CustomButton/CustomButton";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

const passwordSchema = Yup.object({
  password: Yup.string()
    .min(6, "Min. 8 characters required.")
    .matches(/\d/, "At least 1 number")
    .matches(/[A-Z]/, "At least 1 uppercase letter")
    .required("Password is required"),
});

const CreatePassword = ({ currentPage, prevPage }) => {
  const [t, i18n] = useTranslation("global");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handlePasswordChange = async (e) => {
    const { name, value } = e.target;

    if (value.trim() === "") {
      setErrors([]);
      if (name === "password") setPassword(value);
      if (name === "confirmPassword") setConfirmPassword(value);
      return;
    }
    if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }

    try {
      await passwordSchema.validate({ [name]: value }, { abortEarly: false });

      setErrors([]);
    } catch (err) {
      setErrors(err.inner.map((error) => error.message));
    }
  };

  return (
    <div
      className={`absolute w-full sm:w-auto px-[22px] py-[36px] sm:p-[36px]  rounded-[32px] transition-all duration-300 bg-[#14181F] ${
        currentPage === 2 ? "translate-x-0" : "translate-x-[200%]"
      }`}
    >
      {/* <p
        className="mb-3 text-base font-normal leading-[20.8px] text-[#FFFFFF] cursor-pointer"
        onClick={prevPage}
      >
        Back
      </p> */}
      <h2 className="text-[#EFF0F1] text-base sm:text-lg leading-[22.1px] font-bold mb-7">
        {t("Auth.register.createPassword.setPassword")}
      </h2>

      <CustomInput
        className="w-full flex flex-col gap-y-[13px] mb-7"
        inputClassName={`h-[42px] pt-[11px] pb-[13px] pr-[30px] pl-[13px] rounded-[10px] bg-[#3E4347] text-[#EFF0F1] outline-none focus:outline-none placeholder:text-[#A1A1A1] `}
        label={t("Auth.register.createPassword.password.labelPassword")}
        type="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder={t("Auth.register.createPassword.password.placeholder")}
        showPassword={showPassword}
        togglePasswordVisibility={togglePasswordVisibility}
      />
      <CustomInput
        className="w-full flex flex-col gap-y-[13px] mb-7"
        inputClassName={`h-[42px] pt-[11px] pb-[13px] pr-[30px] pl-[13px] rounded-[10px] bg-[#3E4347] text-[#EFF0F1] outline-none focus:outline-none placeholder:text-[#7A7878] `}
        label={t("Auth.register.createPassword.confirmPassword.labelPassword")}
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder={t(
          "Auth.register.createPassword.confirmPassword.placeholder"
        )}
        showPassword={showConfirmPassword}
        togglePasswordVisibility={toggleConfirmPasswordVisibility}
      />

      <ul className="mt-7 mb-7 grid grid-cols-2 gap-[18px] px-[8px]">
        <li
          className={`text-sm sm:text-base text-[#b6b9be] flex items-center gap-[10px] min-w-[191px]`}
        >
          <img
            src={
              errors.some((error) => error.includes("8 characters"))
                ? close
                : password
                ? Check2
                : CheckGray
            }
            alt="check"
            className="w-[14px] h-[14px]"
          />
          <p>{t("Auth.register.createPassword.rules.one")}</p>
        </li>
        <li
          className={`text-sm sm:text-base text-[#b6b9be] flex items-center gap-[10px] min-w-[164px]`}
        >
          <img
            src={
              errors.some((error) => error.includes("number"))
                ? close
                : password
                ? Check2
                : CheckGray
            }
            alt="check"
            className="w-[14px] h-[14px]"
          />
          <p>{t("Auth.register.createPassword.rules.two")}</p>
        </li>
        <li className={`text-sm sm:text-base text-[#b6b9be] flex items-center gap-[10px]`}>
          <img
            src={
              errors.some((error) => error.includes("uppercase letter"))
                ? close
                : password
                ? Check2
                : CheckGray
            }
            alt="check"
            className="w-[14px] h-[14px]"
          />
          <p>{t("Auth.register.createPassword.rules.three")}</p>
        </li>
        <li className={`text-sm sm:text-base text-[#b6b9be] flex items-center gap-[10px]`}>
          <img
            src={
              confirmPassword && confirmPassword !== password
                ? close
                : confirmPassword
                ? Check2
                : CheckGray
            }
            alt="check"
            className="w-[14px] h-[14px]"
          />
          <p>{t("Auth.register.createPassword.rules.four")}</p>
        </li>
      </ul>

      <CustomButton
        className="flex justify-center items-center gap-x-2 w-full h-[40px] bg-[#FAE100] rounded-[60px] text-base font-bold leading-[20.8px] text-[#14181F]"
        // onclick={() => setIsModalInfo(true)}
        // label={"continue"}
      >
        <span className="w-[114px]">{t("Auth.register.buttonContinue")}</span>
        <CustomImage src={Login} alt="Login" className="w-[28px]" />
      </CustomButton>
    </div>
  );
};

export default CreatePassword;
