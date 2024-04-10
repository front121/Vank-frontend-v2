import { motion } from "framer-motion";
import React from "react";

const CustomBackdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="absolute w-full h-full top-0 left-0 bg-[#000000e1] flex justify-center items-center inset-0 z-50"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default CustomBackdrop;
