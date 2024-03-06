import React, { useEffect, useState } from "react";
import CustomInput from "../../../../../Shared/CustomInput/CustomInput";

import { CustomSelect } from "../../../../../Shared/CustomSelect/CustomSelect";
import { FooterBtn } from "../../FooterBtn/FooterBtn";
import xicon from "../../../../../../assets/Icon/XIcon.svg";
import check from "../../../../../../assets/Icon/Check.svg";
import { TransactioResume } from "./TransactioResume/TransactioResume";
import { Validation2FA } from "./Validation2FA/Validation2FA";
import {
  findById,
  getUserField,
} from "../../../../../service/ServiceTransaction/ServiceTransaction";
export const Send = ({ onClickHistorial }) => {
  const [error, setError] = useState(false);
  const [beneficiary, setBeneficiary] = useState("");
  const [contine, setContinue] = useState(1);
  const [user, setUser] = useState({});
  const [DataEmail, setDataEmail] = useState({});
  const [validateEmail, setvalidateEmail] = useState(false);
  const [amount, setAmount] = useState(0);
  const [typeField, setTypeField] = useState("Email");
  const [typeMoney, setTypeMoney] = useState("");

  /*getPor email */
  // const getUser=async(event)=>{
  //   let user=await getUsuarios();
  // }

  //validar email
  const handleEmail = async (event) => {
    try {
      let data = await getUserField(typeField, event.target.value);
      setDataEmail(data.user);
      setvalidateEmail(true);
    } catch (error) {
      console.log("Error");
    }

    if (!event.target.value) {
      setvalidateEmail(false);
    }
  };

  //Manejar monto
  const handleAmount = (event) => {
    setAmount(event.target.value);
  };

  useEffect(() => {
    const getUser = async () => {
      let user = await findById(1);
      setUser(user.user);
    };
    getUser();
  }, []);

  // const [data, setData] = useState({
  //   amount: "$ 202.55 USD",
  //   beneficiarynames: "Richard Brides",
  //   sendFrom: "USD account",
  //   vankId: "V8787455474",
  //   phone: "+1 408 564 5599",
  //   beneficiaryEmail: "vankuser@gmail.com",
  // });

  //manejar Beneficiario
  const handleBeneficiary = (event) => {
    setBeneficiary(event.target.value);

    if (event.target.value == DataEmail.name) {
      setError(false);
    } else {
      setError(true);
    }

    console.log();
  };

  return (
    <>
      {contine == 1 && (
        <div className="transaction-send w-[100%] h-[527px] flex flex-col justify-between relative">
          
          <div className="transaction-send-content2 w-[100%] h-[392px]  flex flex-col  gap-[32px] xl:max-2xl:gap-0 xl:max-2xl:justify-between xl:max-2xl:h-[342px] ">
           
            <div className="w-[100%] h-[65px]  flex justify-between ">
              <CustomSelect
                data={user}
                classNameMain={
                  "flex flex-col w-[275px] relative gap-[8px] h-[65px] pr-[32px] "
                }
                label={"Choose account or walllet"}
                classNameContentBtn={
                  "w-[237px] h-[36px] flex justify-between  px-[0px] "
                }
                classNameIcon={"w-[36px] h-[36px] rounded-[100%]"}
                classNameDivImgText={"flex gap-[16px] w-[128px] h-[38px] "}
                classNameIconList={"w-[24px] h-[24px] rounded-[100%] "}
                classNameSpanList={
                  "w-[199px] h-[24px] flex justify-between items-center "
                }
                classNameLabel={"transaction-send font-normal text-[16px] leading-[20.8px] xl:max-2xl:text-sm"}
                classNameText={"transaction-send text-[20px] font-bold leading-[26px] xl:max-2xl:text-sm"}
                classNameSubText={"text-[0.75rem] font-normal leading-[15.6px] "}
                classNameSpanOne={"text-[0.75rem]"}
                classNameValue={"transaction-send text-[16px] font-bold leading-[20.8px] xl:max-2xl:text-sm"}
                classNameValueText={
                  "text-[12px] font-normal leading-[15.6px] relative top-1 text-end"
                }
              />
              <div className="w-[259px]">
                <CustomInput
                  label={<label className="tex-[16px] xl:max-2xl:text-sm">{'Amount'}</label>}
                  className={"flex flex-col gap-[8px] "}
                  inputClassName={
                    "bg-[#3E4347] focus-visible:border-[#D6CA5C3D] w-[259px] h-[36px] p-[13px] gap-[148px] rounded-[10px]"
                  }
                  onChange={() => handleAmount(event)}
                  placeholder="$ 00.0"
                />
              </div>

            </div>

            <div className="relative  h-[65px] ">
              <div className="transaction-send flex gap-14 text-[16px] xl:max-2xl:text-sm  font-normal leading-[20.8px] text-[#9D9DA2]">
                <button
                  onClick={() => setTypeField("Email")}
                  className={`${typeField == "Email" ? "text-body" : ""}`}
                >
                  Email
                </button>
                <button
                  onClick={() => setTypeField("Phone")}
                  className={`${typeField == "Phone" ? "text-body" : ""}`}
                >
                  Phone
                </button>
                <button
                  onClick={() => setTypeField("Vank ID")}
                  className={`${typeField == "Vank ID" ? "text-body" : ""}`}
                >
                  Vank ID
                </button>
              </div>
              <div className="relative">
                <CustomInput
                  onChange={() => handleEmail(event)}
                  classNamecontentLabels={
                    "w-[550px]   w-[100%] flex gap-[40px] "
                  }
                  className={"h-[65px] w-[100%] flex flex-col gap-[8px] "}
                  inputClassName={
                    "pl-4 bg-[#3E4347] focus-visible:border-[#D6CA5C3D] w-[550px] h-[36px] rounded-[10px]"
                  }
                  type={typeField}
                  placeholder={`Type ${typeField}`}
                />
                {validateEmail && (
                  <div>
                    {!validateEmail ? (
                      <div className="w-[23px] absolute z-50 right-0 top-3 mr-4">
                        {<img src={xicon} alt="" className="" />}
                      </div>
                    ) : (
                      <div className="w-[23px] absolute z-50 right-0 top-4 mr-4">
                        {<img src={check} alt="" className="" />}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="relative">
              <CustomInput
                label={
                  <label className="transaction-send xl:max-2xl:text-sm font-normal text-[16px] leading-[20.8px] text-[#EFF0F1]">
                    Beneficiary
                  </label>
                }
                className={"h-[65px] w-[100%] flex flex-col gap-[8px]"}
                inputClassName={
                  " pl-4 bg-[#3E4347] focus-visible:border-[#D6CA5C3D] w-[100%] h-[36px] rounded-[10px]"
                }
                onChange={() => handleBeneficiary(event)}
                placeholder="Type beneficiary name"
                error={error}
                hasError={<img src={xicon} alt="" />}
                disabled={validateEmail ? false : true}
                // icon={error ? <img src={xicon} alt="" className=""/> : "✓"}
              />
              {beneficiary && (
                <div>
                  {error && beneficiary ? (
                    <div className="w-[23px] absolute z-50 right-0 top-9 mr-4">
                      {<img src={xicon} alt="" className="" />}
                    </div>
                  ) : (
                    <div className="w-[23px] absolute z-50 right-0 top-9 mr-4">
                      {<img src={check} alt="" className="" />}
                    </div>
                  )}
                </div>
              )}
            </div>

            <CustomInput
              label={<label className="text-[16px] transaction-send xl:max-2xl:text-sm">{"Description"}</label>}
              className={"h-[112px] w-[100%] flex flex-col gap-[8px]"}
              inputClassName={
                "bg-[#3E4347] focus-visible:border-[#D6CA5C3D] w-[550px] p-[13px] flex flex-col gap-[148px] h-[83px] rounded-[10px]"
              }
              iconCheck={xicon}
            />
          </div>
          <FooterBtn
            history={`VankPay history  \u25BA`}
            onClickHistory={onClickHistorial}
            onClik={() => setContinue(contine + 1)}
            onclickBack={() => setContinue(1)}
            disabled={!amount && !validateEmail}
          />
        </div>
      )}

      {contine == 2 && (
        <TransactioResume
          amount={amount}
          dataUser={DataEmail}
          retur={() => setContinue(1)}
          back={() => setContinue(1)}
        />
      )}
    </>
  );
};
