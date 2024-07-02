require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.22",
  networks: {
    instructoruas: {
    chainId: 1311,
    url: process.env.RPC_URL,
    accounts: [process.env.PRIVATE_KEY],
    
    },
  },
  paths: {
    artifacts: "./src/artifacts",
    contracts: "./src/contracts",
  }
};
