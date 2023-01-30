/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { WGANG, WGANGInterface } from "../WGANG";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
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
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
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
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
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
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
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
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "wad",
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
        internalType: "uint256",
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
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
  "0x60c0604052600c60809081526b577261707065642047414e4760a01b60a0526002906200002d908262000120565b506040805180820190915260058152647747414e4760d81b602082015260039062000059908262000120565b506004805460ff191660121790553480156200007457600080fd5b50620001ec565b634e487b7160e01b600052604160045260246000fd5b600181811c90821680620000a657607f821691505b602082108103620000c757634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200011b57600081815260208120601f850160051c81016020861015620000f65750805b601f850160051c820191505b81811015620001175782815560010162000102565b5050505b505050565b81516001600160401b038111156200013c576200013c6200007b565b62000154816200014d845462000091565b84620000cd565b602080601f8311600181146200018c5760008415620001735750858301515b600019600386901b1c1916600185901b17855562000117565b600085815260208120601f198616915b82811015620001bd578886015182559484019460019091019084016200019c565b5085821015620001dc5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610a2880620001fc6000396000f3fe6080604052600436106100c05760003560e01c8063313ce56711610074578063a9059cbb1161004e578063a9059cbb146101fa578063d0e30db01461021a578063dd62ed3e1461022257600080fd5b8063313ce5671461018c57806370a08231146101b857806395d89b41146101e557600080fd5b806318160ddd116100a557806318160ddd1461012f57806323b872dd1461014c5780632e1a7d4d1461016c57600080fd5b806306fdde03146100d4578063095ea7b3146100ff57600080fd5b366100cf576100cd61025a565b005b600080fd5b3480156100e057600080fd5b506100e96102b5565b6040516100f691906107e8565b60405180910390f35b34801561010b57600080fd5b5061011f61011a36600461087d565b610343565b60405190151581526020016100f6565b34801561013b57600080fd5b50475b6040519081526020016100f6565b34801561015857600080fd5b5061011f6101673660046108a7565b61035a565b34801561017857600080fd5b506100cd6101873660046108e3565b610642565b34801561019857600080fd5b506004546101a69060ff1681565b60405160ff90911681526020016100f6565b3480156101c457600080fd5b5061013e6101d33660046108fc565b60006020819052908152604090205481565b3480156101f157600080fd5b506100e9610759565b34801561020657600080fd5b5061011f61021536600461087d565b610766565b6100cd61025a565b34801561022e57600080fd5b5061013e61023d366004610917565b600160209081526000928352604080842090915290825290205481565b3360009081526020819052604081208054349290610279908490610979565b909155505060405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a2565b600280546102c29061098c565b80601f01602080910402602001604051908101604052809291908181526020018280546102ee9061098c565b801561033b5780601f106103105761010080835404028352916020019161033b565b820191906000526020600020905b81548152906001019060200180831161031e57829003601f168201915b505050505081565b600061035033848461077a565b5060015b92915050565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040812054821115610414576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f47545332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841660009081526001602090815260408083203384529091529020548211156104d4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f47545332303a207472616e7366657220616d6f756e742065786365656473206160448201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000606482015260840161040b565b73ffffffffffffffffffffffffffffffffffffffff8416331480159061054a575073ffffffffffffffffffffffffffffffffffffffff841660009081526001602090815260408083203384529091529020547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff14155b156105975773ffffffffffffffffffffffffffffffffffffffff84166000908152600160209081526040808320338085529252909120546105979186916105929086906109df565b61077a565b73ffffffffffffffffffffffffffffffffffffffff80851660009081526020819052604080822080548690039055918516815220546105d7908390610979565b73ffffffffffffffffffffffffffffffffffffffff8481166000818152602081815260409182902094909455518581529092918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35060019392505050565b336000908152602081905260409020548111156106e1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f47545332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e63650000000000000000000000000000000000000000000000000000606482015260840161040b565b33600081815260208190526040808220805485900390555183156108fc0291849190818181858888f19350505050158015610720573d6000803e3d6000fd5b5060405181815233907f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b659060200160405180910390a250565b600380546102c29061098c565b600061077333848461035a565b9392505050565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b600060208083528351808285015260005b81811015610815578581018301518582016040015282016107f9565b5060006040828601015260407fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8301168501019250505092915050565b803573ffffffffffffffffffffffffffffffffffffffff8116811461087857600080fd5b919050565b6000806040838503121561089057600080fd5b61089983610854565b946020939093013593505050565b6000806000606084860312156108bc57600080fd5b6108c584610854565b92506108d360208501610854565b9150604084013590509250925092565b6000602082840312156108f557600080fd5b5035919050565b60006020828403121561090e57600080fd5b61077382610854565b6000806040838503121561092a57600080fd5b61093383610854565b915061094160208401610854565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b808201808211156103545761035461094a565b600181811c908216806109a057607f821691505b6020821081036109d9577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b818103818111156103545761035461094a56fea26469706673582212208bfe5e978779e962895ce24105628ffb9212a176f191cfc99ca5da34573c1d2364736f6c63430008110033";

type WGANGConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WGANGConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WGANG__factory extends ContractFactory {
  constructor(...args: WGANGConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WGANG> {
    return super.deploy(overrides || {}) as Promise<WGANG>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): WGANG {
    return super.attach(address) as WGANG;
  }
  override connect(signer: Signer): WGANG__factory {
    return super.connect(signer) as WGANG__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WGANGInterface {
    return new utils.Interface(_abi) as WGANGInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): WGANG {
    return new Contract(address, _abi, signerOrProvider) as WGANG;
  }
}
