import React from "react";

const CustomButton = ({ className, children,label, onclick, rest }) => {
  return (
    <button className={className} onClick={onclick} {...rest}>
       {children || label}
    </button>
  );
};

export default CustomButton;
