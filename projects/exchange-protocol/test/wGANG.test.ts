const { expect } = require('chai');
const { ethers } = require('hardhat');
const { BN, constants, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');

const tokens = (n) => {
    return ethers.utils.parseUnits(n.toString(), 'ether')
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

        const tx = deployer.sendTransaction({
            to: wGANG.address,
            value: ethers.utils.parseEther("10.0")
        })
        await tx
        
    })

    describe('Deployment', () => {
        const name = 'Wrapped GANG'
        const symbol = 'wGANG'
        const decimals = 18
        const totalSupply = ethers.utils.parseEther("10.0")

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

        it('deployer has the total supply', async () => {
            expect(Number(await wGANG.balanceOf(deployer.address))).to.equal(Number(totalSupply))
        })

    })

    describe('Sending Tokens', () => {
        let amount, transaction, result

        describe('Success', () => {
            
            beforeEach(async () => {
                amount = ethers.utils.parseEther("5.0")
                transaction = await wGANG.connect(deployer).approve(deployer.address, amount)
                await transaction.wait()
                
                transaction = await wGANG.connect(deployer).transfer(receiver.address, amount)
                result = await transaction.wait()
            })

            it('transfers token balances', async () => {
                expect(Number(await wGANG.balanceOf(deployer.address))).to.equal(Number(amount))
                expect(Number(await wGANG.balanceOf(receiver.address))).to.equal(Number(amount))
            })

            it('emits a transfer event', async () => {
                expect(await result.events[0].args.src).to.equal(deployer.address);
                expect(await result.events[0].args.dst).to.equal(receiver.address);
                expect(await result.events[0].args.wad).to.equal(amount);
            })

        })

        describe('Failure', () => {
            it('rejects insufficient balances', async () => {
              const invalidAmount = ethers.utils.parseEther("100000000.0")
              await expect(wGANG.connect(deployer).transfer(receiver.address, invalidAmount)).to.be.reverted
            })
      
            it('rejects invalid recipent', async () => {
              const amount = ethers.utils.parseEther("100.0")
              await expect(wGANG.connect(deployer).transfer('0x0000000000000000000000000000000000000000', amount)).to.be.reverted
            })
      
          })
    })
}) 