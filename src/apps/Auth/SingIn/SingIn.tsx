import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { Controller, get, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";
import CustomInput from "../../Shared/CustomInput/CustomInput";
import CustomButton from "../../Shared/CustomButton/CustomButton";
import Login from "../../../assets/Icon/Login";
import IconGoogle from "../../../assets/Icon/IconGoogle";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import CustomSelectPhone from "../../Shared/CustomSelectPhone/CustomSelectPhone";
import InfoIcon from "@/assets/Icon/InfoIcon";
import CustomTooltip from "@/apps/Shared/CustomTooltip/CustomTooltip";
import { useService } from "@redtea/react-inversify";
import { ValidateSendOtpRepository } from "@/Context/ValidateSendOtp/domain/domain";
import CustomNotification from "@/apps/Shared/CustomNotification/CustomNotification";

const schema = z
  .object({
    email: z.string().email().optional(),
    phone: z.string().optional(),
    password: z
      .string()
      .regex(/[0-9]/, "Debe contener al menos 1 número")
      .regex(/[A-Z]/, "Debe contener al menos 1 letra mayúscula")
      .min(8, "Debe tener al menos 8 caracteres")
      .refine((value) => !!value, { message: "La contraseña es obligatoria" }),
  })
  .refine((data) => {
    // Asegúrate de que al menos uno de los campos email o telefono esté presente
    if (!data.email && !data.phone) {
      // throw new Error(
      //   "Debes proporcionar un correo electrónico o un número de teléfono."
      // );
      return;
    }
    return true;
  });

const show = {
  opacity: 1,
  display: "flex",
};

const hide = {
  opacity: 0,
  display: "none",
};

const SingIn = ({
  isvisible,
  setIsvisible,
  showModal,
  setShowModal,
}: {
  isvisible: boolean;
  setIsvisible: (value: boolean) => void;
  showModal?: any;
  setShowModal?: any;
}) => {
  const [t, i18n] = useTranslation("global");

  const navigate = useNavigate();

  const [strength, setStrength] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const [val, setVal] = useState(false);
  const [phoneIndicator, setPhoneIndicator] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [visiblePhone, setVisiblePhone] = useState(true);

  const validateSend = useService<ValidateSendOtpRepository>("ValidateSendOtp");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const {
    handleSubmit,
    watch,
    control,
    formState: { errors, isValid },
    setValue,
    getValues,
    clearErrors,
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      phone: "",
      password: "",
    },
  });

  const calculateStrength = (password: string) => {
    let score = 0;

    if (password.length >= 8) {
      score++;
    }
    if (/\d/.test(password)) {
      score++;
    }
    if (/[A-Z]/.test(password)) {
      score++;
    }
    setStrength(score);
  };

  useEffect(() => {
    calculateStrength(getValues("password"));
  }, [getValues("password")]);

  useEffect(() => {
    if (!isvisible) {
      setValue("email", "");
      setValue("phone", "");
      setValue("password", "");
      setVal(false);
      clearErrors();
    }
  }, [isvisible]);

  useEffect(() => {
    document.addEventListener("error", (e: any) => setVisiblePhone(e.detail));
  }, []);

  useEffect(() => {
    let timer: any;
    if (showModal) {
      timer = setTimeout(() => {
        setShowModal((prevState) => ({
          ...prevState,
          show: false,
        }));
        // const newFieldValidity = new Array(length).fill(true);
      }, 5000); // Oculta la modal después de 3 segundos
    }

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar el componente
  }, [showModal]);

  const formate = (email: string) => {
    console.log(email);

    return {
      project: "65f0cf59a8c6b07717173973",
      projectFlow: "65f0ef2f29b73ae8fd75f3e5",
      email: email,
      type: "login",
      validationMethod: "verificationCode",
      language: "es",
    };
  };

  const formatePhone = (phone: string, indicator: string) => {
    return {
      project: "65f0cf59a8c6b07717173973",
      projectFlow: "65f0ef2f29b73ae8fd75f3e5",
      phone: phone,
      countryCode: indicator,
      type: "login",
      validationMethod: "verificationCode",
      language: "es",
    };
  };

  const onSubmit = async (_data: any) => {
    setIsLoading(true);
    navigate("SingIn/Otp/email");
    setIsLoading(false);
    return;
    // try {
    //   const data = formate(_data?.email);
    //   const response: any = await validateSend.postSendValidateEmail(data);
    //   console.log(response);
    //   if (response?.data) {
    //     localStorage.setItem("otpEmail", _data?.email);
    //     setIsLoading(false);
    //     return;
    //   }
    //   throw "";
    // } catch (error) {
    //   console.log(error);
    //   setShowModal({
    //     title: "Correo Electrónico Inválido:",
    //     descripcion:
    //       " Parece que el correo electrónico que has ingresado no está registrado en nuestro sistema. Por favor, verifica que el correo electrónico esté escrito correctamente e inténtalo nuevamente.",
    //     show: true,
    //   });
    //   setIsLoading(false);
    // }
  };

  const onSubmitPhone = async (_data: any) => {
    setIsLoading(true);
    navigate("SingIn/Otp/phone");
    setIsLoading(false);
    return;
    // const indicator = phoneIndicator.replace(/\+/g, "");
    // try {
    //   const data = formatePhone(_data?.phone, indicator);
    //   const response: any = await validateSend.postSendValidatePhone(data);
    //   if (response?.data) {
    //     localStorage.setItem(
    //       "otpPhone",
    //       JSON.stringify({ phone: _data?.phone, countryCode: indicator })
    //     );
    //     setIsLoading(false);
    //     navigate("SingIn/Otp/phone");
    //     return;
    //   }
    //   throw "";
    // } catch (error) {
    //   console.log(error);
    //   setShowModal({
    //     title: "Correo Electrónico Inválido:",
    //     descripcion:
    //       " Parece que el correo electrónico que has ingresado no está registrado en nuestro sistema. Por favor, verifica que el correo electrónico esté escrito correctamente e inténtalo nuevamente.",
    //     show: true,
    //   });
    //   setIsLoading(false);
    // }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
        className={`w-full  absolute  transition-all duration-700 ${
          !isvisible
            ? "translate-x-0 opacity-100"
            : "-translate-x-[110%] opacity-0"
        }`}
      >
        <div className="w-full flex flex-col mb-4 relative">
          <div className="flex items-center justify-between mb-2">
            <div className="w-full flex items-center gap-2">
              <span className="text-sm sm:text-[15px] font-normal text-[--text-body]">
                {t("Auth.login.emailOrPhone.label")}
              </span>
              {(visiblePhone || errors.phone) && (
                <>
                  <InfoIcon
                    id="my-anchor-element"
                    className="cursor-pointer w-[18px]"
                    fill="#F76A6A"
                  />
                  <CustomTooltip
                    anchorSelect="#my-anchor-element"
                    place="left"
                    style={{
                      backgroundColor: "var(--dark-gray)",
                      color: "#fff",
                      padding: "5px",
                      borderRadius: "5px",
                      opacity: 1,
                      border: "2px solid #fff",
                      zIndex: 10000,
                    }}
                  >
                    <div className="w-[320px] p-2">
                      <span>
                        {visiblePhone
                          ? "El número ingresado no es válido para el país seleccionado. Por favor, revise y vuelva a intentarlo."
                          : errors.phone && errors.phone.message}
                      </span>
                    </div>
                  </CustomTooltip>
                </>
              )}
            </div>
            <span
              className="text-sm sm:text-[15px] font-normal text-[--yellow] cursor-pointer"
              onClick={() => {
                setVal(!val);
                setValue("email", "");
                setValue("phone", "");
              }}
            >
              {/* {!val ? "Phone" : "Email"} */}
              {!val
                ? t("Auth.login.emailOrPhone.phone")
                : t("Auth.login.emailOrPhone.email")}
            </span>
          </div>
          <Controller
            render={({ field: { onChange, value, name } }) => (
              <motion.div
                animate={!val ? show : hide}
                transition={{ duration: 1.2 }}
              >
                <CustomInput
                  type="email"
                  value={value}
                  onChange={onChange}
                  className={`w-full h-[42px] pr-[40px] pl-[13px] rounded-[10px] bg-[--dark-gray] text-[--text-body] outline-none focus:outline-none placeholder:text-[--text-light-body] sm:text-[15px]`}
                  name={name}
                  error={Boolean(errors["email"])}
                  helperText={errors["email"] ? errors["email"].message : ""}
                  placeholder="Type here"
                />
              </motion.div>
            )}
            name="email"
            control={control}
          />
          <Controller
            render={({ field: { onChange, value, name } }) => (
              <motion.div
                className={`flex flex-col relative h-[42px] `}
                animate={val ? show : hide}
                transition={{ duration: 1.2 }}
              >
                <CustomSelectPhone
                  className="h-[42px]"
                  onChange={(e, i) => {
                    onChange(e);
                    console.log(e);
                    setPhoneIndicator(i);

                    setValue("phone", e, {
                      shouldValidate: true,
                    });
                  }}
                  isvisible={val ?? isvisible}
                  value={value}
                  name={name}
                />
              </motion.div>
            )}
            name="phone"
            control={control}
          />
        </div>

        {/* <CustomSelectPhone /> */}
        <div className="w-full flex flex-col gap-y-[7px] mb-9">
          <span className="text-sm sm:text-[15px] font-normal text-[--text-body]">
            {t("Auth.login.passwordLabel")}
          </span>
          <Controller
            render={({ field: { onChange, value, name } }) => (
              <CustomInput
                type="password"
                value={value}
                onChange={onChange}
                className="w-full h-[42px] pr-[40px] pl-[13px] rounded-[10px] bg-[--dark-gray] text-[--text-body] outline-none focus:outline-none placeholder:text-[--text-light-body] sm:text-[15px]"
                name={name}
                error={Boolean(errors["password"])}
                helperText={
                  errors["password"] ? errors["password"].message : ""
                }
                placeholder="Type password"
                showPassword={showPassword}
                togglePasswordVisibility={togglePasswordVisibility}
              />
            )}
            name="password"
            control={control}
          />
        </div>
        {/* <div className="flex justify-center items-center gap-3 px-5 mb-5">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className={`h-2 w-full rounded-md ${
                index < strength
                  ? strength === 1
                    ? "bg-[#FAE100] opacity-50"
                    : strength === 2
                    ? "bg-[#FAE100] opacity-80"
                    : strength === 3 && "bg-[#FAE100] opacity-100"
                  : "bg-[#3E4347]"
              }`}
            />
          ))}
        </div> */}

        <CustomButton
          className={`w-full h-[42px] flex justify-center items-center gap-x-2 bg-[--yellow] disabled:bg-[--yellow-disabled] rounded-[60px] px-[12px] text-lg font-bold  text-[--background-dark-blue] mb-4 relative overflow-hidden`}
          // onclick={handleSubmit(onSubmit)}
          onclick={() =>
            !val ? onSubmit(getValues()) : onSubmitPhone(getValues())
          }
          disabled={
            !val
              ? !isValid
              : strength !== 3
              ? true
              : visiblePhone || getValues("phone").length === 0
              ? true
              : false
          }
        >
          <div
            className={` w-full flex justify-center items-center flex-row gap-2 absolute transition-all duration-500 ${
              isLoading ? "translate-y-0" : "-translate-y-[300%]"
            }`}
          >
            <div className="w-[10px] h-[10px] rounded-full bg-black animate-bounce"></div>
            <div className="w-[10px] h-[10px] rounded-full bg-black animate-bounce [animation-delay:-.5s]"></div>
            <div className="w-[10px] h-[10px] rounded-full bg-black animate-bounce [animation-delay:-.5s]"></div>
          </div>
          <div
            className={`flex absolute w-full justify-center items-center transition-all duration-500 `}
          >
            <span
              className={`min-w-[70px] px-3 transition-all duration-500 ${
                !isLoading ? "translate-x-0" : "-translate-x-[1000%]"
              }`}
            >
              {t("Auth.login.button")}
            </span>
            <Login
              className={`w-[28px] transition-all duration-500 ${
                !isLoading ? "translate-x-0" : "translate-x-[1700%]"
              }`}
            />
          </div>
        </CustomButton>

        <div className="flex flex-col justify-center items-center space-y-4 mb-5">
          <div className="flex w-full justify-between gap-4 items-center">
            <hr className="border-[1px] border-[--light-grey] w-full  rounded-full" />
            <p className="text-center text-base text-[--text-body]">
              {t("Auth.login.separator")}
            </p>
            <hr className="border-[1px] border-[--light-grey]  w-full rounded-full" />
          </div>
          <div
            // onClick={() => loginWithRedirect()}
            className="min-w-[180px] h-[42px] py-[20px] px-[37px] dark:bg-[--dark-gray] p-2 flex justify-between items-center gap-5 rounded-[60px] cursor-pointer"
          >
            <span className="font-normal text-base text-[--text-body]">
              {t("Auth.login.continueWith")}{" "}
              <span className="font-bold">Google</span>
            </span>
            <IconGoogle />
          </div>
        </div>

        <div className="w-full text-center text-[--text-body] text-sm sm:text-base font-normal transition-all duration-300 mb-4">
          {t("Auth.login.newUserPrompt")}
          <span
            className=" text-[--yellow] ml-1 cursor-pointer font-bold"
            // onClick={handleVisibleReg}
            onClick={() => setIsvisible(true)}
          >
            {t("Auth.login.createAccount")}
          </span>
        </div>

        <p
          className="font-bold text-[--yellow] text-center text-sm sm:text-base mb-4 cursor-pointer"
          onClick={() => navigate("ForgotPassword")}
        >
          {t("Auth.login.ForgotPassword")}
        </p>
      </form>
    </div>
  );
};

export default SingIn;
