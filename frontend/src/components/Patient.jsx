import React, { useState } from "react";



const Patient = (props) => {


  const newHashes = props.hashes;
  const MintedArr = props.minted;


  const [selectedImage, setSelectedImage] = useState(null);



  console.log("Props : ", props)
  console.log("i: ", newHashes[selectedImage]);

  const handleButtonClick = async (event) => {
    const imageId = await event.target.getAttribute("data-id");
    setSelectedImage(imageId);


    props.mintNFT(newHashes[selectedImage]);

  }

  const handleListing = async () => {
    
  }



  return (

    <>

      <h1 className='mt-10 text-4xl font-bold text-center underline hover:text-gray-400 '>Patient Dashboard</h1>
      <div className='flex flex-wrap mt-20 justify-evenly'>

        {newHashes.map((e, i) => (




          <div key={e} className="max-w-sm mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">

            {/* {fruit} {favoriteFruits.indexOf(fruit) !== -1 && '(favorite)'} */}



            <a href="#">
              <img className="h-40 rounded-t-lg" src={`https://gateway.pinata.cloud/ipfs/${e}`} alt="" />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Report Name</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Here are the biggest enterprise technology acquisitions of 2023 so far, in reverse chronological order.</p>



              {


                (MintedArr.indexOf(e) !== -1) ? <button className='px-4 mx-28 py-1 text-white text-center bg-green-500 rounded-md hover:bg-green-600 ' data-id={i} onClick={handleListing}> Minted </button>
                  :
                  <button className='px-4 py-1 text-white text-center bg-blue-500 rounded-md mx-28 hover:bg-blue-600' data-id={i} onClick={handleButtonClick}> Mint NFT </button>
              }

              {/* <p>{i}</p> */}
            </div>
          </div>

        ))}

      </div>


    </>

  )
}

export default Patient;