/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { MockGTS20, MockGTS20Interface } from "../../test/MockGTS20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "supply",
        type: "uint256",
      },
    ],
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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_balances",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
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
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "mintTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
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
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200156b3803806200156b83398101604081905262000034916200029a565b8282620000413362000083565b60036200004f83826200039c565b5060046200005e82826200039c565b50506005805460ff19166012179055506200007a3382620000d3565b50505062000490565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0382166200013e5760405162461bcd60e51b815260206004820152602760248201527f47545332303a2063616e206e6f74206d696e7420746f20746865207a65726f206044820152666164647265737360c81b606482015260840160405180910390fd5b806006546200014e919062000468565b6006556001600160a01b0382166000908152600160205260409020546200017790829062000468565b6001600160a01b0383166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90620001c99085815260200190565b60405180910390a35050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620001fd57600080fd5b81516001600160401b03808211156200021a576200021a620001d5565b604051601f8301601f19908116603f01168101908282118183101715620002455762000245620001d5565b816040528381526020925086838588010111156200026257600080fd5b600091505b8382101562000286578582018301518183018401529082019062000267565b600093810190920192909252949350505050565b600080600060608486031215620002b057600080fd5b83516001600160401b0380821115620002c857600080fd5b620002d687838801620001eb565b94506020860151915080821115620002ed57600080fd5b50620002fc86828701620001eb565b925050604084015190509250925092565b600181811c908216806200032257607f821691505b6020821081036200034357634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200039757600081815260208120601f850160051c81016020861015620003725750805b601f850160051c820191505b8181101562000393578281556001016200037e565b5050505b505050565b81516001600160401b03811115620003b857620003b8620001d5565b620003d081620003c984546200030d565b8462000349565b602080601f831160018114620004085760008415620003ef5750858301515b600019600386901b1c1916600185901b17855562000393565b600085815260208120601f198616915b82811015620004395788860151825594840194600190910190840162000418565b5085821015620004585787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b808201808211156200048a57634e487b7160e01b600052601160045260246000fd5b92915050565b6110cb80620004a06000396000f3fe608060405234801561001057600080fd5b506004361061011b5760003560e01c8063715018a6116100b2578063a0712d6811610081578063a9059cbb11610066578063a9059cbb14610277578063dd62ed3e1461028a578063f2fde38b146102d057600080fd5b8063a0712d6814610251578063a457c2d71461026457600080fd5b8063715018a6146102045780638da5cb5b1461020e57806395d89b411461023657806397304ced1461023e57600080fd5b8063313ce567116100ee578063313ce56714610186578063395093511461019b5780636ebcf607146101ae57806370a08231146101ce57600080fd5b806306fdde0314610120578063095ea7b31461013e57806318160ddd1461016157806323b872dd14610173575b600080fd5b6101286102e3565b6040516101359190610e89565b60405180910390f35b61015161014c366004610f19565b610375565b6040519015158152602001610135565b6006545b604051908152602001610135565b610151610181366004610f43565b61038c565b60055460405160ff9091168152602001610135565b6101516101a9366004610f19565b6104a8565b6101656101bc366004610f7f565b60016020526000908152604090205481565b6101656101dc366004610f7f565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205490565b61020c6104f1565b005b60005460405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610135565b61012861057e565b61020c61024c366004610fa1565b61058d565b61015161025f366004610fa1565b61059a565b610151610272366004610f19565b61062f565b610151610285366004610f19565b61073b565b610165610298366004610fba565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260026020908152604080832093909416825291909152205490565b61020c6102de366004610f7f565b610748565b6060600380546102f290610fed565b80601f016020809104026020016040519081016040528092919081815260200182805461031e90610fed565b801561036b5780601f106103405761010080835404028352916020019161036b565b820191906000526020600020905b81548152906001019060200180831161034e57829003601f168201915b5050505050905090565b6000610382338484610875565b5060015b92915050565b6000610399848484610a29565b73ffffffffffffffffffffffffffffffffffffffff8416600090815260026020908152604080832033845290915290205482111561045e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f47545332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841660009081526002602090815260408083203380855292529091205461049e918691859003610875565b5060019392505050565b33600081815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490916103829185906104ec90869061106f565b610875565b60005473ffffffffffffffffffffffffffffffffffffffff163314610572576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610455565b61057c6000610cc5565b565b6060600480546102f290610fed565b6105973382610d3a565b50565b6000805473ffffffffffffffffffffffffffffffffffffffff16331461061c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610455565b6106263383610d3a565b5060015b919050565b33600090815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff86168452909152812054819061066d908490611082565b10156106fb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f47545332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610455565b33600081815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8816845290915290205461038291908590859003610875565b6000610382338484610a29565b60005473ffffffffffffffffffffffffffffffffffffffff1633146107c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610455565b73ffffffffffffffffffffffffffffffffffffffff811661086c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610455565b61059781610cc5565b73ffffffffffffffffffffffffffffffffffffffff8316610917576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f47545332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610455565b73ffffffffffffffffffffffffffffffffffffffff82166109ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f47545332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610455565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610acc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f47545332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610455565b73ffffffffffffffffffffffffffffffffffffffff8216610b6f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f47545332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610455565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260016020526040902054811115610c24576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f47545332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610455565b73ffffffffffffffffffffffffffffffffffffffff8084166000908152600160205260408082208054859003905591841681522054610c6490829061106f565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526001602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610a1c9085815260200190565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b73ffffffffffffffffffffffffffffffffffffffff8216610ddd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f47545332303a2063616e206e6f74206d696e7420746f20746865207a65726f2060448201527f61646472657373000000000000000000000000000000000000000000000000006064820152608401610455565b80600654610deb919061106f565b60065573ffffffffffffffffffffffffffffffffffffffff8216600090815260016020526040902054610e1f90829061106f565b73ffffffffffffffffffffffffffffffffffffffff83166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610e7d9085815260200190565b60405180910390a35050565b600060208083528351808285015260005b81811015610eb657858101830151858201604001528201610e9a565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461062a57600080fd5b60008060408385031215610f2c57600080fd5b610f3583610ef5565b946020939093013593505050565b600080600060608486031215610f5857600080fd5b610f6184610ef5565b9250610f6f60208501610ef5565b9150604084013590509250925092565b600060208284031215610f9157600080fd5b610f9a82610ef5565b9392505050565b600060208284031215610fb357600080fd5b5035919050565b60008060408385031215610fcd57600080fd5b610fd683610ef5565b9150610fe460208401610ef5565b90509250929050565b600181811c9082168061100157607f821691505b60208210810361103a577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8082018082111561038657610386611040565b818103818111156103865761038661104056fea2646970667358221220f52e846f2f095ed54e52bb1ed627a0ab5d01736ba77731bd833567a9ead1227464736f6c63430008110033";

type MockGTS20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockGTS20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockGTS20__factory extends ContractFactory {
  constructor(...args: MockGTS20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    supply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockGTS20> {
    return super.deploy(
      name,
      symbol,
      supply,
      overrides || {}
    ) as Promise<MockGTS20>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    supply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, supply, overrides || {});
  }
  override attach(address: string): MockGTS20 {
    return super.attach(address) as MockGTS20;
  }
  override connect(signer: Signer): MockGTS20__factory {
    return super.connect(signer) as MockGTS20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockGTS20Interface {
    return new utils.Interface(_abi) as MockGTS20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockGTS20 {
    return new Contract(address, _abi, signerOrProvider) as MockGTS20;
  }
}
