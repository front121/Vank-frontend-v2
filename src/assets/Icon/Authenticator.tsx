import React from "react";

const Authenticator = ({
  className,
  color,
}: {
  className?: string;
  color?: string;
}) => {
  return (
    <svg
      viewBox="0 0 50.8 50.8"
      xmlns="http://www.w3.org/2000/svg"
      xml-space="preserve"
      fill={color ? color : "#1C274C"}
      className={className}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="none"
          stroke={color ? color : "#1C274C"}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="3.175"
          d="M43.526 24.31c0 6.942-4.172 12.009-8.748 15.485-3.906 2.966-7.936 4.638-9.381 5.184-1.442-.54-5.478-2.212-9.387-5.184-4.571-3.475-8.736-8.541-8.736-15.484v-9.902c4.442-.663 7.957-4.16 8.624-8.588h19.004c.668 4.428 4.182 7.925 8.624 8.588z"
        ></path>
        <path
          fill="none"
          stroke={color ? color : "#1C274C"}
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2.117"
          d="M31.246 21.939c0-3.254-2.617-5.892-5.846-5.892s-5.845 2.638-5.845 5.892a5.896 5.896 0 0 0 2.922 5.101l-2.192 7.713h10.23l-2.192-7.713a5.896 5.896 0 0 0 2.923-5.101z"
        ></path>
      </g>
    </svg>
  );
};

export default Authenticator;