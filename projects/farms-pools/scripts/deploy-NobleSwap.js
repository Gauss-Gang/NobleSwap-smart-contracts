// Deploys the NobleSwap Token (NOBLE) token while using the OpenZepplin UUPS Upgradable Pattern
const { ethers, upgrades } = require("hardhat");

async function main() {
  
    const NobleSwap = await ethers.getContractFactory("NobleSwap");
    console.log('Deploying NobleSwap...');

    const contract = await upgrades.deployProxy(NobleSwap, { kind: 'uups'}, { unsafeAllow: ['delegatecall']});
    await contract.deployed();    
    console.log("NobleSwap deployed to:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });