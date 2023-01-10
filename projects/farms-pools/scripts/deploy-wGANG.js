// Deploys wGANG Contract
const { ethers, upgrades } = require("hardhat");

async function main() {

    const wGANG = await ethers.getContractFactory("wGANG");
    console.log('Deploying wGANG...');
  
    const contract = await wGANG.deploy();
    console.log("wGANG deployed to:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });