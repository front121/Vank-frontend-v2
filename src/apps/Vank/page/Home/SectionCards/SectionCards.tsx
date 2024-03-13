import React from "react";
import visa from "../../../../../assets/Icon/visa.png";
// import savings from "../../../../../assets/images/USD Savings.png";
import { useTranslation } from "react-i18next";
import { CardItem } from "../CardItem/CardItem";

export const SectionCards = ({ moreStyle }: { moreStyle?: string }) => {
  const [t, i18n] = useTranslation("global");
  return (
    <div
      className={`${moreStyle} cards-home-responsie flex flex-col gap-[12px]  text-[16px] xl:h-[137px] xl:max-2xl:gap-[6%] `}
    >
      <h2 className=" font-[700] leading-[20.8px] ">Cards</h2>
      <CardItem
        image={visa}
        text={t("Vank.Home.CardsInfo.myCard") + " 1"}
        amount={`$ ${"565,00"}`}
      />
      <CardItem
        image={visa}
        text={t("Vank.Home.CardsInfo.myCard") + " 2"}
        amount={`$ ${"1652.00"}`}
      />
    </div>
  );
};
