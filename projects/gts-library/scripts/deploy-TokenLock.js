// Deploys a TokenLock Contract
const { ethers, upgrades } = require("hardhat");

async function main() {

    const TokenLock = await ethers.getContractFactory("TokenLock");
    console.log('Deploying TokenLock...');

    // Set the parameters needed to launch the TokenLock contract
    const tokenAddress = "";
    const senderAddress = "";
    const beneficiaryAddress = "";
    const amountToLock = "";
    const releaseTime = "";
  
    const contract = await TokenLock.deploy(tokenAddress, senderAddress, beneficiaryAddress, amountToLock, releaseTime);
    console.log("TokenLock deployed to:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });