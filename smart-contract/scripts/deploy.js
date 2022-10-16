// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const allenCoinFactory = await hre.ethers.getContractFactory('AllenCoin')
  const allenCoin = await allenCoinFactory.deploy()

  await allenCoin.deployed()

  console.log('Allen Coin deployed to:', allenCoin.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })