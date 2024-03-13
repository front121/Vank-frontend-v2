import { Fiat } from "./Fiat/Fiat";
import { Crypto } from "./Crypto/Crypto";
import CustomButton from "../../../../Shared/CustomButton/CustomButton";
import { FooterBtn } from "../FooterBtn/FooterBtn";

export const Deposit = ({ selectView, veiwHistorial }: { selectView?: any, veiwHistorial: any }) => {
  return (
    <div className="flex flex-col h-full overflow-hidden  gap-[30px] w-full">
      {/*Si selectView vale uno nos permite ver la section de Fiat si no Crypto  */}
      {selectView == 1 ? (
        <Fiat />
      ) : (
        <Crypto />
      )}
      <div className="text-end">
        {selectView == 1 ?
          <FooterBtn onClickHistory={veiwHistorial} history={'Deposit History'} />
          :
          <CustomButton onclick={veiwHistorial} label={'Deposit History'} className="font-normal w-auto text-[#9D9DA2]" />
        }

      </div>
    </div>
  );
};
