const { ethers } = require("hardhat");
const hre = require("hardhat");

const main = async () => {
  
   
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contract with address: ", deployer.address)
  
    const BaseContractFactory = await hre.ethers.getContractFactory("Base");
    const BaseContract = await BaseContractFactory.deploy();
    
    await BaseContract.deployed();
  
    console.log("Base Contract address: ", BaseContract.address);
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