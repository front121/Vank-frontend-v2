import React, { useState } from "react";
import CustomInput from "../../../../Shared/CustomInput/CustomInput";
import CustomImage from "../../../../Shared/CustomImage/CustomImage";
import Check from "../../../../../assets/Check.svg";
import CheckGray from "../../../../../assets/CheckGray.svg";
import close from "../../../../../assets/close.svg";
import CustomButton from "../../../../Shared/CustomButton/CustomButton";
import * as Yup from "yup";

export const passwordSchema = Yup.object({
  password: Yup.string()
    .min(6, "Min. 8 characters required.")
    .matches(/\d/, "At least 1 number")
    .matches(/[A-Z]/, "At least 1 uppercase letter")
    .required("Password is required"),
});

const CreatePassword = ({ currentPage, prevPage }) => {
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handlePasswordChange = async (e) => {
    const newPassword = e.target.value;
    if (newPassword.trim() === "") {
      setErrors([]);
      setPassword(newPassword);
      return;
    }

    setPassword(newPassword);

    try {
      await passwordSchema.validate(
        { password: newPassword },
        { abortEarly: false }
      );

      setErrors([]);
    } catch (err) {
      setErrors(err.inner.map((error) => error.message));
    }
  };

  return (
    <div
      className={`absolute w-11/12 lg:w-[40%]  p-8  rounded-xl transition-all duration-300 shadow-lg overflow-hidden bg-[#191E25] translate-x-0 ${
        currentPage === 2 ? "translate-x-0" : " translate-x-[200%]"
      }`}
    >
      {/* <p
        className="mb-3 text-base font-normal leading-[20.8px] text-[#FFFFFF] cursor-pointer"
        onClick={prevPage}
      >
        Back
      </p> */}
      <h2 className="text-[#FFFFFF] text-lg leading-[22.1px] font-bold mb-9">
        Set User Password
      </h2>

      <CustomInput
        className="w-full flex flex-col gap-y-2 mb-2"
        inputClassName={`h-[42px] pt-[11px] pb-[13px] pr-[30px] pl-[13px] rounded-[10px] bg-[#3E4347] text-white outline-none focus:outline-none placeholder:text-[#7A7878] `}
        label={"Password"}
        type="password"
        name="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter Password"
      />

      <div className="mt-7 mb-7 space-y-4">
        <div
          className={`mb-2 text-base text-[#b6b9be] flex items-center gap-2 `}
        >
          <CustomImage
            src={
              errors.some((error) => error.includes("8 characters"))
                ? close
                : password
                ? Check
                : CheckGray
            }
            alt="check"
            className="w-[15px] h-[15px]"
          />
          <p>At least 8 characters</p>
        </div>
        <div
          className={`mb-2 text-base text-[#b6b9be] flex items-center gap-2`}
        >
          <CustomImage
            src={
              errors.some((error) => error.includes("number"))
                ? close
                : password
                ? Check
                : CheckGray
            }
            alt="check"
            className="w-[15px] h-[15px]"
          />
          <p>At least 1 number</p>
        </div>
        <div
          className={`mb-2 text-base text-[#b6b9be] flex items-center gap-2`}
        >
          <CustomImage
            src={
              errors.some((error) => error.includes("uppercase letter"))
                ? close
                : password
                ? Check
                : CheckGray
            }
            alt="check"
            className="w-[15px] h-[15px]"
          />
          <p>At least 1 upper case letter</p>
        </div>
      </div>

      <CustomButton
        className="w-full h-[40px] bg-[#E5D714] rounded-[60px] text-base font-bold leading-[20.8px] text-[#14181F]"
        // onclick={() => setIsModalInfo(true)}
        label={"continue"}
      />
    </div>
  );
};

export default CreatePassword;
