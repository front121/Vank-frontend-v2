import React from "react";
import CheckIcon from "@/assets/Icon/CheckIcon.svg";
import Mockup from "@/assets/Icon/Mockup.svg";
import LogoVank from "@/assets/Icon/LogoVank.svg";

const FinancialCenter = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF] pt-[70px] pb-[70px]">
      <div className="max-w-[1080px] 2xl:max-w-[1200px] mx-auto flex gap-16 2xl:gap-20">
        <div className="w-[45%] flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <img src={LogoVank} alt="" />
            <h2 className="max-w-[84px] text-lg leading-none border-b-2 border-[#FFED00] text-[#161616]">
              VankApp
            </h2>
          </div>
          <h2 className="text-[45px] leading-[50px] text-[#161616] mb-5 font-semibold">
            Simplifica tu economía con nuestro{" "}
            <span className="font-bold">universo financiero</span>
          </h2>
          <p className="text-base leading-[24px] text-[#161616] font-semibold mb-6">
            Envía dinero mientras a cualquier lugar del mundo. Creemos en
            mantener las cosas{" "}
            <span className="font-bold">simples, rápidas y de bajo costo.</span>{" "}
            Con solo unos pocos toques, tu dinero estará en camino.
          </p>
          <div className="flex flex-col  gap-3">
            <div className="flex items-center gap-3">
              <img src={CheckIcon} alt="" />
              <span className="text-base leading-[28px] text-[#161616]">
                Transferencias digitales en solo minutos.
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src={CheckIcon} alt="" />
              <span className="text-base leading-[28px] text-[#161616]">
                Consulta saldos, tasas y estados en tiempo real.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <img src={CheckIcon} alt="" />
              <span className="text-base leading-[28px] text-[#161616]">
                Personaliza tus transferencias frecuentes para optimizar tu
                tiempo.
              </span>
            </div>
          </div>
        </div>
        <div className="w-[55%] h-[620px]">
          <img
            src={Mockup}
            alt=""
            className="w-full h-full object-contain scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default FinancialCenter;
