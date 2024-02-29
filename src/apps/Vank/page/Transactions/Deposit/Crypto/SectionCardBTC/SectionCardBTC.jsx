import React, { useState } from "react";
export const SectionCardBTC = ({
  img,
  title,
  subTitle,
  moreStyleImg,
  moreStyleCard,
  onClick,
  btnOnClick,
  btnLabel
}) => {
    
  return (
    <div onClick={onClick}
      className={` cursor-pointer h-[120px] rounded-[16px] py-[31px] pr-[34px] pl-[30px] bg-[#3E4347] text-body hover:bg-[#5E6061] 
      hover:h-[130px] transition-heigth duration-500 ${moreStyleCard}`}
    >
      <div className="flex w-[486px] h-[68px] justify-between" >
        <div className="flex gap-[10px] w-[203px] h-[68px] items-center">
          <img
            src={img}
            alt=""
            className={`rounded-[100%] w-[40px] h-[40px] ${moreStyleImg}`}
          />
          <div className="flex flex-col gap-[6px] w-[140px] h-[50px]">
            <h2 className="font-[700] text-[18px] leading-[23.4px]">{title}</h2>
            <p className="font-normal text-[16px] leading-[20.8px]">{`Send only ${subTitle}`}</p>
          </div>
        </div>

        <button onClick={btnOnClick} className="font-normal text-[16px] leading-[20.8px] text-[#EFF0F1]">See Address <span className="text-[#9D9DA2] w-[16px] h-[16px] ">{btnLabel}</span></button>
      </div>

      <div></div>
    </div>
  );
};
