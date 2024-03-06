import React, { useEffect, useState } from "react";
import { FooterBtn } from "../../../FooterBtn/FooterBtn";
import CustomInput from "../../../../../../Shared/CustomInput/CustomInput";
import "./style.css";
import { Validation2FA } from "../Validation2FA/Validation2FA";
export const TransactioResume = ({ dataUser, retur, back, amount }) => {
  const [data, seData] = useState({});

  const [continu, setContinue] = useState(1);
  const [typeMoney, setMoney] = useState("");
  const [textMoney, setTextmoney] = useState("");

  useEffect(() => {
    seData(dataUser);
    setMoney(localStorage.getItem("money"));
    setTextmoney(localStorage.getItem("money").split(" ")[0]);
  }, []);

  return (
    <div className="responsi-transaction-resume-main  w-full  h-[527px] flex flex-col gap-[32px]   xl:max-2xl:gap-[10px] ">
      {continu == 1 && (
        <>
          <h1 className="text-[#EFF0F1] font-bold  leading-[20.8px]  xl:max-2xl:text-sm">
            Transaction Resume
          </h1>
          <div className="responsi-transaction-resume-content1 w-[550px] h-[355px] flex flex-col gap-[33px]  xl:max-2xl:gap-[20px] xl:max-2xl:h-[320px]">
            
            <div className="responsi-transaction-resume-content2 h-[264px] flex flex-col justify-between w-[100%] text-[16px]   xl:max-2xl:text-sm xl:max-2xl:h-[70%]">
              <div className="flex w-[100%] justify-between h-[21px]">
                <p>Amount:</p>
                <p className="text-[#FFED00]  leading-[20.8px] font-bold">
                  $ {amount} {textMoney}
                </p>
              </div>
              <div className="flex  justify-between h-[21px]  w-[100%]">
                <p>Beneficiary Name:</p>
                <p>{data.name}</p>
              </div>
              <div className="flex  justify-between h-[21px]  w-[100%]">
                <p>Sending From:</p>
                <p>{typeMoney}</p>
              </div>
              <div className="flex justify-between h-[21px]  w-[100%]">
                <p>Vank ID:</p>
                <p>{data.vankID}</p>
              </div>
              <div className="flex  justify-between h-[21px]  w-[100%]">
                <p>Phone Number:</p>
                <p>{data.phone}</p>
              </div>
              <div className="flex  justify-between h-[21px]  w-[100%]">
                <p>Beneficiary Email: </p>
                <p>{data.email}</p>
              </div>

              <div className="h-[36px] pt-[24px] pb-[10px] border-b-[2px] border-[#3E4347] "></div>
            </div>

            <div className="flex gap-[16px] w-full h-[58px]  items-center ">
              <input
                type={"checkbox"}
                inputClassName={"focus:bg-red-400"}
                checked={true}
              />
              <p className="text-[16px] font-normal leading-[20.8px] ">
                By clicking Continue, I agree Vank´s transaction{" "}
                <span className="border-b-[1px] font-bold">terms</span> and{" "}
                <span className="border-b-[1px] font-bold">conditions.</span>{" "}
              </p>
            </div>
          </div>

          <FooterBtn
            history={`VankPay history  \u25BA`}
            onClik={() => setContinue(continu + 1)}
            onclickBack={back}
          />
        </>
      )}

      {continu == 2 && (
        <Validation2FA retur={retur} back={() => setContinue(1)} />
      )}
    </div>
  );
};
