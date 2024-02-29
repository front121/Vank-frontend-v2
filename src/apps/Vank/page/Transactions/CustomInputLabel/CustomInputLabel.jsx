import React from 'react'
import Visibility from "../../../../..//assets/Icon/Visibility.svg";
// import Visibility from "../../../assets/Icon/Visibility.svg";
import CustomImage from "../../../../Shared/CustomImage/CustomImage";
import VisibleOff from "../../../../../assets/Icon/VisibleOff.svg";
import { useRef } from "react";

export const CustomInputLabel = ({
    className,
    inputClassName,
    label,
    label2,
    label3,
    value,
    hasError,
    onChange,
    error,
    icon,
    iconCheck,
    showPassword,
    togglePasswordVisibility,
    type,
    classNamecontentLabels,
    ...rest
}) => {
  const getErrorBorderClass = (error) => {
    return error
      ? "border-2 border-[#984D4D]"
      : "focus:border-2 focus:border-[#FFED00]";
  };

  const renderIcon = (type, value, icon, error, iconCheck) => {
    if ((!error && !value) || (!iconCheck && type !== "password")) {
      return null;
    }
    const iconSrc =
      type === "password" && value
        ? showPassword
          ? VisibleOff
          : Visibility
        : error
        ? icon
        : value && iconCheck && iconCheck;

    const iconSrcPas = error && value ? icon : value && iconCheck && iconCheck;

    return (
      <div
        className={`absolute inset-y-0 right-3 ${
          type === "password" && value && error && " mr-2"
        }  flex items-center cursor-pointer z-30 w-[18px] h-full group`}
        onClick={() => type === "password" && togglePasswordVisibility()}
      >
        <div className="relative flex justify-center items-center w-full gap-1">
          {error && (
            <div
              className={`min-w-max invisible group-hover:visible opacity-0 group-hover:opacity-100 transition  bg-[#3E4347] border-2 border-[#9E6E6E] text-white p-2 rounded absolute bottom-[39px] ${
                type === "password" ? "mr-[33px]" : "mr-[13px]"
              }`}
            >
              {error}
              <div
                id="arrow"
                className="max-w-max invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute h-3 w-3  left-1/2  transform -translate-x-1/2 top-[35px] rounded before:rounded-sm before:border-b-2 before:border-r-2 before:border-[#9E6E6E] bg-inherit before:visible before:absolute before:h-3 before:w-3 before:rotate-45 before:bg-inherit before:content-['']"
                data-popper-arrow
              />
            </div>
          )}
          {type === "password" && error && (
            <CustomImage
              src={iconSrcPas}
              alt="Input Icon"
              className={` w-full h-[70%] text-gray-400 cursor-pointer object-contain transition-all duration-100  ${
                error && hasError ? "animate-vibrate scale-125" : ""
              } `}
            />
          )}
          <CustomImage
            src={iconSrc}
            alt="Input Icon"
            className={` w-full h-[70%] text-gray-400 cursor-pointer object-contain transition-all duration-100  ${
              error && hasError && type !== "password"
                ? "animate-vibrate scale-125"
                : ""
            } `}
          />
        </div>
      </div>
    );
  };

  return (
    <div className={className}>
      <div className="flex justify-between items-center">
        <div className={classNamecontentLabels}>
            <label className="text-sm sm:text-base font-normal text-[#FFFFFF]">{label}</label>
            <label className="text-sm sm:text-base font-normal text-[#FFFFFF]">{label2}</label>
            <label className="text-sm sm:text-base font-normal text-[#FFFFFF]">{label3}</label>
        </div>
        {/* <span
          className={`text-xs font-medium mr-1 ${getErrorClass(
            error,
            value,
            iconCheck
          )}`}
        >
          {getErrorText(error, value, iconCheck)}
        </span> */}
      </div>
      <div className="w-full z-30 relative">
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
