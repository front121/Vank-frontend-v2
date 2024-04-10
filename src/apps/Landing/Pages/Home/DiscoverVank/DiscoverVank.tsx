import Check2 from "@/assets/Icon/Check2";
import React, { useState } from "react";

const DiscoverVank = () => {
  const [check, setCheck] = useState(false);
  const [checkTwo, setCheckTwo] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#FFFFFF] pt-[70px] pb-[70px]">
      <div className="max-w-[1050px] mx-auto flex gap-12">
        <div className="w-1/2 h-[550px] flex flex-col justify-center items-center bg-[#F2F5F7] rounded-[32px]">
          <div className="w-[430px] h-[450px] rounded-[16px] bg-[#FFFFFF] overflow-hidden">
            <div className="w-full h-[35px] flex items-center px-3 gap-1 bg-[#121511]">
              <div className="w-3 h-3 bg-[#6A6C6A] rounded-full" />
              <div className="w-3 h-3 bg-[#6A6C6A] rounded-full" />
              <div className="w-3 h-3 bg-[#6A6C6A] rounded-full" />
            </div>
            <div className="w-full h-full p-[24px]">
              <h2 className="text-[24px] leading-[24px] mb-4 text-center">
                Entérate de Vank
              </h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
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
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-center rounded-[32px] p-[32px]">
          <h3 className="max-w-[200px] text-lg leading-none border-b-2 border-[#FFED00] text-[#161616] mb-5">
            Únete al universo Bank
          </h3>
          <h2 className="text-[48px] leading-[54px] mb-5">
            ¡No te pierdas ninguna novedad!
          </h2>
          <p className="text-lg leading-[28px] text-[#161616] mb-3 font-bold">
            Conoce de Vank, antes que cualquiera
          </p>
          <p className="text-base leading-[24px] text-[#161616] mb-3">
            Suscríbete a nuestro newsletter y entérate de todos los beneficios
            que tendrá Vank para ti.
          </p>
          <p className="text-lg leading-[28px] text-[#161616] mb-3 font-bold">
            ¡Listo! Ya estás suscrito a nuestro Newsletter
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscoverVank;
