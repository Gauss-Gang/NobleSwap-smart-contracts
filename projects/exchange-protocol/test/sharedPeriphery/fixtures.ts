import { Wallet, Contract, providers, ethers } from 'ethers'
import { deployContract, MockProvider } from 'ethereum-waffle'
import { Web3Provider } from '@ethersproject/providers'

import { expandTo18Decimals } from './utilities'

import NobleFactory from '../../artifacts/contracts/NobleFactory.sol/NobleFactory.json'
import INoblePair from '../../artifacts/contracts/interfaces/INoblePair.sol/INoblePair.json'

import ERC20 from '../../artifacts/contracts/periphery/ERC20.sol/ERC20.json'
import WETH9 from '../../artifacts/contracts/periphery/WETH9.sol/WETH9.json'
import UniswapV1Exchange from '../../buildV1/UniswapV1Exchange.json'
import UniswapV1Factory from '../../buildV1/UniswapV1Factory.json'
import NobleRouter from '../../artifacts/contracts/NobleRouter.sol/NobleRouter.json'
import NobleMigrator from '../../artifacts/contracts/NobleMigrator.sol/NobleMigrator.json'
import NobleRouter01 from '../../artifacts/contracts/NobleRouter01.sol/NobleRouter01.json'
import RouterEventEmitter from '../../artifacts/contracts/testing/RouterEventEmitter.sol/RouterEventEmitter.json'

const { ethers } = require('hardhat')

const overrides = {
  gasLimit: 9999999
}

interface V2Fixture {
  token0: Contract
  token1: Contract
  WETH: Contract
  WETHPartner: Contract
  factoryV1: Contract
  factoryV2: Contract
  router01: Contract
  router02: Contract
  routerEventEmitter: Contract
  router: Contract
  migrator: Contract
  WETHExchangeV1: Contract
  pair: Contract
  WETHPair: Contract
}

const provider = new MockProvider({
  hardfork: 'istanbul',
  mnemonic: 'horn horn horn horn horn horn horn horn horn horn horn horn',
  gasLimit: '99999999'
})

export async function v2Fixture(provider: Web3Provider, [wallet]: Wallet[]) {
  const accounts = await ethers.getSigners()

  // deploy tokens
  console.log('fixturePeripheryFail00')
  const tokenA = await deployContract(wallet, ERC20, [expandTo18Decimals(10000)])
  console.log('fixturePeripheryFail01')
  const tokenB = await deployContract(wallet, ERC20, [expandTo18Decimals(10000)])
  console.log('fixturePeripheryFail02')
  const WETH = await deployContract(wallet, WETH9)
  console.log('fixturePeripheryFail03')
  const WETHPartner = await deployContract(wallet, ERC20, [expandTo18Decimals(10000)])
  console.log('fixturePeripheryFail04')
  // deploy V1
  const factoryV1 = await deployContract(wallet, UniswapV1Factory, [])
  console.log('fixturePeripheryFail05')
  await factoryV1.initializeFactory((await deployContract(wallet, UniswapV1Exchange, [])).address)
  console.log('fixturePeripheryFail06')

  // deploy V2
  const factoryV2 = await deployContract(wallet, NobleFactory, [wallet.address])
  console.log('fixturePeripheryFail07')
  
  // deploy routers
  const router01 = await deployContract(wallet, NobleRouter, [factoryV2.address, WETH.address], overrides)
  console.log('fixturePeripheryFail08')
  const router02 = await deployContract(wallet, NobleRouter01, [factoryV2.address, WETH.address], overrides)
  console.log('fixturePeripheryFail09')

  // event emitter for testing
  const routerEventEmitter = await deployContract(wallet, RouterEventEmitter, [])
  console.log('fixturePeripheryFail10')
  
  // deploy migrator
  const migrator = await deployContract(wallet, NobleMigrator, [factoryV1.address, router01.address], overrides)
  console.log('fixturePeripheryFail11')

  // initialize V1
  
  await factoryV1.createExchange(WETHPartner.address, overrides)
  console.log('fixturePeripheryFail12')
  const WETHExchangeV1Address = await factoryV1.getExchange(WETHPartner.address)
  console.log('fixturePeripheryFail13')
  const WETHExchangeV1 = new Contract(WETHExchangeV1Address, JSON.stringify(UniswapV1Exchange.abi), accounts[0]).connect(accounts[0])
  console.log('fixturePeripheryFail14')

  // initialize V2
  await factoryV2.createPair(tokenA.address, tokenB.address)
  console.log('fixturePeripheryFail15')
  const pairAddress = await factoryV2.getPair(tokenA.address, tokenB.address)
  console.log('fixturePeripheryFail16')
  const pair = new Contract(pairAddress, JSON.stringify(INoblePair.abi), accounts[0]).connect(accounts[0])
  console.log('fixturePeripheryFail17')
  console.log('await pair.token0(): ', await pair.token0())
  //console.log('pair: ', pair)

  const token0Address = await pair.token0()
  console.log('fixturePeripheryFail18')
  const token0 = tokenA.address === token0Address ? tokenA : tokenB
  console.log('fixturePeripheryFail19')
  const token1 = tokenA.address === token0Address ? tokenB : tokenA
  console.log('fixturePeripheryFail20')
  
  await factoryV2.createPair(WETH.address, WETHPartner.address)
  console.log('fixturePeripheryFail21')
  const WETHPairAddress = await factoryV2.getPair(WETH.address, WETHPartner.address)
  console.log('fixturePeripheryFail21')
  const WETHPair = new Contract(WETHPairAddress, JSON.stringify(INoblePair.abi), accounts[0]).connect(accounts[0])
  console.log('fixturePeripheryFail22')

  return {
    token0,
    token1,
    WETH,
    WETHPartner,
    factoryV1,
    factoryV2,
    router01,
    router02,
    router: router02, // the default router, 01 had a minor bug
    routerEventEmitter,
    migrator,
    WETHExchangeV1,
    pair,
    WETHPair
  }
}
