import React, { useEffect, useState } from "react";
import IconSecurity from "@assets/Icon/IconSecurity.svg";
import HalfStar from "@assets/Icon/HalfStar.svg";
import FullStar from "@assets/Icon/FullStar.svg";
import Flash from "@/assets/Icon/Flash.svg";
import Bank from "@/assets/Icon/Bank.svg";
import IconInfo2 from "@/assets/Icon/IconInfo2.svg";
import IconInfo3 from "@/assets/Icon/IconInfo3.svg";
import Polygon1 from "@/assets/Icon/Polygon1.svg";
import ArrowDown from "@/assets/Icon/ArrowDown.svg";
import US1 from "@/assets/Icon/US1.svg";
import Personal from "@/assets/Icon/Person.svg";
import CreateAccount3 from "@/assets/Icon/CreateAccount3.svg";
import SendReceiver from "@/assets/Icon/SendReceiver.svg";
import PayForTransfers1 from "@/assets/Icon/PayForTransfers1.svg";
import TrendUp01 from "@/assets/Icon/TrendUp01.svg";
import Verified from "@/assets/Icon/Verified.svg";
import CheckIcon from "@/assets/Icon/CheckIcon.svg";
import Send01 from "@/assets/Icon/Send01.svg";
import BellNotification from "@/assets/Icon/BellNotification.svg";
import IconInfo from "@/assets/Icon/IconInfo.svg";
import Percentage from "@/assets/Icon/Percentage.svg";
import BankUser from "@/assets/Icon/BankUser.svg";
import SendBank from "@/assets/Icon/SendBank.svg";
import PhysicalPoint from "@/assets/Icon/PhysicalPoint.svg";
import OtherAccount from "@/assets/Icon/OtherAccount.svg";
import Content from "@/assets/Icon/Content.svg";
import SecurityIcon from "@/assets/Icon/SecurityIcon.svg";
import Lock01 from "@/assets/Icon/Lock01.svg";
import Fingerprint01 from "@/assets/Icon/Fingerprint01.svg";
import SecurityIcon02 from "@/assets/Icon/SecurityIcon02.svg";
import CurrencyLeaks from "@/assets/Icon/CurrencyLeaks.svg";
import GrayMap from "@/assets/Icon/GrayMap.svg";
import CintaV2 from "@assets/Icon/CintaV2.svg";

import "./People.css";
import { AnimatePresence, motion } from "framer-motion";
import Check2 from "@/assets/Icon/Check2";

const People = () => {
  const [isOpenUsdt, setIsOpenUsdt] = useState(false);
  const [isForm, setIsForm] = useState(false);
  const [check, setCheck] = useState(false);
  const [checkTwo, setCheckTwo] = useState(false);


  useEffect(() => {
    // Esta función se ejecutará cada 2 segundos
    const interval = setInterval(() => {
      // Cambia el estado alternando entre true y false
      setIsOpenUsdt((prevEstado) => !prevEstado);
    }, 5000); // 2000 milisegundos = 2 segundos

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []); // Se pasa un array vacío como segundo argumento para que el efecto se ejecute solo una vez al montar el componente

  const openModalForm = () => {
    setIsForm(true);
    document.body.style.overflow = "hidden";
  };

  const closeModalForm = () => {
    setIsForm(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="w-full">
      <div className="w-full min-h-screen bg-[--yellow] flex flex-col items-center pt-[8rem] pb-[8rem]">
        <div className="max-w-[1060px] w-full mx-auto flex">
          <div className="w-[55%] h-full">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center">
                <img src={Personal} alt="" />
              </div>
              <h6>Personal</h6>
            </div>
            <h2 className="w-[580px] text-[50px] leading-[55px] mb-4">
              <span className="font-bold">Con VankPay</span> envía dinero de
              forma rápida y segura
            </h2>
            <p className="w-[500px] text-[16px] leading-[28px] mb-7">
              Únete a los{" "}
              <span className="font-bold">+2 millones de usuarios</span> que
              ahorran con Vank al hacer sus transferencias internacionales en
              solo minutos.
            </p>
            <div className="flex items-center gap-4">
              <div className="max-w-max flex items-center gap-2 py-3 px-5 rounded-[40px] bg-[--yellow] text-[--background-dark] border border-[#161616] cursor-pointer">
                <div className="flex items-center gap-1">
                  {new Array(4).fill("").map(() => (
                    <img src={FullStar} alt="" />
                  ))}
                  <img src={HalfStar} alt="" />
                </div>
                4.8
              </div>
              <div className="max-w-max flex items-center gap-2 py-3 px-5 rounded-[40px] bg-[--yellow] text-[--background-dark] border border-[#161616] cursor-pointer">
                <img src={IconSecurity} alt="" />
                <span className="font-bold">Transferencias seguras</span>
              </div>
            </div>
          </div>
          <div className="relative w-[45%] h-full flex justify-end items-center ">
            <div className="w-[450px] h-[500px] flex flex-col bg-[#FFFFFF] rounded-[32px] px-5 py-7 z-10">
              <div className={`relative h-[250px] flex flex-col gap-3 mb-5`}>
                <div
                  className={`absolute ${
                    isOpenUsdt ? "-translate-y-0" : "translate-y-[120%]"
                  }
                  transition-all duration-1000 w-full h-[70px] border border-[#C9CBCE] rounded-[12px] flex justify-between items-center px-4 py-1`}
                >
                  <div className="flex flex-col leading-none">
                    <p className="text-sm text-[#454745]">Tú envias</p>
                    <span className="text-base text-[#161616] font-bold">
                      1,000
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={US1} alt="" />
                    <p className="text-base text-[#161616] font-bold">USDT</p>
                    <img src={Polygon1} alt="" />
                  </div>
                </div>
                <div
                  className={`absolute ${
                    isOpenUsdt ? "translate-y-[120%]" : "translate-y-0"
                  } transition-all duration-1000  w-full h-[70px] border border-[#C9CBCE] rounded-[12px] flex justify-between items-center px-4 py-1`}
                >
                  <div className="flex flex-col leading-none">
                    <p className="text-sm text-[#454745]">
                      El receptor obtiene
                    </p>
                    <span className="text-base text-[#161616] font-bold">
                      1,000
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img src={US1} alt="" />
                    <p className="text-base text-[#161616] font-bold">USDT</p>
                    <img src={Polygon1} alt="" />
                  </div>
                </div>
                <div
                  className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-11 h-11 flex justify-center items-center bg-[#FFFFFF] border-2 border-[#C9CBCE] rounded-full cursor-pointer"
                  onClick={() => setIsOpenUsdt(!isOpenUsdt)}
                >
                  <img src={ArrowDown} alt="" />
                </div>
              </div>
              <div className="w-full border border-[#C9CBCE] bg-black rounded-[12px] flex flex-col justify-between items-center mb-5">
                <div className="w-full flex items-center gap-2 px-4 py-2">
                  <img src={Flash} alt="" />
                  <p className="text-sm text-[#FFFFFF] font-bold">
                    Transferencia instantánea
                  </p>
                </div>
                <div className="w-full p-[14px]  flex items-center gap-3 bg-[#FFFFFF] rounded-b-[11px]">
                  <div className="w-[40px] h-[40px] rounded-full bg-[--yellow] flex items-center justify-center">
                    <img src={Bank} alt="" />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[15px]">
                      Haz uso de tu dinero, como si fuera tuyo
                    </p>
                    <p className="text-sm">Transferencias en solo minutos</p>
                  </div>
                </div>
              </div>
              <div className="w-full flex flex-col gap-y-1 mb-5">
                <div className="flex items-center justify-between ">
                  <p className="text-sm text-[#454745]">Tasa de conversión</p>
                  <p className="text-sm font-bold">1 USD = 1 USDT (0,18%)</p>
                </div>
                <div className="flex items-center justify-between ">
                  <p className="text-sm text-[#454745]">Costo</p>
                  <p className="text-sm font-bold">
                    <span className="line-through">3.90 USD</span> (Costo
                    primera transferencia: 0 USD)
                  </p>
                </div>
                <div className="flex items-center justify-between ">
                  <p className="text-sm text-[#454745]">Tiempo de espera</p>
                  <p className="text-sm font-bold">
                    Transfiere en menos de 10 minutos
                  </p>
                </div>
              </div>
              <div className="w-full flex items-center justify-between ">
                <img src={IconInfo2} alt="" />
                <p className="w-[380px] text-[12px]">
                  Los costos para la siguientes transferencias pueden variar
                  dependiendo del tipo de cuenta creada y la clase de
                  suscripción adquirida, para más información has{" "}
                  <span className="font-bold">clic aquí</span>
                </p>
              </div>
            </div>
            <div className="gradiente-lineal absolute -bottom-8 w-[450px] h-[70px] flex flex-col rounded-b-[32px] px-5 py-7" />
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen bg-[#FFFFFF] flex flex-col items-center pt-[6rem]">
        <div className="max-w-[1060px] w-full mx-auto flex ">
          <div className="w-full flex flex-col items-center justify-center mb-20">
            <span className="text-lg text-[#161616] border-b-2 border-[--yellow] leading-none mb-3">
              Cuenta hasta 3
            </span>
            <h2 className="w-[650px] text-[55px] leading-[64px] text-center font-medium mb-16">
              Transfiere tu dinero en{" "}
              <span className="font-bold">3 simples pasos</span>
            </h2>

            <div className="w-full grid grid-cols-3 gap-12 mb-16">
              <div className="w-full h-[500px] flex flex-col gap-y-7 bg-[#161616] rounded-[32px] p-[32px]">
                <div className="h-[60%] w-full px-2">
                  <img
                    src={CreateAccount3}
                    alt=""
                    className="w-full h-full  object-contain"
                  />
                </div>
                <div className="h-[40% w-full]">
                  <h3 className="text-[20px] text-[#FFED00] mb-3">
                    1. Crea tu cuenta en Vank
                  </h3>
                  <p className="text-[15px] text-[#FFFFFF]">
                    Regístrate, elige un plan y valida tu información para
                    realizar las transacciones que necesites.
                  </p>
                </div>
              </div>
              <div className="w-full h-[500px] bg-[#161616] rounded-[32px] p-[32px]">
                <div className="h-[60%] w-full flex items-center justify-center">
                  <img src={SendReceiver} alt="" className="object-cover " />
                </div>
                <div className="h-[40% w-full]">
                  <h3 className="text-[20px] text-[#FFED00] mb-3">
                    2. Agrega los detalles del receptor
                  </h3>
                  <p className="text-[15px] text-[#FFFFFF]">
                    Ingresa la cuenta destino y la cantidad de dinero que deseas
                    enviar.
                  </p>
                </div>
              </div>
              <div className="w-full h-[500px] bg-[#161616] rounded-[32px] p-[32px]">
                <div className="h-[60%] w-full">
                  <img
                    src={PayForTransfers1}
                    alt=""
                    className="object-cover "
                  />
                </div>
                <div className="h-[40% w-full]">
                  <h3 className="text-[20px] text-[#FFED00] mb-3">
                    3. Espera unos minutos ¡y listo!
                  </h3>
                  <p className="text-[15px] text-[#FFFFFF]">
                    Puedes enviar dinero desde tu cuenta Vank, tu tarjeta débito
                    o crédito.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 py-3 px-5 rounded-[40px] bg-[--yellow] text-[--background-dark] cursor-pointer">
              <span className="font-bold">Crear una cuenta</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] h-[20px] font-bold"
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.6492 11.2501L12.7904 6.53852L13.8346 5.46167L20.5774 12.0001L13.8346 18.5385L12.7904 17.4617L17.6492 12.7501H3V11.2501H17.6492Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen bg-[#161616] flex flex-col items-center pt-[6rem] pb-[8rem]">
        <div className="max-w-[1060px] w-full mx-auto flex flex-col gap-[164px] items-center">
          <div className="w-full flex items-center">
            <div className="w-[55%] h-full ">
              <h2 className="w-[580px] text-[50px] leading-[55px] text-[#FFFFFF] mb-10">
                Lo que ves,{" "}
                <span className="text-[--yellow]">es lo que pagas</span>
              </h2>
              <div className="flex flex-col gap-y-2 mb-6">
                <h5 className="text-[18px] text-[#FFFFFF] font-bold">
                  Comisiones
                </h5>
                <p className="w-[520px] text-[14px] leading-[25px] text-[#FFFFFF]">
                  Los cargos por transacción serán mostrados de acuerdo a tu
                  plan contratado en Vank.{" "}
                  <span className="font-bold">
                    Consulta aquí más información.
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-y-2 mb-10">
                <h5 className="text-[18px] text-[#FFFFFF] font-bold">
                  Métodos de pago
                </h5>
                <p className="w-full text-[14px] leading-[25px] text-[#FFFFFF]">
                  Los usuarios de Vank pueden ultilizar los saldos de su propia
                  cuenta Vank, sus tarjetas de crédito o tarjetas débito.{" "}
                  <span className="font-bold">
                    Conoce los métodos de pago aceptados
                  </span>
                </p>
              </div>
              <div className="max-w-max flex items-center gap-2 py-3 px-5 rounded-[40px] bg-[--yellow] text-[--background-dark] cursor-pointer">
                <span className="font-bold">Comienza</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[20px] h-[20px] font-bold"
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.6492 11.2501L12.7904 6.53852L13.8346 5.46167L20.5774 12.0001L13.8346 18.5385L12.7904 17.4617L17.6492 12.7501H3V11.2501H17.6492Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
            <div className="w-[45%] h-full flex justify-end items-center ">
              <div className="w-[400px] h-[440px] flex flex-col bg-[#F2F5F7] rounded-[32px] px-5 py-7 z-10">
                <h2 className="text-[22px] text-[#161616] text-center mb-2 leading-none">
                  Resumen de la transferencia
                </h2>
                <div className="w-full flex items-center justify-center gap-1 mb-7">
                  <img src={Verified} alt="" />
                  <h3 className="text-base text-[#FFB624]">
                    Tarifa preferencial membresía oro
                  </h3>
                </div>
                <div className="w-full h-full flex flex-col gap-y-5 bg-[#FFFFFF] p-7 rounded-[24px]">
                  <div className="flex items-center justify-between ">
                    <p className="text-sm text-[#6A6C6A]">Tú envías</p>
                    <p className="text-sm font-bold">750 USD</p>
                  </div>
                  <div className="flex items-center justify-between ">
                    <p className="text-sm text-[#6A6C6A]">Tasa</p>
                    <p className="text-sm font-bold flex gap-2">
                      <img src={TrendUp01} alt="" />1 USD = 1 USDT
                    </p>
                  </div>
                  <div className="flex items-center justify-between ">
                    <p className="text-sm text-[#6A6C6A] flex gap-1">
                      Reciben <img src={IconInfo2} alt="" />
                    </p>
                    <p className="text-sm font-bold">750 USDT</p>
                  </div>
                  <div className="flex items-center justify-between ">
                    <p className="text-sm text-[#6A6C6A] flex gap-1">
                      Cargos <img src={IconInfo2} alt="" />
                    </p>
                    <p className="text-sm font-bold">3.90 USD</p>
                  </div>
                  <div className="flex items-center justify-between ">
                    <p className="text-sm font-bold">Total</p>
                    <p className="text-sm font-bold">753.9 USD</p>
                  </div>
                  <div className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-[40px] bg-[--yellow] text-[--background-dark] cursor-pointer">
                    <span className="font-bold">Confirmar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex gap-16">
            <div className="relative w-1/2 h-full flex justify-start items-center ">
              <div className=" w-[390px] h-[530px] flex flex-col bg-[#F2F5F7] rounded-[32px] p-[20px] ">
                <div className="relative w-full h-full bg-[#161616] rounded-[24px] overflow-hidden">
                  <div className="w-full h-[50%] bg-[#161616] flex flex-col items-center py-5">
                    <div className="w-[50px] h-[50px] rounded-full bg-[#FFED00] flex justify-center items-center mb-1">
                      <img src={Send01} alt="" />
                    </div>
                    <h3 className="text-[32px] text-[#FFFFFF] mb-1">750 USD</h3>
                    <p className="text-[18px] text-[#FFFFFF] mb-1">
                      Para{" "}
                      <span className="text-[#FFED00]">Micah Richards</span>
                    </p>
                    <p className="text-[18px] text-[#FFFFFF] mb-1">
                      Desde tu <span className="font-bold">Wallet BTC</span>
                    </p>
                  </div>

                  <div className="absolute bottom-0 right-0 w-full h-[60%] flex flex-col gap-y-5 bg-[#FFFFFF] p-7 rounded-[24px]">
                    <div className="h-[60px] flex items-center gap-3">
                      <div className="flex flex-col gap-y-2">
                        <h6 className="text-sm text-[#6A6C6A]">Hoy</h6>
                        <p className="text-sm text-[#6A6C6A]">10:33</p>
                      </div>
                      <div className="h-full w-1 bg-[#161616] rounded-full" />
                      <div>
                        <p className="text-sm text-[#6A6C6A]">Enviada</p>
                      </div>
                    </div>
                    <div className="h-[60px] flex items-center gap-3">
                      <div className="flex flex-col gap-y-2">
                        <h6 className="text-sm text-[#6A6C6A]">Hoy</h6>
                        <p className="text-sm text-[#6A6C6A]">10:35</p>
                      </div>
                      <div className="h-full w-1 bg-[#161616] rounded-full" />
                      <div>
                        <p className="text-sm text-[#161616]">
                          Convertida en USDT
                        </p>
                        <p className="text-[12px] text-[#6A6C6A]">
                          Así viaja a cualquier lugar del mundo
                        </p>
                      </div>
                    </div>
                    <div className="h-[60px] flex items-center gap-3">
                      <div className="flex flex-col gap-y-2">
                        <h6 className="text-sm text-[#6A6C6A]">est</h6>
                        <p className="text-sm text-[#6A6C6A]">10:37</p>
                      </div>
                      <div className="h-full w-1 bg-[#C9CBCE] rounded-full" />
                      <div>
                        <p className="text-sm text-[#6A6C6A]">
                          Transferencia exitosa
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-[40px] bg-[--yellow] text-[--background-dark] cursor-pointer">
                      <span className="font-bold">Confirmar</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute w-[280px] h-[280px] -top-[75px] -right-20">
                <img src={BellNotification} alt="" className="" />
              </div>
            </div>
            <div className="w-1/2 h-full pl-12">
              <h2 className="w-[480px] text-[40px] leading-[45px] text-[#FFFFFF] mb-5">
                <span className="text-[--yellow]">
                  Conoce el estado de tus transferencias
                </span>{" "}
                en tiempo real
              </h2>
              <p className="text-base leading-[25px] text-[#FFFFFF] mb-6">
                Haz seguimiento de todas tus transferencias nacionales e
                internacionales en tiempo real. Así podrás saber dónde se
                encuentra tu dinero todo el tiempo. Hazlo a través de:
              </p>
              <div className="flex flex-col  gap-3 mb-7">
                <div className="flex items-center gap-3">
                  <img src={CheckIcon} alt="" className="w-[28px] h-[28px]" />
                  <span className="text-base leading-[28px] text-[#FFFFFF]">
                    Aplicación móvil.
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={CheckIcon} alt="" className="w-[28px] h-[28px]" />
                  <span className="text-base leading-[28px] text-[#FFFFFF]">
                    Mensajes de texto (SMS).
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src={CheckIcon} alt="" className="w-[28px] h-[28px]" />
                  <span className="text-base leading-[28px] text-[#FFFFFF]">
                    Notificaciones al correo electrónico.
                  </span>
                </div>
              </div>
              <div className="max-w-max flex items-center gap-2 py-3 px-5 rounded-[40px] bg-[--yellow] text-[--background-dark] cursor-pointer">
                <span className="font-bold">Empieza ahora</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[20px] h-[20px] font-bold"
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.6492 11.2501L12.7904 6.53852L13.8346 5.46167L20.5774 12.0001L13.8346 18.5385L12.7904 17.4617L17.6492 12.7501H3V11.2501H17.6492Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen bg-[#FFFFFF] pt-[70px] pb-[70px]">
        <div className="max-w-[1050px] mx-auto flex gap-12 bg-[#FFED00] rounded-[32px]">
          <div className="w-1/2 h-[550px] flex flex-col justify-center rounded-[32px] pl-[42px] py-[68px]">
            <h3 className="max-w-[130px] text-lg leading-none border-b-2 border-[#FFFFFF] text-[#161616] mb-5">
              Tu primera vez
            </h3>
            <h2 className="text-[50px] leading-[54px] mb-4 text-[#161616]">
              Haz tu primera transacción con{" "}
              <span className="font-bold">Comisión-Cero</span>
            </h2>
            <p className="text-base leading-[24px] text-[#161616] mb-9">
              Realiza tu primera transferencia internacional sin costos
              adicionales. Haz parte del futuro financiero con Vank.
            </p>
            <p className="text-base leading-none text-[#161616] mb-6 flex items-center gap-2 underline">
              <img src={IconInfo3} alt="" />
              Al registrate aceptas{" "}
              <span className="font-bold ">términos y condiciones</span>
            </p>
            <div className="max-w-max flex items-center gap-2 py-3 px-5 rounded-[40px] bg-[#161616] text-[#FFED00] cursor-pointer">
              <span className="font-bold">Regístrate ahora</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] h-[20px] font-bold"
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.6492 11.2501L12.7904 6.53852L13.8346 5.46167L20.5774 12.0001L13.8346 18.5385L12.7904 17.4617L17.6492 12.7501H3V11.2501H17.6492Z"
                    fill="#FFED00"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center rounded-[32px] p-[32px]">
            <img
              src={Percentage}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen bg-[#F2F5F7] flex flex-col items-center pt-[6rem] pb-[8rem]">
        <div className="max-w-[1060px] w-full mx-auto flex flex-col gap-[164px] items-center">
          <div className="w-full flex flex-col items-center">
            <span className="text-lg text-[#161616] border-b-2 border-[--yellow] leading-none mb-3">
              Opciones de pago
            </span>
            <h2 className="w-[900px] text-[40px] leading-[50px] text-center font-medium mb-16">
              Utiliza cualquiera de estos métodos para recargar tu cuenta{" "}
              <span className="font-bold">Vank</span>
            </h2>
            <div className="w-full grid grid-cols-2 gap-[32px]">
              <div className="w-full min-h-[240px] flex justify-around gap-6 rounded-[32px] bg-[#FFFFFF] p-[40px]">
                <div className="w-[47px] h-[47px] flex justify-center items-center rounded-full bg-[#FFED00]">
                  <img src={BankUser} alt="" />
                </div>
                <div className="w-[370px] space-y-4">
                  <h2 className="text-[24px] leading-[32px]">
                    Tarjeta Débito o Crédito
                  </h2>
                  <p className="text-base leading-[28px]">
                    Usa tu tarjeta débito o crédito para recargar tu cuenta de
                    VankPay sin ningún costo.
                  </p>
                  <div className="max-w-max flex items-center gap-2 py-3 px-5 rounded-[40px] bg-[#161616] text-[#FFED00] cursor-pointer">
                    <span className="font-bold">Vincula tus tarjetas</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[20px] h-[20px] font-bold"
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
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.6492 11.2501L12.7904 6.53852L13.8346 5.46167L20.5774 12.0001L13.8346 18.5385L12.7904 17.4617L17.6492 12.7501H3V11.2501H17.6492Z"
                          fill="#FFED00"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full min-h-[240px] flex justify-around gap-6 rounded-[32px] bg-[#FFFFFF] p-[40px]">
                <div className="w-[47px] h-[47px] flex justify-center items-center rounded-full bg-[#FFED00]">
                  <img src={SendBank} alt="" />
                </div>
                <div className="w-[370px] space-y-4">
                  <h2 className="text-[24px] leading-[32px]">Bank Transfer</h2>
                  <p className="text-base leading-[28px]">
                    Transfiere a través de internet a tu cuenta VankPay sin
                    ningún costo adicional.
                  </p>
                  <div className="max-w-max flex items-center gap-2 py-3 px-5 rounded-[40px] bg-[#161616] text-[#FFED00] cursor-pointer">
                    <span className="font-bold">Vincula tus tarjetas</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[20px] h-[20px] font-bold"
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
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.6492 11.2501L12.7904 6.53852L13.8346 5.46167L20.5774 12.0001L13.8346 18.5385L12.7904 17.4617L17.6492 12.7501H3V11.2501H17.6492Z"
                          fill="#FFED00"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full min-h-[240px] flex justify-around gap-6 rounded-[32px] bg-[#FFFFFF] p-[40px]">
                <div className="w-[47px] h-[47px] rounded-full flex justify-center items-center bg-[#FFED00]">
                  <img src={PhysicalPoint} alt="" />
                </div>
                <div className="w-[370px] space-y-4">
                  <h2 className="text-[24px] leading-[32px]">
                    Pago en punto físico
                  </h2>
                  <p className="text-base leading-[28px]">
                    Dirígete a uno de nuestros puntos autorizados para recargar
                    tu cuenta con dinero en efectivo
                  </p>
                  <div className="max-w-max flex items-center gap-2 py-3 px-5 rounded-[40px] bg-[#161616] text-[#FFED00] cursor-pointer">
                    <span className="font-bold">Vincula tus tarjetas</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[20px] h-[20px] font-bold"
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
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.6492 11.2501L12.7904 6.53852L13.8346 5.46167L20.5774 12.0001L13.8346 18.5385L12.7904 17.4617L17.6492 12.7501H3V11.2501H17.6492Z"
                          fill="#FFED00"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full min-h-[240px] flex justify-around gap-6 rounded-[32px] bg-[#FFFFFF] p-[40px]">
                <div className="w-[47px] h-[47px] rounded-full flex justify-center items-center bg-[#FFED00]">
                  <img src={OtherAccount} alt="" />
                </div>
                <div className="w-[370px] space-y-4">
                  <h2 className="text-[24px] leading-[32px]">
                    Otra cuenta Vank (VankPay)
                  </h2>
                  <p className="text-base leading-[28px]">
                    Recibe transferencias desde cualquier otra cuenta Vank a
                    través de VankPay.
                  </p>
                  <div className="max-w-max flex items-center gap-2 py-3 px-5 rounded-[40px] bg-[#161616] text-[#FFED00] cursor-pointer">
                    <span className="font-bold">Vincula tus tarjetas</span>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-[20px] h-[20px] font-bold"
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
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.6492 11.2501L12.7904 6.53852L13.8346 5.46167L20.5774 12.0001L13.8346 18.5385L12.7904 17.4617L17.6492 12.7501H3V11.2501H17.6492Z"
                          fill="#FFED00"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col items-center gap-9">
            <span className="text-lg text-[#161616] border-b-2 border-[--yellow] leading-none mb-3">
              Métodos de pago
            </span>
            <div className="w-full flex items-center gap-16">
              <div className="w-1/2 h-full ">
                <h2 className="w-[480px] text-[48px] leading-[48px] text-[#161616] mb-5">
                  Vincula tu cuenta <span className="font-bold">Vank</span> como
                  una cuenta tradicional
                </h2>
                <p className="text-base leading-[25px] text-[#161616] mb-6">
                  Usa tu iPhone o Android para realizar tus pagos sin contacto,
                  solo debes adquirir tu{" "}
                  <span className="font-bold">VankCard</span>
                </p>
                <div className="flex flex-col  gap-3 mb-7">
                  <div className="flex gap-3">
                    <img src={CheckIcon} alt="" className="w-[28px] h-[28px]" />
                    <span className="text-[17px] leading-[23px] text-[#161616]">
                      Vincúlala como una tarjeta crédito o débito tradicional y
                      úsala desde tu dispositivo.
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <img src={CheckIcon} alt="" className="w-[28px] h-[28px]" />
                    <span className="text-[17px] leading-[23px] text-[#161616]">
                      Los cobros se realizarán directamente a tu{" "}
                      <span className="font-bold">cuenta Vank</span> en dólares.
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <img src={CheckIcon} alt="" className="w-[28px] h-[28px]" />
                    <span className="text-[17px] leading-[23px] text-[#161616]">
                      Úsala en cualquier parte del mundo.
                    </span>
                  </div>
                </div>
                <div className="max-w-max flex items-center gap-2 py-3 px-5 rounded-[40px] bg-[--yellow] text-[--background-dark] cursor-pointer">
                  <span className="font-bold">Obtener Vankcard</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-[20px] h-[20px] font-bold"
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
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.6492 11.2501L12.7904 6.53852L13.8346 5.46167L20.5774 12.0001L13.8346 18.5385L12.7904 17.4617L17.6492 12.7501H3V11.2501H17.6492Z"
                        fill="#000000"
                      ></path>{" "}
                    </g>
                  </svg>
                </div>
              </div>
              <div className="w-1/2 h-full flex justify-center items-center">
                <div className=" w-[500px] h-[550px] flex flex-col bg-[#FFFFFF] rounded-[32px] overflow-hidden">
                  <img
                    src={Content}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen bg-[#161616] flex flex-col items-center pt-[6rem]">
        <div className="max-w-[1060px] w-full mx-auto flex ">
          <div className="w-full flex items-center gap-[96px] mb-20">
            <div className="w-[40%] ">
              <h2 className="w-[400px] text-[55px] text-[#FFFFFF] leading-[64px] text-left font-medium mb-7">
                <span className="text-[--yellow]">Seguridad</span> Máxima
              </h2>
              <div className="w-full flex gap-5 mb-[28px]">
                <div className="min-w-[48px] max-h-[48px] flex justify-center items-center rounded-full border-2 border-[#FFED00]">
                  <img src={Lock01} alt="" />
                </div>
                <div className="w-full space-y-1 py-1">
                  <h2 className="text-[19px] leading-[32px] text-[#FFFFFF]">
                    Protección
                  </h2>
                  <p className="text-sm leading-[23px] text-[#FFFFFF]">
                    Mantenemos tu dinero en un lugar seguro, dónde solo tú
                    tienes acceso. El dinero es tuyo y no es invertido ni
                    prestado a terceros.
                  </p>
                </div>
              </div>
              <div className="w-full flex gap-5 mb-[28px]">
                <div className="min-w-[48px] max-h-[48px] flex justify-center items-center rounded-full border-2 border-[#FFED00]">
                  <img src={Fingerprint01} alt="" />
                </div>
                <div className="w-full space-y-1 py-1">
                  <h2 className="text-[19px] leading-[32px] text-[#FFFFFF]">
                    Métodos seguros de autenticación
                  </h2>
                  <p className="text-sm leading-[23px] text-[#FFFFFF]">
                    Sus datos se almacenan y protegen detrás de múltiples capas
                    de autenticación. La autenticación en dos pasos también
                    puede ser habilitada en su cuenta para mayor seguridad.
                  </p>
                </div>
              </div>
              <div className="w-full flex gap-5 mb-[28px]">
                <div className="min-w-[48px] max-h-[48px] flex justify-center items-center rounded-full border-2 border-[#FFED00]">
                  <img src={SecurityIcon02} alt="" />
                </div>
                <div className="w-full space-y-1 py-1">
                  <h2 className="text-[19px] leading-[32px] text-[#FFFFFF]">
                    Licenciado
                  </h2>
                  <p className="text-sm leading-[23px] text-[#FFFFFF]">
                    Vank cuenta con los permisos necesarios para realizar su
                    operación a través de todo el mundo.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[60%]">
              <img
                src={SecurityIcon}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full min-h-screen bg-[#F2F5F7] pt-[6rem] pb-[8rem]">
        <div className="max-w-[1060px] mx-auto flex items-end gap-x-12 ">
          <div className="w-1/2 h-[530px] flex flex-col justify-start rounded-[32px] pl-[32px] py-[68px]">
            <h3 className="max-w-max text-base leading-none border-b-2 border-[#FFED00] text-[#161616] mb-5">
              Cobertura para personas naturales
            </h3>
            <div className="relative w-full mb-3">
              <h2 className="relative text-[43px] leading-[48px] mb-4 text-[#161616] z-10">
                Realiza transferencias internacionales entre Colombia, Perú y
                Chile
              </h2>
              <div className="absolute w-full h-[40px] bg-[#FFED00] bottom-[10px]"></div>
            </div>
            <div className="w-[422px] h-[400px] ">
              <img
                src={CurrencyLeaks}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center rounded-[32px]">
            <img
              src={GrayMap}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="relative w-full min-h-[467px] flex justify-center items-center bg-[#161616] pt-[30px] pb-[30px]">
        <div className="max-w-[1060px] mx-auto">
          <div className="w-[852px] p-2 flex flex-col justify-center items-center">
            <h3 className="max-w-max text-lg leading-none border-b-2 border-[#6B6B6B] text-[#FFED00] mb-7">
              ¿Qué más necesitas para empezar?
            </h3>
            <h2 className="text-[50px] leading-[54px] text-[#FFFFFF] text-center mb-8">
              Entérate de todas las novedades y los servicios de Vank
            </h2>
            <div
              className="max-w-max flex items-center gap-2 py-3 px-5 rounded-[40px] bg-[--yellow] text-[--background-dark] cursor-pointer"
              onClick={openModalForm}
            >
              <span className="font-bold">Regístrate ahora</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-[20px] h-[20px] font-bold"
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
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.6492 11.2501L12.7904 6.53852L13.8346 5.46167L20.5774 12.0001L13.8346 18.5385L12.7904 17.4617L17.6492 12.7501H3V11.2501H17.6492Z"
                    fill="#000000"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
          {/* <div className="w-[60%] flex flex-col justify-center rounded-[32px]">
            <img
              src={Map}
              alt=""
              className="w-full h-full object-contain"
            />
          </div> */}
        </div>
        <img src={CintaV2} alt="" className="absolute -bottom-[50px]" />
      </div>

       {/* modal de form */}
       <AnimatePresence>
        {isForm && (
          <motion.div
            onClick={closeModalForm}
            className="fixed inset-0 bg-black/50 z-50 cursor-pointer flex justify-center items-center overflow-hidden"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: {
                duration: 0.3,
              },
            }}
            exit={{
              opacity: 0,
            }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[762px] h-[420px] bg-[#FFFFFF] mx-auto px-[42px] py-[32px] cursor-default flex flex-col rounded-[24px] overflow-hidden"
              initial={{
                scale: 0,
              }}
              animate={{
                scale: 1,
                transition: {
                  duration: 0.3,
                },
              }}
              exit={{
                scale: 0,
              }}
            >
              <h2 className="text-[24px] leading-[24px] mb-4 text-center">
                Entérate de Vank
              </h2>
              <div className="w-full grid grid-cols-2 gap-4 mb-4">
                <div className="grid w-full max-w-xs items-center gap-1.5">
                  <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Nombre
                  </label>
                  <input
                    placeholder="Nombre"
                    type="text"
                    className="flex h-[44px] w-full rounded-[8px] border border-input bg-background px-3 py-2 text-sm outline-none"
                  />
                </div>
                <div className="grid w-full max-w-xs items-center gap-1.5">
                  <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Apellido
                  </label>
                  <input
                    placeholder="Apellido"
                    type="text"
                    className="flex h-[44px] w-full rounded-[8px] border border-input bg-background px-3 py-2 text-sm outline-none"
                  />
                </div>
                <div className="grid w-full items-center gap-1.5 col-span-2">
                  <label className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Dirección de correo electrónico
                  </label>
                  <input
                    placeholder="tu@ejemplo.com"
                    type="email"
                    className="flex h-[44px] w-full rounded-[8px] border border-input bg-background px-3 py-2 text-sm outline-none"
                  />
                </div>
              </div>
              <p className="text-base mb-2">Contraseña</p>
              <div className="flex gap-1 mb-3">
                <div className="flex items-center relative cursor-pointer">
                  <input
                    type="checkbox"
                    className="appearance-none w-[15px] h-[15px] rounded-[3px] border-2 border-[#C9CBCE] relative cursor-pointer"
                    onChange={() => {
                      setCheckTwo(!checkTwo);
                    }}
                  />
                  {checkTwo && (
                    <div
                      className="absolute w-full h-full flex justify-center items-center rounded-[3px]"
                      onClick={() => setCheckTwo(!checkTwo)}
                    >
                      <Check2
                        className={`w-[9px] h-[10px] transition-all duration-300 ${
                          checkTwo ? "scale-100" : "scale-0"
                        }`}
                        fill="#97CB0A"
                      />
                    </div>
                  )}
                </div>
                <p className="text-sm leading-none">
                  Deseo recibir información sobre las novedades de Vank.
                </p>
              </div>
              <div className="flex gap-1 mb-7">
                <div className="flex items-center relative cursor-pointer">
                  <input
                    type="checkbox"
                    className="appearance-none w-[15px] h-[15px] rounded-[3px] border-2 border-[#C9CBCE] relative cursor-pointer"
                    onChange={() => {
                      setCheck(!check);
                    }}
                  />
                  {check && (
                    <div
                      className="absolute w-full h-full flex justify-center items-center rounded-[3px]"
                      onClick={() => setCheck(!check)}
                    >
                      <Check2
                        className={`w-[9px] h-[10px] transition-all duration-300 ${
                          check ? "scale-100" : "scale-0"
                        }`}
                        fill="#97CB0A"
                      />
                    </div>
                  )}
                </div>
                <p className="text-sm leading-none">
                  Acepto Política de tratamiento de datos.
                </p>
              </div>
              <div className="max-w-full flex items-center justify-center gap-2 py-3 px-5 rounded-[40px] bg-[--yellow] text-[--background-dark] cursor-pointer">
                <span className="font-bold">Suscripción</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default People;
