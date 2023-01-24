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
import type { ERC20, ERC20Interface } from "../../periphery/ERC20";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_totalSupply",
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
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "PERMIT_TYPEHASH",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
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
        name: "value",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620017bc380380620017bc833981810160405260208110156200003757600080fd5b81019080805190602001909291905050506200006467063fc3fdc8a17b1860c01b6200023560201b60201c565b6200008067cb0d1e498259ab0860c01b6200023560201b60201c565b6200009c67af2f1faf55ff0dc660c01b6200023560201b60201c565b6000620000ba67e72a0b26643bdd0760c01b6200023560201b60201c565b469050620000d9671ae9817899fea21060c01b6200023560201b60201c565b60405180806200176a60529139605201905060405180910390206040518060400160405280600a81526020017f5465737420546f6b656e00000000000000000000000000000000000000000000815250805190602001206040518060400160405280600181526020017f3100000000000000000000000000000000000000000000000000000000000000815250805190602001208330604051602001808681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019550505050505060405160208183030381529060405280519060200120600381905550620001ff678868ea72f10453d960c01b6200023560201b60201c565b6200021b67acdeaceb5d45fcd960c01b6200023560201b60201c565b6200022d33836200023860201b60201c565b505062000470565b50565b62000254677191cea5965b48a960c01b6200023560201b60201c565b6200027067a1cf94efc4c2639c60c01b6200023560201b60201c565b6200028c81600054620003ec60201b620012311790919060201c565b600081905550620002ae675815a89965aad66060c01b6200023560201b60201c565b6200030781600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054620003ec60201b620012311790919060201c565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555062000366677d92deb598497c4460c01b6200023560201b60201c565b6200038267b6d3f31466a233bb60c01b6200023560201b60201c565b8173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60008282840191508110156200046a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f64732d6d6174682d6164642d6f766572666c6f7700000000000000000000000081525060200191505060405180910390fd5b92915050565b6112ea80620004806000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c80633644e5151161008c57806395d89b411161006657806395d89b4114610381578063a9059cbb14610404578063d505accf1461046a578063dd62ed3e14610503576100df565b80633644e515146102b357806370a08231146102d15780637ecebe0014610329576100df565b806323b872dd116100bd57806323b872dd146101eb57806330adf81f14610271578063313ce5671461028f576100df565b806306fdde03146100e4578063095ea7b31461016757806318160ddd146101cd575b600080fd5b6100ec61057b565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561012c578082015181840152602081019050610111565b50505050905090810190601f1680156101595780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101b36004803603604081101561017d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105b4565b604051808215151515815260200191505060405180910390f35b6101d561062f565b6040518082815260200191505060405180910390f35b6102576004803603606081101561020157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610635565b604051808215151515815260200191505060405180910390f35b6102796108cd565b6040518082815260200191505060405180910390f35b6102976108f4565b604051808260ff1660ff16815260200191505060405180910390f35b6102bb6108f9565b6040518082815260200191505060405180910390f35b610313600480360360208110156102e757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506108ff565b6040518082815260200191505060405180910390f35b61036b6004803603602081101561033f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610917565b6040518082815260200191505060405180910390f35b61038961092f565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103c95780820151818401526020810190506103ae565b50505050905090810190601f1680156103f65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6104506004803603604081101561041a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610968565b604051808215151515815260200191505060405180910390f35b610501600480360360e081101561048057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803560ff16906020019092919080359060200190929190803590602001909291905050506109e3565b005b6105656004803603604081101561051957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e53565b6040518082815260200191505060405180910390f35b6040518060400160405280600a81526020017f5465737420546f6b656e0000000000000000000000000000000000000000000081525081565b60006105ca675538127b494d815d60c01b610e78565b6105de674b534309692241a160c01b610e78565b6105f2677dbe621de1c8678560c01b610e78565b6105fd338484610e7b565b61061167b4ae97e997a5c81060c01b610e78565b610625671e12403902ccfbab60c01b610e78565b6001905092915050565b60005481565b600061064b6784b33e508b1b3ed260c01b610e78565b61065f67efa4d0d05748610a60c01b610e78565b61067367627def75d7eebe7060c01b610e78565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146108525761072a67edda9a4a33ad48be60c01b610e78565b61073e67903d741016bb0fde60c01b610e78565b6107cd82600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fb690919063ffffffff16565b600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610867565b6108666752be72f93fe2cd2060c01b610e78565b5b61087b672abdfc02759ecfe660c01b610e78565b61088f67a3951fdfc205a72960c01b610e78565b61089a848484611039565b6108ae67fefbc201035de71b60c01b610e78565b6108c2677f8fc44cad51292b60c01b610e78565b600190509392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b81565b601281565b60035481565b60016020528060005260406000206000915090505481565b60046020528060005260406000206000915090505481565b6040518060400160405280600281526020017f545400000000000000000000000000000000000000000000000000000000000081525081565b600061097e6737cdaca835fd6b8260c01b610e78565b61099267274340a8d2d3f09c60c01b610e78565b6109a6675d52e86c05fb5b0760c01b610e78565b6109b1338484611039565b6109c5671b73c2dccaa32d8c60c01b610e78565b6109d9675824a87bee52259360c01b610e78565b6001905092915050565b6109f76719fcbf4874ac3a5660c01b610e78565b610a0b674e65733c178c65e960c01b610e78565b610a1f67fc1030f62c2d716960c01b610e78565b610a3367309f7ac735b6cf3660c01b610e78565b42841015610aa9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260078152602001807f455850495245440000000000000000000000000000000000000000000000000081525060200191505060405180910390fd5b610abd677798b482e069f6e360c01b610e78565b610ad167c000c154e10690b660c01b610e78565b610ae567a8393765914e884060c01b610e78565b60006003547f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c960001b898989600460008e73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000815480929190600101919050558a604051602001808781526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200184815260200183815260200182815260200196505050505050506040516020818303038152906040528051906020012060405160200180807f190100000000000000000000000000000000000000000000000000000000000081525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050610c6c67836e06dd1b3a8eef60c01b610e78565b610c80675d1a22b08df06e7860c01b610e78565b600060018286868660405160008152602001604052604051808581526020018460ff1660ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610cdf573d6000803e3d6000fd5b505050602060405103519050610cff6789b75a28f0a8c23060c01b610e78565b610d1367dd03a774ac13de9a60c01b610e78565b610d2767ec8e7cbaa8805f8360c01b610e78565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614158015610d8f57508873ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b610e01576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260118152602001807f494e56414c49445f5349474e415455524500000000000000000000000000000081525060200191505060405180910390fd5b610e1567b88860baa978cea660c01b610e78565b610e2967ef5b8bef2fc4042c60c01b610e78565b610e3d67175e97b147fc897c60c01b610e78565b610e48898989610e7b565b505050505050505050565b6002602052816000526040600020602052806000526040600020600091509150505481565b50565b610e8f6710496d21fc8253e460c01b610e78565b610ea3679b02ea5c341607c060c01b610e78565b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f3867d4f26cc97e7b9e6c60c01b610e78565b610f4c67929ca9060e2d457d60c01b610e78565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b6000828284039150811115611033576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f64732d6d6174682d7375622d756e646572666c6f77000000000000000000000081525060200191505060405180910390fd5b92915050565b61104d67f49cf03227cf526960c01b610e78565b61106167d73ca4b934e3799f60c01b610e78565b6110b381600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610fb690919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061110a6709059d6d417c682d60c01b610e78565b61115c81600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205461123190919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506111b367669acd74b64ee61360c01b610e78565b6111c76745ef6a7e53a0c42e60c01b610e78565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b60008282840191508110156112ae576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f64732d6d6174682d6164642d6f766572666c6f7700000000000000000000000081525060200191505060405180910390fd5b9291505056fea26469706673582212205a40bdb312649079799a93ebbd40ed38f7da06881320675cdcce20b72976073d64736f6c63430006060033454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429";

type ERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20__factory extends ContractFactory {
  constructor(...args: ERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _totalSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20> {
    return super.deploy(_totalSupply, overrides || {}) as Promise<ERC20>;
  }
  override getDeployTransaction(
    _totalSupply: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_totalSupply, overrides || {});
  }
  override attach(address: string): ERC20 {
    return super.attach(address) as ERC20;
  }
  override connect(signer: Signer): ERC20__factory {
    return super.connect(signer) as ERC20__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20Interface {
    return new utils.Interface(_abi) as ERC20Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC20 {
    return new Contract(address, _abi, signerOrProvider) as ERC20;
  }
}
