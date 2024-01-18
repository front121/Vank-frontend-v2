import React from "react";

const Input = ({ type, value, handleChange, label, name, isValid, nameError }) => {
  return (
    <div className="transition-all duration-300 ease-in-out py-3 relative ">
      <input
        type={type}
        value={value}
        onChange={handleChange}
        className={`custom-input w-full border-b  cursor-pointer text-white py-1 bg-[#191E25] outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none  transition-colors peer 
        ${
          isValid
            ? "border-[#989898] focus:outline-none focus:border-[#FFED00] focus:border-b-2"
            : "border-red-500"
        }
        ${
          value
            ? "border-b-2 border-[#FFED00] outline-none"
            : "border-[#989898]"
        }`}
        name={name}
        id={name}
      />
      <label
        htmlFor={name}
        className={`absolute left-0 cursor-pointer peer-focus:text-sm peer-focus:-top-3  transition-all  font-semibold 
        ${
          isValid
            ? "peer-focus:text-[#FFED00] text-[#FFFFFF]"
            : "border-red-500 text-red-500"
        }
        ${value ? "-top-2 text-[#FFED00] text-sm" : "top-4"}`}
      >
        {label}
      </label>
      {!isValid && <span className="text-xs font-medium text-red-500">{nameError}</span>}
    </div>
  );
};

export default Input;
