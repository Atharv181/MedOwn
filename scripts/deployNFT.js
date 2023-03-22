const { ethers } = require("hardhat");
const hre = require("hardhat");

const main = async () => {
  
   
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contract with address: ", deployer.address)
  
    const NFTContractFactory = await hre.ethers.getContractFactory("NFT");
    const NFTContract = await NFTContractFactory.deploy();
    
    await NFTContract.deployed();
  
    console.log("NFT Contract address: ", NFTContract.address);
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