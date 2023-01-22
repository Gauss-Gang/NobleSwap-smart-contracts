import { expect, assert } from "chai";
import { solidity } from "ethereum-waffle";

const { ethers } = require('hardhat')

describe('MockGTS20', () => {
    let GTS20, accounts, deployer, receiver, thirdParty

    beforeEach(async () => {
        const Token = await ethers.getContractFactory('MockGTS20')
        GTS20 = await Token.deploy('MockGTS20', 'GTS20', '1000')

        accounts = await ethers.getSigners()
        deployer = accounts[0]
        receiver = accounts[1]
        thirdParty = accounts[2]
    })

    describe('Deployment', () => {
        const name = 'MockGTS20'
        const symbol = 'GTS20'
        const decimals = 18
        const totalSupply = 1000

        it('has correct name', async () => {
            expect(await GTS20.name()).to.equal(name)
        })

        it('has correct symbol', async () => {
            expect(await GTS20.symbol()).to.equal(symbol)
        })

        it('has correct decimals', async () => {
            expect(await GTS20.decimals()).to.equal(decimals)
        })

        it('has correct total supply', async () => {
            expect(Number(await GTS20.totalSupply())).to.equal(Number(totalSupply))
        })

        it('assigns total supply to deployer', async () => {
            expect(Number(await GTS20.balanceOf(deployer.address))).to.equal(Number(totalSupply))
        })

    })

    describe('Sending Tokens', () => {
        let amount, transaction, result
    
        describe('Success', () => {
    
          beforeEach(async () => {
            amount = 100
            transaction = await GTS20.connect(deployer).transfer(receiver.address, amount)
            result = await transaction.wait()
          })
    
          it('transfers token balances', async () => {
            expect(await GTS20.balanceOf(deployer.address)).to.equal(900)
            expect(await GTS20.balanceOf(receiver.address)).to.equal(amount)
          })
    
          it('emits a transfer event', async () => {
            const event = result.events[0]
            expect(event.event).to.equal('Transfer')
    
            const args = event.args
            expect(args.from).to.equal(deployer.address)
            expect(args.to).to.equal(receiver.address)
            expect(args.value).to.equal(amount)
          })
    
        })

        describe('Failure', () => {
            it('rejects insufficient balances', async () => {
              const invalidAmount = 100000000
              await expect(GTS20.connect(deployer).transfer(receiver.address, invalidAmount)).to.be.reverted
            })
      
            it('rejects invalid recipent', async () => {
              const amount = 100
              await expect(GTS20.connect(deployer).transfer('0x0000000000000000000000000000000000000000', amount)).to.be.reverted
            })
      
        })

    })

    describe('Approving Tokens', () => {
        let amount, transaction, result
    
        beforeEach(async () => {
          amount = 100
          transaction = await GTS20.connect(deployer).approve(thirdParty.address, amount)
          result = await transaction.wait()
        })
    
        describe('Success', () => {
          it('allocates an allowance for delegated token spending', async () => {
            expect(await GTS20.allowance(deployer.address, thirdParty.address)).to.equal(amount)
          })
    
          it('emits an approval event', async () => {
            const event = result.events[0]
            expect(event.event).to.equal('Approval')
    
            const args = event.args
            expect(args.owner).to.equal(deployer.address)
            expect(args.spender).to.equal(thirdParty.address)
            expect(args.value).to.equal(amount)
          })
    
        })

        describe('Failure', () => {
            it('rejects invalid spenders', async () => {
              await expect(GTS20.connect(deployer).approve('0x0000000000000000000000000000000000000000', amount)).to.be.reverted
            })
        })

    })

    describe('Delegated Token Transfers', () => {
        let amount, transaction, result
    
        beforeEach(async () => {
          amount = 100
          transaction = await GTS20.connect(deployer).approve(thirdParty.address, amount)
          result = await transaction.wait()
        })
    
        describe('Success', () => {
          beforeEach(async () => {
            transaction = await GTS20.connect(thirdParty).transferFrom(deployer.address, receiver.address, amount)
            result = await transaction.wait()
          })
    
          it('transfers token balances', async () => {
            expect(await GTS20.balanceOf(deployer.address)).to.be.equal(900)
            expect(await GTS20.balanceOf(receiver.address)).to.be.equal(amount)
          })
    
          it('rests the allowance', async () => {
            expect(await GTS20.allowance(deployer.address, thirdParty.address)).to.be.equal(0)
          })
    
          it('emits a transfer event', async () => {
            const event = result.events[0]
            expect(event.event).to.equal('Transfer')
    
            const args = event.args
            expect(args.from).to.equal(deployer.address)
            expect(args.to).to.equal(receiver.address)
            expect(args.value).to.equal(amount)
          })
    
        })

        describe('Failure', () => {
            it('cannot transfer invalid token amount', async () => {
                const invalidAmount = 10000000
                await expect(GTS20.connect(thirdParty).transferFrom(deployer.address, receiver.address, invalidAmount)).to.be.reverted
            })
            
        })

    })

})
