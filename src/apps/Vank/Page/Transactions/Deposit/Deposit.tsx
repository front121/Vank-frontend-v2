import React, { useState } from "react";
import { Fiat } from "./Fiat/Fiat";
import { Crypto } from "./Crypto/Crypto";

export const Deposit = ({ selectView }: { selectView?: any }) => {
  return (
    <div className="flex flex-col gap-[16px] w-[550px] h-[70%] w-full">
      {/*Si selectView vale uno nos permite ver la section de Fiat si no Crypto  */}
      {selectView == 1 ? (
        <Fiat className={"h-full flex flex-col justify-between w-full"} />
      ) : (
        <Crypto  />
      )}
    </div>
  );
};
