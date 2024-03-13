import React, { useState } from "react";
import { Fiat } from "./Fiat/Fiat";
import { Crypto } from "./Crypto/Crypto";

export const Deposit = ({ selectView }: { selectView?: any }) => {
  return (
    <div className="flex flex-col gap-[16px] w-[550px] h-[507px] ">
      {/*Si selectView vale uno nos permite ver la section de Fiat si no Crypto  */}
      {selectView == 1 ? (
        <Fiat className={"h-[500px] w-[100%] flex flex-col justify-between"} />
      ) : (
        <Crypto />
      )}
    </div>
  );
};
