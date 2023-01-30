import chai, { expect } from 'chai'
import { Contract, constants, BigNumber, Signer } from 'ethers'
import { solidity, MockProvider, createFixtureLoader } from 'ethereum-waffle'

const { ethers } = require('hardhat')

import { getCreate2Address } from './sharedCore/utilities'
import { factoryFixture } from './sharedCore/fixtures'

import NoblePair from '../artifacts/contracts/NoblePair.sol/NoblePair.json'

chai.use(solidity)

const TEST_ADDRESSES: [string, string] = [
  '0x1000000000000000000000000000000000000000',
  '0x2000000000000000000000000000000000000000'
]

describe('NobleFactory', () => {
  const provider = new MockProvider({
    hardfork: 'istanbul',
    mnemonic: 'horn horn horn horn horn horn horn horn horn horn horn horn',
    gasLimit: 9999999
  })
  const [wallet, other] = provider.getWallets()
  const loadFixture = createFixtureLoader(provider, [wallet, other])

  let factory: Contract
  beforeEach(async () => {
    const fixture = await loadFixture(factoryFixture)
    factory = fixture.factory
  })

  it('feeTo, feeToSetter, allPairsLength', async () => {
    expect(await factory.feeTo()).to.eq(constants.AddressZero)
    expect(await factory.feeToSetter()).to.eq(wallet.address)
    expect(Number(await factory.allPairsLength())).to.eq(0)
  })

  async function createPair(tokens: [string, string]) {
    const bytecode = `${NoblePair.bytecode}`
    const accounts = await ethers.getSigners()
    const create2Address = getCreate2Address(factory.address, tokens, bytecode)
    console.log('fail0')
    await expect(factory.createPair(...tokens))
      .to.emit(factory, 'PairCreated')
      .withArgs(TEST_ADDRESSES[0], TEST_ADDRESSES[1], create2Address, BigNumber.from(1))
    console.log('fail1')

    await expect(factory.createPair(...tokens)).to.be.reverted // Noble: PAIR_EXISTS
    console.log('fail2')
    await expect(factory.createPair(...tokens.slice().reverse())).to.be.reverted // Noble: PAIR_EXISTS
    console.log('fail3')
    expect(await factory.getPair(...tokens)).to.eq(create2Address)
    console.log('fail4')
    expect(await factory.getPair(...tokens.slice().reverse())).to.eq(create2Address)
    console.log('fail5')
    expect(await factory.allPairs(0)).to.eq(create2Address)
    console.log('fail6')
    expect(await factory.allPairsLength()).to.eq(1)
    console.log('fail7')

    const pair = new Contract(create2Address, JSON.stringify(NoblePair.abi),      
    Signer.isSigner(accounts[0]) ? accounts[0] : accounts[0].connect(provider))
    console.log('fail8')
    expect(await pair.factory()).to.eq(factory.address)
    console.log('fail9')
    expect(await pair.token0()).to.eq(TEST_ADDRESSES[0])
    console.log('fail10')
    expect(await pair.token1()).to.eq(TEST_ADDRESSES[1])
    console.log('fail11')
  }

  it('createPair', async () => {
    await createPair(TEST_ADDRESSES)
  })

  it('createPair:reverse', async () => {
    await createPair(TEST_ADDRESSES.slice().reverse() as [string, string])
  })

  it('createPair:gas', async () => {
    const tx = await factory.createPair(...TEST_ADDRESSES)
    const receipt = await tx.wait()
    expect(Number(receipt.gasUsed)).to.eq(2780802)
  })

  it('setFeeTo', async () => {
    await expect(factory.connect(other).setFeeTo(other.address)).to.be.revertedWith('revert Noble: FORBIDDEN')
    await factory.setFeeTo(wallet.address)
    expect(await factory.feeTo()).to.eq((wallet.address))
  })

  it('setFeeToSetter', async () => {
    await expect(factory.connect(other).setFeeToSetter(other.address)).to.be.revertedWith('revert Noble: FORBIDDEN')
    await factory.setFeeToSetter(other.address)
    expect(await factory.feeToSetter()).to.eq(other.address)
    await expect(factory.setFeeToSetter(wallet.address)).to.be.revertedWith('revert Noble: FORBIDDEN')
  })

})
