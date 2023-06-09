import React, { useState, useEffect } from "react";

import axios from "axios";
import PatientCardImg_2 from "../assets/PatientCardImg_2.jpeg"

const names = {};
const Patient = (props) => {
  const newHashes = props.hashes;
  const MintedArr = props.minted;

  const [selectedImage, setSelectedImage] = useState(null);

  console.log("Props : ", props);
  console.log("i: ", newHashes[selectedImage]);

  const handleButtonClick = async (event) => {
    const imageId = await event.target.getAttribute("data-id");
    setSelectedImage(imageId);
    props.mintNFT(newHashes[selectedImage]);
  };
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(true);
    }, 3000);
  }, []);

  function DelayedComponent(i) {
    console.log("In delayed Component");
    console.log(names[`title${i}`]);
    return (
      <div >
        <h1 className="mb-3 font-normal text-white text-center font-semibold">{names[`title${i}`]}</h1>
        <h1 className="text-center text-gray-400 mb-4">{names[`desc${i}`]}</h1>
      </div>
    );
  }

  async function fetchMetadata(hash) {
    try {
      const response = await axios.get(
        `https://api.pinata.cloud/data/pinList?hashContains=${hash}`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "Access-Control-Allow-Origin": "*",
            pinata_api_key: process.env.pinata_api_key,
            pinata_secret_api_key: process.env.pinata_secret_api_key,
          },
        }
      );
      const metadata = response.data;

      return metadata;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  function hello(hash, i) {
    fetchMetadata(hash)
      .then((metadata) => {
        console.log(metadata.rows[0].metadata.name);
        names[`title${i}`] = metadata.rows[0].metadata.name;
        names[`desc${i}`] = metadata.rows[0].metadata.keyvalues.description;
        console.log(names[`title${i}`]);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <>
      <h1 className="mt-10 text-4xl font-bold text-center underline hover:text-gray-400 ">
        Patient Dashboard
      </h1>
      {newHashes.length === 0 ? (
        <div className="max-w-md p-4 mx-auto mt-10 shadow-md">
          <h1 className="text-center text-gray-400">
            Your address has no reports generated
          </h1>
          <br />
          <h1 className="text-center text-gray-400">
            Please Visit Hospital to generate report,{" "}
            <span className="font-bold text-black">Thank You!</span>
          </h1>
        </div>
      ) : (
        <div className="flex flex-wrap mt-20 justify-evenly">
          {newHashes.map((e, i) => (
            <div
              key={e}
              className="max-w-sm mb-10 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 "
            >
              {hello(e, i)}
              <img className="rounded-t-lg " src={PatientCardImg_2} alt="" />
              <div className="p-5">
                {showComponent && DelayedComponent(i)}
                {MintedArr.indexOf(e) !== -1 ? (
                  <button
                    className="px-4 py-1 text-center text-white bg-green-500 rounded-md mx-28 hover:bg-green-600 "
                    data-id={i}
                  >
                    {" "}
                    Minted{" "}
                  </button>
                ) : (
                  <button
                    className="px-4 py-1 text-center text-white bg-blue-500 rounded-md mx-28 hover:bg-blue-600"
                    data-id={i}
                    onClick={handleButtonClick}
                  >
                    {" "}
                    Mint NFT{" "}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Patient;
