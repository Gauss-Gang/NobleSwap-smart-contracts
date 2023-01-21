import { expect, assert } from "chai";
import { solidity } from "ethereum-waffle";

const { ethers } = require('hardhat')

const tokens = (n) => {
    return ethers.utils.parseEther(n.toString())
}


describe('wGANG', () => {
    let wGANG, accounts, deployer, receiver, thirdParty // thirdParty == exchange etc

    beforeEach(async () => {
        const wGANGtoken = await ethers.getContractFactory('wGANG')
        wGANG = await wGANGtoken.deploy()
        
        accounts = await ethers.getSigners()
        deployer = accounts[0]
        receiver = accounts[1]
        thirdParty = accounts[2]
        
        // Deployer sends 10 GANG and receives 10 wGANG
        const tx = deployer.sendTransaction({
            to: wGANG.address,
            value: tokens(100)
        })
        await tx
        
    })

    describe('Deployment', () => {
        const name = 'Wrapped GANG'
        const symbol = 'wGANG'
        const decimals = 18
        const totalSupply = tokens(100)

        it('has correct name', async () => {
            expect(await wGANG.name()).to.equal(name)
        })

        it('has correct symbol', async () => {
            expect(await wGANG.symbol()).to.equal(symbol)
        })

        it('has correct decimals', async () => {
            expect(await wGANG.decimals()).to.equal(decimals)
        })

        it('has correct total supply', async () => {
            expect(Number(await wGANG.totalSupply())).to.equal(Number(totalSupply))
        })

        it('deployer has the right amount of tokens', async () => {
            expect(Number(await wGANG.balanceOf(deployer.address))).to.equal(Number(totalSupply))
        })

    })

    describe('Sending Tokens', () => {
        let amount, transaction, result

        describe('Success', () => {
            
            beforeEach(async () => {
                amount = tokens(5)
                transaction = await wGANG.connect(deployer).approve(deployer.address, amount)
                await transaction.wait()
                
                transaction = await wGANG.connect(deployer).transfer(receiver.address, amount)
                result = await transaction.wait()
            })

            it('transfers token balances', async () => {
                expect(Number(await wGANG.balanceOf(deployer.address))).to.equal(Number(tokens(95)))
                expect(Number(await wGANG.balanceOf(receiver.address))).to.equal(Number(amount))
            })

            it('emits a transfer event', async () => {
                const event = result.events[0]
                expect(event.event).to.equal('Transfer')
                
            })

            it('has right transfer params', async () => {
                const event = result.events[0]
                const args = event.args
                expect(args.src).to.equal(deployer.address)
                expect(args.dst).to.equal(receiver.address)
                expect(args.wad).to.equal(amount)
            })

        })

        describe('Failure', () => {
            it('rejects insufficient balances', async () => {
              const invalidAmount = tokens(100000000)
              await expect(wGANG.connect(deployer).transfer(receiver.address, invalidAmount)).to.be.reverted
            })
      
            it('rejects transfer without proper allowance', async () => {
              const amount = tokens(10)
              await expect(wGANG.connect(deployer).transferFrom(thirdParty.address, '0x0000000000000000000000000000000000000000', amount)).to.be.reverted
            })
      
        })
    })

    describe('Approving Tokens', () => {
        let amount, transaction, result

        beforeEach(async () => {
           amount = tokens(5)
           transaction = await wGANG.connect(deployer).approve(thirdParty.address, amount)
           result = await transaction.wait()
        })

        describe('Success', () => {
            it('allocates an allowance for delegated token spending', async () => {
                expect(await wGANG.allowance(deployer.address, thirdParty.address)).to.equal(amount)
            })

            it('emits an approval event', async () => {
                const event = result.events[0]
                expect(event.event).to.equal('Approval')
            })

            it('has right approval params', async () => {
                const event = result.events[0]
                const args = event.args
                expect(args.src).to.equal(deployer.address)
                expect(args.guy).to.equal(thirdParty.address)
                expect(args.wad).to.equal(amount)
            })

        })

        
        describe('Failure', () => {
            it('rejects transfer without proper allowance', async () => {
              await expect(wGANG.connect(deployer).transferFrom(thirdParty.address, '0x0000000000000000000000000000000000000000', amount)).to.be.reverted
            })

        })

    })

    describe('Delegated Token Transfers', () => {
        let amount, transaction, result, result1

        beforeEach(async () => {
            amount = tokens(10)
            transaction = await wGANG.connect(deployer).approve(thirdParty.address, amount)
            result = await transaction.wait()
        })

        describe('Success', () => {
            beforeEach(async () => {
                transaction = await wGANG.connect(thirdParty).transferFrom(deployer.address, receiver.address, amount)
                result1 = await transaction.wait()
            })

            it('transfers token balances', async () => {
                expect(await wGANG.balanceOf(deployer.address)).to.be.equal(tokens(90))
                expect(await wGANG.balanceOf(receiver.address)).to.be.equal(amount)
            })

            it('resets the allowance', async () => {
                expect(await wGANG.allowance(deployer.address, thirdParty.address)).to.be.equal(0)
            })

            it('emits a approval event', async () => {
                const event = result.events[0]
                expect(event.event).to.equal('Approval')
            })

            it('has right approval params', async () => {
                const event = result.events[0]
                const args = event.args
                expect(args.src).to.equal(deployer.address)
                expect(args.guy).to.equal(thirdParty.address)
                expect(args.wad).to.equal(tokens(10))
            })

            it('emits a transfer event', async () => {
                const event = result1.events[1]
                expect(event.event).to.equal('Transfer')
            })
            
            it('has right transfer params', async () => {
                const event = result1.events[1]
                const args = event.args
                expect(args.src).to.equal(deployer.address)
                expect(args.dst).to.equal(receiver.address)
                expect(args.wad).to.equal(amount)
            })

        })

        describe('Failure', () => {
            it('cannot transfer invalid token amount', async () => {
                const invalidAmount = tokens(10000000)
                await expect(wGANG.connect(thirdParty).transferFrom(deployer.address, receiver.address, invalidAmount)).to.be.reverted
            })
            
        })

    })

})
