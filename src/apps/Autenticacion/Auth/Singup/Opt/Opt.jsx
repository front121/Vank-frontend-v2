import React, { useEffect, useRef, useState } from "react";

import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

import Login from "../../../../../assets/Icon/Login.svg";
import lock from "../../../../../assets/Icon/lock.svg";
import CustomButton from "../../../../Shared/CustomButton/CustomButton";
import CustomImage from "../../../../Shared/CustomImage/CustomImage";

const length = 6;

const Opt = ({
  handleNext,
  handleBackRegister,
  nextPage,
  email,
  isModalInfo,
  setIsModalInfo,
  currentPage,
  currentViewRegister,
}) => {
  const [t, i18n] = useTranslation("global");

  const [otp, setOtp] = useState(new Array(length).fill(""));

  const inputRefs = useRef([]);

  const [fieldValidity, setFieldValidity] = useState(
    new Array(length).fill(true)
  );

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(inputRefs.current);
  }, [currentViewRegister]);

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
    if (currentViewRegister === 2) {
      setCount(30);
      inputRefs.current[0].focus();
    }
  }, [currentViewRegister]);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return false;
    const newOtp = [...otp];

    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger
    // const combineOtp = newOtp.join("");
    // if (combineOtp.length === length) onOtpSubmit(combineOtp);

    if (value && index < length - 1 && inputRefs?.current[index + 1]) {
      inputRefs?.current[index + 1].focus();
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
    const isValid = otp?.every((digit) => !isNaN(digit) && digit !== "");
    if (!isValid) {
      const newFieldValidity = otp.map(
        (digit) => !isNaN(digit) && digit !== ""
      );
      setFieldValidity(newFieldValidity);
      return;
    }

    try {
      nextPage();
      if (otp.join("") !== "23232") {
        throw new Error("Codigo invalido");
      }
      // toast.success("Codigo correcto!", {
      //   theme: "dark",
      //   position: "top-left",
      // });
    } catch (error) {
      const newFieldValidity = new Array(length).fill(false);
      setFieldValidity(newFieldValidity);
      // toast.error("Codigo Incorrecto!", {
      //   theme: "dark",
      //   position: "top-left",
      // });
    }
  };

  const generateSecurityCode = () => {
    // Reinicia el contador a 90 segundos
    setCount(60);
  };

  return (
    <>
      {/* modal de verificacion */}
      <div
        className={`absolute w-full sm:w-auto px-[22px] py-[36px] sm:p-[36px] rounded-[32px] shadow-lg transition-all duration-300 bg-[#14181F] ${
          currentPage === 1 ? "translate-x-0" : "-translate-x-[200%]"
        }`}
      >
        <div className="relative h-[146px] ">
          <p
            className="mb-3 text-base font-normal leading-[20.8px] text-[#EFF0F1] cursor-pointer opacity-[0.6]"
            onClick={handleBackRegister}
          >
            {t("Auth.register.opt.back")}
          </p>
          <h2 className="text-[#EFF0F1] text-sm sm:text-base leading-[22.1px] font-bold">
            {t("Auth.register.opt.emailVerification")}
          </h2>
          <p className="mt-4 space-y-7 mb-5 w-full sm:w-[514px] text-sm sm:text-base font-normal text-[#EFF0F1] leading-[20.8px]">
            {t("Auth.register.opt.InfoCode.info")}{" "}
            <span className="font-bold">{email}</span>,{" "}
            {t("Auth.register.opt.InfoCode.code")}
          </p>
          <CustomImage
            src={lock}
            alt="lock"
            className="absolute right-1 top-1 w-[29.81px] h-[39px]"
          />
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
                  className={`w-[54px] h-[54px] rounded-[10px] bg-[#3E4347] text-center outline-none text-white text-xl font-bold ${
                    !fieldValidity[i] && "border-2 border-red-600"
                  }  focus:border-2 focus:border-[#E5D714]`}
                  maxLength={1}
                />
              );
            })}
          </div>
          <div className="w-full flex gap-2 items-center justify-between mt-5">
            {count === 0 ? (
              <CustomButton
                className={`text-right  text-[#E5D714] text-sm font-bold leading-[18.2px] cursor-pointer `}
                onclick={generateSecurityCode}
                disabled={false}
              >
                {t("Auth.register.opt.resendCode")}
              </CustomButton>
            ) : (
              <span className="text-sm text-white font-bold">
                {t("Auth.register.opt.resend")} {count}s
              </span>
            )}
            {/* <div className="flex items-center justify-center gap-1">
              <p className="text-sm font-normal leading-[18.2px] text-[#FAE100]">
                Valid
              </p>
              <CustomImage
                src={Check}
                alt="check"
                className="w-[14px] h-[14px]"
              />
            </div> */}
          </div>
          <div className="w-full flex  justify-center items-center mb-7 mt-5">
            <CustomButton
              className="group flex justify-center items-center relative bg-[#FAE100] w-full h-[42px] rounded-[60px] text-base font-bold leading-[20.8px] text-[#000000] px-[12px]"
              onclick={onOtpSubmit}
            >
              {/* {t("Auth.register.buttonContinue")} */}
              <span className="w-[114px]">{t("Auth.register.buttonContinue")}</span>
              <CustomImage src={Login} alt="Login" className="w-[28px]" />
              {/* <div className="absolute inset-0 h-full w-full scale-0 rounded-[60px] transition-all duration-300 group-hover:scale-100 group-hover:bg-white/25" /> */}
            </CustomButton>
          </div>
          <p
            className="text-sm sm:text-base text-white font-bold cursor-pointer leading-[18.2px]"
            onClick={() => setIsModalInfo(false)}
          >
            {t("Auth.register.opt.didnotCode")}
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
          >
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default Opt;