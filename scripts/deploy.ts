import {ethers} from "hardhat";

async function main() {
  const instanceAbitrage = await ethers.getContractFactory("FlashSwapContract");
  const abitrageContract = await instanceAbitrage.deploy();
  // const abitrageContract = await instanceAbitrage.deploy();
  console.log("Contract deployed to address:", abitrageContract.target);
}

main().then(() => process.exit(0)).catch((error) => {
  console.log("error", error);
  process.exit(1);
})


// async function main() {
//   const swap = await ethers.deployContract('GhostSwap');

//   await swap.waitForDeployment();

//   console.log('NFT Contract Deployed at ' + swap.target);
// }

// // We recommend this pattern to be able to use async/await everywhere
// // and properly handle errors.
// main().catch((error) => {
//   console.error(error);
//   process.exitCode = 1;
// });