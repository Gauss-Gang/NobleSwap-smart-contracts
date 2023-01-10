// Allows one to interact with already deployed contract.
const { ethers, upgrades } = require("hardhat");

async function main() {

    // Following code is to use the contract at the deployed address.
    const deployedAddress = "";
    const NobleSwap = await ethers.getContractFactory("NobleSwap");
    const contract = await NobleSwap.attach(deployedAddress);


    /*------------------------------------------------------------------------------------------------------------------------------------*/
    /*-------------------------------------- NobleSwap Token Specific Function Calls -----------------------------------------------------*/
    /*------------------------------- (Does not contain the GTS20 standard function calls) -----------------------------------------------*/
    /*------------------------------- To use, uncomment the call, or calls, you wish to use ----------------------------------------------*/
    /*------------------------------------------------------------------------------------------------------------------------------------*/

        // Creates Snapshot of current balances.
    //    const snapShotID = await contract.snapshot();
    //    console.log("NobleSwap Snapshot ID:", snapShotID);


        // Allows owner to Pause all Transfers.
    //    await contract.pause();
    //    console.log("NobleSwap Transactions paused...");


        // Allows owner to Unpause all Transfers.
    //    await contract.unpause();
    //    console.log("NobleSwap Transactions unpaused...");


        // Allows owner to transfer ownership to another address.
    //    const newOwnerAddress = "";
    //    await contract.transferOwnership(newOwnerAddress);
    //    console.log("NobleSwap ownership transfered to:", newOwnerAddress);



    /*------------------------------------------------------------------------------------------------------------------------------------*/
    /*-------------------------------------- GTS20 Token Specific Function Calls ---------------------------------------------------------*/
    /*------------------------------ To use, uncomment the call, or calls, you wish to use -----------------------------------------------*/
    /*------------------------------------------------------------------------------------------------------------------------------------*/

        // Returns the name of the GTS20 Token.
    //    const name = await contract.name();
    //    console.log("GTS20 Token Name:", name);


        // Returns the symbol of the GTS20 Token.
    //    const symbol = await contract.symbol();
    //    console.log("GTS20 Token symbol:", symbol);


        // Returns the decimals of the GTS20 Token.
    //    const decimals = await contract.decimals();
    //    console.log("GTS20 Token decimals:", decimals);


        // Returns the totalSupply of the GTS20 Token.
    //    const totalSupply = await contract.totalSupply();
    //    console.log("GTS20 Token totalSupply:", totalSupply);


        // Returns the balance of the address entered below.
    //    const address = "";
    //    const balance = await contract.balanceOf(address);
    //    console.log("Balance of entered address:", balance);


        // Returns the allowance of the owner and spender addresses entered below.
    //    const owner = "";
    //    const spender = "";
    //    const allowance = await contract.allowance(owner,spender);
    //    console.log("Allowance of entered addresses:", allowance);


        // Increases the allowance of the spender address by the amount entered below.
    //    const spender = "";
    //    const amount = "";
    //    await contract.increaseAllowance(spender,amount);
    //    console.log("Increase Allowance to:", amount);


        // Decreases the allowance of the spender address by the amount entered below.
    //    const spender = "";
    //    const amount = "";
    //    const success = await contract.decreaseAllowance(spender,amount);
    //    console.log("Decrease Allowance was:", success);


        // Approves the allowance of the spender address by the amount entered below.
    //    const spender = "";
    //    const amount = "";
    //    const success = await contract.approve(spender,amount);
    //    console.log("Approve Allowance was:", success);


        // Transfers an amount of tokens to the recipient address entered below.
    //    const recipient = "";
    //    const amount = ;
    //    await contract.transfer(recipient,amount);
    //    console.log("Transfer amount:", amount);


        // Transfers an amount of tokens from the sender address to the recipient address entered below.
    //    const sender = "";
    //    const recipient = "";
    //    const amount = "";
    //    await contract.transferFrom(sender,recipient,amount);
    //    console.log("Transferfrom to the amount of:", amount);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });