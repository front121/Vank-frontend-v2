import React from "react";
import Vank from "@/assets/Vank.png";
import LogoFooter from "@/assets/Icon/LogoFooter.svg";
import AppleLogo from "@/assets/Icon/AppleLogo.svg";
import PlayLogo from "@/assets/Icon/PlayLogo.svg";
import Facebook from "@/assets/Icon/Facebook.svg";
import SocialX from "@/assets/Icon/SocialX.svg";
import Instagram from "@/assets/Icon/Instagram.svg";
import Youtube from "@/assets/Icon/Youtube.svg";

const Footer = () => {
  return (
    <div className="w-full min-h-[530px] bg-[#F2F5F7] pt-[90px] pb-[30px]">
      <div className="max-w-[1050px] mx-auto flex flex-col gap-2">
        <div className="w-full flex justify-center gap-x-28 mb-12">
          <div className="w-[153px] h-[52px]">
            <img
              src={LogoFooter}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full grid grid-cols-4 gap-3">
            <div className="w-full h-full flex flex-col gap-[24px] ">
              <h6 className="font-bold pt-2">Productos</h6>
              <ul className="flex flex-col gap-3">
                <li className="py-1 text-[#161616] cursor-pointer">
                  Para personas
                </li>
                <li className="py-1 text-[#161616] cursor-pointer">
                  Para empresas
                </li>
                <li className="py-1 text-[#161616] cursor-pointer">
                  Multi-currency account
                </li>
                <li className="py-1 text-[#161616] cursor-pointer">
                  Vank Card
                </li>
                <li className="py-1 text-[#161616] cursor-pointer">
                  Cubrimiento Global
                </li>
              </ul>
            </div>
            <div className="w-full h-full flex flex-col gap-[24px] ">
              <h6 className="font-bold pt-2">Companía</h6>
              <ul className="flex flex-col gap-3">
                <li className="py-1 text-[#161616] cursor-pointer">
                  Sobre nosotros
                </li>
                <li className="py-1 text-[#161616] cursor-pointer">
                  Customer stories
                </li>
                <li className="py-1 text-[#161616] cursor-pointer">Prensa</li>
                <li className="py-1 text-[#161616] cursor-pointer">
                  Contáctanos
                </li>
              </ul>
            </div>
            <div className="w-full h-full flex flex-col gap-[24px] ">
              <h6 className="font-bold pt-2">Recursos</h6>
              <ul className="flex flex-col gap-3">
                <li className="py-1 text-[#161616] cursor-pointer">Blog</li>
                <li className="py-1 text-[#161616] cursor-pointer">FAQ</li>
                <li className="py-1 text-[#161616] cursor-pointer">
                  Centro de ayuda
                </li>
                <li className="py-1 text-[#161616] cursor-pointer">
                  Desarrolladores
                </li>
                <li className="py-1 text-[#161616] cursor-pointer">
                  Términos y privacidad
                </li>
              </ul>
            </div>
            <div className="w-full h-full flex flex-col">
              <h6 className="font-bold pt-2 text-[#727372] mb-[24px]">
                Pronto <span className="text-[#161616]">Descarga la App</span>
              </h6>
              <div className="max-w-full flex items-center justify-evenly py-3 px-4 rounded-[40px] bg-[#161616] text-[#F2F5F7] mb-[20px] cursor-pointer">
                <img src={AppleLogo} alt="" />
                <div className="flex flex-col items-center gap-[3px] text-[#FFED00]">
                  <p className="text-[12px] leading-none">Download on The</p>
                  <p className="text-xl leading-none">App Store</p>
                </div>
              </div>
              <div className="max-w-full flex items-center justify-evenly py-3 px-4 rounded-[40px] bg-[#161616] text-[#F2F5F7] cursor-pointer">
                <img src={PlayLogo} alt="" />
                <div className="flex flex-col items-center gap-[3px] text-[#FFED00]">
                  <p className="text-[12px] leading-none">Download on The</p>
                  <p className="text-xl leading-none">App Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="mb-12" />
        <div className="w-full flex items-center justify-between pl-2">
          <h3 className="mr-12">Copyright © Vank 2024.</h3>
          <div className="flex items-center gap-2">
            <div className="group relative">
              <button className="w-[48px] h-[48px]">
                <img
                  src={Facebook}
                  className="w-full h-full object-contain"
                  alt=""
                />
              </button>
              <span
                className="absolute -top-12 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"
              >
                Facebook
              </span>
            </div>
            <div className="group relative">
              <button className="w-[48px] h-[48px]">
                <img
                  src={SocialX}
                  className="w-full h-full object-contain"
                  alt=""
                />
              </button>
              <span
                className="absolute -top-12 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"
              >
                SocialX
              </span>
            </div>
            <div className="group relative">
              <button className="w-[48px] h-[48px]">
                <img
                  src={Instagram}
                  className="w-full h-full object-contain"
                  alt=""
                />
              </button>
              <span
                className="absolute -top-12 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"
              >
                Instagram
              </span>
            </div>
            <div className="group relative">
              <button className="w-[48px] h-[48px]">
                <img
                  src={Youtube}
                  className="w-full h-full object-contain"
                  alt=""
                />
              </button>
              <span
                className="absolute -top-12 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"
              >
                Youtube
              </span>
            </div>
          </div>
          <div />
        </div>
      </div>
    </div>
  );
};

export default Footer;
