import React from "react";

const CustomButton = ({
  className,
  children,
  label,
  onclick,
  rest,
  disabled,
}: {
  className?: string;
  children?: any;
  label?: any;
  onclick?: () => void;
  rest?: any;
  disabled?: boolean;
}) => {
  return (
    <button
      className={className}
      onClick={onclick}
      {...rest}
      disabled={disabled}
    >
      {children || label}
    </button>
  );
};

export default CustomButton;
