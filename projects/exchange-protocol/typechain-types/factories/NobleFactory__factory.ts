/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { NobleFactory, NobleFactoryInterface } from "../NobleFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_feeToSetter",
        type: "address",
      },
    ],
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
        name: "token0",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "pair",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "PairCreated",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "INIT_CODE_PAIR_HASH",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "allPairs",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "allPairsLength",
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
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    name: "createPair",
    outputs: [
      {
        internalType: "address",
        name: "pair",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "feeTo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "feeToSetter",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
    name: "getPair",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
        name: "_feeTo",
        type: "address",
      },
    ],
    name: "setFeeTo",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address",
        name: "_feeToSetter",
        type: "address",
      },
    ],
    name: "setFeeToSetter",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051613c94380380613c948339818101604052602081101561003357600080fd5b5051600180546001600160a01b0319166001600160a01b03909216919091179055613c31806100636000396000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c80635855a25a11610076578063c9c653961161005b578063c9c6539614610155578063e6a4390514610190578063f46901ed146101cb576100a3565b80635855a25a14610118578063a2e74af614610120576100a3565b8063017e7e58146100a8578063094b7415146100d95780631e3dd18b146100e1578063574f2ba3146100fe575b600080fd5b6100b06101fe565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6100b061021a565b6100b0600480360360208110156100f757600080fd5b5035610236565b61010661026a565b60408051918252519081900360200190f35b610106610270565b6101536004803603602081101561013657600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610321565b005b6100b06004803603604081101561016b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160200135166103ee565b6100b0600480360360408110156101a657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610841565b610153600480360360208110156101e157600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610874565b60005473ffffffffffffffffffffffffffffffffffffffff1681565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b6003818154811061024357fe5b60009182526020909120015473ffffffffffffffffffffffffffffffffffffffff16905081565b60035490565b60405161027f60208201610941565b6020820181038252601f19601f820116604052506040516020018082805190602001908083835b602083106102e357805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016102a6565b6001836020036101000a0380198251168184511680821785525050505050509050019150506040516020818303038152906040528051906020012081565b60015473ffffffffffffffffffffffffffffffffffffffff1633146103a757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4e6f626c653a20464f5242494444454e00000000000000000000000000000000604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b60008173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561048b57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601a60248201527f4e6f626c653a204944454e544943414c5f414444524553534553000000000000604482015290519081900360640190fd5b6000808373ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16106104c85783856104cb565b84845b909250905073ffffffffffffffffffffffffffffffffffffffff821661055257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f4e6f626c653a205a45524f5f4144445245535300000000000000000000000000604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8281166000908152600260209081526040808320858516845290915290205416156105f357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f4e6f626c653a20504149525f4558495354530000000000000000000000000000604482015290519081900360640190fd5b60606040518060200161060590610941565b6020820181038252601f19601f82011660405250905060008383604051602001808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b81526014018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1660601b815260140192505050604051602081830303815290604052805190602001209050808251602084016000f5604080517f485cc95500000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8781166004830152868116602483015291519297509087169163485cc9559160448082019260009290919082900301818387803b15801561073257600080fd5b505af1158015610746573d6000803e3d6000fd5b5050505073ffffffffffffffffffffffffffffffffffffffff84811660008181526002602081815260408084208987168086529083528185208054978d167fffffffffffffffffffffffff000000000000000000000000000000000000000098891681179091559383528185208686528352818520805488168517905560038054600181018255958190527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b90950180549097168417909655925483519283529082015281517f0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9929181900390910190a35050505092915050565b600260209081526000928352604080842090915290825290205473ffffffffffffffffffffffffffffffffffffffff1681565b60015473ffffffffffffffffffffffffffffffffffffffff1633146108fa57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4e6f626c653a20464f5242494444454e00000000000000000000000000000000604482015290519081900360640190fd5b600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b6132ae8061094f8339019056fe60806040526001600c5534801561001557600080fd5b50604051469080605261325c8239604080519182900360520182208282018252600d83526c4e6f626c6553776170204c507360981b6020938401528151808301835260018152603160f81b908401528151808401919091527fba76bdcc946ed3b07c3ff2e9de6211c93ddf7fbe40ff4755a5c7e13c2e7589a2818301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc6606082015260808101949094523060a0808601919091528151808603909101815260c09094019052825192019190912060045550600580546001600160a01b03191633179055613154806101086000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c80636a627842116100f9578063ba9a7a5611610097578063d21220a711610071578063d21220a7146105da578063d505accf146105e2578063dd62ed3e14610640578063fff6cae91461067b576101b9565b8063ba9a7a5614610597578063bc25cf771461059f578063c45a0155146105d2576101b9565b80637ecebe00116100d35780637ecebe00146104d757806389afcb441461050a57806395d89b4114610556578063a9059cbb1461055e576101b9565b80636a6278421461046957806370a082311461049c5780637464fc3d146104cf576101b9565b806323b872dd116101665780633644e515116101405780633644e51514610416578063485cc9551461041e5780635909c0d5146104595780635a3d549314610461576101b9565b806323b872dd146103ad57806330adf81f146103f0578063313ce567146103f8576101b9565b8063095ea7b311610197578063095ea7b3146103155780630dfe16811461036257806318160ddd14610393576101b9565b8063022c0d9f146101be57806306fdde03146102595780630902f1ac146102d6575b600080fd5b610257600480360360808110156101d457600080fd5b81359160208101359173ffffffffffffffffffffffffffffffffffffffff604083013516919081019060808101606082013564010000000081111561021857600080fd5b82018360208201111561022a57600080fd5b8035906020019184600183028401116401000000008311171561024c57600080fd5b509092509050610683565b005b610261610d84565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561029b578181015183820152602001610283565b50505050905090810190601f1680156102c85780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102de610dbd565b604080516dffffffffffffffffffffffffffff948516815292909316602083015263ffffffff168183015290519081900360600190f35b61034e6004803603604081101561032b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610e12565b604080519115158252519081900360200190f35b61036a610e29565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61039b610e45565b60408051918252519081900360200190f35b61034e600480360360608110156103c357600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610e4b565b61039b610fb3565b610400610fd7565b6040805160ff9092168252519081900360200190f35b61039b610fdc565b6102576004803603604081101561043457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610fe2565b61039b6110bb565b61039b6110c1565b61039b6004803603602081101561047f57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166110c7565b61039b600480360360208110156104b257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611481565b61039b611493565b61039b600480360360208110156104ed57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611499565b61053d6004803603602081101561052057600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166114ab565b6040805192835260208301919091528051918290030190f35b610261611948565b61034e6004803603604081101561057457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135611981565b61039b61198e565b610257600480360360208110156105b557600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16611994565b61036a611b8a565b61036a611ba6565b610257600480360360e08110156105f857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135611bc2565b61039b6004803603604081101561065657600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516611e8e565b610257611eab565b600c546001146106f457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4e6f626c653a204c4f434b454400000000000000000000000000000000000000604482015290519081900360640190fd5b6000600c55841515806107075750600084115b61075c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526021815260200180612fb46021913960400191505060405180910390fd5b600080610767610dbd565b5091509150816dffffffffffffffffffffffffffff168710801561079a5750806dffffffffffffffffffffffffffff1686105b61080557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f4e6f626c653a20494e53554646494349454e545f4c4951554944495459000000604482015290519081900360640190fd5b600654600754600091829173ffffffffffffffffffffffffffffffffffffffff91821691908116908916821480159061086a57508073ffffffffffffffffffffffffffffffffffffffff168973ffffffffffffffffffffffffffffffffffffffff1614155b6108d557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f4e6f626c653a20494e56414c49445f544f000000000000000000000000000000604482015290519081900360640190fd5b8a156108e6576108e6828a8d612091565b89156108f7576108f7818a8c612091565b86156109d9578873ffffffffffffffffffffffffffffffffffffffff16631a3cf0e1338d8d8c8c6040518663ffffffff1660e01b8152600401808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001858152602001848152602001806020018281038252848482818152602001925080828437600081840152601f19601f8201169050808301925050509650505050505050600060405180830381600087803b1580156109c057600080fd5b505af11580156109d4573d6000803e3d6000fd5b505050505b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff8416916370a08231916024808301926020929190829003018186803b158015610a4557600080fd5b505afa158015610a59573d6000803e3d6000fd5b505050506040513d6020811015610a6f57600080fd5b5051604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905191955073ffffffffffffffffffffffffffffffffffffffff8316916370a0823191602480820192602092909190829003018186803b158015610ae157600080fd5b505afa158015610af5573d6000803e3d6000fd5b505050506040513d6020811015610b0b57600080fd5b5051925060009150506dffffffffffffffffffffffffffff85168a90038311610b35576000610b4b565b89856dffffffffffffffffffffffffffff160383035b9050600089856dffffffffffffffffffffffffffff16038311610b6f576000610b85565b89856dffffffffffffffffffffffffffff160383035b90506000821180610b965750600081115b610c0157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4e6f626c653a20494e53554646494349454e545f494e5055545f414d4f554e54604482015290519081900360640190fd5b6000610c35610c1784601963ffffffff61229e16565b610c298761271063ffffffff61229e16565b9063ffffffff61232416565b90506000610c4d610c1784601963ffffffff61229e16565b9050610c866305f5e100610c7a6dffffffffffffffffffffffffffff8b8116908b1663ffffffff61229e16565b9063ffffffff61229e16565b610c96838363ffffffff61229e16565b1015610d0357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f4e6f626c653a204b000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b5050610d1184848888612396565b60408051838152602081018390528082018d9052606081018c9052905173ffffffffffffffffffffffffffffffffffffffff8b169133917fd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d8229181900360800190a350506001600c55505050505050505050565b6040518060400160405280600d81526020017f4e6f626c6553776170204c50730000000000000000000000000000000000000081525081565b6008546dffffffffffffffffffffffffffff808216926e0100000000000000000000000000008304909116917c0100000000000000000000000000000000000000000000000000000000900463ffffffff1690565b6000610e1f338484612652565b5060015b92915050565b60065473ffffffffffffffffffffffffffffffffffffffff1681565b60035481565b73ffffffffffffffffffffffffffffffffffffffff83166000908152600160209081526040808320338452909152812054821115610ed4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260288152602001806130d66028913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff841660009081526001602090815260408083203384529091529020547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff14610f9e5773ffffffffffffffffffffffffffffffffffffffff84166000908152600160209081526040808320338452909152902054610f6c908363ffffffff61232416565b73ffffffffffffffffffffffffffffffffffffffff851660009081526001602090815260408083203384529091529020555b610fa9848484612799565b5060019392505050565b7f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c981565b601281565b60045481565b60055473ffffffffffffffffffffffffffffffffffffffff16331461106857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4e6f626c653a20464f5242494444454e00000000000000000000000000000000604482015290519081900360640190fd5b6006805473ffffffffffffffffffffffffffffffffffffffff9384167fffffffffffffffffffffffff00000000000000000000000000000000000000009182161790915560078054929093169116179055565b60095481565b600a5481565b6000600c5460011461113a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4e6f626c653a204c4f434b454400000000000000000000000000000000000000604482015290519081900360640190fd5b6000600c8190558061114a610dbd565b50600654604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905193955091935060009273ffffffffffffffffffffffffffffffffffffffff909116916370a08231916024808301926020929190829003018186803b1580156111c457600080fd5b505afa1580156111d8573d6000803e3d6000fd5b505050506040513d60208110156111ee57600080fd5b5051600754604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905192935060009273ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b15801561126757600080fd5b505afa15801561127b573d6000803e3d6000fd5b505050506040513d602081101561129157600080fd5b5051905060006112b7836dffffffffffffffffffffffffffff871663ffffffff61232416565b905060006112db836dffffffffffffffffffffffffffff871663ffffffff61232416565b905060006112e987876129ce565b60035490915080611326576113126103e8610c2961130d878763ffffffff61229e16565b612b6f565b985061132160006103e8612bc1565b611383565b6113806dffffffffffffffffffffffffffff891661134a868463ffffffff61229e16565b8161135157fe5b046dffffffffffffffffffffffffffff8916611373868563ffffffff61229e16565b8161137a57fe5b04612cf2565b98505b600089116113dc576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612ffa6024913960400191505060405180910390fd5b6113e68a8a612bc1565b6113f286868a8a612396565b811561143457600854611430906dffffffffffffffffffffffffffff808216916e01000000000000000000000000000090041663ffffffff61229e16565b600b555b6040805185815260208101859052815133927f4c209b5fc8ad50758f13e2e1088ba56a560dff690a1c6fef26394f4c03821c4f928290030190a250506001600c5550949695505050505050565b60006020819052908152604090205481565b600b5481565b60026020526000908152604090205481565b600080600c5460011461151f57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4e6f626c653a204c4f434b454400000000000000000000000000000000000000604482015290519081900360640190fd5b6000600c8190558061152f610dbd565b50600654600754604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905194965092945073ffffffffffffffffffffffffffffffffffffffff9182169391169160009184916370a08231916024808301926020929190829003018186803b1580156115b157600080fd5b505afa1580156115c5573d6000803e3d6000fd5b505050506040513d60208110156115db57600080fd5b5051604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905191925060009173ffffffffffffffffffffffffffffffffffffffff8516916370a08231916024808301926020929190829003018186803b15801561164f57600080fd5b505afa158015611663573d6000803e3d6000fd5b505050506040513d602081101561167957600080fd5b50513060009081526020819052604081205491925061169888886129ce565b600354909150806116af848763ffffffff61229e16565b816116b657fe5b049a50806116ca848663ffffffff61229e16565b816116d157fe5b04995060008b1180156116e4575060008a115b611739576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806130b26024913960400191505060405180910390fd5b6117433084612d0a565b61174e878d8d612091565b611759868d8c612091565b604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff8916916370a08231916024808301926020929190829003018186803b1580156117c557600080fd5b505afa1580156117d9573d6000803e3d6000fd5b505050506040513d60208110156117ef57600080fd5b5051604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905191965073ffffffffffffffffffffffffffffffffffffffff8816916370a0823191602480820192602092909190829003018186803b15801561186157600080fd5b505afa158015611875573d6000803e3d6000fd5b505050506040513d602081101561188b57600080fd5b5051935061189b85858b8b612396565b81156118dd576008546118d9906dffffffffffffffffffffffffffff808216916e01000000000000000000000000000090041663ffffffff61229e16565b600b555b604080518c8152602081018c9052815173ffffffffffffffffffffffffffffffffffffffff8f169233927fdccd412f0b1252819cb1fd330b93224ca42612892bb3f4f789976e6d81936496929081900390910190a35050505050505050506001600c81905550915091565b6040518060400160405280600881526020017f4e6f626c652d4c5000000000000000000000000000000000000000000000000081525081565b6000610e1f338484612799565b6103e881565b600c54600114611a0557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4e6f626c653a204c4f434b454400000000000000000000000000000000000000604482015290519081900360640190fd5b6000600c55600654600754600854604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff9485169490931692611ae19285928792611adc926dffffffffffffffffffffffffffff169185916370a0823191602480820192602092909190829003018186803b158015611aa457600080fd5b505afa158015611ab8573d6000803e3d6000fd5b505050506040513d6020811015611ace57600080fd5b50519063ffffffff61232416565b612091565b600854604080517f70a082310000000000000000000000000000000000000000000000000000000081523060048201529051611b809284928792611adc926e01000000000000000000000000000090046dffffffffffffffffffffffffffff169173ffffffffffffffffffffffffffffffffffffffff8616916370a0823191602480820192602092909190829003018186803b158015611aa457600080fd5b50506001600c5550565b60055473ffffffffffffffffffffffffffffffffffffffff1681565b60075473ffffffffffffffffffffffffffffffffffffffff1681565b42841015611c3157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f4e6f626c653a2045585049524544000000000000000000000000000000000000604482015290519081900360640190fd5b60045473ffffffffffffffffffffffffffffffffffffffff80891660008181526002602090815260408083208054600180820190925582517f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98186015280840196909652958d166060860152608085018c905260a085019590955260c08085018b90528151808603909101815260e0850182528051908301207f19010000000000000000000000000000000000000000000000000000000000006101008601526101028501969096526101228085019690965280518085039096018652610142840180825286519683019690962095839052610162840180825286905260ff89166101828501526101a284018890526101c28401879052519193926101e2808201937fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081019281900390910190855afa158015611d92573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff811615801590611e0d57508873ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b611e7857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f4e6f626c653a20494e56414c49445f5349474e41545552450000000000000000604482015290519081900360640190fd5b611e83898989612652565b505050505050505050565b600160209081526000928352604080842090915290825290205481565b600c54600114611f1c57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600d60248201527f4e6f626c653a204c4f434b454400000000000000000000000000000000000000604482015290519081900360640190fd5b6000600c55600654604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905161208a9273ffffffffffffffffffffffffffffffffffffffff16916370a08231916024808301926020929190829003018186803b158015611f9357600080fd5b505afa158015611fa7573d6000803e3d6000fd5b505050506040513d6020811015611fbd57600080fd5b5051600754604080517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152905173ffffffffffffffffffffffffffffffffffffffff909216916370a0823191602480820192602092909190829003018186803b15801561203057600080fd5b505afa158015612044573d6000803e3d6000fd5b505050506040513d602081101561205a57600080fd5b50516008546dffffffffffffffffffffffffffff808216916e010000000000000000000000000000900416612396565b6001600c55565b604080518082018252601981527f7472616e7366657228616464726573732c75696e743235362900000000000000602091820152815173ffffffffffffffffffffffffffffffffffffffff85811660248301526044808301869052845180840390910181526064909201845291810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001781529251815160009460609489169392918291908083835b6020831061219757805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0909201916020918201910161215a565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146121f9576040519150601f19603f3d011682016040523d82523d6000602084013e6121fe565b606091505b509150915081801561222c57508051158061222c575080806020019051602081101561222957600080fd5b50515b61229757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601660248201527f4e6f626c653a205452414e534645525f4641494c454400000000000000000000604482015290519081900360640190fd5b5050505050565b60008115806122b9575050808202828282816122b657fe5b04145b610e2357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f64732d6d6174682d6d756c2d6f766572666c6f77000000000000000000000000604482015290519081900360640190fd5b80820382811115610e2357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601560248201527f64732d6d6174682d7375622d756e646572666c6f770000000000000000000000604482015290519081900360640190fd5b6dffffffffffffffffffffffffffff84118015906123c257506dffffffffffffffffffffffffffff8311155b61242d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f4e6f626c653a204f564552464c4f570000000000000000000000000000000000604482015290519081900360640190fd5b60085463ffffffff428116917c01000000000000000000000000000000000000000000000000000000009004811682039081161580159061247d57506dffffffffffffffffffffffffffff841615155b801561249857506dffffffffffffffffffffffffffff831615155b15612548578063ffffffff166124db856124b186612eb8565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169063ffffffff612edc16565b600980547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff929092169290920201905563ffffffff811661251b846124b187612eb8565b600a80547bffffffffffffffffffffffffffffffffffffffffffffffffffffffff92909216929092020190555b600880547fffffffffffffffffffffffffffffffffffff0000000000000000000000000000166dffffffffffffffffffffffffffff888116919091177fffffffff0000000000000000000000000000ffffffffffffffffffffffffffff166e0100000000000000000000000000008883168102919091177bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167c010000000000000000000000000000000000000000000000000000000063ffffffff871602179283905560408051848416815291909304909116602082015281517f1c411e9a96e071241c2f21f7726b17ae89e3cab4c78be50e062b03a9fffbbad1929181900390910190a1505050505050565b73ffffffffffffffffffffffffffffffffffffffff83166126be576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526024815260200180612f906024913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661272a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806130446022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b73ffffffffffffffffffffffffffffffffffffffff8316612805576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526025815260200180612fd56025913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216612871576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061308f6023913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff83166000908152602081905260409020548111156128ef576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061301e6026913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902054612925908263ffffffff61232416565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152602081905260408082209390935590841681522054612967908263ffffffff612f1d16565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b600080600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663017e7e586040518163ffffffff1660e01b815260040160206040518083038186803b158015612a3957600080fd5b505afa158015612a4d573d6000803e3d6000fd5b505050506040513d6020811015612a6357600080fd5b5051600b5473ffffffffffffffffffffffffffffffffffffffff8216158015945091925090612b5b578015612b56576000612aba61130d6dffffffffffffffffffffffffffff88811690881663ffffffff61229e16565b90506000612ac783612b6f565b905080821115612b53576000612afa6008610c7a612aeb868663ffffffff61232416565b6003549063ffffffff61229e16565b90506000612b2f612b1284600863ffffffff61229e16565b612b2386601163ffffffff61229e16565b9063ffffffff612f1d16565b90506000818381612b3c57fe5b0490508015612b4f57612b4f8782612bc1565b5050505b50505b612b67565b8015612b67576000600b555b505092915050565b60006003821115612bb2575080600160028204015b81811015612bac57809150600281828581612b9b57fe5b040181612ba457fe5b049050612b84565b50612bbc565b8115612bbc575060015b919050565b73ffffffffffffffffffffffffffffffffffffffff8216612c4357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f47545332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b600354612c56908263ffffffff612f1d16565b60035573ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054612c8f908263ffffffff612f1d16565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6000818310612d015781612d03565b825b9392505050565b73ffffffffffffffffffffffffffffffffffffffff8216612d76576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260298152602001806130666029913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054811115612df4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806130fe6022913960400191505060405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054612e2a908263ffffffff61232416565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902055600354612e63908263ffffffff61232416565b60035560408051828152905160009173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6dffffffffffffffffffffffffffff166e0100000000000000000000000000000290565b60006dffffffffffffffffffffffffffff82167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff841681612f1557fe5b049392505050565b80820182811015610e2357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601460248201527f64732d6d6174682d6164642d6f766572666c6f77000000000000000000000000604482015290519081900360640190fdfe47545332303a20617070726f76652066726f6d20746865207a65726f20616464726573734e6f626c653a20494e53554646494349454e545f4f55545055545f414d4f554e5447545332303a207472616e736665722066726f6d20746865207a65726f20616464726573734e6f626c653a20494e53554646494349454e545f4c49515549444954595f4d494e54454447545332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636547545332303a20617070726f766520746f20746865207a65726f206164647265737347545332303a2063616e206e6f74206275726e2066726f6d20746865207a65726f206164647265737347545332303a207472616e7366657220746f20746865207a65726f20616464726573734e6f626c653a20494e53554646494349454e545f4c49515549444954595f4255524e454447545332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636547545332303a206275726e20616d6f756e7420657863656564732062616c616e6365a265627a7a72315820706adc35ff00ad9ca8c3e07a2ad01bfc5392dc9ee3a4d4c867e28dd10be716b364736f6c63430005100032454950373132446f6d61696e28737472696e67206e616d652c737472696e672076657273696f6e2c75696e7432353620636861696e49642c6164647265737320766572696679696e67436f6e747261637429a265627a7a72315820f03c1f185c1fc344985cc3e846046203760973c00336b2a63abee9d8a0def68664736f6c63430005100032";

type NobleFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NobleFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NobleFactory__factory extends ContractFactory {
  constructor(...args: NobleFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _feeToSetter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<NobleFactory> {
    return super.deploy(_feeToSetter, overrides || {}) as Promise<NobleFactory>;
  }
  override getDeployTransaction(
    _feeToSetter: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_feeToSetter, overrides || {});
  }
  override attach(address: string): NobleFactory {
    return super.attach(address) as NobleFactory;
  }
  override connect(signer: Signer): NobleFactory__factory {
    return super.connect(signer) as NobleFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NobleFactoryInterface {
    return new utils.Interface(_abi) as NobleFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NobleFactory {
    return new Contract(address, _abi, signerOrProvider) as NobleFactory;
  }
}
