// Allows one to interact with already deployed contract
const { ethers, upgrades } = require("hardhat");

async function main() {

    // Following code is to use the contract at the deployed address
    const deployedAddress = "";
    const TokenLock = await ethers.getContractFactory("TokenLock");
    const contract = await TokenLock.attach(deployedAddress);


    // List the address for this Token Lock contract.
//    const contractAddress = await contract.contractAddress();
//    console.log("TokenLock; Token Lock contract address:", contractAddress);


    // List the token being held in this TokenLock contract.
//    const tokenBeingHeld = await contract.token();
//    console.log("TokenLock; token being held:", tokenBeingHeld);


    // List each beneficiary wallet addresses for this Token Lock contract.
//    const senderAddress = await contract.sender();
//    console.log("TokenLock; address that sent amount to TokenLock:", senderAddress);


    // List each beneficiary wallet addresses for this Token Lock contract.
//    const beneficiaryAddress = await contract.beneficiary();
//    console.log("TokenLock; beneficiary wallet address:", beneficiaryAddress);


    // List each being held in this Token Lock contract.
//    const lockedAmount = await contract.lockedAmount();
//    console.log("TokenLock; amount locked in contract:", lockedAmount);


    // List the release time for this Token Lock contract.
//    const releaseTime = await contract.releaseTime();
//    console.log("TokenLock; release time:", releaseTime);


    // Attempts to release tokens held in TokenLock contract.
//    const release = await contract.release();
//    console.log("TokenLock; releasing was...:", release);
}    

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });