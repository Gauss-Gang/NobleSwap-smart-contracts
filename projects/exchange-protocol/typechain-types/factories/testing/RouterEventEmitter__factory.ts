/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  RouterEventEmitter,
  RouterEventEmitterInterface,
} from "../../testing/RouterEventEmitter";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "Amounts",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapETHForExactTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapExactETHForTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapExactTokensForETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapExactTokensForTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountInMax",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapTokensForExactETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountInMax",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapTokensForExactTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611051806100206000396000f3fe6080604052600436106100695760003560e01c8063b05f579e11610043578063b05f579e146102bd578063fa3219d51461036b578063fde1adda1461042d57610070565b806322b5841014610075578063375734d9146101395780639c91fcb5146101fb57610070565b3661007057005b600080fd5b34801561008157600080fd5b50610137600480360360c081101561009857600080fd5b73ffffffffffffffffffffffffffffffffffffffff82351691602081013591604082013591908101906080810160608201356401000000008111156100dc57600080fd5b8201836020820111156100ee57600080fd5b8035906020019184602083028401116401000000008311171561011057600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff81351690602001356104db565b005b34801561014557600080fd5b50610137600480360360c081101561015c57600080fd5b73ffffffffffffffffffffffffffffffffffffffff82351691602081013591604082013591908101906080810160608201356401000000008111156101a057600080fd5b8201836020820111156101b257600080fd5b803590602001918460208302840111640100000000831117156101d457600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff81351690602001356107c5565b34801561020757600080fd5b50610137600480360360c081101561021e57600080fd5b73ffffffffffffffffffffffffffffffffffffffff823516916020810135916040820135919081019060808101606082013564010000000081111561026257600080fd5b82018360208201111561027457600080fd5b8035906020019184602083028401116401000000008311171561029657600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff813516906020013561091d565b610137600480360360a08110156102d357600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235169160208101359181019060608101604082013564010000000081111561031057600080fd5b82018360208201111561032257600080fd5b8035906020019184602083028401116401000000008311171561034457600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135610a75565b34801561037757600080fd5b50610137600480360360c081101561038e57600080fd5b73ffffffffffffffffffffffffffffffffffffffff82351691602081013591604082013591908101906080810160608201356401000000008111156103d257600080fd5b8201836020820111156103e457600080fd5b8035906020019184602083028401116401000000008311171561040657600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135610d56565b610137600480360360a081101561044357600080fd5b73ffffffffffffffffffffffffffffffffffffffff8235169160208101359181019060608101604082013564010000000081111561048057600080fd5b82018360208201111561049257600080fd5b803590602001918460208302840111640100000000831117156104b457600080fd5b919350915073ffffffffffffffffffffffffffffffffffffffff8135169060200135610eae565b600060608873ffffffffffffffffffffffffffffffffffffffff16638803dbee60e01b89898989898960405160240180878152602001868152602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281038252868682818152602001925060200280828437600081840152601f19601f820116905080830192505050975050505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b6020831061063457805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016105f7565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610694576040519150601f19603f3d011682016040523d82523d6000602084013e610699565b606091505b5091509150816106a557fe5b7f4cc17991e3610e3400e74a8306aa421daaee1e3446fa22b490604610999e10b38180602001905160208110156106db57600080fd5b81019080805160405193929190846401000000008211156106fb57600080fd5b90830190602082018581111561071057600080fd5b825186602082028301116401000000008211171561072d57600080fd5b82525081516020918201928201910280838360005b8381101561075a578181015183820152602001610742565b505050509050016040525050506040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156107a757818101518382015260200161078f565b505050509050019250505060405180910390a1505050505050505050565b600060608873ffffffffffffffffffffffffffffffffffffffff166338ed173960e01b89898989898960405160240180878152602001868152602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281038252868682818152602001925060200280828437600081840152601f19601f820116905080830192505050975050505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083836020831061063457805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016105f7565b600060608873ffffffffffffffffffffffffffffffffffffffff166318cbafe560e01b89898989898960405160240180878152602001868152602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281038252868682818152602001925060200280828437600081840152601f19601f820116905080830192505050975050505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083836020831061063457805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016105f7565b600060608773ffffffffffffffffffffffffffffffffffffffff1663fb3bdb4160e01b888888888860405160240180868152602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281038252868682818152602001925060200280828437600081840152601f19601f8201169050808301925050509650505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310610bc657805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610b89565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610c26576040519150601f19603f3d011682016040523d82523d6000602084013e610c2b565b606091505b509150915081610c3757fe5b7f4cc17991e3610e3400e74a8306aa421daaee1e3446fa22b490604610999e10b3818060200190516020811015610c6d57600080fd5b8101908080516040519392919084640100000000821115610c8d57600080fd5b908301906020820185811115610ca257600080fd5b8251866020820283011164010000000082111715610cbf57600080fd5b82525081516020918201928201910280838360005b83811015610cec578181015183820152602001610cd4565b505050509050016040525050506040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610d39578181015183820152602001610d21565b505050509050019250505060405180910390a15050505050505050565b600060608873ffffffffffffffffffffffffffffffffffffffff16634a25d94a60e01b89898989898960405160240180878152602001868152602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281038252868682818152602001925060200280828437600081840152601f19601f820116905080830192505050975050505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083836020831061063457805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016105f7565b600060608773ffffffffffffffffffffffffffffffffffffffff16637ff36ab560e01b888888888860405160240180868152602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001838152602001828103825286868281815260200192506020028082843760008382015260408051601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09081169094018281039094018252928352602080820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909d169c909c178c5292518151919b909a508a995097509550859450879350869250508310610bc657805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe09092019160209182019101610b8956fea2646970667358221220c8ded7ea8042066ddae4e6dcb25f558ece8aadc1f0b08a84bc6df211e5ba306064736f6c63430006060033";

type RouterEventEmitterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RouterEventEmitterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RouterEventEmitter__factory extends ContractFactory {
  constructor(...args: RouterEventEmitterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RouterEventEmitter> {
    return super.deploy(overrides || {}) as Promise<RouterEventEmitter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RouterEventEmitter {
    return super.attach(address) as RouterEventEmitter;
  }
  override connect(signer: Signer): RouterEventEmitter__factory {
    return super.connect(signer) as RouterEventEmitter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RouterEventEmitterInterface {
    return new utils.Interface(_abi) as RouterEventEmitterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RouterEventEmitter {
    return new Contract(address, _abi, signerOrProvider) as RouterEventEmitter;
  }
}
