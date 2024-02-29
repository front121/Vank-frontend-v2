import React from "react";
import vankpaysecurity from "../../../../../../assets/Vankpaysecurity.png";
import vectorshare from "../../../../../../assets/Vectorshare.png";
import img from "../../../../../../assets/Vectorimg.png";
import QR from "../../../../../../assets/QR.png";
import copy from "../../../../../../assets/Iconcopy.png";
import CustomInput from "../../../../../Shared/CustomInput/CustomInput";
export const Recieve = () => {
  return (
    <div className="h-[392.33px] flex flex-col gap-[36px]">
      
      <div className="h-[324.33px] flex items-center gap-[30px]">
        <div className="w-[264px] h-[324.33px] flex flex-col gap-[16px]">
          <div className="w-[264px] h-[32.17px] flex justify-between">
            <div className="flex items-center gap-[4px] w-[155px]">
              <img src={vankpaysecurity} alt="" />
              <p className="font-[700] font-sanspp text-[14px] leading-[18.2px] text-[#EFF0F1] ">VanKPay QR</p>
            </div>

            <div className="flex items-center gap-[26px] w-[70px] h-[32px]">
              <img src={vectorshare} alt="" />
              <img src={img} alt="" />
            </div>
          </div>
          <div className="h-[276.17px]">
            <img src={QR} alt="" />
          </div>
        </div>
        <div>
            <div className="w-[256px] h-[220px] flex flex-col justify-between">
                <CustomInput label={'User Email'}  className={'flex flex-col w-[256px] h-[68.91px] gap-[12px]'}
                inputClassName={'bg-[#3E4347] w-[256px] h-[36px] rounded-[12px]'}
                />

                <CustomInput label={'User ID'} className={'flex flex-col w-[256px] h-[68.91px] gap-[12px]'}
                inputClassName={'bg-[#3E4347] w-[256px] h-[36px] rounded-[12px]'}/>
            </div>
        </div>
      </div>
      <div className="flex w-[550px] h-[32px] gap-[6px] ">
        <div className=" w-[524px] h-[30px] overflow-hidden whitespace-nowrap text-overflow-ellipsis"><p className="font-[700] text-[12px] leading-[15.6px] w-[524px] h-[32px] ">fasdffw564f564s56f465ew4rt86er8t78e4t7er8g78f7dsg89dsfgfds+f7dsg8a8dg+a+g+a<br/>8a8sfs</p></div>
        <div className="w-[20px] h-[20px]"><img src={copy} alt="" className=""/></div>
      </div>
    </div>
  );
};
