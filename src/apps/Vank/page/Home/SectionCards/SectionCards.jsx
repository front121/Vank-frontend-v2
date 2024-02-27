import React from "react";
import visa from "../../../../../assets/images/visa.png";
// import savings from "../../../../../assets/images/USD Savings.png";
import { CardItem } from "../../../../Shared/CardItem/CardItem";
import { useTranslation } from "react-i18next";

export const SectionCards = ({moreStyle}) => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className={`${moreStyle} flex flex-col 2xl:gap-[12px] sm:h-[30%] 2xl:text-[16px] xl:h-[137px]  sm:gap-[20px] lg:gap-[7px] xl:gap-[12px]   lg:text-[14px] text-[16px]  font-type sm:text-[16px]`}>
      <h2  className="media-title-card xl:text-[16px] font-[700] leading-[20.8px]">Cards</h2>
      <CardItem image={visa} text={t("Vank.Home.CardsInfo.myCard")+ ' 1' } amount={`$ ${"565,00"}`} />
      <CardItem image={visa} text={t("Vank.Home.CardsInfo.myCard")+ ' 2' } amount={`$ ${"1652.00"}`} />
    </div>
  );
};
