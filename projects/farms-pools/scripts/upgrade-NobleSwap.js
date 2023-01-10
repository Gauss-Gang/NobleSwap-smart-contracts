// Upgrades NobleSwap (NOBLE) Token using UUPS Proxy.
const { ethers, upgrades } = require("hardhat");

async function main() {

  // Following code is to upgrade the contract to a new version.
  // Enter ADDRESS of previous interationt and the contract name of the new version before running scrip.
  const previousIteration = "";
  const newContractName = "NobleV2_Template";


  // NobleSwap must be paused before it can be upgraded.
  const NobleSwap = await ethers.getContractFactory("NobleSwap");
  const nobleV1 = await NobleSwap.attach(previousIteration);
  await nobleV1.pause();
  console.log("NobleSwap Transactions paused...");


  // Grabs the new version and deploys it using the UUPS Proxy.
  const nobleV2 = await ethers.getContractFactory(newContractName);
  console.log('Deploying NobleSwap Upgrade...');
  const upgraded = await upgrades.upgradeProxy(previousIteration, nobleV2);
  console.log("NobleSwap Upgrade deployed to:", upgraded.address);


  // This unpauses transactions after the deployment of the Upgraded Contract.
  await upgraded.unpause();
  console.log("NobleV2 Transactions unpaused...");


  // This is used to test the template upgrade contract.
  await upgraded.initializeUpgrade();
  const templateVariable = await upgraded.getSample();
  console.log("NobleV2 Template Variable:", templateVariable);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
