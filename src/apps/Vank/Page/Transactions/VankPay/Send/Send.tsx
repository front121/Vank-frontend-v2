import { useEffect, useState } from "react";
import CustomInput from "../../../../../Shared/CustomInput/CustomInput";

import { FooterBtn } from "../../FooterBtn/FooterBtn";
import { TransactioResume } from "./TransactioResume/TransactioResume";
import { z } from "zod";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {findById,etUserField,} from "../../../../../service/ServiceTransaction/ServiceTransaction";

import { CustomSelect } from "./CustomSelect/CustomSelect";
import { Controller, set, useForm } from "react-hook-form";
// import { date } from "zod";
// import { transactionAssets } from "../../../../../service/ServiceVankPay/ServiceVanPay";


import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslation } from "react-i18next";

const schema = z.object({
  email: z.string().email("Invalid email format"),
  amount: z.string()
    .refine(val => {
      // Comprueba si el valor es un número
      return !isNaN(parseFloat(val.replace(",", ".")));
    }, {
      message: "Amount must be a number"
    })
    .transform(val => parseFloat(val.replace(",", ".")))
});

export const Send = ({ onClickHistorial }: { onClickHistorial?: any }) => {
  // const [error, setError] = useState(false);
  // const [DataEmail, setDataEmail] = useState({});
  // const [validateEmail, setvalidateEmail] = useState(false);
  // const [amount, setAmount] = useState(0);
  // const [typeMoney, setTypeMoney] = useState("");

  const [t, i18n] = useTranslation("global");
  const [beneficiary, setBeneficiary] = useState("");
  const [contine, setContinue] = useState(1);
  const [user, setUser] = useState({});
 
  const [typeField, setTypeField] = useState("Email");
  const [amount, setAmout] = useState(0);
  const [fromEmail, setFromEmail] = useState('');
  const [toEmail, setToEmail] = useState('');

  const [dataResumen, setDataResumen] = useState({
    FROM_EMAIL: "",
    FROM_ACCOUNT_TYPE: "",
    TO_EMAIL: "",
    TO_ACCOUNT_TYPE: "",
    ASSET: "",
    AMOUNT: ""
  })

  const {
    control,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      amount: "",
      email: "",
      beneficiary: "",
      description: "",
    },
  });


  useEffect(() => {
    const storedData = sessionStorage.getItem("data");
    // Verificar si se encontró algún dato almacenado
    if (storedData) {
      // Analizar la cadena JSON para convertirla en un objeto JavaScript
      const data = JSON.parse(storedData);
      console.log(data)
      setFromEmail(data?.email)
      // Usar el objeto "data" según sea necesario
      console.log(data);
    } else {
      // Manejar el caso en el que no se haya encontrado ningún dato almacenado
      console.log("No se encontraron datos en sessionStorage.");
    }

    console.log(amount);

  }, [amount]);




  //Al dar continuar se setean los datos en el objeto transactionAsset y lo enviamos como parametros
  const handleChangeData = async () => {

    try {
      let transactionAsset = {
        FROM_EMAIL: fromEmail,
        FROM_ACCOUNT_TYPE: "SPOT",
        TO_EMAIL: toEmail,
        TO_ACCOUNT_TYPE: "SPOT",
        ASSET: localStorage.getItem("assets"),
        AMOUNT: amount
      }


      // const response=await transactionAssets(transactionAsset);
      setDataResumen(transactionAsset);
      //toast.success("Transaction ID "+response?.body.tranId) //nos trae el id de la transaction
      setContinue(contine + 1)
      toast.info("Verify the information")

      // setToEmail("")
      // setAmout(0)
      // setBeneficiary("")

    } catch (error: any) {
      console.log(error?.response?.data.body);
      toast.error(error?.response?.data.body)
      // alert(error?.response?.data.body)
    }


  }



  return (

    <>

      {contine == 1 && (


        <div className="transaction-send w-[100%] h-[527px] flex flex-col justify-between relative  max-lg:h-full  ">

          <div className="transaction-send-content2 w-[100%] h-[392px]  flex flex-col  gap-[32px] xl:max-2xl:gap-0 xl:max-2xl:justify-between  xl:max-2xl:h-[342px] max-sm: max-lg:justify-between max-lg:h-[80%]">
            <div className="w-[100%] h-[65px]  flex justify-between">
              <CustomSelect data={user} label={'Choose account or wallet'} />
              <div className="w-[259px] flex flex-col gap-y-[2px]">
                <span className="text-sm sm:text-base font-normal text-[--text-body] xl:text-[14px] 2xl:text-[16px]">
                {t("Vank.Transaction.VankPay.Send.Amount")}
                </span>
                <Controller
                  render={({ field: { onChange, value, name } }) => (

                    <CustomInput
                      type="text"
                      value={value}
                      onChange={(e) => {
                        onChange(e.target.value)
                        setAmout(e.target.value)
                      }}
                      className="send-input w-[259px] h-[42px] pt-[11px] pb-[13px] pr-[30px] pl-[13px] rounded-[10px] bg-[--dark-gray] text-[--text-body] outline-none focus:outline-none focus-visible:border-[#6F6E64] placeholder:text-[--text-light-body]  "
                      name={name}
                      error={Boolean(errors["amount"])}
                      helperText={
                        errors["amount"] ? errors["amount"].message : ""
                      }
                      inputmode="numeric"
                      pattern="[0-9]*"
                    />
                  )}
                  name="amount"
                  control={control}
                // rules={{
                //   required: true,
                // }}
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-y-[2px] xl:text-[14px]">
              <div className="flex items-center gap-12">
                <span
                  onClick={() => setTypeField("Email")}
                  className={`text-sm sm:text-base 2xl:text-base xl:text-[14px] font-normal cursor-pointer  ${typeField == "Email" ? "text-[--text-body]" : ""
                    }`}
                >
                  {t("Vank.Transaction.VankPay.Send.Email")}
                </span>
                <span
                  onClick={() => setTypeField("Phone")}
                  className={`text-sm sm:text-base font-normal cursor-pointer xl:text-[14px] 2xl:text-[16px] ${typeField == "Phone" ? "text-[--text-body]" : ""
                    }`}
                >
                   {t("Vank.Transaction.VankPay.Send.Amount")}
                </span>
                <span
                  onClick={() => setTypeField("Vank ID")}
                  className={`text-sm sm:text-base font-normal cursor-pointer xl:text-[14px] 2xl:text-base ${typeField == "Vank ID" ? "text-[--text-body]" : ""
                    }`}
                >
                 {t("Vank.Transaction.VankPay.Send.VankID")}
                </span>
              </div>
              <Controller
                render={({ field: { onChange, value, name } }) => (
                  <CustomInput
                    type="email"
                    value={value}
                    onChange={(e) => {
                      onChange(e.target.value)
                      setToEmail(e.target.value)
                    }}
                    className="send-input 2xl:text-[16px] w-full h-[42px] pt-[11px] pb-[13px] pr-[30px] pl-[13px] focus-visible:border-[#6F6E64] rounded-[10px] bg-[--dark-gray] text-[--text-body] outline-none focus:outline-none placeholder:text-[--text-light-body] "
                    name={name}
                    error={Boolean(errors["email"])}
                    helperText={errors["email"] ? errors["email"].message : ""}
                    placeholder={`Type ${typeField == "Email"
                      ? "Email"
                      : typeField == "Phone"
                        ? "Phone"
                        : typeField == "Vank ID" && "Vank ID"
                      }`}
                    disabled={amount <= 0}

                  />
                )}
                name="email"
                control={control}
              // rules={{
              //   required: true,
              // }}
              />
            </div>

            <div className="w-full flex flex-col gap-y-[2px]">
              <span className="text-sm sm:text-base font-normal text-[--text-body] xl:text-[14px] 2xl:text-[16px]">
              {t("Vank.Transaction.VankPay.Send.Beneficiary")}
              </span>
              <Controller
                render={({ field: { onChange, value, name } }) => (
                  <CustomInput
                    type="text"
                    value={value}
                    onChange={(e) => {
                      onChange(e)
                      setBeneficiary(e.target.value)
                    }}
                    className="send-input focus-visible:border-[#6F6E64] w-full h-[42px] pt-[11px] pb-[13px] pr-[30px] pl-[13px] rounded-[10px] bg-[--dark-gray] text-[--text-body] outline-none focus:outline-none placeholder:text-[--text-light-body]"
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
              <span className="text-sm sm:text-base font-normal text-[--text-body] xl:text-[14px] 2xl:text-[16px]">
              {t("Vank.Transaction.VankPay.Send.Description")}
              </span>
              <Controller
                render={({ field: { onChange, value, name } }) => (
                  <CustomInput
                    type="text"
                    value={value}
                    onChange={onChange}
                    className="send-textarea  focus-visible:border-[#6F6E64] w-full h-[83px] pt-[11px] pb-[13px] pr-[30px] pl-[13px] rounded-[10px] bg-[--dark-gray] text-[--text-body] outline-none focus:outline-none placeholder:text-[--text-light-body] "
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
            onClik={() => handleChangeData()}
            onclickBack={() => setContinue(1)}
            disabled={toEmail?.length <= 0 || beneficiary.length <= 0}
          />
        </div>
      )}

      {contine == 2 && (
        <TransactioResume
          amount={amount}
          dataUser={dataResumen}
          beneficiary={beneficiary}
          retur={() => setContinue(1)}
          back={() => setContinue(1)}

        />
      )}
      <div className="absolute"><ToastContainer /></div>
    </>

  );
};
