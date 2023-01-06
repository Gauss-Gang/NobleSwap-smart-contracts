// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.17;


interface INobleMigrator {
    function migrate(address token, uint amountTokenMin, uint amountETHMin, address to, uint deadline) external;
}