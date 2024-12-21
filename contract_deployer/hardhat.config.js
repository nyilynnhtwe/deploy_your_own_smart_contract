require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(); 

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL;
const WALLET_PRIVATE_KEY = process.env.PRIVATE_KEY;
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [WALLET_PRIVATE_KEY]
    }
  }
};
