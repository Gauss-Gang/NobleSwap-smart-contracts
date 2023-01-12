const { expect } = require('chai');
const { ethers } = require('hardhat');
const { BN, constants, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
}


describe('wGANG', () => {
    let wGANG, token, accounts, deployer, receiver, thirdParty // thirdParty == exchange etc

    beforeEach(async () => {
        const wGANGtoken = await ethers.getContractFactory('wGANG')

        wGANG = await wGANGtoken.deploy()
        

        accounts = await ethers.getSigners()
        deployer = accounts[0]
        receiver = accounts[1]
        thirdParty = accounts[2]
    })

    describe('Deployment', () => {
        const name = 'Wrapped GANG'
        const symbol = 'wGANG'
        const decimals = 18
        //const totalSupply = tokens(1000000)
        const nameToken = 'GTS20'
        const symbolToken = 'GTS20'
        const totalSupplyToken = tokens(100000)

        it('has correct name', async () => {
            console.log(await token.totalSupply())
            expect(await wGANG.name()).to.equal(name)
        })

        it('has correct symbol', async () => {
            expect(await wGANG.symbol()).to.equal(symbol)
        })

        it('has correct decimals', async () => {
            expect(await wGANG.decimals()).to.equal(decimals)
        })

        // it('has correct total supply', async () => {
        //     expect(await wGANG.totalSupply()).to.equal(totalSupply)
        // })


    })

    // describe('Sending Tokens', () => {
    //     let amount, transaction, result

    //     describe('Success', () => {

    //         beforeEach(async () => {
    //             amount = tokens(100)
    //             transaction = await wGANG.connect(deployer).transfer(receiver.address, amount)
    //             result = await transaction.wait()
    //         })

    //         it('transfers token balances', async () => {
    //             expect(await wGANG.balanceOf)
    //         })
    //     })
    // })
}) 