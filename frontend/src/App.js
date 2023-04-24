import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Home from "./components/Home";
import PatNav from "./components/PatNav";
import Govern from "./components/Govern";

import addContent from "./artifacts/contracts/addContent.sol/addContent.json";
import NFT from "./artifacts/contracts/NFT.sol/NFT.json";
import Base from "./artifacts/contracts/base.sol/Base.json";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Doc from './components/Doc'
import FileUpload from "./components/FileUpload";
import Patient from "./components/Patient";

import { Toaster, toast } from "react-hot-toast";
import { useAccount } from "wagmi";
import WhiteListedList from "./components/WhiteListedList";

function App() {
  const [contract, setContract] = useState(null);
  const [contract1, setContract1] = useState(null);
  const [contract2, setContract2] = useState(null);

  const [provider, setProvider] = useState(null);
  const [hashes, sethashes] = useState([]);
  const [minted, setminted] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [owner, setOwner] = useState();

  const { address } = useAccount({
    onConnect: (address) => {
      toast.success("Wallet Connected!");
      getAllReportsUI(address.address);
      getMinted();
      returnList();
      getOwner();

      console.log("Connected", address);
    },
    onDisconnect: () => {
      toast.success("Logged Out Successfully!");
    },
  });
  const { ethereum } = window;

  useEffect(() => {
    const loadProvider = async () => {
      let contractAddress = "0x371cBBb921Dc83d04EdDC29dfa3279406E89F15e";
      let contract1Address = "0x8f694f58C8497869FfD0662B809B8861B46c0E94";
      let contract2Address = "0xEE36e63E95e0D9ba385B19d8fE3273810E2421c3";

      try {
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(
            contractAddress,
            addContent.abi,
            signer
          );
          const contract1 = new ethers.Contract(
            contract1Address,
            NFT.abi,
            signer
          );
          const contract2 = new ethers.Contract(
            contract2Address,
            Base.abi,
            signer
          );

          setContract(contract);
          setContract1(contract1);
          setContract2(contract2);

          setProvider(provider);
          console.log(contract);
          console.log(contract1);
          console.log(contract2);
        } else {
          console.log("Ethereum object doesn't exist!");
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadProvider();
  }, []);

  const UploadFile = async (_address, _IPFShash) => {
    const signer = contract.connect(provider.getSigner());
    const receipt = await signer.addReports(_address, _IPFShash);
    console.log(receipt);
    const tx = await receipt.wait();

    console.log("Added", tx);
    toast.success("File Uploaded Successfully!");
  };

  const mintNFT = async (inewHash) => {
    const metadataURI = `https://gateway.pinata.cloud/ipfs/${inewHash}`;
    const signer = contract1.connect(provider.getSigner());
    const z = await signer.totalSupply();
    const tokenId = z.toNumber() + 1;
    console.log(tokenId);

    const receipt = await signer.mint(metadataURI, tokenId, inewHash);
    const tx = await receipt.wait();
    toast("Minted NFT Successfully!", {
      icon: "👏",
    });
    console.log(tx);
  };

  const getMinted = async () => {
    const mints = await contract1.getAllMinted();
    setminted(mints);
  };

  const getAllReportsUI = async (addr) => {
    const hash = await contract.getAllReports(addr);
    sethashes(hash);
    console.log(hash);
  };

  const returnList = async () => {
    const hospitals = await contract2.returnList();
    setHospitals(hospitals);
  };

  const TransferOwnership = async (_newAddr) => {
    const newOwner = await contract2.transferOwnership(_newAddr);
    console.log(newOwner);
  };

  const AddToWhitelist = async (_hospitalAddress) => {
    const signer = contract2.connect(provider.getSigner());
    try {
      const newHospital = await signer.addToWhitelist(_hospitalAddress);
    } catch (err) {
      console.log(err);
    }
  };

  const RemoveHospital = async (_address) => {
    const signer = contract2.connect(provider.getSigner());
    try {
      const RemovedHospital = await signer.removeFromWhitelist(_address);
    } catch (err) {
      console.log(err);
    }
  };

  const getOwner = async () => {
    const own = await contract2.getOwner();
    setOwner(own);
    console.log(own);
    console.log(owner);
  };

  return (
    <div className="flex-col ">
      <Toaster position="bottom-right" />

      {address && address == owner ? (
        <div>
          <PatNav></PatNav>
          <Govern
            RemoveHospital={RemoveHospital}
            AddToWhitelist={AddToWhitelist}
            TransferOwnership={TransferOwnership}
            hospitals={hospitals}
          ></Govern>
        </div>
      ) : address && hospitals.indexOf(address) !== -1 ? (
        <div>
          <PatNav></PatNav>
          <FileUpload UploadFile={UploadFile}></FileUpload>
        </div>
      ) : address ? (
        <div>
          <PatNav></PatNav>
          <Patient hashes={hashes} mintNFT={mintNFT} minted={minted}></Patient>
        </div>
      ) : (
        <div>
          <Home></Home>
        </div>
      )}

      <BrowserRouter>
        <Routes>
          <Route path="/HospitalList" element={<WhiteListedList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
