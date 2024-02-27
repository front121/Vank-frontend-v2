import React, { useEffect, useRef, useState } from "react";
import HeaderAuth from "../../HeaderAuth/HeaderAuth";
import FooterAuth from "../../FooterAuth/FooterAuth";
import CustomButton from "../../../../Shared/CustomButton/CustomButton";
import CustomImage from "../../../../Shared/CustomImage/CustomImage";
import { useTranslation } from "react-i18next";
import {useNavigate } from 'react-router-dom';
import lock from "../../../../../assets/Icon/lock.svg";
import Login from "../../../../../assets/Icon/Login.svg";

const length = 6;

const Otp = ({ currentViewLogin, handleBackLogin, email }) => {
  const [t, i18n] = useTranslation("global");
  const navigate = useNavigate(); 

  let allTabs = [
    {
      id: t("Auth.login.Otp.nav.email"),
      name: t("Auth.login.Otp.nav.email"),
    },
    {
      id: t("Auth.login.Otp.nav.phone"),
      name: t("Auth.login.Otp.nav.phone"),
    },
    {
      id: t("Auth.login.Otp.nav.authy"),
      name: t("Auth.login.Otp.nav.authy"),
    },
  ];

  const [otp, setOtp] = useState(new Array(length).fill(""));

  const inputRefs = useRef([]);

  const [fieldValidity, setFieldValidity] = useState(
    new Array(length).fill(true)
  );

  const tabsRef = useRef([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex, i18n]);

  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
    }, 1000);

    if (count === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [count]);

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
      navigate("/");
      if (otp.join("") !== "23232") {
        throw new Error("Codigo invalido");
      }
      // toast.success("Codigo correcto!", {
      //   theme: "dark",
      //   position: "top-left",
      // });
      navigate("/")
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
    <div
      className={`w-full h-full absolute flex flex-col justify-center items-center transition-transform duration-300 dark:bg-[#13171d] ${
        currentViewLogin !== 2
          ? "translate-x-full"
          : "translate-x-0 visible z-10"
      } `}
    >
      {/* Header */}
      <HeaderAuth />

      {/* <h2 onClick={handleBackLogin}>Otp</h2> */}
      <div className="absolute inset-0 flex justify-center items-center transition-all duration-300 ">
        <div
          className={`absolute w-full sm:w-auto px-[22px] py-[36px] sm:p-[36px]  rounded-[32px] shadow-lg transition-all duration-300 bg-[#191E25]`}
        >
          <div className="relative ">
            <h2 className="text-[#EFF0F1] text-base leading-[22.1px] font-bold mb-[28px]">
              {t("Auth.login.Otp.title")}
            </h2>

            <ul className="flew-row relative  h-[36px] flex items-center ">
              <span
                className="absolute bottom-0 top-0 flex  rounded-3xl  transition-all duration-300 "
                style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
              >
                <span className="h-full w-full rounded-3xl bg-gray-200/30" />
              </span>
              {allTabs.map((tab, index) => {
                const isActive = activeTabIndex === index;

                return (
                  <li
                    key={index}
                    ref={(el) => (tabsRef.current[index] = el)}
                    className={`flex justify-center items-center transition-all duration-300  ${
                      isActive ? `` : `text-[#6B6B6E] `
                    } cursor-pointer rounded-full h-[7px] px-[21px] font-normal text-white text-base`}
                    onClick={() => setActiveTabIndex(index)}
                  >
                    {tab.name}
                  </li>
                );
              })}
            </ul>

            <p className="mt-[20px] space-y-7 mb-5 w-full sm:w-[514px] text-sm sm:text-base text-[#EFF0F1] leading-[20.8px]">
              {t("Auth.login.Otp.thecodebesend")}{" "}
              <span className="text-[#FAE100] font-bold">
                {" "}
                vank******@*****.com
              </span>
            </p>

            <p className="mt-[20px] mb-5 w-[514px] text-sm sm:text-base font-normal text-[#EFF0F1] leading-[20.8px]">
              {t("Auth.login.Otp.securityDigits")}
            </p>
            <CustomImage
              src={lock}
              alt="lock"
              className="absolute right-[3px] sm:top-16 -top-2 w-[41px] h-[54px] "
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
                  className={`text-right  text-[#E5D714] text-[13px] sm:text-sm font-bold leading-[18.2px] cursor-pointer `}
                  onclick={generateSecurityCode}
                  disabled={false}
                >
                  {t("Auth.login.Otp.resendCode")}
                </CustomButton>
              ) : (
                <span className="text-[13px] sm:text-sm text-white font-bold">
                  {t("Auth.login.Otp.resend")} {count}s
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
          </div>
          <div className="w-full flex  justify-center items-center mb-7 mt-5">
            <CustomButton
              className="group flex justify-center items-center relative bg-[#FAE100] disabled:bg-[#D6CA5C] w-full h-[42px] rounded-[60px] text-base font-bold leading-[20.8px] text-[#000000] px-[12px]"
              onclick={onOtpSubmit}
              disabled={true}
            >
              <span className="w-[114px]">{t("Auth.login.Otp.OtpButton")}</span>
              <CustomImage src={Login} alt="Login" className="w-[26px] sm:w-[28px]" />
            </CustomButton >
          </div>
          <p
            className="text-sm sm:text-base text-white font-bold cursor-pointer leading-[18.2px]"
            //   onClick={() => setIsModalInfo(false)}
          >
            {t("Auth.login.Otp.didnotCode")}
          </p>
        </div>
      </div>

      {/* Footer */}
      <FooterAuth />
    </div>
  );
};

export default Otp;
