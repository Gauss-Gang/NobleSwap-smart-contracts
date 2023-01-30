import { Contract, Wallet, ethers, providers, Signer } from 'ethers'
import { deployContract } from 'ethereum-waffle'
import { expandTo18Decimals } from './utilities'

import { Web3Provider } from '@ethersproject/providers'

import ERC20 from '../../artifacts/contracts/core/ERC20.sol/ERC20.json'
import NobleFactory from '../../artifacts/contracts/NobleFactory.sol/NobleFactory.json'
import NoblePair from '../../artifacts/contracts/NoblePair.sol/NoblePair.json'

const { ethers } = require('hardhat')

interface FactoryFixture {
  factory: Contract
}

const overrides = {
  gasLimit: 9999999
}

export async function factoryFixture(_: Web3Provider, [wallet]: Wallet[]) {
  const factory = await deployContract(wallet, NobleFactory, [wallet.address], overrides)
  return { factory }
}

interface PairFixture extends FactoryFixture {
  token0: Contract
  token1: Contract
  pair: Contract
}

export async function pairFixture(provider: Web3Provider, [wallet]: Wallet[]) {
  const accounts = await ethers.getSigners()
  console.log('fixtureCoreFail00')
  const { factory } = await factoryFixture(provider, [wallet])
  console.log('fixtureCoreFail01')
  const tokenA = await deployContract(wallet, ERC20, [expandTo18Decimals(10000)], overrides)
  console.log('fixtureCoreFail02')
  const tokenB = await deployContract(wallet, ERC20, [expandTo18Decimals(10000)], overrides)
  console.log('fixtureCoreFail03')

  await factory.createPair(tokenA.address, tokenB.address, overrides)
  console.log('fixtureCoreFail04')
  const pairAddress = await factory.getPair(tokenA.address, tokenB.address)
  console.log('fixtureCoreFail05')
  const pair = new Contract(pairAddress, JSON.stringify(NoblePair.abi), accounts[0]).connect(accounts[0])
  console.log('fixtureCoreFail06')
  //console.log('pair: ', pair)
  console.log('await pair.token0(): ', await pair.token0())
  const token0Address = (await pair.token0()).address
  console.log('fixtureCoreFail07')
  const token0 = tokenA.address === token0Address ? tokenA : tokenB
  console.log('fixtureCoreFail08')
  const token1 = tokenA.address === token0Address ? tokenB : tokenA
  console.log('fixtureCoreFail09')

  return { factory, token0, token1, pair }
}
