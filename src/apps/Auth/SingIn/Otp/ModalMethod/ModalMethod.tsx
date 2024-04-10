import CustomBackdrop from "@/apps/Shared/CustomBackdrop/CustomBackdrop";
import Authenticator from "@/assets/Icon/Authenticator";
import Close from "@/assets/Icon/Close";
import Email from "@/assets/Icon/Email";
import { motion } from "framer-motion";
import React from "react";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 2.5,
      type: "spring",
      damping: 50,
      stiffness: 500,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

const ModalMethod = ({ handleClose, activeTabIndex, setActiveTabIndex }) => {
  return (
    <CustomBackdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="w-[450px]  m-auto p-8 rounded-xl flex flex-col items-center dark:bg-[--background-dark-blue] relative"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2 className="text-[--text-body] text-xl mb-5">
          Choose an Authenticator
        </h2>
        <Close
          className="absolute w-[13px] top-5 right-5 cursor-pointer"
          onClick={handleClose}
        />
        <div className="w-full h-full flex flex-col items-center gap-4">
          <div
            className={`w-full flex items-center gap-3 bg-[--background-soft-blue] rounded-xl p-3 cursor-pointer border hover:bg-[--background-dark-blue] hover:border hover:border-[#FFED00] transition-all duration-100 ${
              activeTabIndex === 0 && "hidden"
            }`}
            onClick={() => {
              setActiveTabIndex(0);
              handleClose();
            }}
          >
            <Email className="w-[24px]" color="#FFED00" />
            <span className="text-base text-[--text-body]">
              Email authentication
            </span>
          </div>
          <div
            className={`w-full flex items-center gap-3 bg-[--background-soft-blue] rounded-xl p-3 cursor-pointer border hover:bg-[--background-dark-blue] hover:border hover:border-[#FFED00] transition-all duration-100 ${
              activeTabIndex === 1 && "hidden"
            }`}
            onClick={() => {
              setActiveTabIndex(1);
              handleClose();
            }}
          >
            <Email className="w-[24px]" color="#FFED00" />
            <span className="text-base text-[--text-body]">
              Phone authentication
            </span>
          </div>
          <div
            className={`w-full flex items-center gap-3 bg-[--background-soft-blue] rounded-xl p-3 cursor-pointer border hover:bg-[--background-dark-blue] hover:border hover:border-[#FFED00] transition-all duration-100 ${
              activeTabIndex === 2 && "hidden"
            }`}
            onClick={() => {
              setActiveTabIndex(2);
              handleClose();
            }}
          >
            <Authenticator className="w-[24px]" color="#FFED00" />
            <span className="text-base text-[--text-body]">
              Authenticator App
            </span>
          </div>
        </div>
      </motion.div>
    </CustomBackdrop>
  );
};

export default ModalMethod;
