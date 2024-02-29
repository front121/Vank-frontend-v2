import React from 'react'
import CustomButton from '../../../../Shared/CustomButton/CustomButton'

export const FooterBtn = ({history,onClik,onclickBack}) => {
  return (
    <div className='w-[550px] h-[103px] flex flex-col gap-[24px] '>
        
        <div className='w-[550px]  flex justify-between '>
            <CustomButton label={'Back'} onclick={onclickBack}
            className={'bg-[#3E4347] rounded-[33px]  w-[243px] h-[36px]'}/>
            <CustomButton label={'Continue'} onclick={onClik}
            className={'bg-[#FFED00] rounded-[33px]  w-[243px] h-[36px] text-[#14181F] text-[16px] font-bold leading-[20.8px]'}/>
        </div>
        <CustomButton label={<span className='text-[#9D9DA2] font-normal text-[16px] leading-[20.8px]'>{history}</span>}
           className={'flex justify-end'}/>

           
    </div>
  )
}
