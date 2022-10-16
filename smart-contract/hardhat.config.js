require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config({ path: __dirname + '/.env' })
const{ALCHEMY_API_URL, WALLET_PRIVATE_KEY} = process.env

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: ALCHEMY_API_URL,
      accounts: [WALLET_PRIVATE_KEY]
    }
  } 
};
