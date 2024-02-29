import React, { useEffect, useState } from "react";
import { SectionNav } from "./SectionNav/SectionNav";
import { Deposit } from "./Deposit/Deposit";
import { VankPay } from "./VankPay/VankPay";

const Transactions = () => {
  const [value, setValue] = useState(1);
  const [selectView,setSelectView] = useState(1);

  useEffect(() => {
    setSelectView(1);
  }, [value]);

  return (
    <div className="home-responsi-1 bg-[#191E25] p-[36px] flex flex-col gap-[32px] lg:w-[622px] xl:h-[668px] md:h-[740px]  text-body sm:h-[86%]   rounded-[32px]">
      <SectionNav
        className={"flex flex-col gap-[32px] h-[19px]"}
        onClikVanPay={() => setValue(4)}
        onClickDeposit={() => setValue(1)}
        apply={value}
      />

      {<nav>
       <ul className="flex w-[139px]  justify-between text-link font-[700] ">
         {value==1 &&
          <>
            <li><button onClick={()=>setSelectView(1)} className={`${selectView==1 && 'border-b-[1px] text-body'}`}>Fiat</button></li>
            <li><button onClick={()=>setSelectView(2)} className={`${selectView==2 && 'border-b-[1px] text-body'}`}>Crypto</button></li>
          </>
          }
          {value==4 &&
          <>
            <li><button onClick={()=>setSelectView(1)} className={`${selectView==1 && 'border-b-[1px] text-body'}`}>Send</button></li>
            <li><button onClick={()=>setSelectView(2)} className={`${selectView==2 && 'border-b-[1px] text-body'}`}>Recieve</button></li>
          </>
          }
        </ul>
      </nav>}


      {value == 1 && <Deposit selectView={selectView}/>}
      {value == 4 && <VankPay selectView={selectView}/>}

    </div>
  );
};

export default Transactions;
