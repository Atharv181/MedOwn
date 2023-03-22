import React, { useState } from "react";



const Patient = (props) => {


  const newHashes = props.hashes;

    
  const [selectedImage, setSelectedImage] = useState(null);

 

  console.log("Props : ",props)
  console.log("i: ", newHashes[selectedImage]);

  const handleButtonClick = async (event)=> {
    const imageId = await event.target.getAttribute("data-id");
    setSelectedImage(imageId);


    props.mintNFT(newHashes[selectedImage]);

  }


  
  return (

    <>

      <h1 className='mt-5 text-4xl font-bold text-center '>Patient Dashboard</h1>
      <div className='flex mt-10 justify-evenly flex-wrap'>

      {newHashes.map((e,i) => (

          
          <div key={i} className="max-w-sm mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img className="rounded-t-lg" src={`https://gateway.pinata.cloud/ipfs/${e}`} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
             
              <button className='text-white bg-blue-500 px-4 py-1 rounded-md' data-id = {i} onClick={handleButtonClick}> Mint NFT </button>
              {/* <p>{i}</p> */}
            </div>
          </div>

        ))}

         </div>


    </>

  )
}

export default Patient;