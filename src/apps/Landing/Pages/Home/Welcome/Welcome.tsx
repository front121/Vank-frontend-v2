import React from "react";
import Marquee from "react-fast-marquee";
import Container from "@/assets/Icon/Container.svg";
import LogoBloomberg from "@/assets/Icon/LogoBloomberg.svg";
import LogoUsaToday from "@/assets/Icon/LogoUsaToday.svg";
import LogoTechCrunch from "@/assets/Icon/LogoTechCrunch.svg";
import LogoForbes from "@/assets/Icon/LogoForbes.svg";
import LogoTechRadar from "@/assets/Icon/LogoTechRadar.svg";

const Welcome = () => {
  return (
    <div className=" bg-[--yellow] flex flex-col items-center pt-[7rem]">
      <div className="max-w-[800px] w-full  mx-auto flex flex-col items-center pt-[40px]">
        <div className="flex items-center gap-[12px] py-[4px] pl-[10px] pr-[4px] rounded-[16px] bg-[#FFFCD6] max-w-max mb-4 cursor-pointer">
          <h2 className="px-[10px] py-[2px] rounded-[16px] bg-[--yellow] text-[--background-dark-black] text-[14px] font-medium">
            Nuevo
          </h2>
          <div className="flex items-center gap-1">
            <h2 className="text-[--background-dark-black] text-[14px] font-medium">
              Cuentas multi-divisas
            </h2>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[20px] h-[20px]"
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
        <h2 className="text-[70px] text-[--background-dark-black] text-center leading-[80px] font-medium mb-3">
          Pago sin fronteras simplificado
        </h2>
        <p className="max-w-[672px]  text-center text-xl mb-7">
          Ayudamos a individuos y empresas a enviar y recibir dinero{" "}
          <span className="font-bold">
            globalmente, de forma segura y sin impuestos bancarios.
          </span>
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 py-3 px-5 rounded-[40px] bg-[--background-dark-black] text-[--yellow] cursor-pointer">
            <span className="font-bold">Crea tu cuenta</span>
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
                  fill="#ffed00"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className="flex items-center gap-2 py-3 px-5 rounded-[40px] bg-[--yellow] text-[--background-dark] border border-[--background-dark-black] cursor-pointer">
            <span className="font-bold">Contacta a un asesor</span>
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
      <img src={Container} alt="" className="object-cover mt-12" />
      <div className="w-full pt-[40px] pr-0 pb-[40px] pl-0 bg-[#FFFFFF] -mt-10 relative z-10 rounded-t-[32px]">
        <div className="max-w-[1050px] h-[24px] mx-auto flex justify-between items-center">
          <p className="w-[250px] text-base leading-[24px]">As featured on:</p>
          <Marquee
            //   gradient
            pauseOnHover={true}
            speed={100}
            className="w-full flex items-center overflow-hidden"
          >
            <img
              src={LogoUsaToday}
              alt=""
              className="cursor-pointer object-cover pr-10"
            />
            <img
              src={LogoBloomberg}
              alt=""
              className=" cursor-pointer object-cover pr-10"
            />
            <img
              src={LogoTechCrunch}
              alt=""
              className="cursor-pointer object-cover pr-10"
            />
            <img
              src={LogoForbes}
              alt=""
              className="cursor-pointer object-cover pr-10"
            />
            <img
              src={LogoTechRadar}
              alt=""
              className="cursor-pointer object-cover pr-10"
            />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
