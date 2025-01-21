import {ethers} from "hardhat";

async function main() {
  const abitrage = await ethers.deployContract("Abitrage");
  await abitrage.waitForDeployment();
  console.log("Contract deployed to address:", abitrage.target);
}

main().catch((error) => {
  console.log("error", error);
  process.exit(1);
})