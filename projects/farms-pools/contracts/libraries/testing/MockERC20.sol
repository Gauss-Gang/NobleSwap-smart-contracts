// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "../contracts/GTS20.sol";


contract MockGTS20 is GTS20 {
    constructor(
        string memory name,
        string memory symbol,
        uint256 supply
    ) GTS20(name, symbol) {
        _mint(msg.sender, supply);
    }

    function mintTokens(uint256 _amount) external {
        _mint(msg.sender, _amount);
    }
}
