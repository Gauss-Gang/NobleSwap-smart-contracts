/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { WBNB, WBNBInterface } from "../../../contracts/test/WBNB";

const _abi = [
  {
    constant: true,
    inputs: [],
    name: "name",
    outputs: [
      {
        name: "",
        type: "string",
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
        name: "guy",
        type: "address",
      },
      {
        name: "wad",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
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
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
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
        name: "src",
        type: "address",
      },
      {
        name: "dst",
        type: "address",
      },
      {
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
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
        name: "wad",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "decimals",
    outputs: [
      {
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
    inputs: [
      {
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
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
    name: "symbol",
    outputs: [
      {
        name: "",
        type: "string",
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
        name: "dst",
        type: "address",
      },
      {
        name: "wad",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
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
    inputs: [],
    name: "deposit",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        name: "",
        type: "address",
      },
      {
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    payable: true,
    stateMutability: "payable",
    type: "fallback",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        name: "guy",
        type: "address",
      },
      {
        indexed: false,
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
        name: "src",
        type: "address",
      },
      {
        indexed: true,
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
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
        name: "dst",
        type: "address",
      },
      {
        indexed: false,
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
        name: "src",
        type: "address",
      },
      {
        indexed: false,
        name: "wad",
        type: "uint256",
      },
    ],
    name: "Withdrawal",
    type: "event",
  },
] as const;

const _bytecode =
  "0x606060405260408051908101604052600b81527f5772617070656420424e420000000000000000000000000000000000000000006020820152600090805161004b9291602001906100b1565b5060408051908101604052600481527f57424e4200000000000000000000000000000000000000000000000000000000602082015260019080516100939291602001906100b1565b506002805460ff1916601217905534156100ac57600080fd5b61014c565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100f257805160ff191683800117855561011f565b8280016001018555821561011f579182015b8281111561011f578251825591602001919060010190610104565b5061012b92915061012f565b5090565b61014991905b8082111561012b5760008155600101610135565b90565b6107ca8061015b6000396000f3006060604052600436106100ae5763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166306fdde0381146100b8578063095ea7b31461014257806318160ddd1461018557806323b872dd146101aa5780632e1a7d4d146101df578063313ce567146101f557806370a082311461021e57806395d89b411461024a578063a9059cbb1461025d578063d0e30db0146100ae578063dd62ed3e1461028c575b6100b66102be565b005b34156100c357600080fd5b6100cb610321565b60405160208082528190810183818151815260200191508051906020019080838360005b838110156101075780820151838201526020016100ef565b50505050905090810190601f1680156101345780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561014d57600080fd5b61017173ffffffffffffffffffffffffffffffffffffffff600435166024356103bf565b604051901515815260200160405180910390f35b341561019057600080fd5b610198610438565b60405190815260200160405180910390f35b34156101b557600080fd5b61017173ffffffffffffffffffffffffffffffffffffffff60043581169060243516604435610453565b34156101ea57600080fd5b6100b6600435610612565b341561020057600080fd5b6102086106e7565b60405160ff909116815260200160405180910390f35b341561022957600080fd5b61019873ffffffffffffffffffffffffffffffffffffffff600435166106f0565b341561025557600080fd5b6100cb610702565b341561026857600080fd5b61017173ffffffffffffffffffffffffffffffffffffffff6004351660243561076d565b341561029757600080fd5b61019873ffffffffffffffffffffffffffffffffffffffff60043581169060243516610781565b73ffffffffffffffffffffffffffffffffffffffff3316600081815260036020526040908190208054349081019091557fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c915190815260200160405180910390a2565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103b75780601f1061038c576101008083540402835291602001916103b7565b820191906000526020600020905b81548152906001019060200180831161039a57829003601f168201915b505050505081565b73ffffffffffffffffffffffffffffffffffffffff338116600081815260046020908152604080832094871680845294909152808220859055909291907f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259085905190815260200160405180910390a350600192915050565b73ffffffffffffffffffffffffffffffffffffffff30163190565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600360205260408120548290101561048657600080fd5b3373ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614158015610515575073ffffffffffffffffffffffffffffffffffffffff808516600090815260046020908152604080832033909416835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff14155b156105965773ffffffffffffffffffffffffffffffffffffffff808516600090815260046020908152604080832033909416835292905220548290101561055b57600080fd5b73ffffffffffffffffffffffffffffffffffffffff808516600090815260046020908152604080832033909416835292905220805483900390555b73ffffffffffffffffffffffffffffffffffffffff8085166000818152600360205260408082208054879003905592861680825290839020805486019055917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9085905190815260200160405180910390a35060019392505050565b73ffffffffffffffffffffffffffffffffffffffff33166000908152600360205260409020548190101561064557600080fd5b73ffffffffffffffffffffffffffffffffffffffff3316600081815260036020526040908190208054849003905582156108fc0290839051600060405180830381858888f19350505050151561069a57600080fd5b3373ffffffffffffffffffffffffffffffffffffffff167f7fcf532c15f0a6db0bd6d0e038bea71d30d808c7d98cb3bf7268a95bf5081b658260405190815260200160405180910390a250565b60025460ff1681565b60036020526000908152604090205481565b60018054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156103b75780601f1061038c576101008083540402835291602001916103b7565b600061077a338484610453565b9392505050565b6004602090815260009283526040808420909152908252902054815600a165627a7a72305820ed1aff73944f818876f2721868e351ac0271d956176758421f1c0fa15c39535a0029";

type WBNBConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WBNBConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WBNB__factory extends ContractFactory {
  constructor(...args: WBNBConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<WBNB> {
    return super.deploy(overrides || {}) as Promise<WBNB>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): WBNB {
    return super.attach(address) as WBNB;
  }
  override connect(signer: Signer): WBNB__factory {
    return super.connect(signer) as WBNB__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WBNBInterface {
    return new utils.Interface(_abi) as WBNBInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): WBNB {
    return new Contract(address, _abi, signerOrProvider) as WBNB;
  }
}