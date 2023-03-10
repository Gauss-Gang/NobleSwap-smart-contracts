import { Wallet, Contract, providers } from 'ethers'
import { deployContract, MockProvider } from 'ethereum-waffle'

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

export async function v2Fixture(provider: providers.Web3Provider, [wallet]: Wallet[]) {

  // deploy tokens
  const tokenA = await deployContract(wallet, ERC20, [expandTo18Decimals(10000)])
  const tokenB = await deployContract(wallet, ERC20, [expandTo18Decimals(10000)])
  const WETH = await deployContract(wallet, WETH9)
  const WETHPartner = await deployContract(wallet, ERC20, [expandTo18Decimals(10000)])

  // deploy V1
  const factoryV1 = await deployContract(wallet, UniswapV1Factory, [])
  await factoryV1.initializeFactory((await deployContract(wallet, UniswapV1Exchange, [])).address)

  // deploy V2
  const factoryV2 = await deployContract(wallet, NobleFactory, [wallet.address])

  // deploy routers
  const router01 = await deployContract(wallet, NobleRouter, [factoryV2.address, WETH.address], overrides)
  const router02 = await deployContract(wallet, NobleRouter01, [factoryV2.address, WETH.address], overrides)

  // event emitter for testing
  const routerEventEmitter = await deployContract(wallet, RouterEventEmitter, [])

  // deploy migrator
  const migrator = await deployContract(wallet, NobleMigrator, [factoryV1.address, router01.address], overrides)

  // initialize V1
  await factoryV1.createExchange(WETHPartner.address, overrides)
  const WETHExchangeV1Address = await factoryV1.getExchange(WETHPartner.address)
  const WETHExchangeV1 = new Contract(WETHExchangeV1Address, JSON.stringify(UniswapV1Exchange.abi), provider).connect(
    wallet
  )

  // initialize V2
  await factoryV2.createPair(tokenA.address, tokenB.address)
  const pairAddress = await factoryV2.getPair(tokenA.address, tokenB.address)
  const pair = new Contract(pairAddress, JSON.stringify(INoblePair.abi), provider).connect(wallet)

  const token0Address = await pair.token0()
  const token0 = tokenA.address === token0Address ? tokenA : tokenB
  const token1 = tokenA.address === token0Address ? tokenB : tokenA

  await factoryV2.createPair(WETH.address, WETHPartner.address)
  const WETHPairAddress = await factoryV2.getPair(WETH.address, WETHPartner.address)
  const WETHPair = new Contract(WETHPairAddress, JSON.stringify(INoblePair.abi), provider).connect(wallet)

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
