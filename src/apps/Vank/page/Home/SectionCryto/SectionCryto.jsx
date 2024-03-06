import React from "react";
import { CardItem } from "../../../../Shared/CardItem/CardItem";
import eth from "../../../../../assets/images/eth.jpeg";
import usdt from "../../../../../assets/images/usdt.jpeg";
import btc from "../../../../../assets/images/Bitcoin.jpeg";
import { useTranslation } from "react-i18next";

export const SectionCryto = ({moreStyle}) => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className={`cards-home-responsie  flex flex-col gap-[12px]  h-[195px] xl:max-2xl:gap-[4%] ${moreStyle}`}>
      <h2  className="font-[700] leading-[20.8px]" >Crypto</h2>
      <CardItem
        image={usdt}
        text={"USDT"}
        subtext={t("Vank.Home.CryptoInfo.tether")}
        amount={`${"16.60000"}`}
      />
      <CardItem
        image={eth}
        text={`ETH`}
        subtext={"Ethereum"}
        amount={`${"3.340000"}`}
      />
      <CardItem
        image={btc}
        text={"BTC"}
        subtext={"Bitcoin"}
        amount={`${"4.550000"}`}
      />
    </div>
  );
};
