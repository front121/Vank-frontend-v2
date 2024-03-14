import { useState } from "react";
import { ShateButton } from "../../../shared/ShareButton/ShareButton";
import codigoQR from "../../../../../../../assets/Icon/QR.png";
import { ButtonCopy } from "../../../shared/ButtonCopy/ButtonCopy";

export const SectionCardBTC = ({
  img,
  title,
  subTitle,
  moreStyleImg,
  moreStyleCard,
  onClick,
  btnOnClick,
  btnLabel,
  contentStyle
}: {
  img?: any;
  title?: any;
  subTitle?: any;
  moreStyleImg?: any;
  moreStyleCard?: any;
  onClick?: any;
  btnOnClick?: any;
  btnLabel?: any;
  contentStyle: any
}) => {

  const [text, setText] = useState("fasdffw564f564s56f465ew4rt86er8t78e4t7er8g78f7dsg89dsfgfds+f7dsg8a8dg+a+g+a8a8sfs");
  
  return (
    <div
     
      className={` cursor-pointer h-[120px] rounded-[16px] py-[31px] pr-[34px] pl-[30px] bg-[#3E4347] text-body max-2xl:h-[100px] max-2xl:py-[29px]
      transition-heigth duration-500 ${moreStyleCard}`}
    >
      <div className="flex w-full h-[68px] justify-between"  onClick={onClick}>
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

        <button
          onClick={btnOnClick}
          className="font-normal text-[16px] leading-[20.8px] text-[#EFF0F1]"
        >
          See Address{" "}
          <span className="text-[#9D9DA2] w-[16px] h-[16px] ">{btnLabel}</span>
        </button>
      </div>

      <div className={` absolute right-0 left-0 flex flex-col gap-12  bottom-0 z-[1000px] top-[110px] py-[31px] pr-[34px] pl-[30px] ${contentStyle}`}>

        <div className="flex justify-between">

          <div>
            <img src={codigoQR} alt="" className="w-[200px]" />
          </div>
          <div className="flex flex-col justify-between items-end">
            <div className="flex flex-col items-end gap-2">
              <h1 className="border-b-[2px] w-[125px] pb-1 text-end  border-[#5E6061] text-[16px] font-bold">{"Account QR"}</h1>
              <p className="text-[14px]">{"Every wallet is BlockChained"}</p>
            </div>
            <ShateButton />
          </div>
        </div>

        <div className="flex justify-around">
          <div className="w-[70%] flex flex-col justify-center">
            <h1 className="font-bold">{title} Adrees:</h1>
            <textarea style={{resize:'none'}} rows={2} disabled={true} value={text} className="w-full bg-transparent font-normal leading-[18.2px] text-[14px]"></textarea>
          </div>
          
          <div className="w-[30%]  flex justify-end items-center ">
          
          <ButtonCopy text={'Copy'}  textCopy={text}
          classNameBtnCopy={`bg-[#5E6061] rounded-[50px] hover:bg-[#4D5358] active: h-[32px] w-[120px] flex items-center justify-center hover:bg-[#5E6061]`}/>

          </div>

        </div>

      </div>
    </div>
  );
};
