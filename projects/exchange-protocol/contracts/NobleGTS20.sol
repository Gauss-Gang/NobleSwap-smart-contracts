// SPDX-License-Identifier: GPL-3.0

pragma solidity 0.8.17;
import './interfaces/INobleGTS20.sol';


contract NobleGTS20 is INobleGTS20 {

    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;
    mapping(address => uint) private _nonces;

    string private _name;
    string private _symbol;
    uint8 private _decimals;
    uint256 private _totalSupply;

    bytes32 private _DOMAIN_SEPARATOR;
    // keccak256("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)");
    bytes32 private _PERMIT_TYPEHASH;


    constructor() {
        _name = 'NobleSwap LPs';
        _symbol = 'NOBLE-LP';
        _decimals = 18;
        
        uint chainId = block.chainid;

        _DOMAIN_SEPARATOR = keccak256(
            abi.encode(
                keccak256('EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)'),
                keccak256(bytes(_name)),
                keccak256(bytes('1')),
                chainId,
                address(this)
            )
        );

        _PERMIT_TYPEHASH = 0x6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9;
    }


    // Returns the DOMAIN_SEPARATOR
    function DOMAIN_SEPARATOR() public override view virtual returns (bytes32) {
        return _DOMAIN_SEPARATOR;
    }


    // Returns the PERMIT_TYPEHASH
    function PERMIT_TYPEHASH() public view virtual override returns (bytes32) {
        return _PERMIT_TYPEHASH;
    }


    // Returns the token name.
    function nonces(address owner) public view virtual override returns (uint) {
        return _nonces[owner];
    }


    // Returns the token name.
    function name() public view virtual override returns (string memory) {
        return _name;
    }
    
    
    // Returns the token symbol.
    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

 
    // Returns the token decimals.
    function decimals() public view virtual override returns (uint8) {
        return _decimals;
    }


    // Returns the total supply of token.
    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }


    // Returns balance of the referenced 'account' address.
    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }

    
    // Returns the remaining tokens that the 'spender' address can spend on behalf of the 'owner' address through the {transferFrom} function.
    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }


    // Sets 'amount' as the allowance of 'spender' then returns a boolean indicating result of operation. Emits an {Approval} event.
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        _approve(msg.sender, spender, amount);
        return true;
    }


    // Transfers an 'amount' of tokens from the callers account to the referenced 'recipient' address. Emits a {Transfer} event.
    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
        _transfer(msg.sender, recipient, amount);
        return true;
    }


    // Transfers an 'amount' of tokens from the 'sender' address to the 'recipient' address. Emits a {Transfer} event.
    function transferFrom(address sender, address recipient, uint256 amount) public virtual override returns (bool) {

        require(amount <= _allowances[sender][msg.sender], "ERC20: transfer amount exceeds allowance");
        
        unchecked {
            _approve(sender, msg.sender, (_allowances[sender][msg.sender] - amount));
        }

        _transfer(sender, recipient, amount);
        
        return true;
    }


    // Creates `amount` tokens and assigns them to `account`, increasing the total supply. Emits a {Transfer} event.
    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");

        _totalSupply += amount;
        unchecked {
            // Overflow not possible: balance + amount is at most totalSupply + amount, which is checked above.
            _balances[account] += amount;
        }
        emit Transfer(address(0), account, amount);
    }


    // Destroys `amount` tokens from `account`, reducing the total supply. Emits a {Transfer} event.
    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: burn from the zero address");

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
            // Overflow not possible: amount <= accountBalance <= totalSupply.
            _totalSupply -= amount;
        }

        emit Transfer(account, address(0), amount);
    }


    // Sets 'amount' as the allowance of 'spender' then returns a boolean indicating result of operation. Emits an {Approval} event.
    function _approve(address owner, address spender, uint256 amount) internal virtual {
        require(owner != address(0), 'ERC20: approve from the zero address');
        require(spender != address(0), 'ERC20: approve to the zero address');

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }


    // Internal function that moves tokens `amount` from `sender` to `recipient`.
    function _transfer(address sender, address recipient, uint256 amount) internal virtual {
        require(sender != address(0), 'ERC20: transfer from the zero address');
        require(recipient != address(0), 'ERC20: transfer to the zero address');
                
        require(amount <= _balances[sender], "ERC20: transfer amount exceeds balance");
        
        unchecked {
            _balances[sender] = _balances[sender] - amount;
            _balances[recipient] = _balances[recipient] + amount;
        }
        
        emit Transfer(sender, recipient, amount);
    }


    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external virtual override {
        require(deadline >= block.timestamp, 'Noble: EXPIRED');
        bytes32 digest = keccak256(abi.encodePacked
            (
                '\x19\x01',
                _DOMAIN_SEPARATOR,
                keccak256(abi.encode(_PERMIT_TYPEHASH, owner, spender, value, _nonces[owner]++, deadline))
            )
        );
        address recoveredAddress = ecrecover(digest, v, r, s);
        require(recoveredAddress != address(0) && recoveredAddress == owner, 'Noble: INVALID_SIGNATURE');
        _approve(owner, spender, value);
    }
}
