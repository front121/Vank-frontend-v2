import React, { useState } from "react";
import { Fiat } from "./Fiat/Fiat";
import { Crypto } from "./Crypto/Crypto";

export const Deposit = ({selectView}) => {

  return (
    <div className="flex flex-col gap-[32px]">
 
      <div className="">
        {/*Si selectView vale uno nos permite ver la section de Fiat si no Crypto  */}
         {selectView==1?<Fiat className={'h-[500px] flex flex-col justify-between'}/>:<Crypto/>}
      </div>
     
    </div>
  );
};
