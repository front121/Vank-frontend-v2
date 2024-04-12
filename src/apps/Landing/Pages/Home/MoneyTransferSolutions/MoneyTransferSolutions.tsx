import React from "react";
import Graphic from "@/assets/Icon/Graphic.svg";
import PhoneSend from "@/assets/Icon/PhoneSend.svg";
import CardWord from "@/assets/Icon/CardWord.svg";

const MoneyTransferSolutions = () => {
  return (
    <div className="w-full min-h-screen bg-[#FFFFFF] py-[60px] xl:py-[70px] px-12 xl:px-0 overflow-hidden">
      <div className="max-w-[1080px] 2xl:max-w-[1200px] mx-auto">
        <div className="w-full flex items-center justify-center mb-12">
          <h2 className="w-[800px] text-[40px] xl:text-[55px] leading-[45px] xl:leading-[64px] text-center font-medium">
            Ofrecemos transferencias de dinero{" "}
            <span className="font-bold">rápidas y seguras</span>
          </h2>
        </div>
        <div className="relative w-full h-[280px] flex justify-between items-center bg-[--background-dark-black] rounded-[32px] py-[48px] px-[40px] mb-6 group xl:cursor-default cursor-pointer">
          <div className="w-[680px] h-full flex flex-col justify-center mt-2 z-10 xl:z-0">
            <h2 className="text-[--yellow] text-[36px] font-bold">Vank +</h2>
            <p className="text-[--text-body] text-[15px] leading-[28px]">
              Con Vank+, haz que tu dinero trabaje por ti. Invierte en depósitos
              a plazo y observa cómo crece tu dinero de forma segura. Comienza a
              construir tu patrimonio ahora con Vank+.
            </p>
          </div>
          <img src={Graphic} alt="" className="absolute h-full right-2 opacity-20 group-hover:opacity-35 xl:opacity-100 xl:group-hover:opacity-100 transition-all duration-300" />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 pb-12">
          <div className="relative w-full h-[280px] xl:h-[594px] flex  justify-between bg-[--background-dark-black] rounded-[32px] py-[40px] px-[30px] group xl:cursor-default cursor-pointer">
            <div className="w-[680px] xl:w-full h-full flex flex-col pt-16 z-10 xl:z-0">
              <h2 className="text-[--yellow] text-[36px] xl:text-center">
                Vank Personas
              </h2>
              <p className="text-[--text-body] text-[15.5px] xl:text-center leading-[28px]">
                ¿Pagar impuestos, una hipoteca o facturas en otro país? Con Vank
                puedes enviar dinero a más de 150 países en todo el mundo.
              </p>
            </div>
            <img
              src={PhoneSend}
              alt=""
              className="absolute xl:left-1/2 xl:-translate-x-1/2 bottom-0 right-2 opacity-25 group-hover:opacity-45 xl:opacity-100 xl:group-hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="relative w-full h-[280px] xl:h-[594px] flex  justify-between bg-[--background-dark-black] rounded-[32px] py-[40px] px-[30px] overflow-hidden group xl:cursor-default cursor-pointer">
            <div className="w-[680px] xl:w-full h-full flex flex-col pt-16 z-10 xl:z-0">
              <h2 className="text-[--yellow] text-[36px] xl:text-center">
                Vank Empresas
              </h2>
              <p className="text-[--text-body] text-[15.5px] leading-[28px] xl:text-center">
                Recibir pagos, pagar nómina, facturas o proveedores. Podemos
                integrar perfectamente una solución para su negocio. Incluso a
                nivel mundial.
              </p>
            </div>
            <img
              src={CardWord}
              alt=""
              className="absolute right-0 bottom-0 w-[60%] xl:w-[97%] opacity-25 group-hover:opacity-45 xl:opacity-100 xl:group-hover:opacity-100 transition-all duration-300"
            />
          </div>
          <div className="relative w-full h-[280px] xl:h-[594px] flex  justify-between bg-[--background-dark-black] rounded-[32px] py-[40px] px-[30px] overflow-hidden group xl:cursor-default cursor-pointer">
            <div className="w-[680px] xl:w-full h-full flex flex-col pt-16 z-10 xl:z-0">
              <h2 className="text-[--yellow] text-[36px] xl:text-center">
                Vank Minors
              </h2>
              <p className="text-[--text-body] text-base leading-[28px] xl:text-center">
                Enseña a los más pequeños a tener control sobre sus finanzas,
                brinda supervisión y acompáñalos para mejorar su entendimiento
                del sector financiero.
              </p>
            </div>
            <img
              src={PhoneSend}
              alt=""
              className="absolute xl:left-1/2 xl:-translate-x-1/2 bottom-0 right-2 opacity-25 group-hover:opacity-45 xl:opacity-100 xl:group-hover:opacity-100 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyTransferSolutions;
