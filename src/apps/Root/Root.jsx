import React from "react";
import { Header } from "../Shared/layout/Header/Header";
import { ListLinkSidebar } from "../Shared/layout/Sildebar/ListLinkSidebar";
import { Outlet } from "react-router-dom";
import { Rounded } from "../../assets/Rounded";
export const Root = () => {
  return (
    <div className="relative h-screen flex justify-center overflow-hidden bg-[#191E25]">
      
      <Header moreStyle={"fixed top-0 w-[100vw] bg-transparen  "} />
     
      <div className="fixed group bg-[#191E25] w-[120px] hover:w-[258px] transition-width duration-700 ease-in-out float-left   left-0 top-20 peer  h-screen  z-50  ">
      <Rounded 
        fill={'#191E25'}
        className="absolute 2xl:-top-[5px]  2xl:-right-[55px] group md:-top-[5px] md:-right-[55px] bg-transparent rounded-br-[900px] "
      />
        <ListLinkSidebar className={"group- h-full mt-3  overflow-hidden w-[120px] group-hover:w-[258px] lg:mt-0 relative z-50   "} />
      </div>

      {/* <div className="absolute z-10 h-full peer-hover:dark:bg-[#13171d8a] bg-transparent w-full left-[100px] hidden peer-hover:block"></div> */}
      <div className="dark:bg-[#13171d] absolute top-0 left-[120px] shadow-box-header   -z-7 right-0 bottom-0 flex items-center  rounded-tl-[32px] justify-center mt-[100px] lg:mt-[100px] xl:py-[96px] ">
          
          <Outlet/>
      </div>
    </div>
  );
};
