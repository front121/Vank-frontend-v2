import CustomBackdrop from "@/apps/Shared/CustomBackdrop/CustomBackdrop";
import CustomInputOtp from "@/apps/Shared/CustomInputOtp/CustomInputOtp";
import Authenticator from "@/assets/Icon/Authenticator";
import Close from "@/assets/Icon/Close";
import Email from "@/assets/Icon/Email";
import Phone from "@/assets/Icon/Phone";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 2.5,
      type: "spring",
      damping: 50,
      stiffness: 500,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

let length = 6;

const Security = () => {
  const [options, setOptions] = useState({
    email: false,
    phone: false,
    authy: false,
  });

  // const [modalOpen, setModalOpen] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpenTwo, setModalOpenTwo] = useState(false);
  const [modalOpenThree, setModalOpenThree] = useState(false);
  const [check, setCheck] = useState(false);
  const [error, setError] = useState(false);
  const [authentication, setAuthentication] = useState(null);
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const [fieldValidity, setFieldValidity] = useState(
    new Array(length).fill(true)
  );

  async function setup() {
    try {
      const response = await fetch("http://localhost:3000/tfa/setup", {
        method: "POST",
      });

      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        throw new Error("Error al obtener datos");
      }

      // Convertir la respuesta a JSON
      const data = await response.json();

      if (response.status === 200) {
        return data;
      }
      return;
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }

  async function getAuth() {
    try {
      const response = await fetch("http://localhost:3000/tfa/setup", {
        method: "GET",
      });

      // Verificar si la respuesta es exitosa
      if (!response.ok) {
        throw new Error("Error al obtener datos");
      }
      // Convertir la respuesta a JSON
      const data = await response.json();

      if (response?.status === 200) {
        if (data === null) {
          const newData = await setup();
          setAuthentication(newData);
          return newData;
        } else {
          setAuthentication(data);
          return data;
        }
      } else {
        console.error("El estado de la respuesta no es 200");
      }
    } catch (error) {
      console.error("Error:", error);
      return null;
    }
  }

  useEffect(() => {
    // Verificar si hay opciones almacenadas en el localStorage
    const storedOptions = JSON.parse(localStorage.getItem("2faOptions"));
    if (storedOptions) {
      // Si hay opciones almacenadas, utilizarlas
      setOptions(storedOptions);
    } else {
      // Si no hay opciones almacenadas, establecer email y phone como verdadero
      setOptions({
        email: true,
        phone: true,
        authy: false,
      });
      // Guardar las opciones inicializadas en el localStorage
      localStorage.setItem(
        "2faOptions",
        JSON.stringify({
          email: true,
          phone: true,
          authy: false,
        })
      );
    }
    getAuth();
  }, []);

  useEffect(() => {
    let timer: any;
    if (error) {
      timer = setTimeout(() => {
        setError(false);
        const newFieldValidity = new Array(length).fill(true);
        setFieldValidity(newFieldValidity);
      }, 1000); // Oculta la modal después de 3 segundos
    }

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar el componente
  }, [error]);

  const onOtpSubmit = async () => {
    try {
      const token = otp.join("");
      const response = await fetch("http://localhost:3000/tfa/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      const res = await response.json();
      console.log(res);
      console.log(res.ok);

      if (!res.status) {
        throw new Error("Error al enviar datos");
      }
      return res;
    } catch (error) {
      console.error("Error:", error);
      setError(true);
      const newFieldValidity = new Array(length).fill(false);
      setFieldValidity(newFieldValidity);
      return null;
    }
  };

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const closeTwo = () => setModalOpenTwo(false);
  const openTwo = () => setModalOpenTwo(true);
  const closeThree = () => {
    setModalOpenThree(false);
    setCheck(false);
    const newOtp = new Array(length).fill("");
    setOtp(newOtp);
  };
  const openThree = () => setModalOpenThree(true);

  const isValid = otp?.every((digit) => !isNaN(digit) && digit !== "");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center dark:bg-[--background-dark-blue]">
      <div className="w-[800px] h-[500px] bg-[--background-soft-blue] rounded-xl p-8 overflow-hidden">
        <h2 className="text-2xl text-white mb-5 ">
          Autenticación de dos factores (2FA)
        </h2>
        <div className="w-full h-[90%] flex flex-col gap-4 rounded-lg">
          <motion.div
            layout
            // className={`p-4 shadow-lg rounded-lg flex items-center gap-4 justify-between dark:bg-[--background-dark-blue] ${
            //   modalOpen !== 1 ? "h-auto" : "h-full"
            // }`}
            className={`p-4 shadow-lg rounded-lg flex items-center gap-4 justify-between dark:bg-[--background-dark-blue]`}
          >
            <motion.div layout="position" className="flex items-start gap-2 ">
              <Email className="w-[35px]" color="#FFED00" />
              <div>
                <p className="text-lg text-white mb-1">Correo electrónico</p>
                <p className="text-[15px] w-[400px] text-white">
                  Utiliza tu correo electrónico para proteger tu cuenta y tus
                  transacciones.
                </p>
              </div>
            </motion.div>
            <motion.div layout="position" className="flex items-center gap-3">
              {/* {options.email ? (
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <p className="text-white">activo</p>
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <p className="text-white">Inactivo</p>
                </div>
              )} */}
              <button
                className="cursor-pointer p-1.5 bg-[#FFED00] text-black font-bold rounded-lg  hover:shadow-lg transition-all"
                // onClick={() => setModalOpen(() => (modalOpen == 0 ? 1 : 0))}
                onClick={open}
              >
                {/* <span className="">Gestionar</span> */}
                <span className="">
                  {!options.email ? "Activar" : "Desactiva"}
                </span>
              </button>
            </motion.div>
          </motion.div>
          <div className="h-full p-4 shadow-lg rounded-lg flex items-center gap-4 justify-between dark:bg-[--background-dark-blue]">
            <div className="flex items-start gap-2 ">
              <Phone className="w-[35px]" color="#FFED00" />
              <div>
                <p className="text-lg text-white mb-1">Número de teléfono</p>
                <p className="text-[15px] w-[400px] text-white">
                  Utiliza tu número de teléfono para proteger tu cuenta y tus
                  transacciones.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* {options.phone ? (
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <p className="text-white">activo</p>
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <p className="text-white">Inactivo</p>
                </div>
              )} */}
              <button
                className="cursor-pointer p-1.5 bg-[#FFED00] text-black font-bold rounded-lg hover:shadow-lg transition-all ease-in-out"
                onClick={openTwo}
              >
                <span className="">
                  {/* Gestionar */}
                  {!options.phone ? "Activar" : "Desactiva"}
                </span>
              </button>
            </div>
          </div>
          <div className="h-full p-4 shadow-lg rounded-lg flex items-center gap-4 justify-between dark:bg-[--background-dark-blue]">
            <div className="flex items-start gap-2 ">
              <Authenticator className="w-[35px]" color="#FFED00" />
              <div>
                <p className="text-lg text-white mb-1">
                  Aplicación de autenticación
                </p>
                <p className="text-[15px] w-[400px] text-white">
                  Utiliza Binance/Google Authenticator para proteger tu cuenta y
                  tus transacciones.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              {/* {options.authy ? (
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <p className="text-white">activo</p>
                </div>
              ) : (
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <p className="text-white">Inactivo</p>
                </div>
              )} */}
              <button
                className="cursor-pointer p-1.5 bg-[#FFED00] text-black font-bold rounded-lg  hover:shadow-lg transition-all  ease-in-out"
                onClick={openThree}
              >
                <span className="">
                  {/* Gestionar */}
                  {!options.authy ? "Activar" : "Desactiva"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence initial={false} onExitComplete={() => null}>
        {/* {modalOpen && (
          <CustomBackdrop onClick={close}>
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="w-[450px]  m-auto p-8 rounded-xl flex flex-col items-center dark:bg-[--background-dark-blue] relative"
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h2 className="text-[--text-body] text-xl mb-5">
                Choose an Authenticator
              </h2>
              <Close
                className="absolute w-[13px] top-5 right-5 cursor-pointer"
                onClick={close}
              />
              <div className="w-full h-full flex flex-col">
                <h2 className="text-base text-white mb-2">
                  Vincular un autenticador
                </h2>
                <p className="text-sm text-white mb-4">
                  Escanea este código QR en la aplicación de autenticación
                </p>
                <div className="flex flex-col gap-y-5 justify-center items-center mb-5">
                  <div className="flex justify-center items-center w-[200px] h-[200px] border border-yellow-500 bg-[#14181F] rounded-lg">
                    <img
                      // src={authentication?.dataURL}
                      alt=""
                      className="w-[90%] h-[90%] object-cover rounded-lg "
                      // style="display:block;margin:auto"
                    />
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <p className="text-base text-white">2TBZGGMMQPAMUWSX</p>
                    <Close
                      className="w-[16px] cursor-pointer"
                      onClick={close}
                    />
                  </div>
                </div>
                <p className="text-sm text-white mb-4">
                  Si no puedes escanear el código QR, introduce este código
                  manualmente en la aplicación.
                </p>
                <button className="w-full cursor-pointer p-3 bg-[#FFED00] text-black font-bold rounded-lg hover:shadow-lg transition-all ease-in-out">
                  <span className="">continuar</span>
                </button>
              </div>
            </motion.div>
          </CustomBackdrop>
        )}
        {modalOpenTwo && (
          <CustomBackdrop onClick={closeTwo}>
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="w-[450px]  m-auto p-8 rounded-xl flex flex-col items-center dark:bg-[--background-dark-blue] relative"
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <h2 className="text-[--text-body] text-xl mb-5">
                Choose an Authenticator
              </h2>
              <Close
                className="absolute w-[13px] top-5 right-5 cursor-pointer"
                onClick={closeTwo}
              />
              <div className="w-full h-full flex flex-col items-center gap-4">
                <h2>Aplicación de autenticación</h2>
              </div>
            </motion.div>
          </CustomBackdrop>
        )} */}
        {modalOpenThree && (
          <CustomBackdrop onClick={closeThree}>
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="w-[450px]  m-auto p-8 rounded-xl flex flex-col items-center dark:bg-[--background-dark-blue] relative"
              variants={dropIn}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {check && (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-[32px] top-5 left-5 cursor-pointer text-white"
                  onClick={() => {
                    setCheck(false);
                    const newOtp = new Array(length).fill("");
                    setOtp(newOtp);
                  }}
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M6 12H18M6 12L11 7M6 12L11 17"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>{" "}
                  </g>
                </svg>
                // <p
                //   className="absolute w-[13px] top-5 left-5 cursor-pointer text-white"
                //   onClick={() => setCheck(false)}
                // >
                //   {"<-"}
                // </p>
              )}
              <h2 className="text-[--text-body] text-xl mb-5">
                Choose an Authenticator
              </h2>
              <Close
                className="absolute w-[13px] top-5 right-5 cursor-pointer"
                onClick={closeThree}
              />
              {check ? (
                <div className="w-full h-full flex flex-col">
                  <h2 className="text-base text-white mb-5">
                    Introduce el código de 6 dígitos generado por la aplicación
                    de autenticación.
                  </h2>

                  <CustomInputOtp
                    className="mb-4"
                    length={6}
                    otp={otp}
                    setOtp={setOtp}
                    fieldValidity={fieldValidity}
                    setFieldValidity={setFieldValidity}
                  />

                  {error && (
                    <p className="text-red-600 mb-2">
                      Ha introducido un código de verificación 2FA incorrecto.
                    </p>
                  )}

                  <button
                    className="w-full cursor-pointer p-3 bg-[#FFED00] disabled:opacity-50 disabled:cursor-default text-black font-bold rounded-lg hover:shadow-lg transition-all ease-in-out"
                    onClick={onOtpSubmit}
                    disabled={!isValid}
                  >
                    <span className="">Enviar</span>
                  </button>
                </div>
              ) : (
                <div className="w-full h-full flex flex-col">
                  <h2 className="text-base text-white mb-2">
                    Vincular un autenticador
                  </h2>
                  <p className="text-sm text-white mb-4">
                    Escanea este código QR en la aplicación de autenticación
                  </p>
                  <div className="flex flex-col gap-y-5 justify-center items-center mb-5">
                    <div className="flex justify-center items-center w-[200px] h-[200px] border border-yellow-500 bg-[#14181F] rounded-lg">
                      <img
                        src={authentication?.dataURL}
                        alt=""
                        className="w-[90%] h-[90%] object-cover rounded-lg "
                        // style="display:block;margin:auto"
                      />
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <p className="text-base text-white">2TBZGGMMQPAMUWSX</p>
                      <Close
                        className="w-[16px] cursor-pointer"
                        onClick={close}
                      />
                    </div>
                  </div>
                  <p className="text-sm text-white mb-4">
                    Si no puedes escanear el código QR, introduce este código
                    manualmente en la aplicación.
                  </p>
                  <button
                    className="w-full cursor-pointer p-3 bg-[#FFED00] text-black font-bold rounded-lg hover:shadow-lg transition-all ease-in-out"
                    onClick={() => setCheck(true)}
                  >
                    <span className="">continuar</span>
                  </button>
                </div>
              )}
            </motion.div>
          </CustomBackdrop>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Security;
