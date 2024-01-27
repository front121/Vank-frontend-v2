import React from "react";
import Check from "../../../assets/Check.svg";

const CustomInput = ({
  className,
  inputClassName,
  label,
  value,
  onChange,
  error,
  icon,
  iconCheck,
  ...rest
}) => {
  return (
    <div className={className}>
      <div className="flex justify-between items-center">
        <label className="text-base font-normal text-[#FFFFFF]">{label}</label>
        <span
          className={`text-xs font-medium mr-1 ${
            error
              ? "-translate-y-0 opacity-100 text-red-500"
              : value && iconCheck
              ? "-translate-y-0 opacity-100 text-[#7A7878]"
              : "-translate-y-full opacity-0"
          } transition-transform duration-500`}
        >
          {error ? error : value && iconCheck ? "Valid" : ""}
        </span>
      </div>
      <div className="w-full relative z-30">
        <input
          type="text"
          value={value}
          onChange={onChange}
          className={`w-full outline-none ${inputClassName} ${
            error
              ? "border-2 border-red-500"
              : "focus:border-2 focus:border-[#FFED00]"
          } transition-all duration-100`}
          {...rest}
          autoComplete="off"
        />
        {error ? (
          <div className="absolute inset-y-0 right-3 pl-3 flex items-center pointer-events-none ">
            <img
              src={icon}
              alt="Email Icon"
              className="h-3 w-3 text-gray-400 ml-3"
            />
          </div>
        ) : (
          value &&
          iconCheck && (
            <div className="absolute inset-y-0 right-3 pl-3 flex items-center pointer-events-none ">
              <img
                src={iconCheck}
                alt="Email Icon"
                className="h-[10px] w-[15px] text-gray-400 ml-3"
              />
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CustomInput;
