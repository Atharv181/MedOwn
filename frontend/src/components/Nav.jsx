// import { ethers } from 'ethers';
import React, { useState } from 'react';
import { useRef } from 'react';
import heart from '../assets/heart1.jpg'



const Nav = (props) => {

  const [walletAddress, setWalletAddress] = useState("");
  const pRef = useRef(null);


  async function requestAccounts(){
    console.log("Working");
    if(window.ethereum){
      console.log("present");
      try{
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts[0]);
        setWalletAddress(accounts[0]);
        props.getAllReportsUI(accounts[0]);
      }catch(err){
        console.error(err);
      }
    }else{
      console.log("Please install metamask");
    }
  }
  async function connectWallet(){
    if(!window.ethereum){
      // console.error("Install metamask");
      alert("Please install metamask");
    }
      if(typeof window.ethereum !== 'undefined'){
        await requestAccounts();
        // const provider = new ethers.providers.Web3Provider(window.ethereum);
        
      }
  }


  //Copy function
  function copyFunction() {
    const pValue = pRef.current.textContent;
    navigator.clipboard.writeText(pValue);
    console.log(pValue); // logs the text content of the <p> element
  }
  

  return (
    <div>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-900">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="" className="flex items-center">
            <img src={heart} className="h-8 mr-3 sm:h-9" alt=" Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">MedOwn</span>
          </a>
          <div className="flex md:order-2">
            {walletAddress ? 
              <div className='flex '> 
                <p className='text-slate-50 w-32  truncate' ref={pRef}>{walletAddress}</p>
                <button type="button" className="chakra-button chakra-emotion-css-138r1dy text-slate-50 hover:bg-slate-700 p-1 rounded " aria-label="Copy Address" onClick={copyFunction}><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></svg></button>
              </div>        
              :
              <div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={connectWallet}>Connect Wallet</button>
                <button data-collapse-toggle="navbar-cta" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false" >
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>  
                </button>   
              </div>
              
              
            }
            
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Hospital</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Patient</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    </div>
  )
}

export default Nav;