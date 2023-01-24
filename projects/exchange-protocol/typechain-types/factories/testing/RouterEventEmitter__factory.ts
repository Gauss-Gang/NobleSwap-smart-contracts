/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  RouterEventEmitter,
  RouterEventEmitterInterface,
} from "../../testing/RouterEventEmitter";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "Amounts",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapETHForExactTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapExactETHForTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapExactTokensForETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountOutMin",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapExactTokensForTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountInMax",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapTokensForExactETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountInMax",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "path",
        type: "address[]",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
    ],
    name: "swapTokensForExactTokens",
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
  "0x608060405234801561001057600080fd5b50611a42806100206000396000f3fe6080604052600436106100695760003560e01c8063b05f579e11610043578063b05f579e14610321578063fa3219d5146103ee578063fde1adda146104d257610070565b806322b5841014610075578063375734d9146101595780639c91fcb51461023d57610070565b3661007057005b600080fd5b34801561008157600080fd5b50610157600480360360c081101561009857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803590602001906401000000008111156100e957600080fd5b8201836020820111156100fb57600080fd5b8035906020019184602083028401116401000000008311171561011d57600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061059f565b005b34801561016557600080fd5b5061023b600480360360c081101561017c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803590602001906401000000008111156101cd57600080fd5b8201836020820111156101df57600080fd5b8035906020019184602083028401116401000000008311171561020157600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610909565b005b34801561024957600080fd5b5061031f600480360360c081101561026057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919080359060200190929190803590602001906401000000008111156102b157600080fd5b8201836020820111156102c357600080fd5b803590602001918460208302840111640100000000831117156102e557600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c73565b005b6103ec600480360360a081101561033757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561037e57600080fd5b82018360208201111561039057600080fd5b803590602001918460208302840111640100000000831117156103b257600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610fdd565b005b3480156103fa57600080fd5b506104d0600480360360c081101561041157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291908035906020019064010000000081111561046257600080fd5b82018360208201111561047457600080fd5b8035906020019184602083028401116401000000008311171561049657600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061133e565b005b61059d600480360360a08110156104e857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291908035906020019064010000000081111561052f57600080fd5b82018360208201111561054157600080fd5b8035906020019184602083028401116401000000008311171561056357600080fd5b9091929391929390803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506116a8565b005b6105b367971e0860e4a9b39d60c01b611a09565b6105c767d072c296ea58506e60c01b611a09565b6105db672fedb4e4466ea20660c01b611a09565b600060608873ffffffffffffffffffffffffffffffffffffffff16638803dbee60e01b89898989898960405160240180878152602001868152602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281038252868682818152602001925060200280828437600081840152601f19601f820116905080830192505050975050505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b6020831061071a57805182526020820191506020810190506020830392506106f7565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d806000811461077a576040519150601f19603f3d011682016040523d82523d6000602084013e61077f565b606091505b509150915061079867d0650ade8e2d5a4860c01b611a09565b6107ac671f946bb303c687cb60c01b611a09565b816107b357fe5b6107c767a0781fed543c4e8e60c01b611a09565b6107db6789d9a527bf709aa760c01b611a09565b7f4cc17991e3610e3400e74a8306aa421daaee1e3446fa22b490604610999e10b381806020019051602081101561081157600080fd5b810190808051604051939291908464010000000082111561083157600080fd5b8382019150602082018581111561084757600080fd5b825186602082028301116401000000008211171561086457600080fd5b8083526020830192505050908051906020019060200280838360005b8381101561089b578082015181840152602081019050610880565b505050509050016040525050506040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156108eb5780820151818401526020810190506108d0565b505050509050019250505060405180910390a1505050505050505050565b61091d6718252975abaefa8f60c01b611a09565b61093167563667707e0061fc60c01b611a09565b61094567e6b5e4e2c26f225f60c01b611a09565b600060608873ffffffffffffffffffffffffffffffffffffffff166338ed173960e01b89898989898960405160240180878152602001868152602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281038252868682818152602001925060200280828437600081840152601f19601f820116905080830192505050975050505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310610a845780518252602082019150602081019050602083039250610a61565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610ae4576040519150601f19603f3d011682016040523d82523d6000602084013e610ae9565b606091505b5091509150610b02676ce91f8c4f0999a560c01b611a09565b610b1667f0c50a463226765560c01b611a09565b81610b1d57fe5b610b3167d3b917696c392aa260c01b611a09565b610b45676b917954a1de713260c01b611a09565b7f4cc17991e3610e3400e74a8306aa421daaee1e3446fa22b490604610999e10b3818060200190516020811015610b7b57600080fd5b8101908080516040519392919084640100000000821115610b9b57600080fd5b83820191506020820185811115610bb157600080fd5b8251866020820283011164010000000082111715610bce57600080fd5b8083526020830192505050908051906020019060200280838360005b83811015610c05578082015181840152602081019050610bea565b505050509050016040525050506040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610c55578082015181840152602081019050610c3a565b505050509050019250505060405180910390a1505050505050505050565b610c87676d36592d3763ae0160c01b611a09565b610c9b67e4234a442fbd437060c01b611a09565b610caf67701c36c8bdf6735e60c01b611a09565b600060608873ffffffffffffffffffffffffffffffffffffffff166318cbafe560e01b89898989898960405160240180878152602001868152602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281038252868682818152602001925060200280828437600081840152601f19601f820116905080830192505050975050505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310610dee5780518252602082019150602081019050602083039250610dcb565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114610e4e576040519150601f19603f3d011682016040523d82523d6000602084013e610e53565b606091505b5091509150610e6c67b573671057b9597160c01b611a09565b610e806786210b96422a11be60c01b611a09565b81610e8757fe5b610e9b6772f96c1ed51f57c760c01b611a09565b610eaf67a859d71c342bd40a60c01b611a09565b7f4cc17991e3610e3400e74a8306aa421daaee1e3446fa22b490604610999e10b3818060200190516020811015610ee557600080fd5b8101908080516040519392919084640100000000821115610f0557600080fd5b83820191506020820185811115610f1b57600080fd5b8251866020820283011164010000000082111715610f3857600080fd5b8083526020830192505050908051906020019060200280838360005b83811015610f6f578082015181840152602081019050610f54565b505050509050016040525050506040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610fbf578082015181840152602081019050610fa4565b505050509050019250505060405180910390a1505050505050505050565b610ff167e00c0c209119e56060c01b611a09565b61100567879c94283948431a60c01b611a09565b61101967cf374083847759e660c01b611a09565b600060608773ffffffffffffffffffffffffffffffffffffffff1663fb3bdb4160e01b888888888860405160240180868152602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281038252868682818152602001925060200280828437600081840152601f19601f8201169050808301925050509650505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b60208310611150578051825260208201915060208101905060208303925061112d565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d80600081146111b0576040519150601f19603f3d011682016040523d82523d6000602084013e6111b5565b606091505b50915091506111ce67931091d671c9910360c01b611a09565b6111e2670866d4a20c35b00660c01b611a09565b816111e957fe5b6111fd6744206b07048206fc60c01b611a09565b61121167bab5103c9375c34860c01b611a09565b7f4cc17991e3610e3400e74a8306aa421daaee1e3446fa22b490604610999e10b381806020019051602081101561124757600080fd5b810190808051604051939291908464010000000082111561126757600080fd5b8382019150602082018581111561127d57600080fd5b825186602082028301116401000000008211171561129a57600080fd5b8083526020830192505050908051906020019060200280838360005b838110156112d15780820151818401526020810190506112b6565b505050509050016040525050506040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015611321578082015181840152602081019050611306565b505050509050019250505060405180910390a15050505050505050565b61135267f8a0d37bf5d7959b60c01b611a09565b6113666792a345d9b873196460c01b611a09565b61137a67a7fc06a332775bc960c01b611a09565b600060608873ffffffffffffffffffffffffffffffffffffffff16634a25d94a60e01b89898989898960405160240180878152602001868152602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281038252868682818152602001925060200280828437600081840152601f19601f820116905080830192505050975050505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b602083106114b95780518252602082019150602081019050602083039250611496565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d8060008114611519576040519150601f19603f3d011682016040523d82523d6000602084013e61151e565b606091505b50915091506115376728d377620c3c134760c01b611a09565b61154b67fd3d0f2ca538769e60c01b611a09565b8161155257fe5b61156667e2f39380512ab2d460c01b611a09565b61157a67db65b4aa883fedeb60c01b611a09565b7f4cc17991e3610e3400e74a8306aa421daaee1e3446fa22b490604610999e10b38180602001905160208110156115b057600080fd5b81019080805160405193929190846401000000008211156115d057600080fd5b838201915060208201858111156115e657600080fd5b825186602082028301116401000000008211171561160357600080fd5b8083526020830192505050908051906020019060200280838360005b8381101561163a57808201518184015260208101905061161f565b505050509050016040525050506040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561168a57808201518184015260208101905061166f565b505050509050019250505060405180910390a1505050505050505050565b6116bc67fab0f453eb1400f260c01b611a09565b6116d0671e3f60ee04ebf6a560c01b611a09565b6116e467754f1b588668441060c01b611a09565b600060608773ffffffffffffffffffffffffffffffffffffffff16637ff36ab560e01b888888888860405160240180868152602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018381526020018281038252868682818152602001925060200280828437600081840152601f19601f8201169050808301925050509650505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518082805190602001908083835b6020831061181b57805182526020820191506020810190506020830392506117f8565b6001836020036101000a038019825116818451168082178552505050505050905001915050600060405180830381855af49150503d806000811461187b576040519150601f19603f3d011682016040523d82523d6000602084013e611880565b606091505b50915091506118996796e13f08d0389aea60c01b611a09565b6118ad67d6865a606c70204e60c01b611a09565b816118b457fe5b6118c867ba1ff53890e55fe860c01b611a09565b6118dc6785006d80c5b223db60c01b611a09565b7f4cc17991e3610e3400e74a8306aa421daaee1e3446fa22b490604610999e10b381806020019051602081101561191257600080fd5b810190808051604051939291908464010000000082111561193257600080fd5b8382019150602082018581111561194857600080fd5b825186602082028301116401000000008211171561196557600080fd5b8083526020830192505050908051906020019060200280838360005b8381101561199c578082015181840152602081019050611981565b505050509050016040525050506040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156119ec5780820151818401526020810190506119d1565b505050509050019250505060405180910390a15050505050505050565b5056fea26469706673582212208d5c3269d1a66b6251c5aa372d7a12f68c9fe3f77aae418e5ddaf967b3757e2864736f6c63430006060033";

type RouterEventEmitterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RouterEventEmitterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RouterEventEmitter__factory extends ContractFactory {
  constructor(...args: RouterEventEmitterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RouterEventEmitter> {
    return super.deploy(overrides || {}) as Promise<RouterEventEmitter>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RouterEventEmitter {
    return super.attach(address) as RouterEventEmitter;
  }
  override connect(signer: Signer): RouterEventEmitter__factory {
    return super.connect(signer) as RouterEventEmitter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RouterEventEmitterInterface {
    return new utils.Interface(_abi) as RouterEventEmitterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RouterEventEmitter {
    return new Contract(address, _abi, signerOrProvider) as RouterEventEmitter;
  }
}