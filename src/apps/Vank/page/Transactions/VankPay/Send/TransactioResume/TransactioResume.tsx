import React, { useEffect, useState } from "react";
import { FooterBtn } from "../../../FooterBtn/FooterBtn";
import "./style.css";
import { Validation2FA } from "../Validation2FA/Validation2FA";
import { Controller, useForm } from "react-hook-form";
import Check2 from "../../../../../../../assets/Icon/Check2";
export const TransactioResume = ({
  dataUser,
  retur,
  back,
  amount,
}: {
  dataUser?: any;
  retur?: any;
  back?: any;
  amount?: any;
}) => {
  const [data, seData] = useState<any>({});

  const [continu, setContinue] = useState(1);
  const [typeMoney, setMoney] = useState("");
  const [textMoney, setTextmoney] = useState("");

  const {
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid },
    setValue,
    getValues,
    clearErrors,
  } = useForm({
    // resolver: zodResolver(_schema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      terms: false,
    },
  });

  useEffect(() => {
    seData(dataUser);
    setMoney(localStorage.getItem("money") as string);
    setTextmoney(localStorage.getItem("money")?.split(" ")[0] as any);
  }, []);

  return (
    <div className="responsi-transaction-resume-main  w-full  h-[527px] flex flex-col gap-[32px]   xl:max-2xl:gap-[10px] ">
      {continu == 1 && (
        <>
          <h1 className="text-[#EFF0F1] font-bold  leading-[20.8px]  xl:max-2xl:text-sm">
            Transaction Resume
          </h1>
          <div className="responsi-transaction-resume-content1 w-[550px] h-[355px] flex flex-col gap-[33px]  xl:max-2xl:gap-[20px] xl:max-2xl:h-[320px]">
            <div className="responsi-transaction-resume-content2 h-[264px] flex flex-col justify-between w-[100%] text-[16px]   xl:max-2xl:text-sm xl:max-2xl:h-[70%]">
              <div className="flex w-[100%] justify-between h-[21px]">
                <p>Amount:</p>
                <p className="text-[#FFED00]  leading-[20.8px] font-bold">
                  $ {amount} {textMoney}
                </p>
              </div>
              <div className="flex  justify-between h-[21px]  w-[100%]">
                <p>Beneficiary Name:</p>
                <p>{data?.name}</p>
              </div>
              <div className="flex  justify-between h-[21px]  w-[100%]">
                <p>Sending From:</p>
                <p>{typeMoney}</p>
              </div>
              <div className="flex justify-between h-[21px]  w-[100%]">
                <p>Vank ID:</p>
                <p>{data?.vankID}</p>
              </div>
              <div className="flex  justify-between h-[21px]  w-[100%]">
                <p>Phone Number:</p>
                <p>{data?.phone}</p>
              </div>
              <div className="flex  justify-between h-[21px]  w-[100%]">
                <p>Beneficiary Email: </p>
                <p>{data?.email}</p>
              </div>

              <div className="h-[36px] pt-[24px] pb-[10px] border-b-[2px] border-[#3E4347] "></div>
            </div>

            <div className="flex items-center gap-x-5 transition-transform duration-500 w-full h-[42px] mb-6">
              <div className="flex items-center relative cursor-pointer">
                <Controller
                  render={({ field: { onChange, value, name } }) => (
                    <div className="flex items-center relative cursor-pointer">
                      <input
                        type="checkbox"
                        name={name}
                        value={value ? "true" : "false"} // Convertir el booleano a string
                        className={`appearance-none w-[22px] h-[22px] rounded-[4px] relative bg-[--dark-gray] cursor-pointer z-20 ${
                          getValues("terms") && "opacity-10"
                        }`}
                        onChange={onChange}
                      />
                      {getValues("terms") && (
                        <div className="absolute w-full h-full flex justify-center items-center bg-[--dark-gray] rounded-[4px]">
                          <Check2 className="text-[--yellow] w-[15px] h-[10px]" />
                        </div>
                      )}
                    </div>
                  )}
                  name="terms"
                  control={control}
                />
              </div>
              <p className="text-[16px] font-normal leading-[20.8px] ">
                By clicking Continue, I agree Vank´s transaction{" "}
                <span className="border-b-[1px] font-bold">terms</span> and{" "}
                <span className="border-b-[1px] font-bold">conditions.</span>{" "}
              </p>
            </div>
          </div>

          <FooterBtn
            history={`VankPay history  \u25BA`}
            onClik={() => setContinue(continu + 1)}
            onclickBack={back}
          />
        </>
      )}

      {continu == 2 && (
        <Validation2FA retur={retur} back={() => setContinue(1)} />
      )}
    </div>
  );
};
