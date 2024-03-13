import React, { useEffect, useState } from "react";
import { SectionNav } from "./SectionNav/SectionNav";
import { Deposit } from "./Deposit/Deposit";
// import { Deposit } from "./Deposit/Deposit";
import { VankPay } from "./VankPay/VankPay";

const Transactions = () => {
  const [value, setValue] = useState(1);
  const [selectView, setSelectView] = useState(1);
  const [viewHistory, setViewHistory] = useState(0);

  useEffect(() => {
    setSelectView(1);
  }, [value]);

  //ver history
  const handleViewHistory = () => {
    if (viewHistory == 0) {
      setViewHistory(4);
    } else {
      setViewHistory(0);
    }
  };

  return (
    <div
      className={`transa  h-[708px]  w-[622px]    xl:max-2xl:h-[100%] xl:max-2xl:w-[45%]  flex items-center justify-center ${
        viewHistory > 0 ? "gap-4 " : ""
      } `}
    >
      <div className="responsive-transaction   responsive-transaction-medium  xl:max-2xl:gap-[12px]  relative   transition-transform duration-1000 ease-out  home-responsi-1 bg-[#191E25] p-[36px]  flex flex-col  gap-[32px]   h-full text-body  rounded-[32px] ">
        <div className="responsive-transaction responsive-transaction-medium  xl:max-2xl:gap-[12px]   w-[100%] h-[73px] flex flex-col gap-[32px] ">
          <SectionNav
            className={"flex flex-col gap-[32px] h-[19px] "}
            onClikVanPay={() => setValue(4)}
            onClickDeposit={() => setValue(1)}
            apply={value}
          />
          {
            <ul className="flex w-[139px]  justify-between text-link font-[700] text-[16px]  xl:max-2xl:text-sm">
              {value == 1 && (
                <>
                  <li>
                    <button
                      onClick={() => setSelectView(1)}
                      className={`${
                        selectView == 1 && "border-b-[1px] text-body"
                      }`}
                    >
                      Fiat
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setSelectView(2)}
                      className={`${
                        selectView == 2 && "border-b-[1px] text-body"
                      }`}
                    >
                      Crypto
                    </button>
                  </li>
                </>
              )}
              {value == 4 && (
                <>
                  <li>
                    <button
                      onClick={() => setSelectView(1)}
                      className={`${
                        selectView == 1 && "border-b-[1px] text-body"
                      }`}
                    >
                      Send
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setSelectView(2)}
                      className={`${
                        selectView == 2 && "border-b-[1px] text-body"
                      }`}
                    >
                      Recieve
                    </button>
                  </li>
                </>
              )}
            </ul>
          }
        </div>

        {value == 1 && <Deposit selectView={selectView} />}
        {value == 4 && (
          <VankPay
            selectView={selectView}
            veiwHistorial={() => handleViewHistory()}
          />
        )}
      </div>

      {/* {<div className={`w-[516px] h-[668px]   rounded-[32px] p-[36px] bg-[#191E25] ${viewHistory==4?'opacity-100 transition-opacity duration-1000 ease-in-out ':' opacity-0 transition-opacity duration-1000 absolute z-0'}`}>hola</div>} */}
    </div>
  );
};

export default Transactions;
