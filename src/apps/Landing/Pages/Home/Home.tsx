import { useState, Suspense } from "react";
import "./Home.css";
import IconInfo from "@/assets/Icon/IconInfo.svg";
import Percentage from "@/assets/Icon/Percentage.svg";
import Map from "@/assets/Icon/Map.svg";
import { motion, AnimatePresence } from "framer-motion";
import ScrollToTop from "react-scroll-to-top";
import Check2 from "@/assets/Icon/Check2";
import IconScrollToTop from "@/assets/Icon/IconScrollToTop";
import Welcome from "./Welcome/Welcome";
import MoneyTransferSolutions from "./MoneyTransferSolutions/MoneyTransferSolutions";
import GlobalTransfersHub from "./GlobalTransfersHub/GlobalTransfersHub";
import VankGlobal from "./VankGlobal/VankGlobal";
import FinancialCenter from "./FinancialCenter/FinancialCenter";
import DiscoverVank from "./DiscoverVank/DiscoverVank";
import SuccessStories from "../Section/SuccessStories/SuccessStories";
import LogoFooter from "@/assets/Icon/LogoFooter.svg";
import Vank from "@/assets/Vank.png";
import Marquee from "react-fast-marquee";

const Home = () => {
  const [selectCard, setSelectCard] = useState(null);
  const [isForm, setIsForm] = useState(false);
  const [check, setCheck] = useState(false);
  const [checkTwo, setCheckTwo] = useState(false);

  const openModalForm = () => {
    setIsForm(true);
    document.body.style.overflow = "hidden";
  };

  const closeModalForm = () => {
    setIsForm(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="">
      <Welcome />
      <MoneyTransferSolutions />
      <GlobalTransfersHub />
      <VankGlobal />
      <FinancialCenter />
      {/* <SuccessStories selectCard={selectCard} setSelectCard={setSelectCard} /> */}
      <DiscoverVank />

      {/* otra secciones */}
      <div className="w-full h-full xl:min-h-screen bg-[#FFFFFF] py-0 xl:py-[70px] overflow-hidden px-12">
        <div className="relative max-w-[1080px] 2xl:max-w-[1200px] mx-auto flex gap-16 2xl:gap-20 bg-[#161616] rounded-[32px] overflow-hidden">
          <div className="w-full xl:w-1/2 h-full flex flex-col justify-center rounded-[32px] pl-[42px] pr-[42px] xl:pr-0 py-[68px]">
            <h3 className="max-w-max xl:w-[130px] text-lg leading-none border-b-2 border-[#6B6B6B] text-[#FFED00] mb-5">
              Tu primera vez
            </h3>
            <h2 className="text-[50px] leading-[54px] mb-4 text-[#FFFFFF]">
              Haz tu primera transacción con{" "}
              <span className="text-[#FFED00]">Comisión-Cero</span>
            </h2>
            <p className="text-base leading-[24px] text-[#FFFFFF] mb-9">
              Realiza tu primera transferencia internacional sin costos
              adicionales. Haz parte del futuro financiero con Vank.
            </p>
            <p className="text-base leading-none text-[#FFFFFF] mb-6 flex items-center gap-2">
              <img src={IconInfo} alt="" />
              Al registrate aceptas{" "}
              <span className="font-bold ">términos y condiciones</span>
            </p>
            <div className="max-w-max flex items-center gap-2 py-3 px-5 rounded-[40px] bg-[--yellow] text-[--background-dark] cursor-pointer">
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
          <div className="w-1/2 xl:h-full h-[90%] flex flex-col justify-center rounded-[32px]  max-[1279px]:absolute static bottom-0  rotate-12 xl:rotate-0 opacity-35 xl:opacity-100 right-2 py-[30px]">
            <img
              src={Percentage}
              alt=""
              className="w-full h-full object-cover"
              // style={{position: 'sticky'}}
            />
          </div>
        </div>
      </div>

      {/* otra secciones */}
      <div className="w-full h-full xl:min-h-screen bg-[#F2F5F7] py-[60px] xl:py-[70px] overflow-hidden px-12">
        <div className="max-w-[1080px] 2xl:max-w-[1200px] mx-auto flex gap-4 xl:gap-2">
          <div className="w-1/2 xl:w-[40%] h-[350px] xl:h-[550px] flex flex-col justify-center rounded-[32px] pl-[25px] xl:pl-[32px]">
            <h3 className="max-w-max text-lg leading-none border-b-2 border-[#FFED00] text-[#161616] mb-5">
              Únete al universo Bank
            </h3>
            <h2 className="text-[40px] xl:text-[50px] leading-[54px] mb-4 text-[#161616]">
              A través del mundo <span className="font-bold">Vank</span> logró
              procesar <span className="font-bold">88 M USD</span>
            </h2>
          </div>
          <div className="w-1/2 xl:w-[60%] flex flex-col justify-center rounded-[32px]">
            <img src={Map} alt="" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>

      {/* otra secciones */}
      <div className="relative w-full min-h-[467px] flex justify-center items-center bg-[#161616] py-[60px] xl:py-[70px] px-12">
        <div className="max-w-[1080px] 2xl:max-w-[1200px]">
          <div className="w-full xl:w-[852px] p-2 flex flex-col justify-center items-center">
            <h3 className="max-w-max text-lg leading-none border-b-2 border-[#6B6B6B] text-[#FFED00] mb-7">
              ¿Qué más necesitas para empezar?
            </h3>
            <h2 className="text-[38px] xl:text-[50px] leading-[54px] text-[#FFFFFF] text-center mb-8">
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
        </div>
        <div className="absolute -bottom-[30px] w-full h-[110px] bg-transparent flex items-center justify-center overflow-hidden">
          <div className="absolute bottom-[2rem]  rotate-2 w-full flex items-center gap-x-4 h-[62px] bg-[#000000] overflow-hidden">
            <Marquee speed={80} direction="left">
              <div className="flex items-center min-w-[450px]">
                <h3 className="text-[28px] text-[#FFED00]">
                  Somos <span className="font-bold">el futuro.</span> Somos
                </h3>
                <img
                  src={Vank}
                  alt=""
                  className="w-[110px] h-[32px] object-contain"
                />
              </div>
              <div className="flex items-center min-w-[450px]">
                <h3 className="text-[28px] text-[#FFED00]">
                  Somos <span className="font-bold">el futuro.</span> Somos
                </h3>
                <img
                  src={Vank}
                  alt=""
                  className="w-[110px] h-[32px] object-contain"
                />
              </div>
              <div className="flex items-center min-w-[450px]">
                <h3 className="text-[28px] text-[#FFED00]">
                  Somos <span className="font-bold">el futuro.</span> Somos
                </h3>
                <img
                  src={Vank}
                  alt=""
                  className="w-[110px] h-[32px] object-contain"
                />
              </div>
            </Marquee>
          </div>
          <div className="absolute -rotate-2 w-full flex items-center gap-x-4 h-[60px] bg-[#FFED00] overflow-hidden">
            <Marquee speed={70} direction="right">
              <div className="flex items-center min-w-[450px]">
                <h3 className="text-[28px]">
                  Somos <span className="font-bold">el futuro.</span> Somos
                </h3>
                <img
                  src={LogoFooter}
                  alt=""
                  className="w-[110px] h-[32px] object-contain"
                />
              </div>
              <div className="flex items-center min-w-[450px]">
                <h3 className="text-[28px]">
                  Somos <span className="font-bold">el futuro.</span> Somos
                </h3>
                <img
                  src={LogoFooter}
                  alt=""
                  className="w-[110px] h-[32px] object-contain"
                />
              </div>
              <div className="flex items-center min-w-[450px]">
                <h3 className="text-[28px]">
                  Somos <span className="font-bold">el futuro.</span> Somos
                </h3>
                <img
                  src={LogoFooter}
                  alt=""
                  className="w-[110px] h-[32px] object-contain"
                />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
      
      {/* modal de card */}
      <AnimatePresence>
        {selectCard && (
          <motion.div
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
              className="w-full max-w-[961px] h-[400px] mx-auto my-8 cursor-default flex items-center rounded-[24px] overflow-hidden"
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
              <motion.div className="w-1/2 h-full rounded-l-[24px]">
                <img
                  src={selectCard?.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="w-1/2 h-full px-12 py-10 bg-[#FFFFFF]">
                <p className="w-[350px] text-[20px] leading-[28px] mb-5">
                  <span className="font-bold">{selectCard?.span}</span>{" "}
                  {selectCard?.text}
                </p>
                <p className="text-base leading-[28px] mb-8">
                  {selectCard?.description}
                </p>
                <div
                  className="max-w-max flex items-center gap-2 py-3 px-5 rounded-[40px] bg-[--yellow] text-[--background-dark] cursor-pointer"
                  onClick={() => {
                    setSelectCard(null);
                    document.body.style.overflow = "auto";
                  }}
                >
                  <span className="font-bold">Volver</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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

export default Home;
