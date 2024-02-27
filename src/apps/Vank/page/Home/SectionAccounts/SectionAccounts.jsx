import React from "react";
import { CardItem } from "../../../../Shared/CardItem/CardItem";
import usd from "../../../../../assets/images/USD.png";
import savings from "../../../../../assets/images/USD Savings.png";
import { useTranslation } from "react-i18next";

export const SectionAccounts = ({moreStyle}) => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className={`${moreStyle} flex flex-col 2xl:gap-[12px] lg:gap-[7px] xl:gap-[12px]  s xl:h-[137px] sm:h-[30%] sm:gap-[20px] 2xl:text-[16px] lg:text-[14px] sm:text-[16px]`}>
      <h2 className="media-title-card xl:text-[16px]  font-[700] leading-[20.8px]">Accounts</h2>
      <CardItem image={usd} text={"USD"} amount={`$ ${"4.565,00"}`} />
      <CardItem image={savings} text={t("Vank.Home.AccountInfo.usdSavings")} amount={`$ ${"860,00"}`} />
    </div>
  );
};
