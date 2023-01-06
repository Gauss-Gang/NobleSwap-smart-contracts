// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import "../interfaces/IGTS20.sol";
import "./Context.sol";


// Implementation of the IGTS20 Interface, using Context
contract GTS20 is Context, IGTS20 {

    // Creates mapping for the collections of balances and allowances.
    mapping(address => uint256) public _balances;
    mapping(address => mapping(address => uint256)) private _allowances;
    
    // Initializes variables for the name, symbol, decimals, and the total Supply of the GTS20 token.
    string private _name;
    string private _symbol;
    uint8 private _decimals;
    uint256 private _totalSupply;


    // Sets the values for {name}, {symbol}, {decimals}, and {totalSupply}.
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
        _decimals = 18;
    }

    
    // Returns the token name.
    function name() public override view returns (string memory) {
        return _name;
    }
    
    
    // Returns the token symbol.
    function symbol() public override view returns (string memory) {
        return _symbol;
    }

 
    // Returns the token decimals.
    function decimals() public override view returns (uint8) {
        return _decimals;
    }


    // Returns the total supply of token.
    function totalSupply() public override view returns (uint256) {
        return _totalSupply;
    }


    // Returns balance of the referenced 'account' address.
    function balanceOf(address account) public override view returns (uint256) {
        return _balances[account];
    }

    
    // Returns the remaining tokens that the 'spender' address can spend on behalf of the 'owner' address through the {transferFrom} function.
    function allowance(address owner, address spender) public override view returns (uint256) {
        return _allowances[owner][spender];
    }
    
    
    // Atomically increases the allowance granted to `spender` by the caller.
    function increaseAllowance(address spender, uint256 addedValue) public returns (bool) {
        _approve(_msgSender(), spender, (_allowances[_msgSender()][spender] + addedValue));
        return true;
    }
    
    
    // Atomically decreases the allowance granted to `spender` by the caller.
    function decreaseAllowance(address spender, uint256 subtractedValue) public returns (bool) {
        require((_allowances[_msgSender()][spender] - subtractedValue) >= 0, "GTS20: decreased allowance below zero");
        
        unchecked {
            _approve(_msgSender(), spender, (_allowances[_msgSender()][spender] - subtractedValue));
        }
        
        return true;
    }


    // Sets 'amount' as the allowance of 'spender' then returns a boolean indicating result of operation. Emits an {Approval} event.
    function approve(address spender, uint256 amount) public override returns (bool) {
        _approve(_msgSender(), spender, amount);
        return true;
    }
    
    
    // Sets 'amount' as the allowance of 'spender' then returns a boolean indicating result of operation. Emits an {Approval} event.
    function _approve(address owner, address spender, uint256 amount) internal {
        require(owner != address(0), 'GTS20: approve from the zero address');
        require(spender != address(0), 'GTS20: approve to the zero address');

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }
    
    
    // Transfers an 'amount' of tokens from the callers account to the referenced 'recipient' address. Emits a {Transfer} event.
    function transfer(address recipient, uint256 amount) public override returns (bool) {
        _transfer(_msgSender(), recipient, amount);
        return true;
    }


    // Transfers an 'amount' of tokens from the 'sender' address to the 'recipient' address. Emits a {Transfer} event.
    function transferFrom(address sender, address recipient, uint256 amount) public override returns (bool) {
        _transfer(sender, recipient, amount);
        
        require(amount <= _allowances[sender][_msgSender()], "GTS20: transfer amount exceeds allowance");
        
        unchecked {
            _approve(sender, _msgSender(), (_allowances[sender][_msgSender()] - amount));
        }
        
        return true;
    }
    
    
    // Internal function that moves tokens `amount` from `sender` to `recipient`.
    function _transfer(address sender, address recipient, uint256 amount) internal virtual {
        require(sender != address(0), 'GTS20: transfer from the zero address');
        require(recipient != address(0), 'GTS20: transfer to the zero address');
        
        _beforeTokenTransfer(sender, recipient, amount);
        
        require(amount <= _balances[sender], "GTS20: transfer amount exceeds balance");
        
        unchecked {
            _balances[sender] = _balances[sender] - amount;
        }
        
        _balances[recipient] = _balances[recipient] + amount;
        
        emit Transfer(sender, recipient, amount);
    }
 

    // Creates `amount` tokens and assigns them to `account`, increasing the total supply. Emits a {Transfer} event.
    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");

        _beforeTokenTransfer(address(0), account, amount);

        _totalSupply += amount;
        unchecked {
            // Overflow not possible: balance + amount is at most totalSupply + amount, which is checked above.
            _balances[account] += amount;
        }
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }


    // Destroys `amount` tokens from `account`, reducing the total supply. Emits a {Transfer} event.
    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: burn from the zero address");

        _beforeTokenTransfer(account, address(0), amount);

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
            // Overflow not possible: amount <= accountBalance <= totalSupply.
            _totalSupply -= amount;
        }

        emit Transfer(account, address(0), amount);

        _afterTokenTransfer(account, address(0), amount);
    }

    
    /*  Hook that is called before any transfer of tokens. This includes minting and burning.
     
        Calling conditions:
            - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens will be transferred to `to`.
            - when `from` is zero, `amount` tokens will be minted for `to`.
            - when `to` is zero, `amount` of ``from``'s tokens will be burned.
            - `from` and `to` are never both zero.
    */
    function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual {}


    /*  Hook that is called after any transfer of tokens. This includes minting and burning.
     
        Calling conditions:
            - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens has been transferred to `to`.
            - when `from` is zero, `amount` tokens have been minted for `to`.
            - when `to` is zero, `amount` of ``from``'s tokens have been burned.
            - `from` and `to` are never both zero.
     */
    function _afterTokenTransfer(address from, address to, uint256 amount) internal virtual {}
}
