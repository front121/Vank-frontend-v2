import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import Header from "../../Header/Header";
import Lock2 from "../../../../assets/Icon/Lock2";
import CustomButton from "../../../Shared/CustomButton/CustomButton";
import Login from "../../../../assets/Icon/Login";
import CustomInputOtp from "../../../Shared/CustomInputOtp/CustomInputOtp";
import CustomTooltip from "../../../Shared/CustomTooltip/CustomTooltip";
import InfoIcon from "../../../../assets/Icon/InfoIcon";
import QR from "../../../../assets/Icon/QR.png";
import { useNavigate, useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ValidateSendOtpRepository } from "@/Context/ValidateSendOtp/domain/domain";
import { useService } from "@redtea/react-inversify";
import Close from "@/assets/Icon/Close";
import CustomNotification from "@/apps/Shared/CustomNotification/CustomNotification";
import Lock from "@/assets/Icon/Lock";
import ModalMethod from "./ModalMethod/ModalMethod";

const length = 6;

const Otp = () => {
  const [t, i18n] = useTranslation("global");

  const navigate = useNavigate();

  const { accountType } = useParams();

  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  // const [showModal, setShowModal] = useState(false);
  const [showModal, setShowModal] = useState({
    show: false,
    title: "",
    descripcion: "",
  });

  const validateEmail =
    useService<ValidateSendOtpRepository>("ValidateSendOtp");

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
  const [otpPhone, setOtpPhone] = useState(new Array(length).fill(""));

  const [fieldValidity, setFieldValidity] = useState(
    new Array(length).fill(true)
  );

  const tabsRef = useRef<any>([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  // useEffect(() => {
  //   if (activeTabIndex === null) {
  //     return;
  //   }

  //   const setTabPosition = () => {
  //     const currentTab = tabsRef.current[activeTabIndex] as any;
  //     setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
  //     setTabUnderlineWidth(currentTab.clientWidth ?? 0);
  //   };

  //   setTabPosition();
  // }, [activeTabIndex, i18n]);

  const [countEmail, setCountEmail] = useState(0);
  const [countPhone, setCountPhone] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountEmail((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
      setCountPhone((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : 0));
    }, 1000);

    if (countEmail === 0 || countPhone === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [countEmail, countPhone]);

  useEffect(() => {
    // if (currentViewRegister === 2) {
    const email = localStorage.getItem("otpEmail");
    const storedJsonString = localStorage.getItem("otpPhone");

    if (email) {
      setEmail(email);
    }
    if (storedJsonString) {
      const storedObject = JSON.parse(storedJsonString);
      setPhone(storedObject?.phone);
      setCountryCode(storedObject?.countryCode);
    }

    if (accountType === "email") {
      setActiveTabIndex(0);
      setCountEmail(30);
    }
    if (accountType === "phone") {
      setActiveTabIndex(1);
      setCountPhone(30);
    }

    // }
  }, []);

  useEffect(() => {
    setCountEmail(30);
    setCountPhone(30);
  }, [activeTabIndex]);

  useEffect(() => {
    let timer: any;
    if (showModal) {
      timer = setTimeout(() => {
        setShowModal((prevState) => ({
          ...prevState,
          show: false,
        }));
        // const newFieldValidity = new Array(length).fill(true);
      }, 3000); // Oculta la modal después de 3 segundos
    }

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar el componente
  }, [showModal]);

  const formatEmail = (email: string) => {
    if (!email) return ""; // Si el correo está vacío, devuelve una cadena vacía
    const [username, domain] = email.split("@"); // Divide el correo en nombre de usuario y dominio
    const formattedUsername =
      username.slice(0, 5) + "*".repeat(username.length - 5); // Formatea el nombre de usuario
    const [domainName, extension] = domain.split("."); // Divide el dominio en nombre y extensión
    const formattedDomain =
      domainName.slice(0, 3) + "*".repeat(domainName.length - 3); // Formatea el nombre de dominio
    return `${formattedUsername}@${formattedDomain}.${extension}`; // Retorna el correo electrónico formateado
  };

  const formatPhoneNumber = (phoneNumber: string) => {
    if (!phoneNumber) return ""; // Si el número de teléfono está vacío, devuelve una cadena vacía
    const visibleDigits = phoneNumber.slice(-3); // Obtiene los últimos 3 dígitos visibles del número
    const maskedPart = "*".repeat(phoneNumber.length - 3); // Crea una cadena de asteriscos para ocultar los dígitos restantes
    return `${maskedPart.slice(0, 3)} ${maskedPart.slice(
      3,
      6
    )} *${visibleDigits}`; // Retorna el número de teléfono formateado
  };

  const formateOtp = (email: string, code: string) => {
    return {
      projectFlow: "65f0ef2f29b73ae8fd75f3e5",
      email: email ? email.toLocaleLowerCase() : "danielaldana212@gmail.com",
      otp: parseFloat(code),
    };
  };

  const onOtpSubmitEmail = async () => {
    navigate("/Vank");
    return;
    // try {
    //   const data = formateOtp(email, otp.join(""));
    //   console.log(data);

    //   const response: any = await validateEmail.postSendConfirmationEmail(data);
    //   console.log(response);
    //   if (response?.data) {
    //     navigate("/");
    //     return;
    //   }
    //   throw "";
    // } catch (error) {
    //   setShowModal({
    //     title: "Código de Verificación Incorrecto:",
    //     descripcion:
    //       "El código de verificación ingresado no es válido. Por favor, verifica que esté escrito correctamente.",
    //     show: true,
    //   });
    //   // Tu código de verificación por correo electrónico es incorrecto
    //   const newFieldValidity = new Array(length).fill(false);
    //   setFieldValidity(newFieldValidity);
    // }
  };

  const formateOtpPhone = (
    phone: string,
    countryCode: string,
    code: string
  ) => {
    return {
      projectFlow: "65f0ef2f29b73ae8fd75f3e5",
      phone: phone,
      countryCode: countryCode,
      otp: code,
    };
  };

  const onOtpSubmitPhone = async () => {
    navigate("/Vank");
    return;
    // try {
    //   const data = formateOtpPhone(phone, countryCode, otpPhone.join(""));
    //   console.log(data);

    //   const response: any = await validateEmail.postSendConfirmationPhone(data);
    //   console.log(response);
    //   if (response?.data) {
    //     navigate("/");
    //     return;
    //   }
    //   throw "";
    // } catch (error) {
    //   // Error en Verificación por SMS
    //   setShowModal({
    //     title: "Error en Verificación por WhatsApp",
    //     descripcion:
    //       "El código recibido en WhatsApp no es válido. Por favor, revisa el código y asegúrate de ingresarlo correctamente para completar la verificación.",
    //     show: true,
    //   });
    //   // Tu código de verificación por correo electrónico es incorrecto
    //   const newFieldValidity = new Array(length).fill(false);
    //   setFieldValidity(newFieldValidity);
    // }
  };

  const formateSendEmail = (email: string) => {
    return {
      project: "65f0cf59a8c6b07717173973",
      projectFlow: "65f0ef2f29b73ae8fd75f3e5",
      email: email ? email.toLocaleLowerCase() : "danielaldana212@gmail.com",
      type: "login",
      validationMethod: "verificationCode",
      language: "es",
    };
  };

  const formateSendPhone = () => {
    return {
      project: "65f0cf59a8c6b07717173973",
      projectFlow: "65f0ef2f29b73ae8fd75f3e5",
      phone: phone ? phone : "3207430224",
      countryCode: countryCode,
      type: "login",
      validationMethod: "verificationCode",
      language: "es",
    };
  };

  const generateCodeEmail = async () => {
    // Reinicia el contador a 90 segundos
    const data = formateSendEmail(email);
    await validateEmail.postSendValidateEmail(data);
    setCountEmail(60);
  };

  const generateCodePhone = async () => {
    // Reinicia el contador a 90 segundos
    const data = formateSendPhone();
    await validateEmail.postSendValidatePhone(data);
    setCountEmail(60);
  };

  const isValid = otp?.every((digit) => !isNaN(digit) && digit !== "");
  const isValidPhone = otpPhone?.every(
    (digit) => !isNaN(digit) && digit !== ""
  );

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    <div className="w-full min-h-screen relative flex flex-col justify-center items-center transition-transform duration-300 dark:bg-[--background-dark-blue] overflow-hidden">
      <Header />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 0.2],
        }}
        className={`w-full sm:max-w-[677px] py-[30px] px-[35px]  rounded-[32px] shadow-lg bg-[--background-soft-blue] scale-95`}
      >
        <div className="relative ">
          <p
            className="mb-3 text-base w-16 font-normal leading-[20.8px] text-[--text-body] cursor-pointer opacity-[0.6]"
            onClick={() => navigate("/Auth")}
          >
            {t("Auth.register.opt.back")}
          </p>
          <h2 className="text-[--text-body] text-xl leading-[22.1px] font-bold mb-[12px]">
            {/* {t("Auth.login.Otp.title")} */}
            {activeTabIndex === 0 && "Email verification in 2FA"}
            {activeTabIndex === 1 && "Phone verification in 2FA"}
            {activeTabIndex === 2 && "Authy verification in 2FA"}
          </h2>

          {(allTabs[activeTabIndex].name === "Email" ||
            allTabs[activeTabIndex].name === "correo electrónico") && (
            <>
              <p className="space-y-7 mb-4 w-full sm:w-[514px] text-sm sm:text-base text-[--text-body] leading-[20.8px]">
                {/* {t("Auth.login.Otp.thecodebesendEmail")}{" "} */}
                Ingresa el código de verificación de 6 dígitos enviado a
                <span className="text-[#FAE100] font-bold">
                  {" "}
                  {formatEmail(
                    email
                      ? email.toLocaleLowerCase()
                      : "danielaldana212@gmail.com"
                  )}
                </span>
              </p>
              <div className="flex flex-col w-full overflow-hidden mb-4">
                <CustomInputOtp
                  className="mb-4"
                  length={6}
                  otp={otp}
                  setOtp={setOtp}
                  fieldValidity={fieldValidity}
                  setFieldValidity={setFieldValidity}
                />
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-right  text-[--text-body] text-[13px] sm:text-sm font-normal leading-[18.2px] cursor-pointer">
                      {t("Auth.login.Otp.didnotCode")}
                    </p>
                    <InfoIcon
                      id="my-anchor-element"
                      className="cursor-pointer"
                    />
                    <CustomTooltip
                      anchorSelect="#my-anchor-element"
                      place="right"
                      style={{
                        backgroundColor: "var(--dark-gray)",
                        color: "#fff",
                        padding: "10px",
                        borderRadius: "5px",
                        opacity: 1,
                        border: "2px solid #fff",
                        zIndex: 1,
                      }}
                    >
                      <div className="w-[320px] p-3">
                        <h2 className="mb-2">
                          When searching for the login verification email in
                          your mailbox:
                        </h2>
                        <ul className="list-disc flex flex-col items-center justify-center space-y-2">
                          <li className="list-color">
                            Use keywords like "verification" or "login" for
                            efficient searching.
                          </li>
                          <li className="list-color">
                            Check your spam or junk folder to ensure it's not
                            misclassified.
                          </li>
                          <li className="list-color">
                            Sort emails by date to quickly locate the latest
                            verification email.
                          </li>
                          <li className="list-color">
                            Check all folders, including inbox and custom
                            folders.
                          </li>
                        </ul>
                      </div>
                    </CustomTooltip>
                  </div>
                  {countEmail === 0 ? (
                    <p
                      className={`text-right  text-[--yellow] text-[13px] sm:text-sm font-normal leading-[18.2px] cursor-pointer `}
                      onClick={generateCodeEmail}
                    >
                      {t("Auth.login.Otp.resendCode")}
                    </p>
                  ) : (
                    <span className="text-[13px] sm:text-sm text-white font-normal">
                      {t("Auth.login.Otp.resend")} {countEmail}s
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full flex  justify-center items-center mb-5">
                <CustomButton
                  className="group flex justify-center items-center relative bg-[#FAE100] disabled:bg-[--yellow-disabled] w-full h-[42px] rounded-[60px] text-base font-bold leading-[20.8px] text-[#000000] px-[12px]"
                  onclick={onOtpSubmitEmail}
                  disabled={
                    allTabs[activeTabIndex].name !== "Authy" && !isValid
                  }
                >
                  <span className="w-[114px]">
                    {t("Auth.login.Otp.OtpButton")}
                  </span>
                  <Login className="w-[26px] sm:w-[28px]" />
                </CustomButton>
              </div>
              <div
                className="w-full flex justify-center items-center gap-x-2"
                onClick={open}
              >
                <Lock color="#FFED00" className="w-[20px] cursor-pointer" />
                <p className="text-sm sm:text-base font-normal text-[--text-body] cursor-pointer">
                  {/* {t("Auth.login.Otp.securityDigits")} */}
                  Cambiar a otro método de verificación
                </p>
              </div>
            </>
          )}

          {(allTabs[activeTabIndex].name === "Phone number" ||
            allTabs[activeTabIndex].name === "Número de teléfono") && (
            <>
              <p className="space-y-7 mb-4 w-full sm:w-[514px] text-sm sm:text-base text-[--text-body] leading-[20.8px]">
                {/* {t("Auth.login.Otp.thecodebesendPhone")}{" "} */}
                Ingresa el código de verificación de 6 dígitos que fue enviado
                por SMS a{" "}
                <span className="text-[#FAE100] font-bold">
                  {`+${countryCode ? countryCode : "1"}`}{" "}
                  {formatPhoneNumber(phone ? phone : "*** *** *465")}
                </span>
              </p>
              {/* <p className="mb-7 w-[514px] text-sm sm:text-base font-normal text-[--text-body] leading-[20.8px]">
                  {t("Auth.login.Otp.securityDigits")}
                </p> */}
              <div className="flex flex-col w-full overflow-hidden mb-4">
                <CustomInputOtp
                  className="mb-4"
                  length={6}
                  otp={otpPhone}
                  setOtp={setOtpPhone}
                  fieldValidity={fieldValidity}
                  setFieldValidity={setFieldValidity}
                />
                <div className="w-full flex justify-between items-center">
                  <div className="flex items-center justify-center gap-2">
                    <p className="text-right  text-[--text-body] text-[13px] sm:text-sm font-normal leading-[18.2px] cursor-pointer">
                      {t("Auth.login.Otp.didnotCode")}
                    </p>
                    <InfoIcon
                      id="my-anchor-element"
                      className="cursor-pointer"
                    />
                    <CustomTooltip
                      anchorSelect="#my-anchor-element"
                      place="right"
                      style={{
                        backgroundColor: "var(--dark-gray)",
                        color: "#fff",
                        padding: "10px",
                        borderRadius: "5px",
                        opacity: 1,
                        border: "2px solid #fff",
                        zIndex: 1,
                      }}
                    >
                      <div className="w-[320px] p-3">
                        <h2 className="mb-2">
                          When searching for the login verification email in
                          your mailbox:
                        </h2>
                        <ul className="list-disc flex flex-col items-center justify-center space-y-2">
                          <li className="list-color">
                            Use keywords like "verification" or "login" for
                            efficient searching.
                          </li>
                          <li className="list-color">
                            Check your spam or junk folder to ensure it's not
                            misclassified.
                          </li>
                          <li className="list-color">
                            Sort emails by date to quickly locate the latest
                            verification email.
                          </li>
                          <li className="list-color">
                            Check all folders, including inbox and custom
                            folders.
                          </li>
                        </ul>
                      </div>
                    </CustomTooltip>
                  </div>
                  {countPhone === 0 ? (
                    <p
                      className={`text-right  text-[--yellow] text-[13px] sm:text-sm font-normal leading-[18.2px] cursor-pointer `}
                      onClick={generateCodePhone}
                    >
                      {t("Auth.login.Otp.resendCode")}
                    </p>
                  ) : (
                    <span className="text-[13px] sm:text-sm text-white font-normal">
                      {t("Auth.login.Otp.resend")} {countPhone}s
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full flex  justify-center items-center mb-5">
                <CustomButton
                  className="group flex justify-center items-center relative bg-[#FAE100] disabled:bg-[--yellow-disabled] w-full h-[42px] rounded-[60px] text-base font-bold leading-[20.8px] text-[#000000] px-[12px]"
                  onclick={onOtpSubmitPhone}
                  disabled={
                    allTabs[activeTabIndex].name !== "Authy" && !isValidPhone
                  }
                >
                  <span className="w-[114px]">
                    {t("Auth.login.Otp.OtpButton")}
                  </span>
                  <Login className="w-[26px] sm:w-[28px]" />
                </CustomButton>
              </div>
              <div
                className="w-full flex justify-center items-center gap-x-2"
                onClick={open}
              >
                <Lock color="#FFED00" className="w-[20px] cursor-pointer" />
                <p className="text-sm sm:text-base font-normal text-[--text-body] cursor-pointer">
                  {/* {t("Auth.login.Otp.securityDigits")} */}
                  Cambiar a otro método de verificación
                </p>
              </div>
            </>
          )}
          {/* <Lock2 className="absolute right-[3px] sm:top-16 -top-2 w-[41px] h-[54px] " /> */}
        </div>
        {allTabs[activeTabIndex].name === "Authy" && (
          <>
            <p className="space-y-7 mb-4 w-full sm:w-[514px] text-sm sm:text-base text-[--text-body] leading-[20.8px]">
              {/* {t("Auth.login.Otp.thecodebesendPhone")}{" "} */}
              Introduce el código de 6 dígitos generado por la aplicación de
              autenticación.
            </p>
            {/* <p className="mb-7 w-[514px] text-sm sm:text-base font-normal text-[--text-body] leading-[20.8px]">
                  {t("Auth.login.Otp.securityDigits")}
                </p> */}
            <div className="flex flex-col w-full overflow-hidden mb-4">
              <CustomInputOtp
                className="mb-4"
                length={6}
                otp={otpPhone}
                setOtp={setOtpPhone}
                fieldValidity={fieldValidity}
                setFieldValidity={setFieldValidity}
              />
              <div className="w-full flex justify-between items-center">
                <div className="flex items-center justify-center gap-2">
                  <p className="text-right  text-[--text-body] text-[13px] sm:text-sm font-normal leading-[18.2px] cursor-pointer">
                    {/* {t("Auth.login.Otp.didnotCode")} */}
                    ¿No tienes codigo generados en la aplicación de
                    autenticación.?
                  </p>
                  <InfoIcon id="my-anchor-element" className="cursor-pointer" />
                  <CustomTooltip
                    anchorSelect="#my-anchor-element"
                    place="right"
                    style={{
                      backgroundColor: "var(--dark-gray)",
                      color: "#fff",
                      padding: "10px",
                      borderRadius: "5px",
                      opacity: 1,
                      border: "2px solid #fff",
                      zIndex: 1,
                    }}
                  >
                    <div className="w-[320px] p-3">
                      <h2 className="mb-2">
                        When searching for the login verification email in your
                        mailbox:
                      </h2>
                      <ul className="list-disc flex flex-col items-center justify-center space-y-2">
                        <li className="list-color">
                          Use keywords like "verification" or "login" for
                          efficient searching.
                        </li>
                        <li className="list-color">
                          Check your spam or junk folder to ensure it's not
                          misclassified.
                        </li>
                        <li className="list-color">
                          Sort emails by date to quickly locate the latest
                          verification email.
                        </li>
                        <li className="list-color">
                          Check all folders, including inbox and custom folders.
                        </li>
                      </ul>
                    </div>
                  </CustomTooltip>
                </div>
              </div>
            </div>
            <div className="w-full flex  justify-center items-center mb-5">
              <CustomButton
                className="group flex justify-center items-center relative bg-[#FAE100] disabled:bg-[--yellow-disabled] w-full h-[42px] rounded-[60px] text-base font-bold leading-[20.8px] text-[#000000] px-[12px]"
                onclick={onOtpSubmitPhone}
                disabled={
                  allTabs[activeTabIndex].name !== "Authy" && !isValidPhone
                }
              >
                <span className="w-[114px]">
                  {t("Auth.login.Otp.OtpButton")}
                </span>
                <Login className="w-[26px] sm:w-[28px]" />
              </CustomButton>
            </div>
            <div
              className="w-full flex justify-center items-center gap-x-2"
              onClick={open}
            >
              <Lock color="#FFED00" className="w-[20px] cursor-pointer" />
              <p className="text-sm sm:text-base font-normal text-[--text-body] cursor-pointer">
                {/* {t("Auth.login.Otp.securityDigits")} */}
                Cambiar a otro método de verificación
              </p>
            </div>
          </>
        )}
      </motion.div>

      <AnimatePresence initial={false} onExitComplete={() => null}>
        {modalOpen && (
          <ModalMethod
            handleClose={close}
            activeTabIndex={activeTabIndex}
            setActiveTabIndex={setActiveTabIndex}
          />
        )}
      </AnimatePresence>

      <CustomNotification
        title={showModal.title}
        description={showModal.descripcion}
        showModal={showModal.show}
        setShowModal={setShowModal}
      />
    </div>
  );
};

export default Otp;
