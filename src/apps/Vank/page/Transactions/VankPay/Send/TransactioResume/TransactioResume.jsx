import React, { useEffect, useState } from "react";
import { FooterBtn } from "../../../FooterBtn/FooterBtn";
import CustomInput from "../../../../../../Shared/CustomInput/CustomInput";
import "./style.css";
import { Validation2FA } from "../Validation2FA/Validation2FA";
export const TransactioResume = ({ dataUser, retur ,back}) => {
  const [data, seData] = useState({});

  const [continu, setContinue] = useState(1);

  useEffect(() => {
    seData(dataUser);
  }, []);

  return (
    <div className="w-[550px] h-[372px] flex flex-col gap-[33px]">
      {continu == 1 && (
        <>
          <div className=" w-[550px] h-[297px] justify-between pb-[32px] ">
            <div className="h-[297px] flex flex-col justify-between">
              <h1 className="text-[#EFF0F1] font-bold text-[16px] leading-[20.8px]">
                Transaction Resume
              </h1>
              <div className="flex w-[550px] justify-between h-[21px]">
                <p>Amount:</p>
                <p>{data.amount}</p>
              </div>
              <div className="flex w-[550px] justify-between h-[21px]">
                <p>Beneficiary Name:</p>
                <p>{data.beneficiarynames}</p>
              </div>
              <div className="flex w-[550px] justify-between h-[21px]">
                <p>Sending From:</p>
                <p>{data.sendFrom}</p>
              </div>
              <div className="flex w-[550px] justify-between h-[21px]">
                <p>Vank ID:</p>
                <p>{data.vankId}</p>
              </div>
              <div className="flex w-[550px] justify-between h-[21px]">
                <p>Phone Number:</p>
                <p>{data.phone}</p>
              </div>
              <div className="flex w-[550px] justify-between h-[21px]">
                <p>Beneficiary Email: </p>
                <p>{data.beneficiaryEmail}</p>
              </div>
              <div className="h-[36px] w-[550px] pt-[24px] pb-[10px] border-b-[2px] border-[#B8B8B8]"></div>
            </div>
          </div>

          <div className="flex gap-[16px] w-[550] h-[42px]  items-center">
            <input
              type={"checkbox"}
              inputClassName={"focus:bg-red-400"}
              checked={true}
            />
            <p className="text-[16px] font-normal leading-[20.8px]">
              By clicking Continue, I agree Vank´s transaction{" "}
              <span className="border-b-[1px] font-bold">terms</span> and{" "}
              <span className="border-b-[1px] font-bold">conditions.</span>{" "}
            </p>
          </div>

          <FooterBtn
            history={`VankPay history  \u25BA`}
            onClik={() => setContinue(continu + 1)}
            onclickBack={back}
          />
        </>
      )}

      {continu == 2 && <Validation2FA retur={retur} back={()=>setContinue(1)}/>}
    </div>
  );
};
