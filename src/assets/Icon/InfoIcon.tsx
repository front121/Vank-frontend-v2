import React from "react";

const InfoIcon = ({ className, id }: { className?: string; id?: string }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      id={id}
    >
      <path
        opacity="0.8"
        d="M9.58341 19.1666C11.4788 19.1666 13.3317 18.6046 14.9076 17.5515C16.4836 16.4985 17.7119 15.0018 18.4373 13.2507C19.1626 11.4996 19.3524 9.57266 18.9826 7.71368C18.6128 5.85469 17.7001 4.14711 16.3599 2.80685C15.0196 1.4666 13.312 0.553874 11.453 0.184099C9.59404 -0.185677 7.66715 0.00410552 5.91603 0.729445C4.1649 1.45478 2.66819 2.68311 1.61516 4.25908C0.562133 5.83505 7.92048e-05 7.68789 7.90391e-05 9.58329C7.89291e-05 10.8418 0.247958 12.088 0.729565 13.2507C1.21117 14.4134 1.91708 15.4698 2.80697 16.3597C3.69687 17.2496 4.75332 17.9555 5.91603 18.4371C7.07873 18.9187 8.32491 19.1666 9.58341 19.1666ZM9.58341 3.83329C9.77295 3.83329 9.95824 3.8895 10.1158 3.9948C10.2734 4.1001 10.3963 4.24978 10.4688 4.42489C10.5413 4.6 10.5603 4.79269 10.5233 4.97859C10.4864 5.16449 10.3951 5.33524 10.2611 5.46927C10.127 5.6033 9.95627 5.69457 9.77037 5.73154C9.58447 5.76852 9.39179 5.74954 9.21667 5.67701C9.04156 5.60448 8.89189 5.48164 8.78659 5.32405C8.68128 5.16645 8.62508 4.98117 8.62508 4.79163C8.62508 4.53746 8.72605 4.2937 8.90577 4.11398C9.08549 3.93426 9.32925 3.83329 9.58341 3.83329ZM8.62508 8.62496C8.62508 8.37079 8.72604 8.12704 8.90577 7.94732C9.08549 7.76759 9.32925 7.66663 9.58341 7.66663C9.83758 7.66663 10.0813 7.76759 10.2611 7.94732C10.4408 8.12704 10.5417 8.37079 10.5417 8.62496L10.5417 14.375C10.5417 14.6291 10.4408 14.8729 10.2611 15.0526C10.0813 15.2323 9.83758 15.3333 9.58341 15.3333C9.32924 15.3333 9.08549 15.2323 8.90577 15.0526C8.72604 14.8729 8.62508 14.6291 8.62508 14.375L8.62508 8.62496Z"
        fill="#D6CA5C"
      />
    </svg>
  );
};

export default InfoIcon;
