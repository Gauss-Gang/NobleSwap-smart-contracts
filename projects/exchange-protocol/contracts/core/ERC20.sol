pragma solidity =0.5.16;

import '../NobleGTS20.sol';

contract ERC20 is NobleGTS20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
