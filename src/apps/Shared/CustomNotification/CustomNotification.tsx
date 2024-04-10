import Close from "@/assets/Icon/Close";
import React from "react";

const CustomNotification = ({
  title,
  description,
  showModal,
  setShowModal,
}: {
  title?: string;
  description?: string;
  showModal: boolean;
  setShowModal: any;
}) => {
  return (
    <div
      className={`absolute -right-3 top-[65px] transition-all duration-300 z-50 ${
        showModal ? "translate-x-0" : "translate-x-[200%]"
      } `}
    >
      <div className="relative w-[530px] px-3 pr-10 py-3 mx-auto dark:bg-[--background-dark-blue] bg-[--text-body] rounded-[16px] shadow-lg z-50 border-2 border-[--background-soft-blue]">
        <div className="flex justify-between items-center gap-4 text-center sm:ml-4 sm:text-left">
          <div className="">
            <h4 className="text-base font-bold text-[--text-body]">{title}</h4>
            <p className="mt-1 text-sm text-[--text-body] max-w-[356px]">
              {description}
            </p>
          </div>
          <Close
            className="w-[14px] h-[14px] cursor-pointer"
            onClick={() => {
              setShowModal((prevState: any) => ({
                ...prevState,
                show: false,
              }));
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomNotification;
