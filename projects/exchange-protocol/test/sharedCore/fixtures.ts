import { Contract, Wallet, ethers, providers, Signer } from 'ethers'
import { deployContract } from 'ethereum-waffle'
import { expandTo18Decimals } from './utilities'

import ERC20 from '../../artifacts/contracts/core/ERC20.sol/ERC20.json'
import NobleFactory from '../../artifacts/contracts/NobleFactory.sol/NobleFactory.json'
import NoblePair from '../../artifacts/contracts/NoblePair.sol/NoblePair.json'

interface FactoryFixture {
  factory: Contract
}

const overrides = {
  gasLimit: 9999999
}

export async function factoryFixture(_: providers.Web3Provider, [wallet]: Wallet[]) {
  const factory = await deployContract(wallet, NobleFactory, [wallet.address], overrides)
  return { factory }
}

interface PairFixture extends FactoryFixture {
  token0: Contract
  token1: Contract
  pair: Contract
}

export async function pairFixture(provider: providers.Web3Provider, [wallet]: Wallet[]) {
  const { factory } = await factoryFixture(provider, [wallet])

  const tokenA = await deployContract(wallet, ERC20, [expandTo18Decimals(10000)], overrides)
  const tokenB = await deployContract(wallet, ERC20, [expandTo18Decimals(10000)], overrides)

  await factory.createPair(tokenA.address, tokenB.address, overrides)
  const pairAddress = await factory.getPair(tokenA.address, tokenB.address)
  const pair = new Contract(pairAddress, JSON.stringify(NoblePair.abi), provider).connect(wallet)

  const token0Address = (await pair.token0()).address
  const token0 = tokenA.address === token0Address ? tokenA : tokenB
  const token1 = tokenA.address === token0Address ? tokenB : tokenA

  return { factory, token0, token1, pair }
}
