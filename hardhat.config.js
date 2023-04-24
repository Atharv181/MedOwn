require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.19",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url:process.env.url,
      accounts: [process.env.key],
    },    
    // goerli: {    
    //   url: 'https://young-quick-shard.ethereum-goerli.discover.quiknode.pro/bb5cd49759fc9f1c7bbe3d76a11e28022dd47013/',
    //   accounts: [''],
    // },
  },
  paths: {
    artifacts: "./frontend/src/artifacts",
  },
};

