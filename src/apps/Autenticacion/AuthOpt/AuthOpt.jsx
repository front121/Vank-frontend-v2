import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import CryptoJS from "crypto-js";
import { toast } from "react-toastify";

const length = 6;

const AuthOpt = () => {
  const { email: encryptedEmail } = useParams();

  const decryptedEmail = CryptoJS.AES.decrypt(
    encryptedEmail,
    "secret_key"
  ).toString(CryptoJS.enc.Utf8);

  const [hiddenEmail, setHiddenEmail] = useState("");
  const [optionAuth, setOptionAuth] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  const [otp, setOtp] = useState(new Array(length).fill(""));

  const inputRefs = useRef([]);

  const [fieldValidity, setFieldValidity] = useState(
    new Array(length).fill(true)
  );

  const nav = [
    { id: 1, name: "Email", option: "Email" },
    { id: 2, name: "Phone number", option: "Phone" },
    { id: 3, name: "Authy", option: "Authy" },
  ];

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d+$/; // Expresión regular para verificar si es un número de teléfono (sólo dígitos)

    if (emailRegex.test(decryptedEmail)) {
      const hidden = decryptedEmail.replace(/(?<=.{5}).(?=[^@]*@)/g, "*");
      setHiddenEmail(hidden);
      setOptionAuth("Email");
    } else if (phoneRegex.test(decryptedEmail)) {
      const hidden = decryptedEmail.replace(/(?<=.{3}).(?=.{4})/g, "*");
      setHiddenEmail(hidden);
      setOptionAuth("Phone");
    }
  }, [decryptedEmail]);

  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return false;
    const newOtp = [...otp];

    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger
    // const combineOtp = newOtp.join("");
    // if (combineOtp.length === length) onOtpSubmit(combineOtp);

    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
    const newFieldValidity = [...fieldValidity];
    newFieldValidity[index] = true;
    setFieldValidity(newFieldValidity);
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
    const newFieldValidity = new Array(length).fill(true);
    setFieldValidity(newFieldValidity);
    // optional
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  };

  const onOtpSubmit = () => {
    // Validar el código OTP (aquí puedes agregar tus propias condiciones)
    const isValid = otp.every((digit) => !isNaN(digit) && digit !== "");
    if (!isValid) {
      const newFieldValidity = otp.map(
        (digit) => !isNaN(digit) && digit !== ""
      );
      setFieldValidity(newFieldValidity);
      return;
    }

    try {
      if (otp.join("") !== securityCode) {
        throw new Error("Codigo invalido");
      }
      toast.success("Codigo correcto!", {
        theme: "dark",
        position: "top-left",
      });
    } catch (error) {
      const newFieldValidity = new Array(length).fill(false);
      setFieldValidity(newFieldValidity);
      toast.error(error.message, {
        theme: "dark",
        position: "top-left",
      });
    }
  };

  const generateSecurityCode = () => {
    // Generar un número aleatorio con 6 dígitos
    const randomCode = Math.floor(100000 + Math.random() * 900000);

    // Convertir a cadena y almacenar en el estado
    setSecurityCode(randomCode.toString());
  };

  

  return (
    <div className="min-h-screen py-10 flex justify-center items-center dark:bg-[#14181F]">
      <div className="container mx-auto ">
        <div className="w-11/12 lg:w-[55%] h-[474px] p-8 rounded-xl mx-auto shadow-lg overflow-hidden bg-[#191E25]">
          <h2 className="text-[#FFFFFF] text-lg leading-[22.1px] font-bold">
            2FA validation
          </h2>
          <div className="mt-10 space-y-7 mb-5">
            <div className="flex gap-2">
              {nav.map((value, index) => (
                <button
                  key={index}
                  className={`text-[#FFFFFF] transition-colors duration-300 ease-in-out text-base font-bold py-2 px-7 rounded-3xl ${
                    optionAuth === value.option
                      ? "bg-[#6A6868] text-white"
                      : "text-[#868585]"
                  }  cursor-pointer`}
                  onClick={() => setOptionAuth(value.option)}
                  disabled={optionAuth && optionAuth !== value.option}
                >
                  {value.name}
                </button>
              ))}
            </div>

            <p className="text-sm leading-4 text-[#D1D1D1] font-bold">
              The code will be send to
              <span className="text-[#F4E522] ml-1">{hiddenEmail}</span>
            </p>
            <p className="text-sm leading-[15.6px] text-[#FFFFFF] font-bold">
              Write the 6 security digits {securityCode}
            </p>

            <div className="flex flex-col w-full">
              <div className="w-full flex justify-between items-center">
                {otp.map((value, i) => {
                  return (
                    <input
                      key={i}
                      type="text"
                      ref={(input) => (inputRefs.current[i] = input)}
                      value={value}
                      name="otp"
                      onChange={(e) => handleChange(i, e)}
                      onClick={() => handleClick(i)}
                      onKeyDown={(e) => handleKeyDown(i, e)}
                      className={`w-[54px] h-[54px] rounded-[10px] bg-[#777777] text-center outline-none text-white text-xl font-bold ${
                        !fieldValidity[i] && "border-2 border-red-600"
                      }  focus:border-2 focus:border-[#E5D714]`}
                      maxLength={1}
                    />
                  );
                })}
              </div>
              <p
                className="text-right mt-6 text-[#E5D714] text-sm font-bold leading-[15.6px] cursor-pointer"
                onClick={generateSecurityCode}
              >
                Send Code
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <button
              className="group relative bg-[#E5D714] w-[445px] h-[42px] rounded-[60px] text-base font-bold leading-[20.8px] text-[#000000]"
              onClick={onOtpSubmit}
            >
              Continue
              <div className="absolute inset-0 h-full w-full scale-0 rounded-[60px] transition-all duration-300 group-hover:scale-100 group-hover:bg-white/25" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthOpt;
