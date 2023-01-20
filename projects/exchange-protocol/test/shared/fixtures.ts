import { Contract, Wallet } from 'ethers'
import { deployContract } from 'ethereum-waffle'
import { Web3Provider } from '@ethersproject/providers'
import { expandTo18Decimals } from './utilities'

import GTS20 from '../../artifacts/contracts/libraries/GTS20.sol/GTS20.json'
import NobleFactory from '../../artifacts/contracts/NobleFactory.sol/NobleFactory.json'
import NoblePair from '../../artifacts/contracts/NoblePair.sol/NoblePair.json'

interface FactoryFixture {
  factory: Contract
}

const overrides = {
  gasLimit: 9999999
}



export async function factoryFixture(_: Web3Provider, [wallet]: Wallet[]): Promise<FactoryFixture> {
  const factory = await deployContract(wallet, NobleFactory, [wallet.address], overrides)
  return { factory }
}

interface PairFixture extends FactoryFixture {
  token0: Contract
  token1: Contract
  pair: Contract
}

export async function pairFixture(provider: Web3Provider, [wallet]: Wallet[]): Promise<PairFixture> {
  const { factory } = await factoryFixture(provider, [wallet])

  const tokenA = await deployContract(wallet, GTS20, [expandTo18Decimals(10000)], overrides)
  const tokenB = await deployContract(wallet, GTS20, [expandTo18Decimals(10000)], overrides)

  await factory.createPair(tokenA.address, tokenB.address, overrides)
  const pairAddress = await factory.getPair(tokenA.address, tokenB.address)
  const pair = new Contract(pairAddress, JSON.stringify(NoblePair.abi), provider).connect(wallet)

  const token0Address = (await pair.token0()).address
  const token0 = tokenA.address === token0Address ? tokenA : tokenB
  const token1 = tokenA.address === token0Address ? tokenB : tokenA

  return { factory, token0, token1, pair }
}
