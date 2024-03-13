import React from "react";
import vankpaysecurity from "../../../../../../assets/Icon/Vankpaysecurity.png";
import vectorshare from "../../../../../../assets/Icon/Vectorshare.png";
import img from "../../../../../../assets/Icon/Vectorimg.png";
import QR from "../../../../../../assets/Icon/QR.png";
import copy from "../../../../../../assets/Icon/Iconcopy.png";
import CustomInput from "../../../../../Shared/CustomInput/CustomInput";
import { Controller, useForm } from "react-hook-form";

export const Recieve = () => {
  const {
    control,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      VankId: "",
    },
  });

  return (
    <div className="h-[392.33px] flex flex-col gap-[36px]">
      <div className="h-[324.33px] flex items-center gap-[30px]">
        <div className="w-[264px] h-[324.33px] flex flex-col gap-[16px]">
          <div className="w-[264px] h-[32.17px] flex justify-between">
            <div className="flex items-center gap-[4px] w-[155px]">
              <img src={vankpaysecurity} alt="" />
              <p className="font-[700] font-sanspp text-[14px] leading-[18.2px] text-[#EFF0F1] ">
                VanKPay QR
              </p>
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
            <div className="w-[259px] flex flex-col gap-y-[2px]">
              <span className="text-sm sm:text-base font-normal text-[--text-body]">
                Email
              </span>
              <Controller
                render={({ field: { onChange, value, name } }) => (
                  <CustomInput
                    type="text"
                    value={value}
                    onChange={onChange}
                    className="w-[259px] h-[42px] pt-[11px] pb-[13px] pr-[30px] pl-[13px] rounded-[10px] bg-[--dark-gray] text-[--text-body] outline-none focus:outline-none placeholder:text-[--text-light-body] "
                    name={name}
                    error={Boolean(errors["email"])}
                    helperText={errors["email"] ? errors["email"].message : ""}
                    placeholder="Type email"
                  />
                )}
                name="email"
                control={control}
              />
            </div>

            <div className="w-[259px] flex flex-col gap-y-[2px]">
              <span className="text-sm sm:text-base font-normal text-[--text-body]">
                User ID
              </span>
              <Controller
                render={({ field: { onChange, value, name } }) => (
                  <CustomInput
                    type="text"
                    value={value}
                    onChange={onChange}
                    className="w-[259px] h-[42px] pt-[11px] pb-[13px] pr-[30px] pl-[13px] rounded-[10px] bg-[--dark-gray] text-[--text-body] outline-none focus:outline-none placeholder:text-[--text-light-body] "
                    name={name}
                    error={Boolean(errors["VankId"])}
                    helperText={
                      errors["VankId"] ? errors["VankId"].message : ""
                    }
                    placeholder="Type User ID"
                  />
                )}
                name="VankId"
                control={control}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-[550px] h-[32px] gap-[6px] ">
        <div className=" w-[524px] h-[30px] overflow-hidden whitespace-nowrap text-overflow-ellipsis">
          <p className="font-[700] text-[12px] leading-[15.6px] w-[524px] h-[32px] ">
            fasdffw564f564s56f465ew4rt86er8t78e4t7er8g78f7dsg89dsfgfds+f7dsg8a8dg+a+g+a
            <br />
            8a8sfs
          </p>
        </div>
        <div className="w-[20px] h-[20px]">
          <img src={copy} alt="" className="" />
        </div>
      </div>
    </div>
  );
};
