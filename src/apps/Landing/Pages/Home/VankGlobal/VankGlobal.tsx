import React from "react";
import CardCrypto from "@/assets/Icon/CardCrypto.svg";
import CheckIcon from "@/assets/Icon/CheckIcon.svg";

const VankGlobal = () => {
  return (
    <div className="w-full min-h-screen bg-[#161616] pt-[7rem] pb-[7rem]">
      <div className="max-w-[1080px] 2xl:max-w-[1200px] mx-auto flex gap-16 2xl:gap-20">
        <div className="w-[60%] h-[550px] flex justify-center items-center">
          <img
            src={CardCrypto}
            alt=""
            className=" object-cover"
          />
        </div>
        <div className="w-[40%] flex flex-col justify-center">
          <h2 className="max-w-[84px] text-lg leading-none border-b-2 border-[#6B6B6B] text-[#FFED00] mb-4">
            VankCard
          </h2>
          <h2 className="text-[48px] leading-[55px] text-[#FFFFFF] mb-5">
            Usa tu cuenta Vank en todo el mundo
          </h2>
          <p className="text-base leading-[28px] text-[#FFFFFF] mb-6">
            Disfruta de la flexibilidad que te brinda Vank a nivel mundial.
            Contamos con el respaldo de VISA.
          </p>
          <div className="flex flex-col  gap-3 mb-5">
            <div className="flex items-center gap-3">
              <img src={CheckIcon} alt="" />
              <span className="text-base leading-[28px] text-[#FFFFFF]">
                Aceptado globalmente.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <img src={CheckIcon} alt="" />
              <span className="text-base leading-[28px] text-[#FFFFFF]">
                Haz seguimiento de todos tu gastos.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <img src={CheckIcon} alt="" />
              <span className="text-base leading-[28px] text-[#FFFFFF]">
                No necesitas de montos mínimos de compra.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VankGlobal;
