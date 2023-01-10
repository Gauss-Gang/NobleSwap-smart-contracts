// Allows one to interact with already deployed contract
const { ethers, upgrades } = require("hardhat");

async function main() {

    // Following code is to use the contract at the deployed address
    const deployedAddress = "";
    const ScheduledTokenLock = await ethers.getContractFactory("ScheduledTokenLock");
    const contract = await ScheduledTokenLock.attach(deployedAddress);


    // List the address for this ScheduledTokenLock contract.
//    const contractAddress = await contract.contractAddress();
//    console.log("ScheduledTokenLock; Token Lock contract address:", contractAddress);


    // List the token being held in this ScheduledTokenLock contract.
//    const tokenBeingHeld = await contract.token();
//    console.log("ScheduledTokenLock; token being held:", tokenBeingHeld);


    // List each beneficiary wallet addresses for this ScheduledTokenLock contract.
//    const senderAddress = await contract.sender();
//    console.log("ScheduledTokenLock; address that sent amount to ScheduledTokenLock:", senderAddress);


    // List each beneficiary wallet addresses for this ScheduledTokenLock contract.
//    const beneficiaryAddress = await contract.beneficiary();
//    console.log("ScheduledTokenLock; beneficiary wallet address:", beneficiaryAddress);


    // List each being held in this ScheduledTokenLock contract.
//    const lockedAmount = await contract.lockedAmount();
//    console.log("ScheduledTokenLock; amount locked in contract:", lockedAmount);


    // List the release time for this ScheduledTokenLock contract.
//    const releaseTime = await contract.releaseTime();
//    console.log("ScheduledTokenLock; release time:", releaseTime);


    // Attempts to release tokens held in ScheduledTokenLock contract.
//    console.log("ScheduledTokenLock; releasing avalaible tokens...:");
//    await contract.release();
//    console.log("ScheduledTokenLock; new locked amount in contract:", await contract.lockedAmount());
}    

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });