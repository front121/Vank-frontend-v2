import React, { useEffect, useState } from "react";
import "./style.css";
import tick from "../../../../../assets/Tick 2.png";
import CustomButton from "../../../../Shared/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";
export const Modal = ({ moreStyle, title, volver }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);

  return (
    <div
      className={`w-[502px] h-[514px] p-[36px] rounded-[32px] gap-[16px] bg-[#191E25] ${moreStyle}`}
    >
      <div className="w-[430px] h-[442px] flex flex-col items-center justify-between">
        <div className="w-[121px] h-[121px] relative flex flex-col justify-center items-center">
          { !loading?
          <span className="double-circle">
            <span className="double-circle2">
            
            </span>
          </span>
          :
          <img src={tick} alt="" />
          }
        </div>
        <div className="w-[430px] h-[51px] flex flex-col gap-[6px] justify-center items-center">
          {loading && (
            <div className="w-[430px] h-[51px] flex flex-col gap-[6px] justify-center items-center">
              <h1 className="text-[20px] leading-[26px] font-bold">{`${"$452.00 USD"}`}</h1>
              <p className="text-[#EFF0F1] font-normal text-[16px] leading-[20.8px]">
                Vankpay Sent Succesfully
              </p>
            </div>
          )}

          {!loading && <h1>Sending VannkPay</h1>}
        </div>

        <div className="text-center">
          {loading && (
            <p className="transition-height duration-1000">
              Your transaction is currently undergoing a security validation
              process . It may take a couple minutes
            </p>
          )}
          {!loading &&
            <p>
              Every transaction benefits from industry leading security
              protocols.
            </p>
          }
        </div>

        {loading &&
          <div className="flex flex-col gap-4 items-center transition duration-1000">
            <CustomButton
              label={"Back to VankPay"}
              onclick={volver}
              className="flex flex-col justify-center items-center bg-[#FFED00] w-[406px] h-[36px] rounded-[60px] px-[12px] text-[#14181F] font-bold text-[16px] "
            />
            <CustomButton
              label={"View Transaction"}
              className={
                "border-b-[1px] border-[#6B6B6E] w-[134px] text-[#EFF0F1] font-normal leading-[28.8px]"
              }
            />
          </div>
        }
      </div>
    </div>
  );
};
