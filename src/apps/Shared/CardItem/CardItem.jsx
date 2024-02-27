import React from "react";

export const CardItem = ({ image, text, amount, subtext,moreStyle }) => {
  return (
    <div className={`media-card flex bg-[#3E4347] justify-between hover:bg-[#5E6061] cursor-pointer px-[12px] py-[6px] rounded-[41px] items-center 2xl:h-[46px]  sm:h-[50px] lg:h-[37px] xl:h-[46px] sm:w-full ${moreStyle}`}>
      
      <div className="flex items-center  w-[526px] hidden-[36px] justify-between 2xl:w-full 2xl:text-[16px] lg:text-[14px] ">
        <div className="flex gap-[10px] h-[36px]  items-center">
          <img
            src={image} 
            alt=""
            className="media-card-img w-[36px] h-[36px] rounded-full max-[1366px]:w-[33px] max-[1366px]:h-[33px] max-[1366px]:mt-[1px]  xl:h-[36px] xl:w-[36px] 2xl:w-[36px] 2xl:h-[36px] sm:w-[39px] sm:h-[39px]  "
          />

          <span className={`flex flex-col   justify-center  ${subtext ? "mt-1" : ""} `}
          >
            <p className=" font-[700] text-[14px] leading-[18.2px]"> {text}</p>
            <p className="text-[14px] font-normal leading-[18.2px] lg:text-[13px] relative -top-1 sub-text-crypto ">
              {subtext}
            </p>
          </span>
        </div>

        <div className=" font-normal text-[16px] leading-[20.8px]">{amount}</div>
      </div>
    </div>
  );
};
