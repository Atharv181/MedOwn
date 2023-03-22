

import { useState, useEffect } from "react";

import { ethers } from "ethers";

import addContent from './artifacts/contracts/addContent.sol/addContent.json';
import NFT from './artifacts/contracts/NFT.sol/NFT.json'

import Nav from './components/Nav';
import Doc from './components/Doc';

import Patient from './components/Patient';
import FileUpload from './components/FileUpload';
// import CardThree from './components/CardThree';


// const getEthereumObject = () => window.ethereum;

// const arr = ['QmaSue39qG6prZUiGWeaDEMMQ1FepkbTr221Ct7FWzdkkR','QmPaQsFTFSwsBLcdSPxNSSL4SMsQc8NV83kv1TDP9haCwq','QmSshV7nZWHZgZiSo1yX9i995a1eNdnsXjJNLoMAn85CnP'];

function App() {

  const [contract, setContract] = useState(null);
  const [contract1, setContract1] = useState(null);
  const [provider, setProvider] = useState(null);
  const [hashes, sethashes] = useState([]);

 

  const { ethereum } = window;

  useEffect(() => {
    const loadProvider = async () => {
       let contractAddress = "0xd0ecF06D6Aa3Bd0ECd737F19081e6Bd029A1Fb3b";
       let contract1Address = "0x64D8334AaDd2779027CfC91B77C9e69d2d6C45c7";
      // const url = "https://cool-summer-telescope.matic-testnet.discover.quiknode.pro/474819f211a6f73e3ab58890cf82ed75e496e90f/";
      // const provider = new ethers.providers.JsonRpcProvider(url);
      // const contract = new ethers.Contract(
      //   contractAddress,
      //   addContent.abi,
      //   provider
      // );
      // setContract(contract);
      // setProvider(provider);
      // console.log(contract);
      try {
      
        if (ethereum) {
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
          const contract = new ethers.Contract(contractAddress, addContent.abi, signer);
          const contract1 = new ethers.Contract(contract1Address, NFT.abi, signer);

          setContract(contract);
          setContract1(contract1);
          setProvider(provider);
          console.log(contract);
          console.log(contract1);

        } else {
          console.log("Ethereum object doesn't exist!")
        }
      } catch (error) {
        console.log(error);
      }



    };
    loadProvider();
  }, []);

 


        const UploadFile = async (_address,_IPFShash) => {

     
       const signer = contract.connect(provider.getSigner());
        const receipt = await signer.addReports(_address,_IPFShash);
        const tx = await receipt.wait();

        console.log("Added",tx);


    
        };

        const mintNFT = async (inewHash) => {

          
          
          const metadataURI = `https://gateway.pinata.cloud/ipfs/${inewHash}`;
          
          
          const signer = contract1.connect(provider.getSigner());

          const z = await signer.totalSupply();
         

          const tokenId = (z).toNumber() + 1;
          console.log(tokenId)

          const receipt = await signer.mint(metadataURI, tokenId);
          const tx = await receipt.wait();
          console.log(tx);
        };

      
        const getAllReportsUI = async (addr) =>{
          const hash = await contract.getAllReports(addr);
          sethashes(hash);
        };
    
        console.log(hashes);
        
  
      
        
     
    

  
    return (
      
    < div className = 'flex-col '>

      
      <Nav getAllReportsUI ={getAllReportsUI}></Nav>

      <Doc></Doc>

      <FileUpload UploadFile={UploadFile}></FileUpload>
      
      <Patient hashes = {hashes} mintNFT= {mintNFT}></Patient>

      {/* <CardThree> </CardThree> */}

    </div>
  );
}

export default App;
