// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;


// Provides information about the current execution context, including the sender of the transaction and its data.
abstract contract Context {

    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}