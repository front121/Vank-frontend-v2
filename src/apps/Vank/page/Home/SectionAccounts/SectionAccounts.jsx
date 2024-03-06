import React from "react";
import { CardItem } from "../../../../Shared/CardItem/CardItem";
import usd from "../../../../../assets/images/USD.png";
import savings from "../../../../../assets/images/USD Savings.png";
import { useTranslation } from "react-i18next";

export const SectionAccounts = ({moreStyle}) => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className={`cards-home-responsie ${moreStyle} flex flex-col gap-[12px] xl:max-2xl:gap-[4%] h-[137px]`}>
      <h2 className="  font-[700] ">Accounts</h2>
      <CardItem image={usd} text={"USD"} amount={`$ ${"4.565,00"}`} />
      <CardItem image={savings} text={t("Vank.Home.AccountInfo.usdSavings")} amount={`$ ${"860,00"}`} />
    </div>
  );
};
