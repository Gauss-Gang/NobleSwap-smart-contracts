// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "../access/Ownable.sol";
import "../testing/MockGTS20.sol";

contract CoinFactory is Ownable {
    event NewCoinCreated(address indexed coin);

    constructor() {}

    /*
     * @notice Deploy a new coin contract
     * @param name: coin name (e.g. Mock Coin)
     * @param symbol: symbol of the coin (e.g. COIN)
     * @param supply: supply
     */
    function deployCoin(
        string memory name,
        string memory symbol,
        uint256 supply
    ) external onlyOwner {
        MockGTS20 newCoin = new MockGTS20(name, symbol, supply);
        emit NewCoinCreated(address(newCoin));
    }
}
