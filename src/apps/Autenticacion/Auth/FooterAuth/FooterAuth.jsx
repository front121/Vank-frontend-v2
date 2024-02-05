import React from "react";
import Support from "../../../../assets/Icon/Support.svg";

const FooterAuth = () => {
  return (
    <footer className="w-full flex items-center justify-center gap-3 absolute bottom-0 py-5 -z-20">
      {/* footer */}
      <p className=" left-7 bottom-7 text-base font-normal leading-[20.8px] text-[#FFFFFF]">
        Vank © 2024
      </p>
      <div className=" right-7 bottom-7 px-[12px] py-[11px]  bg-[#E5D714] rounded-full flex gap-2 justify-center items-center transition-all duration-500 cursor-pointer group">
        <img src={Support} alt="Support" className="font-bold transition-all" />
        {/* <span className=" font-semibold  group-hover:block transition-all duration-300 translate-x-5">Support</span> */}
      </div>
    </footer>
  );
};

export default FooterAuth;
