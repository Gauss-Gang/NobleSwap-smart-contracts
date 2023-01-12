// Provides information about the current execution context, including the sender of the transaction and its data.
abstract contract Context {

    // Empty initializer, to prevent people from mistakenly deploying an instance of this contract, which should be used via inheritance.
    constructor() {}

    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}


interface ERC721Partial {
    function transferFrom(address from, address to, uint256 tokenId) external;
}


/*  _____________________________________________________________________________

    Gauss: Ferro Card Batch Transfer


    MIT License. (c) 2022 Gauss Gang Inc. 

    _____________________________________________________________________________
*/

// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

contract BatchTransfer is Context {
    /*  @notice Tokens on the given ERC-721 contract are transferred from you to a recipient.
                * Don't forget to execute setApprovalForAll first to authorize this contract.
                
                tokenContract: An ERC-721 contract address
                recipient:     The party that recieves the NFTs
                tokenIds:      Which token IDs are transferred
    */
    function batchTransfer(ERC721Partial tokenContract, address recipient, uint256[] calldata tokenIds) external {
        for (uint256 index; index < tokenIds.length; index++) {
            tokenContract.transferFrom(_msgSender(), recipient, tokenIds[index]);
        }
    }
}