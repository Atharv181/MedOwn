import React from 'react'

import logo from '../assets/logo1.png'

import { ConnectButton } from '@rainbow-me/rainbowkit';

const PatNav = () => {
  return (
    <>
    <div className='flex justify-between'>
    
        <div className='mt-2 ml-16'><a href=""><img src={logo} className="p-2 ml-8 h-28" alt="" /></a>
        </div>
        
        <div className='p-10 mr-16 -mt-2'>
            <ConnectButton/>
        </div>
      </div>

    </>
  )
}

export default PatNav