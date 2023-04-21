import React from "react";
import { useState } from "react";
import TransferOwnership from "./TransferOwnership";
import AddAddressToWhiteList from "./AddAddressToWhiteList";
import WhiteListedList from "./WhiteListedList";
import RemoveHospital from "./RemoveHospital";


const Govern = (props) => {
    const [showModal1 , setShowModal1] = useState(false);
    const [showModal2 , setShowModal2] = useState(false);
    const [showModal3 , setShowModal3] = useState(false);
    const [showModal4 , setShowModal4] = useState(false);
    const open1 = () => {setShowModal1(true);
      setShowModal2(false);
     setShowModal3(false);
    setShowModal4(false);
    }
    const open2 = () => {setShowModal2(true);
      setShowModal1(false);
     setShowModal3(false);
    setShowModal4(false);
    }
    const open3 = () => {setShowModal3(true);
      setShowModal2(false);
      setShowModal1(false);
    setShowModal4(false);
    }
    const open4 = () => {setShowModal4(true);
      setShowModal2(false);
      setShowModal1(false);
     setShowModal3(false);
   }
    console.log(props.hospitals);
  return (
    <div >
      <h1 className="mt-10 text-center text-xl font-bold mb-10 underline">
        Govern Agent{" "}
      </h1>
      <div className="flex">
        <div data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" className="max-w-md mx-auto mt-8 bg-white shadow-md rounded px-8 p-6 text-center mb-4 cursor-pointer w-1/6" onClick={open1}>
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/whitelisting-4127478-3426548.png?f=webp&w=256"
            alt="Add to Whitelist"
            srcset=""
          />
          <hr />
          <h1 className="text-gray-700 font-bold mt-4">Add Address to whiteList</h1>
          <p>Grant access to the Hospitals</p>
        </div>
        <div className="max-w-md mx-auto mt-8 bg-white shadow-md rounded px-8 p-6 text-center mb-4 cursor-pointer w-1/6" onClick={open2}>
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/transfer-31-232017.png?f=webp&w=256"
            alt="Transfer"
            srcset=""
          />
          <hr />
          <h1 className="text-gray-700 font-bold mt-4">Transfer Ownership</h1>
          <p>Transfer ownership to another account</p>
        </div>
        <div className="max-w-md mx-auto mt-8 bg-white shadow-md rounded px-8 p-6 text-center mb-4 cursor-pointer w-1/6" onClick={open3}>
          <img
            src="https://cdn.iconscout.com/icon/premium/png-256-thumb/hospital-4030838-3329045.png?f=webp&w=256"
            alt="Hospitals List"
            srcset=""
          />
          <hr />
          <h1 className="text-gray-700 font-bold mt-4">WhiteListed Hospitals</h1>
          <p>List of all the hospital WhiteListed </p>
        </div>
        <div className="max-w-md mx-auto mt-8 bg-white shadow-md rounded px-8 p-6 text-center mb-4 cursor-pointer w-1/6" onClick={open4} to={"/HospitalList"}>
          <img
            src="https://cdn.iconscout.com/icon/premium/png-512-thumb/denied-6619752-5516357.png?f=avif&w=256"
            alt="Hospitals List"
            srcset=""
          />
          <hr />
          <h1 className="text-gray-700 font-bold mt-4">Remove Hospital</h1>
          <p>Revoke the access of hospital </p>
        </div>
      </div> 

      {showModal2 && <TransferOwnership TransferOwnership={props.TransferOwnership}/> }  
      {showModal1 && <AddAddressToWhiteList AddToWhitelist={props.AddToWhitelist}/>}
      {showModal3 && <WhiteListedList hospitalList={props.hospitals}/>}
      {showModal4 && <RemoveHospital RemoveHospital={props.RemoveHospital}/>}
    </div>
  );
};

export default Govern;
