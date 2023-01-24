/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { GTS20, GTS20Interface } from "../../../contracts/contracts/GTS20";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name_",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol_",
        type: "string",
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
  "0x60806040523480156200001157600080fd5b50604051620013ef380380620013ef833981016040819052620000349162000187565b6200003f3362000072565b60036200004d838262000280565b5060046200005c828262000280565b50506005805460ff19166012179055506200034c565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112620000ea57600080fd5b81516001600160401b0380821115620001075762000107620000c2565b604051601f8301601f19908116603f01168101908282118183101715620001325762000132620000c2565b816040528381526020925086838588010111156200014f57600080fd5b600091505b8382101562000173578582018301518183018401529082019062000154565b600093810190920192909252949350505050565b600080604083850312156200019b57600080fd5b82516001600160401b0380821115620001b357600080fd5b620001c186838701620000d8565b93506020850151915080821115620001d857600080fd5b50620001e785828601620000d8565b9150509250929050565b600181811c908216806200020657607f821691505b6020821081036200022757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200027b57600081815260208120601f850160051c81016020861015620002565750805b601f850160051c820191505b81811015620002775782815560010162000262565b5050505b505050565b81516001600160401b038111156200029c576200029c620000c2565b620002b481620002ad8454620001f1565b846200022d565b602080601f831160018114620002ec5760008415620002d35750858301515b600019600386901b1c1916600185901b17855562000277565b600085815260208120601f198616915b828110156200031d57888601518255948401946001909101908401620002fc565b50858210156200033c5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611093806200035c6000396000f3fe608060405234801561001057600080fd5b50600436106101005760003560e01c8063715018a611610097578063a457c2d711610066578063a457c2d714610236578063a9059cbb14610249578063dd62ed3e1461025c578063f2fde38b146102a257600080fd5b8063715018a6146101e95780638da5cb5b146101f357806395d89b411461021b578063a0712d681461022357600080fd5b8063313ce567116100d3578063313ce5671461016b57806339509351146101805780636ebcf6071461019357806370a08231146101b357600080fd5b806306fdde0314610105578063095ea7b31461012357806318160ddd1461014657806323b872dd14610158575b600080fd5b61010d6102b5565b60405161011a9190610e51565b60405180910390f35b610136610131366004610ee1565b610347565b604051901515815260200161011a565b6006545b60405190815260200161011a565b610136610166366004610f0b565b61035e565b60055460405160ff909116815260200161011a565b61013661018e366004610ee1565b61047a565b61014a6101a1366004610f47565b60016020526000908152604090205481565b61014a6101c1366004610f47565b73ffffffffffffffffffffffffffffffffffffffff1660009081526001602052604090205490565b6101f16104c3565b005b60005460405173ffffffffffffffffffffffffffffffffffffffff909116815260200161011a565b61010d610550565b610136610231366004610f69565b61055f565b610136610244366004610ee1565b6105f4565b610136610257366004610ee1565b610700565b61014a61026a366004610f82565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260026020908152604080832093909416825291909152205490565b6101f16102b0366004610f47565b61070d565b6060600380546102c490610fb5565b80601f01602080910402602001604051908101604052809291908181526020018280546102f090610fb5565b801561033d5780601f106103125761010080835404028352916020019161033d565b820191906000526020600020905b81548152906001019060200180831161032057829003601f168201915b5050505050905090565b600061035433848461083d565b5060015b92915050565b600061036b8484846109f1565b73ffffffffffffffffffffffffffffffffffffffff84166000908152600260209081526040808320338452909152902054821115610430576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f47545332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e636500000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841660009081526002602090815260408083203380855292529091205461047091869185900361083d565b5060019392505050565b33600081815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490916103549185906104be908690611037565b61083d565b60005473ffffffffffffffffffffffffffffffffffffffff163314610544576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610427565b61054e6000610c8d565b565b6060600480546102c490610fb5565b6000805473ffffffffffffffffffffffffffffffffffffffff1633146105e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610427565b6105eb3383610d02565b5060015b919050565b33600090815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff86168452909152812054819061063290849061104a565b10156106c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f47545332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608401610427565b33600081815260026020908152604080832073ffffffffffffffffffffffffffffffffffffffff881684529091529020546103549190859085900361083d565b60006103543384846109f1565b60005473ffffffffffffffffffffffffffffffffffffffff16331461078e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610427565b73ffffffffffffffffffffffffffffffffffffffff8116610831576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610427565b61083a81610c8d565b50565b73ffffffffffffffffffffffffffffffffffffffff83166108df576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f47545332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610427565b73ffffffffffffffffffffffffffffffffffffffff8216610982576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f47545332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610427565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526002602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316610a94576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f47545332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610427565b73ffffffffffffffffffffffffffffffffffffffff8216610b37576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f47545332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610427565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260016020526040902054811115610bec576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f47545332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610427565b73ffffffffffffffffffffffffffffffffffffffff8084166000908152600160205260408082208054859003905591841681522054610c2c908290611037565b73ffffffffffffffffffffffffffffffffffffffff80841660008181526001602052604090819020939093559151908516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906109e49085815260200190565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b73ffffffffffffffffffffffffffffffffffffffff8216610da5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602760248201527f47545332303a2063616e206e6f74206d696e7420746f20746865207a65726f2060448201527f61646472657373000000000000000000000000000000000000000000000000006064820152608401610427565b80600654610db39190611037565b60065573ffffffffffffffffffffffffffffffffffffffff8216600090815260016020526040902054610de7908290611037565b73ffffffffffffffffffffffffffffffffffffffff83166000818152600160205260408082209390935591519091907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610e459085815260200190565b60405180910390a35050565b600060208083528351808285015260005b81811015610e7e57858101830151858201604001528201610e62565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b803573ffffffffffffffffffffffffffffffffffffffff811681146105ef57600080fd5b60008060408385031215610ef457600080fd5b610efd83610ebd565b946020939093013593505050565b600080600060608486031215610f2057600080fd5b610f2984610ebd565b9250610f3760208501610ebd565b9150604084013590509250925092565b600060208284031215610f5957600080fd5b610f6282610ebd565b9392505050565b600060208284031215610f7b57600080fd5b5035919050565b60008060408385031215610f9557600080fd5b610f9e83610ebd565b9150610fac60208401610ebd565b90509250929050565b600181811c90821680610fc957607f821691505b602082108103611002577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b8082018082111561035857610358611008565b818103818111156103585761035861100856fea2646970667358221220c336bf3329b206cba2c11e0a7458358636a2991fc73f4a8af951f64795b683dd64736f6c63430008110033";

type GTS20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GTS20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GTS20__factory extends ContractFactory {
  constructor(...args: GTS20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GTS20> {
    return super.deploy(name_, symbol_, overrides || {}) as Promise<GTS20>;
  }
  override getDeployTransaction(
    name_: PromiseOrValue<string>,
    symbol_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name_, symbol_, overrides || {});
  }
  override attach(address: string): GTS20 {
    return super.attach(address) as GTS20;
  }
  override connect(signer: Signer): GTS20__factory {
    return super.connect(signer) as GTS20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GTS20Interface {
    return new utils.Interface(_abi) as GTS20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): GTS20 {
    return new Contract(address, _abi, signerOrProvider) as GTS20;
  }
}
