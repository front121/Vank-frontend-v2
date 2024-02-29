import React, { useEffect } from 'react'
import { Recieve } from './Recieve/Recieve'
import { Send } from './Send/Send'

export const VankPay = ({selectView}) => {
  useEffect(()=>{
    console.log(selectView);
  },[])
  return (
   <>
    {selectView==1?<Send/>:<Recieve/>}
   </> 
    
  )
}
