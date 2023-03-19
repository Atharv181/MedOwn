const hre = require("hardhat");

const main = async () => {
  
   
  
    const AddContentContractFactory = await hre.ethers.getContractFactory("addContent");
    const AddContentContract = await AddContentContractFactory.deploy();
    
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