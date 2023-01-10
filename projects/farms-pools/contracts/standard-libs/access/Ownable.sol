// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;
import "../utilities/Context.sol";



// Provides a basic access control mechanism, where an account '_owner' can be granted exclusive access to specific functions by using the modifier `onlyOwner`.
abstract contract Ownable is Context {
    
    address private _owner;
    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);


    // Initializes the contract, setting the deployer as the initial owner.
    constructor() {
        _transferOwnership(_msgSender());
    }

    
    // Throws if called by any account other than the owner.
    modifier onlyOwner() {
        require(_owner == _msgSender(), "Ownable: caller is not the owner");
        _;
    }

    
    // Returns the address of the current owner.
    function owner() public view virtual returns (address) {
        return _owner;
    }


    // Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner.
    function renounceOwnership() public virtual onlyOwner {
        _transferOwnership(address(0));
    }

    
    // Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        _transferOwnership(newOwner);
    }


    // Internal function, transfers ownership of the contract to a new account (`newOwner`).
    function _transferOwnership(address newOwner) internal virtual {
        address oldOwner = _owner;
        _owner = newOwner;
        emit OwnershipTransferred(oldOwner, newOwner);
    }
}