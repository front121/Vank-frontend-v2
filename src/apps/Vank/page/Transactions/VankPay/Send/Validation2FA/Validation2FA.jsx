import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FooterBtn } from "../../../FooterBtn/FooterBtn";
import { Modal } from "../../../Modal/Modal";

const length = 6;

export const Validation2FA = ({ retur, back }) => {

  //crea un nuevo array con una longitud especificada, lleno de cadenas vacías.
  const [otp, setOtp] = useState(new Array(length).fill(""));
  
  //Globalizar texto
  const [t, i18n] = useTranslation("global");

  //estado que maneja la visibilidad de la modal
  const [modal, setModal] = useState(false);

  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  /// Estado que maneja la validez de los campos del código OTP.
  const [fieldValidity, setFieldValidity] = useState(
    new Array(length).fill(true)
  );

  // Referencia mutable para los campos de entrada del código OTP.
  const inputRefs = useRef([]);

  // Maneja el evento de tecla presionada en un campo de entrada del código OTP.
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

  // Maneja el evento de clic en un campo de entrada del código OTP.
  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
    const newFieldValidity = new Array(length).fill(true);
    setFieldValidity(newFieldValidity);
    // optional
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  // Maneja el evento de cambio en un campo de entrada del código OTP.
  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return false;
    const newOtp = [...otp];

    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    if (value && index < length - 1 && inputRefs?.current[index + 1]) {
      inputRefs?.current[index + 1].focus();
    }
    const newFieldValidity = [...fieldValidity];
    newFieldValidity[index] = true;
    setFieldValidity(newFieldValidity);
  };


  // Efecto que se ejecuta cuando cambia el índice de la pestaña activa.
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

  useEffect(() => {
    if (activeTabIndex === null) {
      return;
    }

    //
    const setTabPosition = () => {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab.clientWidth ?? 0);
    };

    setTabPosition();
  }, [activeTabIndex, i18n]);

  // Datos de las pestañas disponibles.
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

  //Veiw modal
  const sendOpt = () => {
    if (1234 == 1234) {
      setModal(true);
    }
  };
  //Referencia mutable para las pestañas.
  const tabsRef = useRef([]);
  return (
    <div className="flex flex-col  h-[540px] items-center justify-center">
      <div className="w-[550px] h-[372px]  flex flex-col gap-[41.5px]  ">
        <h1 className="font-bold">2FA validation</h1>
        <div className="h-[318px] w-[550px] flex flex-col gap-[32px]">
          <ul className="flew-row relative  h-[36px] flex items-center ">
            <span
              className="absolute bottom-0 top-0 flex  rounded-3xl  transition-all duration-300 "
              style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
            >
              <span className="h-full w-full rounded-3xl bg-gray-200/30" />
            </span>
            {/*Recorremos los btn email phone auth*/}
            {allTabs.map((tab, index) => {
              const isActive = activeTabIndex === index;

              return (
                <li
                  key={index}
                  ref={(el) => (tabsRef.current[index] = el)}
                  className={`flex justify-center items-center transition-all duration-300  ${
                    isActive
                      ? `  text-white font-bold`
                      : `text-link font-normal `
                  } cursor-pointer rounded-full h-[7px] px-[21px]  text-base`}
                  onClick={() => setActiveTabIndex(index)}
                >
                  {tab.name}
                </li>
              );
            })}
          </ul>

          <div>
            <p className="mt-[20px] space-y-7 mb-5 w-full sm:w-[514px] text-sm sm:text-base text-[#EFF0F1] leading-[20.8px]">
              {t("Auth.login.Otp.thecodebesend")}{" "}
              <span className="text-[#FAE100] font-bold">
                {" "}
                vank******@*****.com
              </span>
            </p>
            <p className="mt-[20px] mb-5 w-[514px] text-sm sm:text-base font-bold text-[#EFF0F1] leading-[20.8px]">
              {t("Auth.login.Otp.securityDigits")}
            </p>
          </div>
          <div className="h-[90px] flex flex-col justify-between">
            <form className="flex justify-between w-[550px]">
              {/**Recorremos el Array con los capos del codigo Otp*/}
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
            </form>
            <p className="text-end text-[#FFED00] text-[14px] leading-[18.2px] font-bold">Resend Code</p>
          </div>
        </div>
        <FooterBtn onClik={() => sendOpt()} onclickBack={back} history={`VankPay history  \u25BA`}/>
      </div>
      {/**si modal es true no permite ver la venta modal*/}
      {modal && (
        <>
        <Modal
          volver={retur}
          moreStyle={`${modal ? "absolute bg-[#191E25] ba-[8px] z-50" : ""}`}
        />
        <div className="h-[100vh] absolute top-0 bg-[#14181F99] w-[100vw]"></div>
        </>
      )}

        
    </div>
  );
};
