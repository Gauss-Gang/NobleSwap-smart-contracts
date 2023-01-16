/*  _____________________________________________________________________________

    Wrapped GANG (wGANG) Token Contract

    Name             : Wrapped GANG
    Symbol           : wGANG

    GPL3.0 License. (c) 2023 Gauss Gang Inc. 
    
    _____________________________________________________________________________
*/

// SPDX-License-Identifier: GPL-3.0-only

pragma solidity 0.8.17;
import "./standard-libs/interfaces/IWGANG.sol";


// Wrapped GANG contract for the native Gauss(GANG) coin. 
contract wGANG is IWGANG {

    event Approval(address indexed src, address indexed guy, uint256 wad);
    event Transfer(address indexed src, address indexed dst, uint256 wad);
    event Deposit(address indexed dst, uint wad);
    event Withdrawal(address indexed src, uint wad);

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;

    string public name = "Wrapped GANG";
    string public symbol = "wGANG";
    uint8  public decimals = 18;


    // Receive fallback function for GANG.
    receive() external payable {
        deposit();
    }


    // Deposit GANG and recieve equal amount of wGANG in return.
    function deposit() public payable {
        balanceOf[msg.sender] += msg.value;
        emit Deposit(msg.sender, msg.value);
    }


    // Withdraws GANG by first remoinvg wGANG and sending the appropriate amount to msg.sender.
    function withdraw(uint wad) public {
        
        require(wad <= balanceOf[msg.sender], "GTS20: transfer amount exceeds balance");
        
        unchecked {
            balanceOf[msg.sender] = balanceOf[msg.sender] - wad;
        }        
        payable(msg.sender).transfer(wad);

        emit Withdrawal(msg.sender, wad);
    }


    // Returns the total supply of Wrapped Gang by checking how much GANG is currently deposited.
    function totalSupply() public view returns (uint) {
        return address(this).balance;
    }


    // Sets 'amount' as the allowance of 'spender' then returns a boolean indicating result of operation. Emits an {Approval} event.
    function approve(address spender, uint256 amount) public returns (bool) {
        _approve(msg.sender, spender, amount);
        return true;
    }


    // Sets 'wad' as the allowance of 'guy' then returns a boolean indicating result of operation. Emits an {Approval} event.
    function _approve(address owner, address guy, uint wad) internal {
        allowance[owner][guy] = wad;
        emit Approval(owner, guy, wad);
    }


    // Transfers an amount 'wad' of tokens from the callers account to the referenced 'dst' address. Emits a {Transfer} event.
    function transfer(address dst, uint wad) public returns (bool) {
        return transferFrom(msg.sender, dst, wad);
    }


    // Transfers an amount 'wad' of tokens from the 'src' address to the 'dst' address. Emits a {Transfer} event.
    function transferFrom(address src, address dst, uint256 wad) public returns (bool) {
        require(wad <= balanceOf[src], "GTS20: transfer amount exceeds balance");
        require(wad <= allowance[src][msg.sender], "GTS20: transfer amount exceeds allowance");

        if (src != msg.sender && allowance[src][msg.sender] != type(uint).max) {
            _approve(src, msg.sender, (allowance[src][msg.sender] - wad));
        }        

        unchecked {
            balanceOf[src] = balanceOf[src] - wad;
        }
        
        balanceOf[dst] = balanceOf[dst] + wad;

        emit Transfer(src, dst, wad);
        
        return true;
    }
}