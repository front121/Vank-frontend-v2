import React from "react";
import Visibility from "../../../assets/Visibility.svg";
import CustomImage from "../CustomImage/CustomImage";

const CustomInput = ({
  className,
  inputClassName,
  label,
  value,
  onChange,
  error,
  icon,
  iconCheck,
  showPassword,
  togglePasswordVisibility,
  type,
  ...rest
}) => {
  const getErrorClass = (error, value, iconCheck) => {
    return error
      ? "-translate-y-0 opacity-100 text-red-500"
      : value && iconCheck
      ? "-translate-y-0 opacity-100 text-[#7A7878]"
      : "-translate-y-full opacity-0";
  };

  const getErrorText = (error, value, iconCheck) => {
    return error ? error : value && iconCheck ? "Valid" : "";
  };

  const getErrorBorderClass = (error) => {
    return error
      ? "border-2 border-red-500"
      : "focus:border-2 focus:border-[#FFED00]";
  };

  const renderIcon = (type, value, icon, error, iconCheck) => {
    if (!error && !value || !iconCheck) {
      return null;
    }
    const iconSrc =
      type === "password" && value
        ? Visibility
        : error
        ? icon
        : value && iconCheck && iconCheck;

    return (
      <div
        className="absolute inset-y-0 right-3 pl-3 flex items-center cursor-pointer z-30"
        onClick={() => type === "password" && togglePasswordVisibility()}
      >
        <CustomImage
          src={iconSrc}
          alt="Input Icon"
          className={`h-${error ? 3 : 12.63}px w-${
            error ? 3 : 16
          }px text-gray-400 ml-3 cursor-pointer`}
        />
      </div>
    );
  };

  return (
    <div className={className}>
      <div className="flex justify-between items-center">
        <label className="text-base font-normal text-[#FFFFFF]">{label}</label>
        <span
          className={`text-xs font-medium mr-1 ${getErrorClass(
            error,
            value,
            iconCheck
          )}`}
        >
          {getErrorText(error, value, iconCheck)}
        </span>
      </div>
      <div className="w-full relative z-30">
        <input
          type={showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          className={`w-full outline-none ${inputClassName} ${getErrorBorderClass(
            error
          )}`}
          {...rest}
          autoComplete="off"
        />
        {renderIcon(type, value, icon, error, iconCheck)}
      </div>
    </div>
  );
};

export default CustomInput;
