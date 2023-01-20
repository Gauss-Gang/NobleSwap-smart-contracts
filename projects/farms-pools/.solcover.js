// Contracts are compiled without optimization
// and with gas estimation distortion
// https://github.com/sc-forks/solidity-coverage/blob/master/HARDHAT_README.md#usage

module.exports = {
  skipFiles: [
    "standard-libs/testing/CoinFactory.sol",
    "standard-libs/testing/MockGTS20.sol",
    "wGANG.sol",
    "GangStaking.sol",
    "NobleToken.sol",
    "MasterChef.sol",
    "NobleBar.sol",
    "standard-libs/contracts/Timelock.sol",
  ],
  measureStatementCoverage: false,
  measureFunctionCoverage: true,
};
