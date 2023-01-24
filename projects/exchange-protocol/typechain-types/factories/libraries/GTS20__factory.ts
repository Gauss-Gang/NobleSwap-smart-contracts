/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { GTS20, GTS20Interface } from "../../libraries/GTS20";

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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200230238038062002302833981810160405281019062000037919062000285565b62000053676b1c5df2cda8f06560c01b620000ef60201b60201c565b6200006f672077619e7756979d60c01b620000ef60201b60201c565b816002908162000080919062000555565b506200009d67dbaac5950cbd8c0560c01b620000ef60201b60201c565b8060039081620000ae919062000555565b50620000cb67d103a184870c671e60c01b620000ef60201b60201c565b6012600460006101000a81548160ff021916908360ff16021790555050506200063c565b50565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200015b8262000110565b810181811067ffffffffffffffff821117156200017d576200017c62000121565b5b80604052505050565b600062000192620000f2565b9050620001a0828262000150565b919050565b600067ffffffffffffffff821115620001c357620001c262000121565b5b620001ce8262000110565b9050602081019050919050565b60005b83811015620001fb578082015181840152602081019050620001de565b60008484015250505050565b60006200021e6200021884620001a5565b62000186565b9050828152602081018484840111156200023d576200023c6200010b565b5b6200024a848285620001db565b509392505050565b600082601f8301126200026a576200026962000106565b5b81516200027c84826020860162000207565b91505092915050565b600080604083850312156200029f576200029e620000fc565b5b600083015167ffffffffffffffff811115620002c057620002bf62000101565b5b620002ce8582860162000252565b925050602083015167ffffffffffffffff811115620002f257620002f162000101565b5b620003008582860162000252565b9150509250929050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200035d57607f821691505b60208210810362000373576200037262000315565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620003dd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200039e565b620003e986836200039e565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b600062000436620004306200042a8462000401565b6200040b565b62000401565b9050919050565b6000819050919050565b620004528362000415565b6200046a62000461826200043d565b848454620003ab565b825550505050565b600090565b6200048162000472565b6200048e81848462000447565b505050565b5b81811015620004b657620004aa60008262000477565b60018101905062000494565b5050565b601f8211156200050557620004cf8162000379565b620004da846200038e565b81016020851015620004ea578190505b62000502620004f9856200038e565b83018262000493565b50505b505050565b600082821c905092915050565b60006200052a600019846008026200050a565b1980831691505092915050565b600062000545838362000517565b9150826002028217905092915050565b62000560826200030a565b67ffffffffffffffff8111156200057c576200057b62000121565b5b62000588825462000344565b62000595828285620004ba565b600060209050601f831160018114620005cd5760008415620005b8578287015190505b620005c4858262000537565b86555062000634565b601f198416620005dd8662000379565b60005b828110156200060757848901518255600182019150602085019450602081019050620005e0565b8683101562000627578489015162000623601f89168262000517565b8355505b6001600288020188555050505b505050505050565b611cb6806200064c6000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80636ebcf60711610081578063a457c2d71161005b578063a457c2d714610241578063a9059cbb14610271578063dd62ed3e146102a1576100d4565b80636ebcf607146101c357806370a08231146101f357806395d89b4114610223576100d4565b806323b872dd116100b257806323b872dd14610145578063313ce567146101755780633950935114610193576100d4565b806306fdde03146100d9578063095ea7b3146100f757806318160ddd14610127575b600080fd5b6100e16102d1565b6040516100ee9190611539565b60405180910390f35b610111600480360381019061010c91906115f4565b61039f565b60405161011e919061164f565b60405180910390f35b61012f610421565b60405161013c9190611679565b60405180910390f35b61015f600480360381019061015a9190611694565b610467565b60405161016c919061164f565b60405180910390f35b61017d6106cc565b60405161018a9190611703565b60405180910390f35b6101ad60048036038101906101a891906115f4565b61071f565b6040516101ba919061164f565b60405180910390f35b6101dd60048036038101906101d8919061171e565b61082f565b6040516101ea9190611679565b60405180910390f35b61020d6004803603810190610208919061171e565b610847565b60405161021a9190611679565b60405180910390f35b61022b6108cb565b6040516102389190611539565b60405180910390f35b61025b600480360381019061025691906115f4565b610999565b604051610268919061164f565b60405180910390f35b61028b600480360381019061028691906115f4565b610bd6565b604051610298919061164f565b60405180910390f35b6102bb60048036038101906102b6919061174b565b610c58565b6040516102c89190611679565b60405180910390f35b60606102e767399106bfb88f529760c01b610d1b565b6102fb67882d70b8d547a77660c01b610d1b565b61030f672c65c7a89638d07a60c01b610d1b565b6002805461031c906117ba565b80601f0160208091040260200160405190810160405280929190818152602001828054610348906117ba565b80156103955780601f1061036a57610100808354040283529160200191610395565b820191906000526020600020905b81548152906001019060200180831161037857829003601f168201915b5050505050905090565b60006103b5678bb61a75334f10dd60c01b610d1b565b6103c9674c88bf47bb1f28dd60c01b610d1b565b6103dd678f346006dea2bb0660c01b610d1b565b6103ef6103e8610d1e565b8484610d62565b610403673fbd4535947053cb60c01b610d1b565b6104176784acbb56a392064160c01b610d1b565b6001905092915050565b6000610437671fcefc02dc7d2db960c01b610d1b565b61044b67ac2306d0b2eb031860c01b610d1b565b61045f674454fcb5b68df90960c01b610d1b565b600554905090565b600061047d678b1dbe3105874b1a60c01b610d1b565b61049167013cb22b6830d60560c01b610d1b565b6104a567f0005c41ff6921d560c01b610d1b565b6104b084848461101b565b6104c4677573dcc8eeca169360c01b610d1b565b6104d86755ac89fcbb4d1b7860c01b610d1b565b6104ec6705e289187373b2fc60c01b610d1b565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610535610d1e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020548211156105b2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105a99061185d565b60405180910390fd5b6105c6670e1a7ebdd29d6cce60c01b610d1b565b6105da6779417c454118053160c01b610d1b565b6105ee67e7723cfc7e47040b60c01b610d1b565b61060267d9de16cfb62ec48360c01b610d1b565b6106998461060e610d1e565b84600160008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610658610d1e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205403610d62565b6106ad67d012c69a1137839060c01b610d1b565b6106c1678f7f113a85fd06a160c01b610d1b565b600190509392505050565b60006106e2671017738acab4a31860c01b610d1b565b6106f667c3203af13f60853660c01b610d1b565b61070a67e1e94dc2b97b4ad260c01b610d1b565b600460009054906101000a900460ff16905090565b60006107356782ef246e8b81ba4260c01b610d1b565b6107496711e0cff9e7e8c86460c01b610d1b565b61075d67ef46679cf3eb4d0b60c01b610d1b565b6107fd610768610d1e565b848460016000610776610d1e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546107f891906118ac565b610d62565b6108116771f72c18d367558060c01b610d1b565b61082567655a33db1fa8ed8b60c01b610d1b565b6001905092915050565b60006020528060005260406000206000915090505481565b600061085d6739146e84e779354660c01b610d1b565b610871677b3bdacd2fd1fc0760c01b610d1b565b6108856746b3a08c7d908d7360c01b610d1b565b6000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606108e167fa8fa3cf7e7bd66160c01b610d1b565b6108f567beebf5058023ef9460c01b610d1b565b6109096794e37872df30d04460c01b610d1b565b60038054610916906117ba565b80601f0160208091040260200160405190810160405280929190818152602001828054610942906117ba565b801561098f5780601f106109645761010080835404028352916020019161098f565b820191906000526020600020905b81548152906001019060200180831161097257829003601f168201915b5050505050905090565b60006109af67fa24be77d2ab526960c01b610d1b565b6109c367c7d2353e25c4e81960c01b610d1b565b6109d767702d06e2711d181360c01b610d1b565b6109eb67981e687575b91e2d60c01b610d1b565b600082600160006109fa610d1e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610a7c91906118e0565b1015610abd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ab490611986565b60405180910390fd5b610ad16750fba7d65d349dea60c01b610d1b565b610ae567588db6b71b3f3e9260c01b610d1b565b610af967fa78776050bdac1360c01b610d1b565b610b0d67719781fad8463aa560c01b610d1b565b610ba4610b18610d1e565b848460016000610b26610d1e565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205403610d62565b610bb86710f52ca7a73bd02660c01b610d1b565b610bcc67dd79b1738abceb8160c01b610d1b565b6001905092915050565b6000610bec67ce4478ebbc9c8b8960c01b610d1b565b610c006794f162dcf7381aef60c01b610d1b565b610c1467d8ff87e15db54f2860c01b610d1b565b610c26610c1f610d1e565b848461101b565b610c3a67395c5ca543497a7160c01b610d1b565b610c4e679cf42b4a0fcf15f660c01b610d1b565b6001905092915050565b6000610c6e6775295872453cf8bf60c01b610d1b565b610c826795a07a15923866a160c01b610d1b565b610c9667258899af2c8ec18960c01b610d1b565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b50565b6000610d3467239165e580f2266260c01b61148d565b610d48674c7f9327f69a310260c01b61148d565b610d5c67e172116c22108f4360c01b61148d565b33905090565b610d766738e73b7b7cafd20b60c01b610d1b565b610d8a67df9c8f583f8575f260c01b610d1b565b610d9e679e2db087e1819cf160c01b610d1b565b610db267e37bf7f6fbb2350860c01b610d1b565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603610e21576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1890611a18565b60405180910390fd5b610e356787b293192d6a4e9e60c01b610d1b565b610e49677393e46085705baa60c01b610d1b565b610e5d67f926bff58116c26860c01b610d1b565b610e7167d8cd379ef6f0ac6660c01b610d1b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610ee0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ed790611aaa565b60405180910390fd5b610ef467c36e7339aff29f9160c01b610d1b565b610f08678daf24a85381653660c01b610d1b565b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610f9d67dfd05c666ccd6f9460c01b610d1b565b610fb1671b40d15541a1029960c01b610d1b565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161100e9190611679565b60405180910390a3505050565b61102f67c1fc5e14050bf09860c01b610d1b565b61104367a21f0819ee9746c460c01b610d1b565b61105767f62de9fe0c2b7a1d60c01b610d1b565b61106b67426b6ea4c4c56cae60c01b610d1b565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036110da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110d190611b3c565b60405180910390fd5b6110ee67db534b15bc68bd1060c01b610d1b565b61110267df2dd5399f5eb55160c01b610d1b565b611116679546f7ca02aef26e60c01b610d1b565b61112a67c6aa311d06381d9760c01b610d1b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611199576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161119090611bce565b60405180910390fd5b6111ad67ade75a51fa7cf7ed60c01b610d1b565b6111c167d68b48639bd5a87260c01b610d1b565b6111d466d1dad1763708f460c01b610d1b565b6111df838383611490565b6111f3674956f3083049ee0560c01b610d1b565b61120767ccebef20d5ae91bf60c01b610d1b565b61121b67e97e835dffa7c49560c01b610d1b565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481111561129c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129390611c60565b60405180910390fd5b6112b067dfe1f77fcbb7c6ab60c01b610d1b565b6112c4673f912c2a5d0e649960c01b610d1b565b6112d8678d651c66dfa53d4360c01b610d1b565b806000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054036000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061136f676526c7ed137b7c8e60c01b610d1b565b806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546113b991906118ac565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555061140f678dc531d79849745860c01b610d1b565b61142367afbfa9354f4eb63a60c01b610d1b565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040516114809190611679565b60405180910390a3505050565b50565b6114a46735366e4525a315f660c01b610d1b565b505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156114e35780820151818401526020810190506114c8565b60008484015250505050565b6000601f19601f8301169050919050565b600061150b826114a9565b61151581856114b4565b93506115258185602086016114c5565b61152e816114ef565b840191505092915050565b600060208201905081810360008301526115538184611500565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061158b82611560565b9050919050565b61159b81611580565b81146115a657600080fd5b50565b6000813590506115b881611592565b92915050565b6000819050919050565b6115d1816115be565b81146115dc57600080fd5b50565b6000813590506115ee816115c8565b92915050565b6000806040838503121561160b5761160a61155b565b5b6000611619858286016115a9565b925050602061162a858286016115df565b9150509250929050565b60008115159050919050565b61164981611634565b82525050565b60006020820190506116646000830184611640565b92915050565b611673816115be565b82525050565b600060208201905061168e600083018461166a565b92915050565b6000806000606084860312156116ad576116ac61155b565b5b60006116bb868287016115a9565b93505060206116cc868287016115a9565b92505060406116dd868287016115df565b9150509250925092565b600060ff82169050919050565b6116fd816116e7565b82525050565b600060208201905061171860008301846116f4565b92915050565b6000602082840312156117345761173361155b565b5b6000611742848285016115a9565b91505092915050565b600080604083850312156117625761176161155b565b5b6000611770858286016115a9565b9250506020611781858286016115a9565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806117d257607f821691505b6020821081036117e5576117e461178b565b5b50919050565b7f47545332303a207472616e7366657220616d6f756e742065786365656473206160008201527f6c6c6f77616e6365000000000000000000000000000000000000000000000000602082015250565b60006118476028836114b4565b9150611852826117eb565b604082019050919050565b600060208201905081810360008301526118768161183a565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006118b7826115be565b91506118c2836115be565b92508282019050808211156118da576118d961187d565b5b92915050565b60006118eb826115be565b91506118f6836115be565b925082820390508181111561190e5761190d61187d565b5b92915050565b7f47545332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b60006119706025836114b4565b915061197b82611914565b604082019050919050565b6000602082019050818103600083015261199f81611963565b9050919050565b7f47545332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000611a026024836114b4565b9150611a0d826119a6565b604082019050919050565b60006020820190508181036000830152611a31816119f5565b9050919050565b7f47545332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b6000611a946022836114b4565b9150611a9f82611a38565b604082019050919050565b60006020820190508181036000830152611ac381611a87565b9050919050565b7f47545332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b6000611b266025836114b4565b9150611b3182611aca565b604082019050919050565b60006020820190508181036000830152611b5581611b19565b9050919050565b7f47545332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b6000611bb86023836114b4565b9150611bc382611b5c565b604082019050919050565b60006020820190508181036000830152611be781611bab565b9050919050565b7f47545332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b6000611c4a6026836114b4565b9150611c5582611bee565b604082019050919050565b60006020820190508181036000830152611c7981611c3d565b905091905056fea2646970667358221220a871a5bd4a7de3344c25608feb9a42296ac814a87a7cb52516bcfc2f513a8a3664736f6c63430008110033";

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
