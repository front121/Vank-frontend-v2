import React, { useState } from "react";
import CustomInput from "../../../../../Shared/CustomInput/CustomInput";

import { CustomSelect } from "../../../../../Shared/CustomSelect/CustomSelect";
import { FooterBtn } from "../../FooterBtn/FooterBtn";
import xicon from "../../../../../../assets/Icon/XIcon.svg";
import check from "../../../../../../assets/Icon/Check.svg";
import { TransactioResume } from "./TransactioResume/TransactioResume";
import { Validation2FA } from "./Validation2FA/Validation2FA";
export const Send = () => {
  const [error, setError] = useState(false);
  const [beneficiary, setBeneficiary] = useState("");
  const [contine, setContinue] = useState(1);

  const [data, setData] = useState({
    amount: "$ 202.55 USD",
    beneficiarynames: "Richard Brides",
    sendFrom: "USD account",
    vankId: "V8787455474",
    phone: "+1 408 564 5599",
    beneficiaryEmail: "vankuser@gmail.com",
  });

  const handleBeneficiary = (event) => {
    setBeneficiary(event.target.value);

    if (event.target.value == "Georgina Hugges") {
      setError(false);
    } else {
      setError(true);
    }

    console.log();
  };

  return (
    <>
      {contine == 1 && (
        <div className="w-[550px] h-[505px] flex flex-col gap-[30px] ">
          <div className="w-[550px] h-[386px] flex flex-col justify-between ">
            <div className="w-[550px] h-[65px]  flex justify-between ">
              <CustomSelect
                classNameMain={
                  "flex flex-col w-[275px] relative gap-[8px] h-[65px] pr-[32px]  "
                }
                label={"Choose account or walllet"}
                classNameContentBtn={
                  "w-[237px] h-[36px] flex justify-between  px-[0px]"
                }
                classNameIcon={"w-[36px] h-[36px] rounded-[100%]"}
                classNameDivImgText={"flex gap-[16px] w-[128px] h-[38px]"}
                classNameIconList={"w-[24px] h-[24px] rounded-[100%]"}
                classNameSpanList={
                  "w-[199px] h-[24px] flex justify-between items-center"
                }
                classNameLabel={"font-normal text-[16px] leading-[20.8px]"}
                classNameText={"text-[20px] font-bold leading-[26px]"}
                classNameSubText={"text-[12px] font-normal leading-[15.6px]"}
                classNameSpanOne={"text-[12px]"}
                classNameValue={"text-[16px] font-bold leading-[20.8px]"}
                classNameValueText={
                  "text-[12px] font-normal leading-[15.6px] relative top-1 text-end"
                }
              />
              <div className="w-[259px]">
                <CustomInput
                  label={"Amount"}
                  className={"flex flex-col gap-[8px]"}
                  inputClassName={
                    "bg-[#3E4347] focus-visible:border-[#D6CA5C3D] w-[259px] h-[36px] p-[13px] gap-[148px] rounded-[10px]"
                  }
                  placeholder="$ 00.0"
                />
              </div>
            </div>

            <div className="relative">
              <CustomInput
                label={"Email"}
                classNamecontentLabels={"w-[550px] flex gap-[40px] "}
                className={"h-[65px] w-[550px] flex flex-col gap-[8px] "}
                inputClassName={
                  "pl-4 bg-[#3E4347] focus-visible:border-[#D6CA5C3D] w-[550px] h-[36px] rounded-[10px]"
                }
                placeholder="Type Email"
              />
              <div className="absolute  top-0 left-[90px]  flex gap-14 text-[16px] font-normal leading-[20.8px] text-[#9D9DA2]">
                <button className="">Phone</button>
                <button>Vank ID</button>
              </div>
            </div>

            <div className="relative">
              <CustomInput
                label={"Beneficiary"}
                className={"h-[65px] w-[550px] flex flex-col gap-[8px]"}
                inputClassName={
                  " pl-4 bg-[#3E4347] focus-visible:border-[#D6CA5C3D] w-[550px] h-[36px] rounded-[10px]"
                }
                onChange={() => handleBeneficiary(event)}
                placeholder="Type beneficiary name"
                error={error}
                hasError={<img src={xicon} alt="" />}
                // icon={error ? <img src={xicon} alt="" className=""/> : "✓"}
              />
              {beneficiary && (
                <div>
                  {error && beneficiary ? (
                    <div className="w-[23px] absolute z-50 right-0 top-9 mr-4">
                      {<img src={xicon} alt="" className="" />}
                    </div>
                  ) : (
                    <div className="w-[23px] absolute z-50 right-0 top-9 mr-4">
                      {<img src={check} alt="" className="" />}
                    </div>
                  )}
                </div>
              )}
            </div>

            <CustomInput
              label={"Description"}
              className={"h-[112px] w-[550px] flex flex-col gap-[8px]"}
              inputClassName={
                "bg-[#3E4347] focus-visible:border-[#D6CA5C3D] w-[550px] p-[13px] flex flex-col gap-[148px] h-[83px] rounded-[10px]"
              }
              iconCheck={xicon}
            />
          </div>
          <FooterBtn
              history={`VankPay history  \u25BA`}
              onClik={() => setContinue(contine + 1)}
              onclickBack={() => setContinue(1)}
            />
        </div>
      )}

      {contine == 2 && (
        <TransactioResume dataUser={data} retur={() => setContinue(1)}  back={() => setContinue(1)}/>
      )}
    </>
  );
};
