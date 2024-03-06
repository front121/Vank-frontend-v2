import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FooterBtn } from "../../../FooterBtn/FooterBtn";
import { Modal } from "../../../Modal/Modal";
import codigoQR from "../../../../../../../assets/QR.png";

const length = 6;

export const Validation2FA = ({ retur, back }) => {
  //crea un nuevo array con una longitud especificada, lleno de cadenas vacías.
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const [code, setCode] = useState("123456");

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

  //Generar codigo
  const generateCode = (index) => {
    if (index == 1) {
      setCode("654321");
      console.log(index);
    }
    if (index == 2) {
      setCode("321456");
    }
    if (index == 0) {
      setCode("123456");
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
      if (otp.join("") !== code) {
        throw new Error("Codigo invalido");
      }
      setModal(true);
    } catch (error) {
      const newFieldValidity = new Array(length).fill(false);
      setFieldValidity(newFieldValidity);
    }
  };

  //Referencia mutable para las pestañas.
  const tabsRef = useRef([]);
  return (
    <div className="flex flex-col  h-full items-center justify-center">
      
      <div className="flex flex-col gap-[27px]">
        
        <div className="w-full h-[410px]  flex flex-col justify-between">
        
          <h1 className="font-bold text-[18px]">2FA validation</h1>
          
          <ul className="flew-row relative    h-[2.25rem] flex items-center gap-4 w-[100%]">
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
                      ? `  text-white`
                      : `text-link `
                  } cursor-pointer rounded-full h-[7px] px-[10px]  text-base `}
                  onClick={() => setActiveTabIndex(index)}
                  onMouseDown={() => generateCode(index)}
                >
                  {tab.name}
                </li>
              );
            })}
          </ul>

          {activeTabIndex != 2 ? (
            <>
              <p className=" space-y-7 mb-5 w-full sm:w-[514px] text-sm sm:text-base text-[#EFF0F1] leading-[20.8px]">
                {activeTabIndex == 0 && (
                  <>
                    {t("Auth.login.Otp.thecodebesend")}{" "}
                    <span className="text-[#FAE100] font-bold">
                      {" "}
                      vank******@*****.com
                    </span>
                  </>
                )}

                {activeTabIndex == 1 && (
                  <>
                    The code will be sent via
                    <span className="text-body font-bold">
                      {" "}
                      SMS to +1 *** *** *465
                    </span>
                  </>
                )}
              </p>

              <p className=" mb-5 w-[514px] text-sm sm:text-base  text-[#EFF0F1] leading-[20.8px]">
                {t("Auth.login.Otp.securityDigits")}
              </p>

              <div className="h-[96px] flex flex-col justify-between">
                <form className="flex justify-between h-[6rem]  w-[550px]">
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
                        className={`w-[3.375rem]  h-[3.375rem] rounded-[0.625rem] bg-[#3E4347] text-center outline-none text-white  font-bold ${
                          !fieldValidity[i] && "border-2 border-red-600"
                        }  focus:border-2 focus:border-[#E5D714]`}
                        maxLength={1}
                      />
                    );
                  })}
                </form>
                <p className=" text-[#FFED00] text-[14px] leading-[18.2px] font-bold ">
                  Resend Code
                </p>
              </div>

              {/* </div> */}

              <p className="text-[14px] leading-[18.2px] font-bold">
                Did not Recieve the Code?
              </p>
            </>
          ) : (
            <div className="flex justify-center gap-10 items-center h-[297px] w-full pb-[36px]   text-[16px] ">
             
              <div className="w-[212px] h-[213px]">
                <img src={codigoQR} alt="" />
              </div>
              
              <div className="w-[275px] h-[200px] flex flex-col justify-between pt-2">
               
                <p className="font-normal text-[16px] leading-[20.8px]">
                  Open your <span className="font-bold"> Authy App</span> and{" "}
                  <span className="font-bold">scan</span> the{" "}
                  <span className="font-bold">QR </span>code
                </p>

                <div className="h-[81px] flex flex-col gap-[24px] text-[90%]">
                  <p className=" ">
                    Code expires in <span className="font-bold">5:00 min</span>{" "}
                  </p>
                  <p>Problems at QR scanning?</p>
                </div>
              </div>
            </div>
          )}

          {/* </div> */}
        </div>
        <FooterBtn
          onClik={() => onOtpSubmit()}
          onclickBack={back}
          history={`VankPay history  \u25BA`}
        />
      </div>
      {/**si modal es true no permite ver la venta modal*/}
      {modal && (
        <>
          <Modal
            volver={retur}
            moreStyle={`${modal ? "absolute bg-[#191E25] ba-[8px] z-50" : ""}`}
          />
          <div className="h-[100%] absolute top-0 bg-[#14181F99] w-[100%]"></div>
        </>
      )}
    </div>
  );
};
