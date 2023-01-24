/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ICollectionWhitelistChecker,
  ICollectionWhitelistCheckerInterface,
} from "../../../contracts/interfaces/ICollectionWhitelistChecker";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "canList",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class ICollectionWhitelistChecker__factory {
  static readonly abi = _abi;
  static createInterface(): ICollectionWhitelistCheckerInterface {
    return new utils.Interface(_abi) as ICollectionWhitelistCheckerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICollectionWhitelistChecker {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ICollectionWhitelistChecker;
  }
}