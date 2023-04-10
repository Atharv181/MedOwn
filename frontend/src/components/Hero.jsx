import React from 'react'
import hero from '../assets/MedOwnHGif.gif'
import sec2 from '../assets/MedOwnsec2.png'

import sec3 from '../assets/MedOwnsec3.png'

import set from '../assets/MedOwnset.png'

const Hero = () => {
  return (
    <>
        
      <div className='flex m-20 justify-evenly'>
      
      <div className='p-4 m-4 mt-12'>
        <h1 className='text-5xl font-bold text-center hover:text-gray-300'>MedOwn</h1>
        <br />
        <p className='text-xl text-center text-gray-400 hover:text-black'>Unleash the Power of Your <br /> Health Data with <a href="" className='font-bold text-blue-400 hover:text-blue-500'>MedOwn</a> NFTs!</p>
        <br />
        <button className='px-4 py-2 mx-20 text-center text-white bg-blue-600 rounded-md hover:bg-blue-700'>Get Started</button>
        <img src={set} alt="" className='-ml-3 h-36' />
      </div>
      
      <div className='p-2'>
        <img src={hero} alt="" className='h-96' />
      </div>
    </div>
    
    <div className='flex m-28 justify-evenly'>
    
    <div className='p-2'>
      <img src={sec2} alt="" className='h-96' />
    </div>
    
    <div className='p-4 m-4 mt-16'>
      <h1 className='text-5xl font-bold text-center hover:text-gray-300'>Who are we?</h1>
      <br />
      <p className='text-xl text-center text-gray-400 hover:text-black'> <a href="" className='font-bold text-blue-400 hover:text-blue-500 '>MedOwn</a> is a decentralized <br /> platform for transforming your <br /> digital health data to NFTs! </p>
      <br />
      <button className='px-4 py-2 mx-20 text-center text-white bg-blue-600 rounded-md hover:bg-blue-700'>Contact Us</button>
    </div>
    
    
  </div>
  
  <div className='flex m-20 justify-evenly'>
    
    <div className='p-4 m-4 mt-16'>
      <h1 className='text-5xl font-bold text-center hover:text-gray-300'>Our Mission!</h1>
      <br />
      <p className='text-xl text-center text-gray-400 hover:text-black'><a href="" className='font-bold text-blue-400 hover:text-blue-500'>MedOwn</a>'s aim is to bring  Trust <br /> and Transparency to Health Data <br /> Management</p>
      <br />
      <button className='px-4 py-2 mx-20 text-center text-white bg-blue-600 rounded-md hover:bg-blue-700'>Support Us</button>
    </div>
    
    <div className='p-2'>
      <img src={sec3} alt="" className='h-96' />
    </div>
  </div>

    </>
  )
}

export default Hero;