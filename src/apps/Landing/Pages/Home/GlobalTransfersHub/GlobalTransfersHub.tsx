import React from "react";
import IconReportingOne from "@/assets/Icon/IconReportingOne.svg";
import IconReportingTwo from "@/assets/Icon/IconReportingTwo.svg";
import IconGlobal from "@/assets/Icon/IconGlobal.svg";
import IconSecured from "@/assets/Icon/IconSecured.svg";

const GlobalTransfersHub = () => {
  return (
    <div className="w-full min-h-screen bg-[#F2F5F7] pt-[70px] pb-[70px]">
      <div className="max-w-[1080px] 2xl:max-w-[1200px] mx-auto">
        <div className="w-full flex flex-col items-center justify-center mb-20">
          <span className="text-lg text-[#161616] border-b-2 border-[--yellow] leading-none mb-3">
            VankCard
          </span>
          <h2 className="w-[760px] text-[55px] leading-[64px] text-center font-medium mb-3">
            Porque como tú, nos cansamos de las fronteras
          </h2>
          <p className="text-xl leading-[28px] text-center mb-10">
            Transferencias de dinero internacionales rápidas, flexibles y
            seguras en todo el mundo.
          </p>
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
        <div className="w-full grid grid-cols-4 gap-x-[30px]">
          <div className="w-full max-w-[274px] h-[250px] flex flex-col gap-4">
            <img
              src={IconReportingTwo}
              alt=""
              className="w-[70px] h-[70px] object-cover"
            />
            <h2 className="text-[19.5px] leading-[32px]">
              Transferencias rápidas y confiables
            </h2>
            <p className="text-[15.5px]">
              Obtenga transferencias el mismo día, incluso fines de semana.
            </p>
          </div>
          <div className="w-full max-w-[274px] h-[250px] flex flex-col gap-4">
            <img
              src={IconGlobal}
              alt=""
              className="w-[70px] h-[70px] object-cover"
            />
            <h2 className="text-[19.5px] leading-[32px]">Cobertura global</h2>
            <p className="text-[15.5px]">
              Cobra y paga como local, puedes tener tu dinero guardado en
              múltiples divisas.
            </p>
          </div>
          <div className="w-full max-w-[274px] h-[250px] flex flex-col gap-4">
            <img
              src={IconReportingOne}
              alt=""
              className="w-[70px] h-[70px] object-cover"
            />
            <h2 className="text-[19.5px] leading-[32px]">Tasas inferiores</h2>
            <p className="text-[15.5px]">
              Evita cargos fantasma e innecesarios transfiriendo con Vank.
            </p>
          </div>
          <div className="w-full max-w-[274px] h-[250px] flex flex-col gap-4">
            <img
              src={IconSecured}
              alt=""
              className="w-[70px] h-[70px] object-cover"
            />
            <h2 className="text-[19.5px] leading-[32px]">Seguro y confiable</h2>
            <p className="text-[15.5px]">
              Nuestra seguridad se basa en los más altos estándares
              internacionales.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalTransfersHub;
