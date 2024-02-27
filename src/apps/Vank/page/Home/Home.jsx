import React, { useEffect, useState } from "react";
import { SectionNav } from "./SectionNav/SectionNav";
import { SectionAccounts } from "./SectionAccounts/SectionAccounts";
import { SectionCards } from "./SectionCards/SectionCards";
import { SectionCryto } from "./SectionCryto/SectionCryto";
import round from "../../../../assets/Vect.svg";
// 2xl:w-[622px] rounded-[32px]  2xl:h-[658px] 2xl:p-[40px] xl:p-[20px] xl:pt-[20px] overflow-hidden  lg:w-[622px] lg:h-[90%]  sm:w-[70%] sm:h-[100%] text-body   bg-[#191E25] xl:h-[100%]   px-[30px] lg:pb-[1px] lg:pt-[6px]  md:p-[40px]

const Home = () => {
  const [value, setValue] = useState(1);

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    
    <div className="home-responsi-1 bg-[#191E25] p-[36px] lg:w-[622px] xl:h-[668px] md:h-[740px]  text-body sm:h-[86%]  overflow-hidden rounded-[32px]">
     
      <div  className="home-responsi-2 w-[550px] h-[596px] md:h-full xl:h-full media-cueri ">
        <SectionNav 
          value={value}
          onclickResume={() => {
            setValue(1);
          }}
          onclickAccounts={() => {
            setValue(2);
          }}
          onclickCards={() => {
            setValue(3);
          }}
          onClickWallets={() => {
            setValue(4);
          }}
        />
        <div className={`home-responsi-3  w-full flex flex-col relative lg:justify-between  md:justify-between  line   xl:h-[90%] overflow-hidden md:h-[90%]`} >
          {value === 1 || value === 2 ? <SectionAccounts moreStyle={`block  transition-opacity duration-700  ${value!==1?'':''}`}/> : <SectionAccounts moreStyle={'opacity-0'}/>}
          {value === 1 || value === 3 ? <SectionCards moreStyle={`block transition-opacity duration-700  ${value!==1?'absolute top-0 left-0 right-0':''}`}/> : <SectionCards moreStyle={'opacity-0'}/>}
          {value === 1 || value === 4 ? <SectionCryto moreStyle={`block transition-opacity duration-700 ${value!==1?'absolute top-0 left-0 right-0':''}`}/> :  <SectionCryto moreStyle={'opacity-0'}/>}
        </div>
      </div>
    </div>
  );
};

export default Home;
