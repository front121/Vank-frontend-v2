import React, { useEffect, useState } from "react";
import CustomButton from "../CustomButton/CustomButton";
import usd from "../../../assets/images/USD.png";
import eth from "../../../assets/images/eth.jpeg";
import btc from "../../../assets/images/Bitcoin.jpeg";
import usdt from "../../../assets/images/usdt.jpeg";

export const CustomSelect = ({
  label,
  classNameLabel,
  classNameMain,
  classNameContentBtn,
  classNameIcon,
  classNameText,
  classNameSubText,
  classNameDivImgText,
  classNameSpanOne,
  classNameIconList,
  classNameSpanList,
  classNameValue,
  classNameValueText
}) => {
  const [object, setObject] = useState({ icon: "", text: "",subText: "",value: 0 ,valueText:""});
  const [veiw, setVeiw] = useState();
  const list = [
    { icon: usdt, text: "USDT",subText:'Wallet', value: "16.60000",valueText:'Available' },
    { icon: eth, text: "ETH",subText:'Wallet', value: "3.340000",valueText:'Available' },
    { icon: btc, text: "BTC",subText:'Wallet', value: "4.550000",valueText:'Available' },
    { icon: usd, text: "USD",subText:'Account', value: "4.565,00",valueText:'Available' },
  ];

  useEffect(() => {
    setObject(list[list.length - 1]);
  }, []);

  const handleItem = (item) => {
    setObject(item);
    setVeiw(false);
  };

  return (
    <div className={classNameMain}>
      <label  className={classNameLabel}>{label}</label>
      <button onClick={() => setVeiw(veiw ? false : true)}>
        <div className={classNameContentBtn}>
          <div className={classNameDivImgText}>
            <img src={object.icon} alt="" className={classNameIcon} />
            <div>
              <h1  className={classNameText}>{object.text}</h1>
              <p  className={classNameSubText}>{object.subText}</p>
            </div>
            <span  className={classNameSpanOne}>{`${"\u25BC"}`}</span>
          </div>
          <div>
            <span>
              <h2 className={classNameValue} >$ {object.value}</h2>
              <p className={classNameValueText}>{object.valueText}</p>
            </span>
          </div>
        </div>
      </button>
      <div
        className={`flex flex-col absolute top-7 -left-4 bg-[#191E25] rounded-[12px] w-full h-[143.3px] z-50 px-[6px] gap-[12px] items-center ${
          veiw ? "block" : "hidden"
        } `}
      >
        {list.map((item, index) => (
          <button onClick={() => handleItem(item)}>
            <div className={classNameSpanList}>
                
                <div className="flex gap-[17px] items-center h-[24px]">
                    <img src={item.icon} alt="" className={classNameIconList} />
                    <p className="font-bold text-[16px] leading-[20.8px]">{item.text}</p>
                </div>
               
                
                <span className="w-[73px] h-[16px] ">
                    <p className="font-bold text-[12px] leading-[15.6px] flex flex-col items-center">$ {item.value}</p>
                </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
