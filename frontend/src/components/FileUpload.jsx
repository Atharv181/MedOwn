import React, { useState } from 'react';
import axios from 'axios';
// import dotenv from 'dotenv';
require("dotenv").config();

const FileUpload = (props) => {

  // const [ihash, setihash] = useState('');
  const [file, setFile] = useState(null);
  const [address, setaddress] = useState('');
  const [rname, setrname] = useState('');
  const [rdesc, setrdesc] = useState('');

  const handleFileChange = async (event) => {
     setFile(event.target.files[0]);
  };

  const handleUpload = async (event) => {
     await event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    const metadata = JSON.stringify({
      name: rname,
      "keyvalues": {
        "address": address,
        "description": rdesc
      }
    });
    formData.append('pinataMetadata', metadata);

    const response =  await axios.post('https://api.pinata.cloud/pinning/pinFileToIPFS', formData, {
      headers: {
      
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        'pinata_api_key': process.env.PINATA_API_KEY,
        'pinata_secret_api_key': process.env.PINATA_SECRETE_KEY,
      }
    });


    
    console.log(response.data.IpfsHash);
    
    await props.UploadFile(address,response.data.IpfsHash);

 
   
  };


  




  

  return (
    <form onSubmit={handleUpload} className='flex justify-center mt-10'>
      <input type="file" onChange={handleFileChange} />

      <label>
        Patient Address:
        <input type="text" value={address} onChange={(event) => setaddress(event.target.value)} />
      </label>

      <label>
        Report Name:
        <input type="text" value={rname} onChange={(event) => setrname(event.target.value)} />
      </label>

      <label>
        Report Description:
        <input type="text" value={rdesc} onChange={(event) => setrdesc(event.target.value)} />
      </label>

      <button type="submit" className='p-2 font-semibold text-white bg-blue-400 rounded-md' >Upload</button>
    </form>
  );
};

export default FileUpload;
