# Noble Swap Contracts

<p align="left">
  <a href="https://nobleswap.app">
      <img src="https://user-images.githubusercontent.com/85043551/213883186-882ccc6c-7b0a-4ce8-b5e3-a8d7258aeee5.png" height="175">
  </a>
</p>


This repo contains all the contracts used in Noble Swap. It is divided in independent projects where each of them contains its smart contracts, test environment and unique config files.

## Existing projects

| Project name                                                          | Description                                                                                                                | Solidity version(s)      |
| --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| [GTS Library](./projects/gts-library)                                 | Standard implementation of a GTS20 Token with supporting Libraries.                                                         | 0.8.17                   |
| [Noble Vault](./projects/noble-vault)                                   | NOBLE vault ("AutoPool") contract that allows auto-compounding for NOBLE tokens.                                         | 0.6.12                   |
| [Exchange Protocol](./projects/exchange-protocol)                     | Based on Uniswap V2, it combines peripheral and core trading and liquidity protocols.                                       | 0.5.16 / 0.6.6           |
| [Farms and Pools](./projects/farms-pools)                             | Based on SushiSwap's MasterChef, it also includes stand-alone pools and pool deployer.                                     | 0.8.17                   |
| [NFT Markets](./projects/nft-markets)                                 | NFT marketplace for ERC721 tokens.                                                                                         | 0.8.17                   |
| [Profile, NFT, and Gamification](./projects/profile-nft-gamification) | Ferro Cards NFT, NFT factories, and Profile system.                                                                         | 0.6.12                   |
| [SmartChef Factory](./projects/smartchef)                             | SmartChef (a.k.a. Syrup Pools) Factory                                                                                     | 0.6.12 (v1) / 0.8.4 (v2) |

## Create a new project

1 - Create a new folder inside `projects` <br/>
2 - Run `yarn init`

Commands inside the root `package.json` starting with `lerna` will run the corresponding command in each subproject.
