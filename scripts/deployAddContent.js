const { ethers } = require("hardhat");
const hre = require("hardhat");

const main = async () => {
  
   
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contract with address: ", deployer.address)
  
    const AddContentContractFactory = await hre.ethers.getContractFactory("addContent");
    const AddContentContract = await AddContentContractFactory.deploy({
      value: hre.ethers.utils.parseEther("0.001"),
    });
    
    await AddContentContract.deployed();
  
    console.log("Addcontent Contract address: ", AddContentContract.address);
  };
  
  const runMain = async () => {
    try {
      await main();
      process.exit(0);
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  };
  
  runMain();