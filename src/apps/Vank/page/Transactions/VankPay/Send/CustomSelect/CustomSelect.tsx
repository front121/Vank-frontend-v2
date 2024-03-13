import { useEffect, useState } from "react";
import usd from "../../../../../../../assets/Icon/usdt.jpeg";
import eth from "../../../../../../../assets/Icon/eth.jpeg";
import btc from "../../../../../../../assets/Icon/Bitcoin.jpeg";
import usdt from "../../../../../../../assets/Icon/usdt.jpeg";
import {
  convertir,
  findById,
} from "../../../../../../service/ServiceTransaction/ServiceTransaction";

export const CustomSelect = ({ label, data }: { label?: any; data?: any }) => {
  const [object, setObject] = useState({
    icon: "",
    text: "",
    subText: "",
    value: 0,
    valueText: "",
  });

  const [veiw, setVeiw] = useState<boolean>();
  //estado de mondeda USD
  const [monyConvertion, setMonyConVertion] = useState();
  //estado de mondeda Eth
  const [monyConvertionusEth, setMonyConVertionEth] = useState();
  //estado de mondeda BTC
  const [monyConvertionBTC, setMonyConVertionBTC] = useState();
  //estado de mondeda USDT
  const [monyConvertionUSDT, setMonyConVertionUSDT] = useState();
  //estado de user
  const [user, setUser] = useState({});

  useEffect(() => {
    setObject(list[list.length - 1]);

    //Buscamos el Usuario por  1 y convertimos su moneda
    const getUser = async () => {
      let user = await findById(1);
      setUser(user.user);
      let usd = await convertir("USD", user.user.amount);
      setMonyConVertion(usd);

      let eth = await convertir("ETH", user.user.amount);
      setMonyConVertionEth(eth);

      let btc = await convertir("BTC", user.user.amount);
      setMonyConVertionBTC(btc);

      let usdt = await convertir("USDT", user.user.amount);
      setMonyConVertionUSDT(usdt);
    };

    getUser();
  }, [monyConvertion]);

  const list: any = [
    {
      icon: usdt,
      text: "USDT",
      subText: "Wallet",
      value: monyConvertionUSDT,
      valueText: "Available",
    },
    {
      icon: eth,
      text: "ETH",
      subText: "Wallet",
      value: monyConvertionusEth,
      valueText: "Available",
    },
    {
      icon: btc,
      text: "BTC",
      subText: "Wallet",
      value: monyConvertionBTC,
      valueText: "Available",
    },
    {
      icon: usd,
      text: "USD",
      subText: "Account",
      value: monyConvertion,
      valueText: "Available",
    },
  ];
  const handleItem = (item?: any) => {
    setObject(item);
    setVeiw(false);
    localStorage.setItem("money", item.text + " " + item.subText);
  };

  return (
    <div
      className={
        "flex flex-col w-[275px] relative gap-[8px] h-[65px] pr-[32px] "
      }
    >
      <label
        className={
          "transaction-send font-normal text-[16px] leading-[20.8px] xl:max-2xl:text-sm"
        }
      >
        {label}
      </label>
      <button onClick={() => setVeiw(veiw ? false : true)}>
        <div className={"w-[237px] h-[36px] flex justify-between  px-[0px] "}>
          <div className={"flex gap-[16px] w-[128px] h-[38px] "}>
            <img
              src={object.icon}
              alt=""
              className={"w-[36px] h-[36px] rounded-[100%]"}
            />
            <div>
              <h1
                className={
                  "transaction-send text-[20px] font-bold leading-[26px] xl:max-2xl:text-sm"
                }
              >
                {object.text}
              </h1>
              <p className={"text-[0.75rem] font-normal leading-[15.6px] "}>
                {object.subText}
              </p>
            </div>
            <span className={"text-[0.75rem]"}>{`${"\u25BC"}`}</span>
          </div>
          <div>
            <span>
              <h2
                className={
                  "transaction-send text-[16px] font-bold leading-[20.8px] xl:max-2xl:text-sm"
                }
              >
                $ {object.value}
              </h2>
              <p
                className={
                  "text-[12px] font-normal leading-[15.6px] relative top-1 text-end"
                }
              >
                {object.valueText}
              </p>
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
            <div
              className={
                "w-[199px] h-[24px] flex justify-between items-center "
              }
            >
              <div className="flex gap-[17px] items-center h-[24px] max-xl:text-[90%]">
                <img
                  src={item.icon}
                  alt=""
                  className={"w-[36px] h-[36px] rounded-[100%]"}
                />
                <p className="font-bold max-2xl:text-[16px]  leading-[20.8px] max-xl:text-[90%] ">
                  {item.text}
                </p>
              </div>

              <span className="w-[73px] h-[16px] ">
                <p className="font-bold 2xl:text-[12px] leading-[15.6px] flex flex-col items-center overflow-hidden w-[100px] max-xl:text-[90%]">
                  $ {item.value}
                </p>
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
