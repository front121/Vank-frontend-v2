import React from 'react'
import {useNavigate } from 'react-router-dom';
export const SectionNav = ({className}) => {

const navigate = useNavigate(); 
  const returnHome=()=>{
    navigate('/')
  }  
  return (
    <nav className={className}>
        <ul className='flex  justify-between text-link'>
            <li><button onClick={returnHome}>Back</button></li>
            <li><button className='text-[#FFED00] font-[700] border-b-[2px] border-[#FFED00]'>Deposit</button></li>
            <li><button>Withdraw</button></li>
            <li><button>Convert</button></li>
            <li><button>VankPay</button></li>
        </ul>
        
      
    </nav>
  )
};
