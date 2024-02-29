import React from "react";
import {IconNotification} from '../../../../assets/Icon/IconsSidebar/IconNotification'
import  {IconCircleUser}  from '../../../../assets/Icon/IconsSidebar/IconCircleUser';
import VankLogo from "../../../../assets/VankLogo";
import  {IconSun}  from "../../../../assets/icon/iconsSidebar/IconSun";
export const Header = ({ moreStyle }) => {
  return (
    // return (
    <header
      className={`2xl:h-[100px] flex justify-between sm:h-[100px] xl:h-[100px]  py-[16px] px-[40px] bg-[#191E25] bg-transparent    items-center  z-[60] lg:h-[80px] ${moreStyle} 
     `}
    >
      <div className=" w-full xl:h-[68px] flex justify-between items-center ">

        <div className="xl:w-[160px] flex items-center xl:h-[68px]">
          <VankLogo
            className="2xl:w-[151.94px] 2xl:h-[52px] lg:w-[115px] sm:h-[29px] sm:w-[97px] absolute z-50  xl:w-[151.94px] xl:h-[52px]"
            fill={"#FFED00"}
          />
        </div>

        <div className="flex w-[126px] items-center justify-between xl:h-[24.77px]">
          <button>
            <IconCircleUser/>
          </button>
          <button>
            <IconSun/>
          </button>
          <button className="flex relative">
            <span>
              <IconNotification/>
              <p className="absolute -right-2 -top-2 text-[11px] rounded-full px-[5px]   bg-[#FFED00] text-black font-bold">
                2
              </p>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
