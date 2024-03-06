import React from "react";

const CustomButton = ({ className, children,label, onclick, rest,disabled }) => {
  return (
    <button className={className} onClick={onclick} disabled={disabled} {...rest}>
       {children || label}
    </button>
  );
};

export default CustomButton;
