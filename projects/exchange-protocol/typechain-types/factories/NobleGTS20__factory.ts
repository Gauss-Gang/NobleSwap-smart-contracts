/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { NobleGTS20, NobleGTS20Interface } from "../NobleGTS20";

const _abi = [
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506040514690806052610f1d8239604080519182900360520182208282018252600d83526c4e6f626c6553776170204c507360981b6020938401528151808301835260018152603160f81b908401528151808401919091527fba76bdcc946ed3b07c3ff2e9de6211c93ddf7fbe40ff4755a5c7e13c2e7589a2818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606082015260808101949094523060a0808601919091528151808603909101815260c09094019052825192019190912060045550610e2c806100f16000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80633644e5151161008c57806395d89b411161006657806395d89b411461029f578063a9059cbb146102a7578063d505accf146102e0578063dd62ed3e14610340576100df565b80633644e5151461023157806370a08231146102395780637ecebe001461026c576100df565b806323b872dd116100bd57806323b872dd146101c857806330adf81f1461020b578063313ce56714610213576100df565b806306fdde03146100e4578063095ea7b31461016157806318160ddd146101ae575b600080fd5b6100ec61037b565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561012657818101518382015260200161010e565b50505050905090810190601f1680156101535780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61019a6004803603604081101561017757600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356103b4565b604080519115158252519081900360200190f35b6101b66103cb565b60408051918252519081900360200190f35b61019a600480360360608110156101de57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602081013590911690604001356103d1565b6101b6610539565b61021b61055d565b6040805160ff9092168252519081900360200190f35b6101b6610562565b6101b66004803603602081101561024f57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610568565b6101b66004803603602081101561028257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661057a565b6100ec61058c565b61019a600480360360408110156102bd57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356105c5565b61033e600480360360e08110156102f657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c001356105d2565b005b6101b66004803603604081101561035657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661089e565b6040518060400160405280600d81526020017f4e6f626c6553776170204c50730000000000000000000000000000000000000081525081565b60006103c13384846108bb565b5060015b92915050565b60035481565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260016020908152604080832033845290915281205482111561045a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180610dd06028913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841660009081526001602090815260408083203384529091529020547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff146105245773ffffffffffffffffffffffffffffffffffffffff841660009081526001602090815260408083203384529091529020546104f2908363ffffffff610a0216565b73ffffffffffffffffffffffffffffffffffffffff851660009081526001602090815260408083203384529091529020555b61052f848484610a74565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60045481565b60006020819052908152604090205481565b60026020526000908152604090205481565b6040518060400160405280600881526020017f4e6f626c652d4c5000000000000000000000000000000000000000000000000081525081565b60006103c1338484610a74565b4284101561064157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f626c653a2045585049524544000000000000000000000000000000000000604482015290519081900360640190fd5b60045473ffffffffffffffffffffffffffffffffffffffff80891660008181526002602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e0850182528051908301207f19010000000000000000000000000000000000000000000000000000000000006101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e2808201937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081019281900390910190855afa1580156107a2573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81161580159061081d57508873ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b61088857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4e6f626c653a20494e56414c49445f5349474e41545552450000000000000000604482015290519081900360640190fd5b6108938989896108bb565b505050505050505050565b600160209081526000928352604080842090915290825290205481565b73ffffffffffffffffffffffffffffffffffffffff8316610927576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180610d1c6024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610993576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180610d8b6022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b808203828111156103c557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f64732d6d6174682d7375622d756e646572666c6f770000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8316610ae0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180610d406025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610b4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180610dad6023913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902054811115610bca576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180610d656026913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902054610c00908263ffffffff610a0216565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152602081905260408082209390935590841681522054610c42908263ffffffff610ca916565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b808201828110156103c557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f64732d6d6174682d6164642d6f766572666c6f77000000000000000000000000604482015290519081900360640190fdfe47545332303a20617070726f76652066726f6d20746865207a65726f206164647265737347545332303a207472616e736665722066726f6d20746865207a65726f206164647265737347545332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636547545332303a20617070726f766520746f20746865207a65726f206164647265737347545332303a207472616e7366657220746f20746865207a65726f206164647265737347545332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365a265627a7a72315820b57ff544e1416599eac103a151edd1a28beaf0285d975f1a1609b5614327020964736f6c63430005100032454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";

type NobleGTS20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NobleGTS20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NobleGTS20__factory extends ContractFactory {
  constructor(...args: NobleGTS20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NobleGTS20> {
    return super.deploy(overrides || {}) as Promise<NobleGTS20>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): NobleGTS20 {
    return super.attach(address) as NobleGTS20;
  }
  override connect(signer: Signer): NobleGTS20__factory {
    return super.connect(signer) as NobleGTS20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NobleGTS20Interface {
    return new utils.Interface(_abi) as NobleGTS20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NobleGTS20 {
    return new Contract(address, _abi, signerOrProvider) as NobleGTS20;
  }
}
