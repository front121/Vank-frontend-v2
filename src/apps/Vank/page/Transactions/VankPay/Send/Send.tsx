import { useEffect, useState } from "react";
import CustomInput from "../../../../../Shared/CustomInput/CustomInput";

import { FooterBtn } from "../../FooterBtn/FooterBtn";
import { TransactioResume } from "./TransactioResume/TransactioResume";

import {
  findById,
} from "../../../../../service/ServiceTransaction/ServiceTransaction";

import { CustomSelect } from "./CustomSelect/CustomSelect";
import { Controller, useForm } from "react-hook-form";

export const Send = ({ onClickHistorial }: { onClickHistorial?: any }) => {
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

  const {
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      amount: "",
      email: "",
      beneficiary: "",
      description: "",
    },
  });

  //validar email

  //Manejar monto

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

  return (
    <>
      {contine == 1 && (
        <div className="transaction-send w-[100%] h-[527px] flex flex-col justify-between relative">
          <div className="transaction-send-content2 w-[100%] h-[392px]  flex flex-col  gap-[32px] xl:max-2xl:gap-0 xl:max-2xl:justify-between xl:max-2xl:h-[342px] ">
            <div className="w-[100%] h-[65px]  flex justify-between ">
              <CustomSelect data={user} />
              <div className="w-[259px] flex flex-col gap-y-[2px]">
                <span className="text-sm sm:text-base font-normal text-[--text-body]">
                  Amount
                </span>
                <Controller
                  render={({ field: { onChange, value, name } }) => (
                    <CustomInput
                      type="text"
                      value={value}
                      onChange={onChange}
                      className="w-[259px] h-[42px] pt-[11px] pb-[13px] pr-[30px] pl-[13px] rounded-[10px] bg-[--dark-gray] text-[--text-body] outline-none focus:outline-none placeholder:text-[--text-light-body] "
                      name={name}
                      error={Boolean(errors["amount"])}
                      helperText={
                        errors["amount"] ? errors["amount"].message : ""
                      }
                      placeholder="Type amount"
                    />
                  )}
                  name="amount"
                  control={control}
                  rules={{
                    required: true,
                  }}
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-y-[2px]">
              <div className="flex items-center gap-12">
                <span
                  onClick={() => setTypeField("Email")}
                  className={`text-sm sm:text-base font-normal cursor-pointer ${
                    typeField == "Email" ? "text-[--text-body]" : ""
                  }`}
                >
                  Email
                </span>
                <span
                  onClick={() => setTypeField("Phone")}
                  className={`text-sm sm:text-base font-normal cursor-pointer  ${
                    typeField == "Phone" ? "text-[--text-body]" : ""
                  }`}
                >
                  Phone
                </span>
                <span
                  onClick={() => setTypeField("Vank ID")}
                  className={`text-sm sm:text-base font-normal cursor-pointer  ${
                    typeField == "Vank ID" ? "text-[--text-body]" : ""
                  }`}
                >
                  Vank ID
                </span>
              </div>
              <Controller
                render={({ field: { onChange, value, name } }) => (
                  <CustomInput
                    type="email"
                    value={value}
                    onChange={onChange}
                    className="w-full h-[42px] pt-[11px] pb-[13px] pr-[30px] pl-[13px] rounded-[10px] bg-[--dark-gray] text-[--text-body] outline-none focus:outline-none placeholder:text-[--text-light-body] "
                    name={name}
                    error={Boolean(errors["email"])}
                    helperText={errors["email"] ? errors["email"].message : ""}
                    placeholder={`Type ${
                      typeField == "Email"
                        ? "Email"
                        : typeField == "Phone"
                        ? "Phone"
                        : typeField == "Vank ID" && "Vank ID"
                    }`}
                  />
                )}
                name="email"
                control={control}
                rules={{
                  required: true,
                }}
              />
            </div>

            <div className="w-full flex flex-col gap-y-[2px]">
              <span className="text-sm sm:text-base font-normal text-[--text-body]">
                Beneficiary
              </span>
              <Controller
                render={({ field: { onChange, value, name } }) => (
                  <CustomInput
                    type="text"
                    value={value}
                    onChange={onChange}
                    className="w-full h-[42px] pt-[11px] pb-[13px] pr-[30px] pl-[13px] rounded-[10px] bg-[--dark-gray] text-[--text-body] outline-none focus:outline-none placeholder:text-[--text-light-body] "
                    name={name}
                    error={Boolean(errors["beneficiary"])}
                    helperText={
                      errors["beneficiary"] ? errors["beneficiary"].message : ""
                    }
                    placeholder="Type beneficiary"
                  />
                )}
                name="beneficiary"
                control={control}
                rules={{
                  required: true,
                }}
              />
            </div>

            <div className="w-full flex flex-col gap-y-[2px]">
              <span className="text-sm sm:text-base font-normal text-[--text-body]">
                description
              </span>
              <Controller
                render={({ field: { onChange, value, name } }) => (
                  <CustomInput
                    type="text"
                    value={value}
                    onChange={onChange}
                    className="w-full h-[83px] pt-[11px] pb-[13px] pr-[30px] pl-[13px] rounded-[10px] bg-[--dark-gray] text-[--text-body] outline-none focus:outline-none placeholder:text-[--text-light-body] "
                    name={name}
                    error={Boolean(errors["description"])}
                    helperText={
                      errors["description"] ? errors["description"].message : ""
                    }
                    placeholder="Type description"
                  />
                )}
                name="description"
                control={control}
                rules={{
                  required: true,
                }}
              />
            </div>
          </div>
          <FooterBtn
            history={`VankPay history  \u25BA`}
            onClickHistory={onClickHistorial}
            onClik={() => setContinue(contine + 1)}
            onclickBack={() => setContinue(1)}
            disabled={!isValid}
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
