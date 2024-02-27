import React, { useEffect, useState } from 'react'
import { SectionNav } from './SectionNav/SectionNav';
import { Deposit } from './Deposit/Deposit';


const Transactions = () => {
  const [value, setValue] = useState(1);

  

  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    
    <div className="home-responsi-1 bg-[#191E25] p-[36px] flex flex-col gap-[32px] lg:w-[622px] xl:h-[668px] md:h-[740px]  text-body sm:h-[86%]   rounded-[32px]">
      <SectionNav className={'flex flex-col gap-[32px] h-[19px]'}/>
      <Deposit/>
    </div>
  );
};


export default Transactions;
