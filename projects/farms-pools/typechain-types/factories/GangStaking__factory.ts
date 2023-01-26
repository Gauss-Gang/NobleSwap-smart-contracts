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
import type { PromiseOrValue } from "../common";
import type { GangStaking, GangStakingInterface } from "../GangStaking";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IGTS20",
        name: "_lp",
        type: "address",
      },
      {
        internalType: "contract IGTS20",
        name: "_rewardToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_rewardPerBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_bonusEndBlock",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_adminAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_wGANG",
        type: "address",
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
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
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
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "EmergencyWithdraw",
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
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Withdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "adminAddress",
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
    name: "bonusEndBlock",
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
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
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
    name: "emergencyRewardWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_to",
        type: "uint256",
      },
    ],
    name: "getMultiplier",
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
    name: "limitAmount",
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
    name: "massUpdatePools",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [
      {
        internalType: "address",
        name: "_user",
        type: "address",
      },
    ],
    name: "pendingReward",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "poolInfo",
    outputs: [
      {
        internalType: "contract IGTS20",
        name: "lpToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "allocPoint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastRewardBlock",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "accNoblePerShare",
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
        name: "_blacklistAddress",
        type: "address",
      },
    ],
    name: "removeBlackList",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "rewardPerBlock",
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
    name: "rewardToken",
    outputs: [
      {
        internalType: "contract IGTS20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_adminAddress",
        type: "address",
      },
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_blacklistAddress",
        type: "address",
      },
    ],
    name: "setBlackList",
    outputs: [],
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
    name: "setLimitAmount",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startBlock",
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
    name: "totalAllocPoint",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_pid",
        type: "uint256",
      },
    ],
    name: "updatePool",
    outputs: [],
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
    name: "userInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "rewardDebt",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "inBlackList",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wGANG",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
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
  "0x60a0604052678ac7230489e8000060055560006006553480156200002257600080fd5b5060405162001e3c38038062001e3c8339810160408190526200004591620001e6565b62000050336200017d565b600380546001600160a01b039788166001600160a01b031991821617909155600795909555600884905560099290925560048054918616918516919091178155908416608090815260408051918201815295851681526103e8602082018181529682019384526000606083018181526001805480820182559252925193027fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf68101805494909716939095169290921790945593517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf7830155517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf882015590517fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf9909101556006556200026e565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b0381168114620001e357600080fd5b50565b600080600080600080600060e0888a0312156200020257600080fd5b87516200020f81620001cd565b60208901519097506200022281620001cd565b8096505060408801519450606088015193506080880151925060a08801516200024b81620001cd565b60c08901519092506200025e81620001cd565b8091505092959891949750929550565b608051611b96620002a6600039600081816101b70152818161041a015281816108670152818161116a015261121a0152611b966000f3fe60806040526004361061019a5760003560e01c806372700241116100e1578063d0e30db01161008a578063f2fde38b11610064578063f2fde38b146104e9578063f40f0f5214610509578063f7c618c114610529578063fc6f94681461055657600080fd5b8063d0e30db0146104ac578063db2e21bc146104b4578063e4997dc5146104c957600080fd5b80638b9a493b116100bb5780638b9a493b146104085780638da5cb5b146104615780638dbb1e3a1461048c57600080fd5b806372700241146103bc57806378abafaf146103dc5780638ae39cac146103f257600080fd5b80633279beab11610143578063630b5ba11161011d578063630b5ba114610372578063704b6c0214610387578063715018a6146103a757600080fd5b80633279beab1461031c57806348cd4cb11461033c57806351eb05a61461035257600080fd5b80631aed6553116101745780631aed6553146102c65780631f107a45146102dc5780632e1a7d4d146102fc57600080fd5b80631526fe27146101eb57806317caf6f1146102475780631959a0021461026b57600080fd5b366101e6573373ffffffffffffffffffffffffffffffffffffffff7f000000000000000000000000000000000000000000000000000000000000000016146101e4576101e4611977565b005b600080fd5b3480156101f757600080fd5b5061020b6102063660046119a6565b610583565b6040805173ffffffffffffffffffffffffffffffffffffffff909516855260208501939093529183015260608201526080015b60405180910390f35b34801561025357600080fd5b5061025d60065481565b60405190815260200161023e565b34801561027757600080fd5b506102a96102863660046119bf565b600260208190526000918252604090912080546001820154919092015460ff1683565b60408051938452602084019290925215159082015260600161023e565b3480156102d257600080fd5b5061025d60095481565b3480156102e857600080fd5b506101e46102f73660046119a6565b6105d4565b34801561030857600080fd5b506101e46103173660046119a6565b61065f565b34801561032857600080fd5b506101e46103373660046119a6565b61093d565b34801561034857600080fd5b5061025d60085481565b34801561035e57600080fd5b506101e461036d3660046119a6565b610b57565b34801561037e57600080fd5b506101e4610ca7565b34801561039357600080fd5b506101e46103a23660046119bf565b610cce565b3480156103b357600080fd5b506101e4610d96565b3480156103c857600080fd5b506101e46103d73660046119bf565b610e23565b3480156103e857600080fd5b5061025d60055481565b3480156103fe57600080fd5b5061025d60075481565b34801561041457600080fd5b5061043c7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161023e565b34801561046d57600080fd5b5060005473ffffffffffffffffffffffffffffffffffffffff1661043c565b34801561049857600080fd5b5061025d6104a73660046119f5565b610f1d565b6101e4610f5d565b3480156104c057600080fd5b506101e4611314565b3480156104d557600080fd5b506101e46104e43660046119bf565b61142f565b3480156104f557600080fd5b506101e46105043660046119bf565b611526565b34801561051557600080fd5b5061025d6105243660046119bf565b611656565b34801561053557600080fd5b5060035461043c9073ffffffffffffffffffffffffffffffffffffffff1681565b34801561056257600080fd5b5060045461043c9073ffffffffffffffffffffffffffffffffffffffff1681565b6001818154811061059357600080fd5b6000918252602090912060049091020180546001820154600283015460039093015473ffffffffffffffffffffffffffffffffffffffff9092169350919084565b60005473ffffffffffffffffffffffffffffffffffffffff16331461065a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b600555565b6000600160008154811061067557610675611a17565b6000918252602080832033845260029091526040909220805460049092029092019250831115610727576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f57697468647261773a20616d6f756e7420656e7465726564206973206869676860448201527f6572207468616e207573657220616d6f756e74000000000000000000000000006064820152608401610651565b6107316000610b57565b600061076b826001015461076564e8d4a5100061075f876003015487600001546117d290919063ffffffff16565b906117e5565b906117f1565b90506000811180156107825750600282015460ff16155b15610824576003546040517fa9059cbb0000000000000000000000000000000000000000000000000000000081523360048201526024810183905273ffffffffffffffffffffffffffffffffffffffff9091169063a9059cbb906044016020604051808303816000875af11580156107fe573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108229190611a46565b505b83156108e257815461083690856117f1565b82556040517f2e1a7d4d000000000000000000000000000000000000000000000000000000008152600481018590527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1690632e1a7d4d90602401600060405180830381600087803b1580156108c057600080fd5b505af11580156108d4573d6000803e3d6000fd5b505050506108e233856117fd565b600383015482546108fd9164e8d4a510009161075f916117d2565b600183015560405184815233907f884edad9ce6fa2440d8a54cc123490eb96d2768479d49ff9c7366125a94243649060200160405180910390a250505050565b60005473ffffffffffffffffffffffffffffffffffffffff1633146109be576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610651565b6003546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff909116906370a0823190602401602060405180830381865afa158015610a2c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a509190611a68565b8110610ab8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f6e6f7420656e6f75676820746f6b656e000000000000000000000000000000006044820152606401610651565b6003546040517fa9059cbb0000000000000000000000000000000000000000000000000000000081523360048201526024810183905273ffffffffffffffffffffffffffffffffffffffff9091169063a9059cbb906044016020604051808303816000875af1158015610b2f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b539190611a46565b5050565b600060018281548110610b6c57610b6c611a17565b9060005260206000209060040201905080600201544311610b8b575050565b80546040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009173ffffffffffffffffffffffffffffffffffffffff16906370a0823190602401602060405180830381865afa158015610bf9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1d9190611a68565b905080600003610c3257504360029091015550565b6000610c42836002015443610f1d565b90506000610c6f60065461075f8660010154610c69600754876117d290919063ffffffff16565b906117d2565b9050610c92610c878461075f8464e8d4a510006117d2565b6003860154906118f6565b60038501555050436002909201919091555050565b60015460005b81811015610b5357610cbe81610b57565b610cc781611ab0565b9050610cad565b60005473ffffffffffffffffffffffffffffffffffffffff163314610d4f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610651565b600480547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60005473ffffffffffffffffffffffffffffffffffffffff163314610e17576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610651565b610e216000611902565b565b60045473ffffffffffffffffffffffffffffffffffffffff163314610eca576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f41646d696e3a204d6573736167652073656e646572206973206e6f742061646d60448201527f696e0000000000000000000000000000000000000000000000000000000000006064820152608401610651565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602081905260409091200180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055565b60006009548211610f3957610f3282846117f1565b9050610f57565b6009548310610f4a57506000610f57565b600954610f3290846117f1565b92915050565b60006001600081548110610f7357610f73611a17565b60009182526020808320338452600290915260409092206005548154600490930290930193509190610fa590346118f6565b111561100d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f6578636565642074686520746f700000000000000000000000000000000000006044820152606401610651565b600281015460ff161561107c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f696e20626c61636b206c697374000000000000000000000000000000000000006044820152606401610651565b6110866000610b57565b8054156111625760006110bb826001015461076564e8d4a5100061075f876003015487600001546117d290919063ffffffff16565b90508015611160576003546040517fa9059cbb0000000000000000000000000000000000000000000000000000000081523360048201526024810183905273ffffffffffffffffffffffffffffffffffffffff9091169063a9059cbb906044016020604051808303816000875af115801561113a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061115e9190611a46565b505b505b34156112bb577f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b1580156111d057600080fd5b505af11580156111e4573d6000803e3d6000fd5b50506040517fa9059cbb0000000000000000000000000000000000000000000000000000000081523060048201523460248201527f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff16935063a9059cbb925060440190506020604051808303816000875af115801561127c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112a09190611a46565b6112ac576112ac611977565b80546112b890346118f6565b81555b600382015481546112d69164e8d4a510009161075f916117d2565b600182015560405134815233907fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c9060200160405180910390a25050565b6000600160008154811061132a5761132a611a17565b6000918252602080832033808552600290925260409384902060049384029091018054825495517fa9059cbb00000000000000000000000000000000000000000000000000000000815294850193909352602484019490945292935073ffffffffffffffffffffffffffffffffffffffff169063a9059cbb906044016020604051808303816000875af11580156113c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906113e99190611a46565b50805460405190815233907f5fafa99d0643513820be26656b45130b01e1c03062e1266bf36f88cbd3bd96959060200160405180910390a2600080825560019091015550565b60045473ffffffffffffffffffffffffffffffffffffffff1633146114d6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f41646d696e3a204d6573736167652073656e646572206973206e6f742061646d60448201527f696e0000000000000000000000000000000000000000000000000000000000006064820152608401610651565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602081905260409091200180547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169055565b60005473ffffffffffffffffffffffffffffffffffffffff1633146115a7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610651565b73ffffffffffffffffffffffffffffffffffffffff811661164a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610651565b61165381611902565b50565b600080600160008154811061166d5761166d611a17565b6000918252602080832073ffffffffffffffffffffffffffffffffffffffff87811685526002909252604080852060049485029092016003810154815492517f70a08231000000000000000000000000000000000000000000000000000000008152309681019690965290965091949193919216906370a0823190602401602060405180830381865afa158015611708573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061172c9190611a68565b905083600201544311801561174057508015155b156117a0576000611755856002015443610f1d565b9050600061177c60065461075f8860010154610c69600754876117d290919063ffffffff16565b905061179b6117948461075f8464e8d4a510006117d2565b85906118f6565b935050505b6117c8836001015461076564e8d4a5100061075f8688600001546117d290919063ffffffff16565b9695505050505050565b60006117de8284611ae8565b9392505050565b60006117de8284611aff565b60006117de8284611b3a565b60008273ffffffffffffffffffffffffffffffffffffffff166159d883604051600060405180830381858888f193505050503d806000811461185b576040519150601f19603f3d011682016040523d82523d6000602084013e611860565b606091505b50509050806118f1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f5472616e7366657248656c7065723a204554485f5452414e534645525f46414960448201527f4c454400000000000000000000000000000000000000000000000000000000006064820152608401610651565b505050565b60006117de8284611b4d565b6000805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b6000602082840312156119b857600080fd5b5035919050565b6000602082840312156119d157600080fd5b813573ffffffffffffffffffffffffffffffffffffffff811681146117de57600080fd5b60008060408385031215611a0857600080fd5b50508035926020909101359150565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600060208284031215611a5857600080fd5b815180151581146117de57600080fd5b600060208284031215611a7a57600080fd5b5051919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611ae157611ae1611a81565b5060010190565b8082028115828204841417610f5757610f57611a81565b600082611b35577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b81810381811115610f5757610f57611a81565b80820180821115610f5757610f57611a8156fea2646970667358221220aa79f83117d2f5636360d0d15b792fc41dcb145eea2c435a3ab1aa124a6be47464736f6c63430008110033";

type GangStakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GangStakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GangStaking__factory extends ContractFactory {
  constructor(...args: GangStakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _lp: PromiseOrValue<string>,
    _rewardToken: PromiseOrValue<string>,
    _rewardPerBlock: PromiseOrValue<BigNumberish>,
    _startBlock: PromiseOrValue<BigNumberish>,
    _bonusEndBlock: PromiseOrValue<BigNumberish>,
    _adminAddress: PromiseOrValue<string>,
    _wGANG: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<GangStaking> {
    return super.deploy(
      _lp,
      _rewardToken,
      _rewardPerBlock,
      _startBlock,
      _bonusEndBlock,
      _adminAddress,
      _wGANG,
      overrides || {}
    ) as Promise<GangStaking>;
  }
  override getDeployTransaction(
    _lp: PromiseOrValue<string>,
    _rewardToken: PromiseOrValue<string>,
    _rewardPerBlock: PromiseOrValue<BigNumberish>,
    _startBlock: PromiseOrValue<BigNumberish>,
    _bonusEndBlock: PromiseOrValue<BigNumberish>,
    _adminAddress: PromiseOrValue<string>,
    _wGANG: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _lp,
      _rewardToken,
      _rewardPerBlock,
      _startBlock,
      _bonusEndBlock,
      _adminAddress,
      _wGANG,
      overrides || {}
    );
  }
  override attach(address: string): GangStaking {
    return super.attach(address) as GangStaking;
  }
  override connect(signer: Signer): GangStaking__factory {
    return super.connect(signer) as GangStaking__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GangStakingInterface {
    return new utils.Interface(_abi) as GangStakingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GangStaking {
    return new Contract(address, _abi, signerOrProvider) as GangStaking;
  }
}
