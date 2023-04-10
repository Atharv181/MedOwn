
import logo from '../assets/logo1.png'

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { toast } from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';


const Nav = () => {


  return (
   

    <>
      <div className='flex justify-between'>
        <div className='mt-2 ml-16'><a href=""><img src={logo} className="p-2 ml-8 h-28" alt="" /></a>
        </div>
        
        <div className='p-10 mr-16 -mt-2'>
          <ul className='flex justify-evenly gap-x-10'>
          
            <li className='mt-2'><a href="" className='text-lg font-semibold hover:text-gray-500 hover:underline'>Home</a></li>
            <li className='mt-2'><a href="" className='text-lg font-semibold hover:text-gray-500 hover:underline'>About</a></li>
            <li className='mt-2'><a href="" className='text-lg font-semibold hover:text-gray-500 hover:underline'>Mission</a></li>
            <li className='mt-2'><a href="" className='text-lg font-semibold hover:text-gray-500 hover:underline'>Contact</a></li>
           
            <ConnectButton />
            <Toaster />

          </ul>
        </div>
      </div>
    
    </>
  )


  
}

export default Nav;