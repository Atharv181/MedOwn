import React, { useState } from 'react';
import axios from 'axios';


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
        'pinata_api_key': 'b8c8796c01929bb4ab90',
        'pinata_secret_api_key':'4ded7777b4b21200816e4ea4f5ec57c4763debd27eedc3ade4ff82707dcbc13e',
      }
    });    
    console.log(response.data.IpfsHash);    
    await props.UploadFile(address,response.data.IpfsHash);
  };

  return (
    <>  
    <h1 className='text-center font-semibold text-2xl underline'>Hospital Dashboard</h1>
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={handleUpload} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4 text-center">
      <input type="file" onChange={handleFileChange} />
      </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Patient Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter patient address"
            value={address}
            onChange={(event) => setaddress(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Report Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Enter Report Name"
            // value={rname}
            onChange={(event) => setrname(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Description 
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Enter report description here"
            value={rdesc}
            onChange={(event) => setrdesc(event.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default FileUpload;
