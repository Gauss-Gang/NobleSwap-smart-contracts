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
import type { PromiseOrValue } from "../../../common";
import type {
  TokenLock,
  TokenLockInterface,
} from "../../../upgradable-libs/contracts/TokenLock";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IGTS20_UPG",
        name: "token_",
        type: "address",
      },
      {
        internalType: "address",
        name: "sender_",
        type: "address",
      },
      {
        internalType: "address",
        name: "beneficiary_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "releaseTime_",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "beneficiary",
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
    name: "contractAddress",
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
    name: "lockedAmount",
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
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "releaseTime",
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
    name: "sender",
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
    name: "token",
    outputs: [
      {
        internalType: "contract IGTS20_UPG",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x61010060405234801561001157600080fd5b506040516106003803806106008339810160408190526100309161007e565b6001600160a01b0380861660805284811660a052831660c052603382905561005881426100dc565b60e052506101039350505050565b6001600160a01b038116811461007b57600080fd5b50565b600080600080600060a0868803121561009657600080fd5b85516100a181610066565b60208701519095506100b281610066565b60408701519094506100c381610066565b6060870151608090970151959894975095949392505050565b808201808211156100fd57634e487b7160e01b600052601160045260246000fd5b92915050565b60805160a05160c05160e0516104aa610156600039600081816101120152610164015260008181608401526103740152600060d001526000818161013e0152818161021b015261033801526104aa6000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806386d1a69f1161005b57806386d1a69f14610106578063b91d400114610110578063f6b4dfb414610136578063fc0c546a1461013c57600080fd5b806338af3eed1461008257806367e404ce146100ce5780636ab28bc8146100f4575b600080fd5b7f00000000000000000000000000000000000000000000000000000000000000005b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b7f00000000000000000000000000000000000000000000000000000000000000006100a4565b6033545b6040519081526020016100c5565b61010e610162565b005b7f00000000000000000000000000000000000000000000000000000000000000006100f8565b306100a4565b7f00000000000000000000000000000000000000000000000000000000000000006100a4565b7f0000000000000000000000000000000000000000000000000000000000000000421015610217576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f546f6b656e4c6f636b3a2072656c656173652074696d65206973206265666f7260448201527f652063757272656e742074696d6500000000000000000000000000000000000060648201526084015b60405180910390fd5b60007f00000000000000000000000000000000000000000000000000000000000000006040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff91909116906370a0823190602401602060405180830381865afa1580156102a6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102ca9190610432565b905060008111610336576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f546f6b656e4c6f636b3a206e6f20746f6b656e7320746f2072656c6561736500604482015260640161020e565b7f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663a9059cbb7f00000000000000000000000000000000000000000000000000000000000000006040517fffffffff0000000000000000000000000000000000000000000000000000000060e084901b16815273ffffffffffffffffffffffffffffffffffffffff9091166004820152602481018490526044016020604051808303816000875af1158015610405573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610429919061044b565b50506000603355565b60006020828403121561044457600080fd5b5051919050565b60006020828403121561045d57600080fd5b8151801515811461046d57600080fd5b939250505056fea2646970667358221220c1df6bc309686f8627d1af67c28d37365b32b45ffb2e6589971acc3cfd46c2db64736f6c63430008110033";

type TokenLockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenLockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenLock__factory extends ContractFactory {
  constructor(...args: TokenLockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    token_: PromiseOrValue<string>,
    sender_: PromiseOrValue<string>,
    beneficiary_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    releaseTime_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenLock> {
    return super.deploy(
      token_,
      sender_,
      beneficiary_,
      amount_,
      releaseTime_,
      overrides || {}
    ) as Promise<TokenLock>;
  }
  override getDeployTransaction(
    token_: PromiseOrValue<string>,
    sender_: PromiseOrValue<string>,
    beneficiary_: PromiseOrValue<string>,
    amount_: PromiseOrValue<BigNumberish>,
    releaseTime_: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      token_,
      sender_,
      beneficiary_,
      amount_,
      releaseTime_,
      overrides || {}
    );
  }
  override attach(address: string): TokenLock {
    return super.attach(address) as TokenLock;
  }
  override connect(signer: Signer): TokenLock__factory {
    return super.connect(signer) as TokenLock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenLockInterface {
    return new utils.Interface(_abi) as TokenLockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenLock {
    return new Contract(address, _abi, signerOrProvider) as TokenLock;
  }
}
