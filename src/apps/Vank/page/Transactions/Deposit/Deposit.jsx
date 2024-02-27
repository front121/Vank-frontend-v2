import React, { useState } from "react";
import { Fiat } from "./Fiat/Fiat";
import { Crypto } from "./Crypto/Crypto";

export const Deposit = () => {

  //Estado que nos permite ver alguna de las dos vista; 
  const [view,setView]=useState(1)

  return (
    <div className="flex flex-col gap-[32px]">
      <nav>
        <ul className="flex w-[139px]  justify-between text-link font-[700] ">
          <li>
            <button onClick={()=>setView(1)} className={view==1?'border-b-[2px] border-[#EFF0F1] text-body':''}>Fiat</button>
          </li>
          <li>
            <button onClick={()=>setView(2)} className={view==2?'border-b-[2px] border-[#EFF0F1] text-body':''}>Crypto</button>
          </li>
        </ul>
      </nav>
      
      <div className="">
        {/*Si view vale uno nos permite ver la section de Fiat si no Crypto  */}
         {view==1?<Fiat className={'h-[500px] flex flex-col justify-between'}/>:<Crypto/>}
      </div>
     
    </div>
  );
};
