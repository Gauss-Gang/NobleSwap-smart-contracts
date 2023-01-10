// Deploys a ScheduledTokenLock Contract
const { ethers, upgrades } = require("hardhat");

async function main() {

    const ScheduledTokenLock = await ethers.getContractFactory("ScheduledTokenLock");
    console.log('Deploying ScheduledTokenLock...');

    // Set the parameters needed to launch the ScheduledTokenLock contract
    const tokenAddress = "";
    const senderAddress = "";
    const beneficiaryAddress = "";
    const amountToLock = "";
    const amountsList = [];
    const lockTimes = [];
  
    const contract = await ScheduledTokenLock.deploy(tokenAddress, senderAddress, beneficiaryAddress, amountToLock, amountsList, lockTimes);
    console.log("ScheduledTokenLock deployed to:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });