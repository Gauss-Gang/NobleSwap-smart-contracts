// SPDX-License-Identifier: GPL-3.0

pragma solidity =0.5.16;
import './interfaces/INobleGTS20.sol';
import './libraries/SafeMath.sol';


contract NobleGTS20 is INobleGTS20 {
    using SafeMath for uint256;

    mapping(address => uint256) public balanceOf;
    mapping(address => mapping(address => uint256)) public allowance;
    mapping(address => uint) public nonces;

    string public constant name = "NobleSwap LPs";
    string public constant symbol = "Noble-LP";
    uint8 public constant decimals = 18;
    uint256 public totalSupply;

    bytes32 public DOMAIN_SEPARATOR;
    // keccak256("Permit(address owner,address spender,uint256 value,uint256 nonce,uint256 deadline)");
    bytes32 public constant PERMIT_TYPEHASH = 0x6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9;


    constructor() public {

        uint256 chainId;
        assembly {
            chainId := chainid
        }

        DOMAIN_SEPARATOR = keccak256(
            abi.encode(
                keccak256('EIP712Domain(string name,string version,uint256 chainId,address verifyingContract)'),
                keccak256(bytes(name)),
                keccak256(bytes('1')),
                chainId,
                address(this)
            )
        );
    }


    // Sets 'amount' as the allowance of 'spender' then returns a boolean indicating result of operation. Emits an {Approval} event.
    function approve(address spender, uint256 amount) public returns (bool) {
        _approve(msg.sender, spender, amount);
        return true;
    }


    // Transfers an 'amount' of tokens from the callers account to the referenced 'recipient' address. Emits a {Transfer} event.
    function transfer(address recipient, uint256 amount) public returns (bool) {
        _transfer(msg.sender, recipient, amount);
        return true;
    }


    // Transfers an 'amount' of tokens from the 'sender' address to the 'recipient' address. Emits a {Transfer} event.
    function transferFrom(address sender, address recipient, uint256 amount) public returns (bool) {

        require(amount <= allowance[sender][msg.sender], "GTS20: transfer amount exceeds allowance");
        
        if (allowance[sender][msg.sender] != uint256(-1)) {
            allowance[sender][msg.sender] = allowance[sender][msg.sender].sub(amount);
        }

        _transfer(sender, recipient, amount);
        
        return true;
    }


    // Creates `amount` tokens and assigns them to `account`, increasing the total supply. Emits a {Transfer} event.
    function _mint(address account, uint256 amount) internal {
        require(account != address(0), "GTS20: mint to the zero address");

        totalSupply = totalSupply.add(amount);
        balanceOf[account] = balanceOf[account].add(amount);
        emit Transfer(address(0), account, amount);
    }


    // Destroys `amount` tokens from `account`, reducing the total supply. Emits a {Transfer} event.
    function _burn(address account, uint256 amount) internal {
        require(account != address(0), "GTS20: can not burn from the zero address");
        require(balanceOf[account] >= amount, "GTS20: burn amount exceeds balance");
        
        balanceOf[account] = balanceOf[account].sub(amount);
        totalSupply = totalSupply.sub(amount);

        emit Transfer(account, address(0), amount);
    }


    // Sets 'amount' as the allowance of 'spender' then returns a boolean indicating result of operation. Emits an {Approval} event.
    function _approve(address owner, address spender, uint256 amount) internal {
        require(owner != address(0), 'GTS20: approve from the zero address');
        require(spender != address(0), 'GTS20: approve to the zero address');

        allowance[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }


    // Internal function that moves tokens `amount` from `sender` to `recipient`.
    function _transfer(address sender, address recipient, uint256 amount) internal {
        require(sender != address(0), 'GTS20: transfer from the zero address');
        require(recipient != address(0), 'GTS20: transfer to the zero address');
                
        require(amount <= balanceOf[sender], "GTS20: transfer amount exceeds balance");
        
        balanceOf[sender] = balanceOf[sender].sub(amount);
        balanceOf[recipient] = balanceOf[recipient].add(amount);
                
        emit Transfer(sender, recipient, amount);
    }


    function permit(address owner, address spender, uint value, uint deadline, uint8 v, bytes32 r, bytes32 s) external {
        require(deadline >= block.timestamp, 'Noble: EXPIRED');
        bytes32 digest = keccak256(abi.encodePacked
            (
                '\x19\x01',
                DOMAIN_SEPARATOR,
                keccak256(abi.encode(PERMIT_TYPEHASH, owner, spender, value, nonces[owner]++, deadline))
            )
        );
        address recoveredAddress = ecrecover(digest, v, r, s);
        require(recoveredAddress != address(0) && recoveredAddress == owner, 'Noble: INVALID_SIGNATURE');
        _approve(owner, spender, value);
    }
}