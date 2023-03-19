import { useState, useEffect } from "react";

import { ethers } from "ethers";

import addContent from './artifacts/contracts/addContent.sol/addContent.json';

import Nav from './components/Nav';
import Doc from './components/Doc';

import Patient from './components/Patient';
import FileUpload from './components/FileUpload';



// const arr = ['QmaSue39qG6prZUiGWeaDEMMQ1FepkbTr221Ct7FWzdkkR','QmPaQsFTFSwsBLcdSPxNSSL4SMsQc8NV83kv1TDP9haCwq','QmSshV7nZWHZgZiSo1yX9i995a1eNdnsXjJNLoMAn85CnP'];

function App() {

  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [hashes, sethashes] = useState([]);

  useEffect(() => {
    const loadProvider = async () => {
      let contractAddress = "0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9";
      const url = "http://localhost:8545";
      const provider = new ethers.providers.JsonRpcProvider(url);
      const contract = new ethers.Contract(
        contractAddress,
        addContent.abi,
        provider
      );
      setContract(contract);
      setProvider(provider);
      console.log(contract);
    };
    loadProvider();
  }, []);

 


    const UploadFile = async () => {

      const signer = contract.connect(provider.getSigner());
        signer.addReports('0xDF2bD64eB3b73E5D2666c0ff5A9836E6401d8EB0','QmXj6MVZzTdoov8Pu3pw1HuAHh9dCDzg8JbBRTpWy7CAnP');
        console.log("Added");
        setTimeout(function () {
          window.location.reload(1);
        }, 300);
        setTimeout();
    
      };

      useEffect(() => {
        const getAllReportsUI = async () =>{
          const hashes = await contract.getAllReports('0xDF2bD64eB3b73E5D2666c0ff5A9836E6401d8EB0');
          sethashes(hashes);
        };
    
        console.log(hashes);
  
      
        getAllReportsUI();
      
        },[contract]);
    
     
    

  
    return (
      
    < div className = 'flex-col'>

      
      <Nav></Nav>

      <Doc></Doc>

      <FileUpload UploadFile={UploadFile}></FileUpload>
      
      <Patient myArray = {hashes}></Patient>

    </div>
  );
}

export default App;
