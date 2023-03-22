require("@nomicfoundation/hardhat-toolbox");


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
      url:"https://cool-summer-telescope.matic-testnet.discover.quiknode.pro/474819f211a6f73e3ab58890cf82ed75e496e90f/",
      accounts: ['1f3fdcd67df8d6ccad6c5492148b30d176d50418535484bff6dec182b83cb7c9'],
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

