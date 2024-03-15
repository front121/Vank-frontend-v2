import React from "react";

const Visibility = ({ className }: { className?: string }) => {
  return (
    <svg
      width="16"
      height="13"
      viewBox="0 0 16 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 6.31579C0 7.61005 0.339968 8.04592 1.01991 8.91766C2.37757 10.6582 4.65449 12.6316 8 12.6316C11.3455 12.6316 13.6224 10.6582 14.9801 8.91766C15.66 8.04592 16 7.61005 16 6.31579C16 5.02153 15.66 4.58568 14.9801 3.71395C13.6224 1.97334 11.3455 0 8 0C4.65449 0 2.37757 1.97334 1.01991 3.71395C0.339968 4.58568 0 5.02153 0 6.31579ZM8 3.35526C6.34314 3.35526 5 4.68073 5 6.31579C5 7.95087 6.34314 9.27632 8 9.27632C9.65688 9.27632 11 7.95087 11 6.31579C11 4.68073 9.65688 3.35526 8 3.35526Z"
        fill="#A2A2A2"
      />
    </svg>
  );
};

export default Visibility;
