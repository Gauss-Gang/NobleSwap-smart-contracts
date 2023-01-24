/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  PancakeBunnies,
  PancakeBunniesInterface,
} from "../../../contracts/test/PancakeBunnies";

const _abi = [
  {
    inputs: [],
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
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
    inputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "bunnyBurnCount",
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
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "bunnyCount",
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
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "getBunnyId",
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
        internalType: "uint8",
        name: "_bunnyId",
        type: "uint8",
      },
    ],
    name: "getBunnyName",
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
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "getBunnyNameOfTokenId",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "string",
        name: "_tokenURI",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "_bunnyId",
        type: "uint8",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "_bunnyId",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "setBunnyName",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
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
  "0x60806040523480156200001157600080fd5b506040518060400160405280600f81526020016e50616e63616b652042756e6e69657360881b81525060405180604001604052806002815260200161282160f11b815250816000908162000066919062000193565b50600162000075828262000193565b505050620000926200008c6200009860201b60201c565b6200009c565b6200025f565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200011957607f821691505b6020821081036200013a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f8211156200018e57600081815260208120601f850160051c81016020861015620001695750805b601f850160051c820191505b818110156200018a5782815560010162000175565b5050505b505050565b81516001600160401b03811115620001af57620001af620000ee565b620001c781620001c0845462000104565b8462000140565b602080601f831160018114620001ff5760008415620001e65750858301515b600019600386901b1c1916600185901b1785556200018a565b600085815260208120601f198616915b8281101562000230578886015182559484019460019091019084016200020f565b50858210156200024f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b612655806200026f6000396000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c806370a08231116100e3578063b88d4fde1161008c578063d76a3cfe11610066578063d76a3cfe1461039c578063e985e9c5146103bc578063f2fde38b1461040557600080fd5b8063b88d4fde14610341578063c72c688314610354578063c87b56dd1461038957600080fd5b806395d89b41116100bd57806395d89b4114610306578063a0411c541461030e578063a22cb4651461032e57600080fd5b806370a08231146102cd578063715018a6146102e05780638da5cb5b146102e857600080fd5b80632e2b0842116101455780635d71dca31161011f5780635d71dca3146102865780636352211e146102995780636a4b8883146102ac57600080fd5b80632e2b08421461024d57806342842e0e1461026057806342966c681461027357600080fd5b8063095ea7b311610176578063095ea7b3146102125780631b881e671461022757806323b872dd1461023a57600080fd5b806301ffc9a71461019d57806306fdde03146101c5578063081812fc146101da575b600080fd5b6101b06101ab366004611e60565b610418565b60405190151581526020015b60405180910390f35b6101cd6104fd565b6040516101bc9190611eeb565b6101ed6101e8366004611efe565b61058f565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016101bc565b610225610220366004611f40565b61066e565b005b6101cd610235366004611f7b565b610825565b610225610248366004611f96565b6108cb565b6101cd61025b366004611efe565b61096c565b61022561026e366004611f96565b610a22565b610225610281366004611efe565b610a3d565b61022561029436600461201b565b610b1f565b6101ed6102a7366004611efe565b610bc3565b6102bf6102ba36600461206e565b610c75565b6040519081526020016101bc565b6102bf6102db3660046120d3565b610d82565b610225610e50565b60065473ffffffffffffffffffffffffffffffffffffffff166101ed565b6101cd610edd565b6102bf61031c366004611f7b565b60076020526000908152604090205481565b61022561033c3660046120ee565b610eec565b61022561034f366004612159565b611002565b610377610362366004611efe565b6000908152600a602052604090205460ff1690565b60405160ff90911681526020016101bc565b6101cd610397366004611efe565b6110a4565b6102bf6103aa366004611f7b565b60086020526000908152604090205481565b6101b06103ca366004612253565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260056020908152604080832093909416825291909152205460ff1690565b6102256104133660046120d3565b6111c1565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f80ac58cd0000000000000000000000000000000000000000000000000000000014806104ab57507fffffffff0000000000000000000000000000000000000000000000000000000082167f5b5e139f00000000000000000000000000000000000000000000000000000000145b806104f757507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b60606000805461050c90612286565b80601f016020809104026020016040519081016040528092919081815260200182805461053890612286565b80156105855780601f1061055a57610100808354040283529160200191610585565b820191906000526020600020905b81548152906001019060200180831161056857829003601f168201915b5050505050905090565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff16610645576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e000000000000000000000000000000000000000060648201526084015b60405180910390fd5b5060009081526004602052604090205473ffffffffffffffffffffffffffffffffffffffff1690565b600061067982610bc3565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610736576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f7200000000000000000000000000000000000000000000000000000000000000606482015260840161063c565b3373ffffffffffffffffffffffffffffffffffffffff8216148061078a575073ffffffffffffffffffffffffffffffffffffffff8116600090815260056020908152604080832033845290915290205460ff165b610816576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161063c565b61082083836112f1565b505050565b60ff81166000908152600b6020526040902080546060919061084690612286565b80601f016020809104026020016040519081016040528092919081815260200182805461087290612286565b80156108bf5780601f10610894576101008083540402835291602001916108bf565b820191906000526020600020905b8154815290600101906020018083116108a257829003601f168201915b50505050509050919050565b6108d53382611391565b610961576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161063c565b6108208383836114fd565b6000818152600a602090815260408083205460ff16808452600b9092529091208054606092919061099c90612286565b80601f01602080910402602001604051908101604052809291908181526020018280546109c890612286565b8015610a155780601f106109ea57610100808354040283529160200191610a15565b820191906000526020600020905b8154815290600101906020018083116109f857829003601f168201915b5050505050915050919050565b61082083838360405180602001604052806000815250611002565b60065473ffffffffffffffffffffffffffffffffffffffff163314610abe576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161063c565b6000818152600a602090815260408083205460ff168084526007909252822080549192610aea83612308565b909155505060ff81166000908152600860205260408120805491610b0d8361233d565b9190505550610b1b82611764565b5050565b60065473ffffffffffffffffffffffffffffffffffffffff163314610ba0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161063c565b60ff83166000908152600b60205260409020610bbd8284836123c3565b50505050565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff16806104f7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e0000000000000000000000000000000000000000000000606482015260840161063c565b60065460009073ffffffffffffffffffffffffffffffffffffffff163314610cf9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161063c565b6000610d0460095490565b9050610d14600980546001019055565b6000818152600a6020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff8816908117909155835260079091528120805491610d688361233d565b9190505550610d778682611831565b90505b949350505050565b600073ffffffffffffffffffffffffffffffffffffffff8216610e27576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f206164647265737300000000000000000000000000000000000000000000606482015260840161063c565b5073ffffffffffffffffffffffffffffffffffffffff1660009081526003602052604090205490565b60065473ffffffffffffffffffffffffffffffffffffffff163314610ed1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161063c565b610edb60006119f3565b565b60606001805461050c90612286565b3373ffffffffffffffffffffffffffffffffffffffff831603610f6b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161063c565b33600081815260056020908152604080832073ffffffffffffffffffffffffffffffffffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001686151590811790915590519081529192917f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a35050565b61100c3383611391565b611098576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161063c565b610bbd84848484611a6a565b60008181526002602052604090205460609073ffffffffffffffffffffffffffffffffffffffff16611158576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000606482015260840161063c565b600061116f60408051602081019091526000815290565b9050600081511161118f57604051806020016040528060008152506111ba565b8061119984611b0d565b6040516020016111aa9291906124de565b6040516020818303038152906040525b9392505050565b60065473ffffffffffffffffffffffffffffffffffffffff163314611242576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161063c565b73ffffffffffffffffffffffffffffffffffffffff81166112e5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161063c565b6112ee816119f3565b50565b600081815260046020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8416908117909155819061134b82610bc3565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60008181526002602052604081205473ffffffffffffffffffffffffffffffffffffffff16611442576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201527f697374656e7420746f6b656e0000000000000000000000000000000000000000606482015260840161063c565b600061144d83610bc3565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff1614806114bc57508373ffffffffffffffffffffffffffffffffffffffff166114a48461058f565b73ffffffffffffffffffffffffffffffffffffffff16145b80610d7a575073ffffffffffffffffffffffffffffffffffffffff80821660009081526005602090815260408083209388168352929052205460ff16610d7a565b8273ffffffffffffffffffffffffffffffffffffffff1661151d82610bc3565b73ffffffffffffffffffffffffffffffffffffffff16146115c0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201527f73206e6f74206f776e0000000000000000000000000000000000000000000000606482015260840161063c565b73ffffffffffffffffffffffffffffffffffffffff8216611662576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161063c565b61166d6000826112f1565b73ffffffffffffffffffffffffffffffffffffffff831660009081526003602052604081208054600192906116a390849061250d565b909155505073ffffffffffffffffffffffffffffffffffffffff821660009081526003602052604081208054600192906116de908490612520565b909155505060008181526002602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff86811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600061176f82610bc3565b905061177c6000836112f1565b73ffffffffffffffffffffffffffffffffffffffff811660009081526003602052604081208054600192906117b290849061250d565b909155505060008281526002602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690555183919073ffffffffffffffffffffffffffffffffffffffff8416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b73ffffffffffffffffffffffffffffffffffffffff82166118ae576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161063c565b60008181526002602052604090205473ffffffffffffffffffffffffffffffffffffffff161561193a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161063c565b73ffffffffffffffffffffffffffffffffffffffff82166000908152600360205260408120805460019290611970908490612520565b909155505060008181526002602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b6006805473ffffffffffffffffffffffffffffffffffffffff8381167fffffffffffffffffffffffff0000000000000000000000000000000000000000831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b611a758484846114fd565b611a8184848484611c42565b610bbd576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161063c565b606081600003611b5057505060408051808201909152600181527f3000000000000000000000000000000000000000000000000000000000000000602082015290565b8160005b8115611b7a5780611b648161233d565b9150611b739050600a83612562565b9150611b54565b60008167ffffffffffffffff811115611b9557611b9561212a565b6040519080825280601f01601f191660200182016040528015611bbf576020820181803683370190505b5090505b8415610d7a57611bd460018361250d565b9150611be1600a86612576565b611bec906030612520565b60f81b818381518110611c0157611c0161258a565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350611c3b600a86612562565b9450611bc3565b600073ffffffffffffffffffffffffffffffffffffffff84163b15611e2a576040517f150b7a0200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff85169063150b7a0290611cb99033908990889088906004016125b9565b6020604051808303816000875af1925050508015611d12575060408051601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0168201909252611d0f91810190612602565b60015b611ddf573d808015611d40576040519150601f19603f3d011682016040523d82523d6000602084013e611d45565b606091505b508051600003611dd7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161063c565b805181602001fd5b7fffffffff00000000000000000000000000000000000000000000000000000000167f150b7a0200000000000000000000000000000000000000000000000000000000149050610d7a565b506001610d7a565b7fffffffff00000000000000000000000000000000000000000000000000000000811681146112ee57600080fd5b600060208284031215611e7257600080fd5b81356111ba81611e32565b60005b83811015611e98578181015183820152602001611e80565b50506000910152565b60008151808452611eb9816020860160208601611e7d565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815260006111ba6020830184611ea1565b600060208284031215611f1057600080fd5b5035919050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611f3b57600080fd5b919050565b60008060408385031215611f5357600080fd5b611f5c83611f17565b946020939093013593505050565b803560ff81168114611f3b57600080fd5b600060208284031215611f8d57600080fd5b6111ba82611f6a565b600080600060608486031215611fab57600080fd5b611fb484611f17565b9250611fc260208501611f17565b9150604084013590509250925092565b60008083601f840112611fe457600080fd5b50813567ffffffffffffffff811115611ffc57600080fd5b60208301915083602082850101111561201457600080fd5b9250929050565b60008060006040848603121561203057600080fd5b61203984611f6a565b9250602084013567ffffffffffffffff81111561205557600080fd5b61206186828701611fd2565b9497909650939450505050565b6000806000806060858703121561208457600080fd5b61208d85611f17565b9350602085013567ffffffffffffffff8111156120a957600080fd5b6120b587828801611fd2565b90945092506120c8905060408601611f6a565b905092959194509250565b6000602082840312156120e557600080fd5b6111ba82611f17565b6000806040838503121561210157600080fd5b61210a83611f17565b91506020830135801515811461211f57600080fd5b809150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000806000806080858703121561216f57600080fd5b61217885611f17565b935061218660208601611f17565b925060408501359150606085013567ffffffffffffffff808211156121aa57600080fd5b818701915087601f8301126121be57600080fd5b8135818111156121d0576121d061212a565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019083821181831017156122165761221661212a565b816040528281528a602084870101111561222f57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b6000806040838503121561226657600080fd5b61226f83611f17565b915061227d60208401611f17565b90509250929050565b600181811c9082168061229a57607f821691505b6020821081036122d3577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600081612317576123176122d9565b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff820361236e5761236e6122d9565b5060010190565b601f82111561082057600081815260208120601f850160051c8101602086101561239c5750805b601f850160051c820191505b818110156123bb578281556001016123a8565b505050505050565b67ffffffffffffffff8311156123db576123db61212a565b6123ef836123e98354612286565b83612375565b6000601f841160018114612441576000851561240b5750838201355b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600387901b1c1916600186901b1783556124d7565b6000838152602090207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0861690835b828110156124905786850135825560209485019460019092019101612470565b50868210156124cb577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88860031b161c19848701351681555b505060018560011b0183555b5050505050565b600083516124f0818460208801611e7d565b835190830190612504818360208801611e7d565b01949350505050565b818103818111156104f7576104f76122d9565b808201808211156104f7576104f76122d9565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60008261257157612571612533565b500490565b60008261258557612585612533565b500690565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600073ffffffffffffffffffffffffffffffffffffffff8087168352808616602084015250836040830152608060608301526125f86080830184611ea1565b9695505050505050565b60006020828403121561261457600080fd5b81516111ba81611e3256fea26469706673582212204ab00b5c50f4bee9cb288e12ee024c5bac88b2d37e06d347b7164a7bccbaa89b64736f6c63430008110033";

type PancakeBunniesConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PancakeBunniesConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PancakeBunnies__factory extends ContractFactory {
  constructor(...args: PancakeBunniesConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PancakeBunnies> {
    return super.deploy(overrides || {}) as Promise<PancakeBunnies>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PancakeBunnies {
    return super.attach(address) as PancakeBunnies;
  }
  override connect(signer: Signer): PancakeBunnies__factory {
    return super.connect(signer) as PancakeBunnies__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PancakeBunniesInterface {
    return new utils.Interface(_abi) as PancakeBunniesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PancakeBunnies {
    return new Contract(address, _abi, signerOrProvider) as PancakeBunnies;
  }
}