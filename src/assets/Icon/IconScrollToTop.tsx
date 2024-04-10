import React from "react";

const IconScrollToTop = ({ className }: { className?: string }) => {
  return (
    <svg
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.5 6.25L6 1.75L1.5 6.25"
        stroke="#FFED00"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default IconScrollToTop;