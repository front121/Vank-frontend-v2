import React, { useState } from 'react'
import { SectionCardBTC } from './SectionCardBTC/SectionCardBTC'
import imgBitcoin from '../../../../../../assets/images/Bitcoin.jpeg'
import imgEth from '../../../../../../assets/images/eth.jpeg'
import imgUsdt from '../../../../../../assets/images/usdt.jpeg'

export const Crypto = () => {
    const [value,setValue]=useState(0);
    const handleContent=()=>{
        if(open){
            setOpen(false)
        }else{
            setOpen(true)
        }
    }
  return (
    <div className='h-[438px] w-[550px] flex flex-col justify-between'>
        <SectionCardBTC img={imgBitcoin} title={'Bitcoin BTC'} subTitle={'BTC'}
         moreStyleImg={'-rotate-12 '}  moreStyleCard={`${value==1?'h-[435px] hover:h-[438px] fixed':'h-[120px]'}`}
         btnOnClick={()=>setValue(()=>value==0?1:0)} btnLabel={`${value==1?'\u25B2':'\u25BC'}`}
         />
        <SectionCardBTC img={imgUsdt} title={'Tether USDT'} subTitle={'USDT'} 
        moreStyleCard={`${value==2?'h-[435px] hover:h-[438px] fixed':'h-[120px]'}`} 
        btnOnClick={()=>setValue(()=>value==0?2:0)} btnLabel={`${value==2?'\u25B2':'\u25BC'}`}/>
        
        <SectionCardBTC img={imgEth} title={'Ethereum ETH'} subTitle={'ETH'} 
        moreStyleCard={`${value==3?'h-[435px] hover:h-[438px] fixed':'h-[120px]'}`} 
        btnOnClick={()=>setValue(()=>value==0?3:0)} btnLabel={`${value==2?'\u25B2':'\u25BC'}`}/>
    </div>
  )
}