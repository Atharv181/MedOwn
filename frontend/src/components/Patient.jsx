import React, { useState , useEffect} from "react";

import axios from "axios";


const names ={};
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
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true);
    }, 3000);
  }, []);

  function DelayedComponent(i) {
    console.log("In delayed Component")
    console.log(names[`title${i}`])
  return (
    <h1>{names[`title${i}`]}</h1>
  );
}

  async function fetchMetadata(hash){
    try {
      const response = await axios.get(`https://api.pinata.cloud/data/pinList?hashContains=${hash}`, {
        headers: {
         
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        'pinata_api_key': 'b8c8796c01929bb4ab90',
        'pinata_secret_api_key':'4ded7777b4b21200816e4ea4f5ec57c4763debd27eedc3ade4ff82707dcbc13e',
        }
      });
      const metadata = response.data;
      
      return metadata;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

 

  function hello(hash,i){
    fetchMetadata(hash).then((metadata) => {
      console.log(metadata.rows[0].metadata.name);
      names[`title${i}`] = metadata.rows[0].metadata.name;
      
      console.log(names[`title${i}`]);
      console.log("Completed");
      
    }
    ).catch((error) => {
      console.error(error);
    });
  }



  return (
    <>

      <h1 className='mt-10 text-4xl font-bold text-center underline hover:text-gray-400 '>Patient Dashboard</h1>
      {
        newHashes.length === 0 ? 
        <div className="max-w-md p-4 mx-auto mt-10 shadow-md">
        <h1 className="text-center text-gray-400">Your address has no reports generated</h1>
        <br />
        <h1 className="text-center text-gray-400">Please Visit Hospital to generate report, <span className="font-bold text-black">Thank You!</span></h1>
        </div> 
        : 
        <div className='flex flex-wrap mt-20 justify-evenly'>

{newHashes.map((e, i) => (

<div key={e} className="max-w-sm mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
    {hello(e,i)}
    <a href="#">
      <img className="h-40 rounded-t-lg" src={`https://gateway.pinata.cloud/ipfs/${e}`} alt="" />
    </a>
    <div className="p-5">
    {showComponent && DelayedComponent(i)}
      <p className="mb-3 font-normal text-center text-gray-700 dark:text-gray-400">Description</p>
    {
        (MintedArr.indexOf(e) !== -1) ? <button className='px-4 py-1 text-center text-white bg-green-500 rounded-md mx-28 hover:bg-green-600 ' data-id={i} > Minted </button>
          :
          <button className='px-4 py-1 text-center text-white bg-blue-500 rounded-md mx-28 hover:bg-blue-600' data-id={i} onClick={handleButtonClick}> Mint NFT </button>
      }

      
    </div>
  </div>

))}

</div>
      }

      


    </>

  )
}

export default Patient;