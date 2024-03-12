import React from "react";

const CheckGray = ({ className }: { className?: any }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="9"
      viewBox="0 0 12 9"
      fill="none"
      className={className}
    >
      <path
        d="M1 5.2L3.85714 8L11 1"
        stroke="#3E4347"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CheckGray;
