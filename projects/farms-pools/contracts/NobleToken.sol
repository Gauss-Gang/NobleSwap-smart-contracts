/*  _____________________________________________________________________________
    NobleToken (NOBLE) Token Contract
    Name             : NobleToken
    Symbol           : NOBLE
    Total supply     : 2,500,000,000 (2.5 Billion)
    MIT License. (c) 2022 Gauss Gang Inc. 
    
    _____________________________________________________________________________
*/

// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;
import "./libraries/contracts/GTS20.sol";


contract NobleToken is GTS20("NobleSwap Token", "NOBLE") {

    // A checkpoint for marking number of votes from a given block.
    struct Checkpoint {
        uint32 fromBlock;
        uint256 votes;
    }
    
    // A record of the Delegates for each account.
    mapping (address => address) internal _delegates;

    // A record of votes checkpoints for each account, by index
    mapping (address => mapping (uint32 => Checkpoint)) public checkpoints;

    // The number of checkpoints for each account
    mapping (address => uint32) public numCheckpoints;

    // A record of states for signing / validating signatures
    mapping (address => uint) public nonces;

    // The EIP-712 typehash for the contract's domain
    bytes32 public constant DOMAIN_TYPEHASH = keccak256("EIP712Domain(string name,uint256 chainId,address verifyingContract)");

    // The EIP-712 typehash for the delegation struct used by the contract
    bytes32 public constant DELEGATION_TYPEHASH = keccak256("Delegation(address delegatee,uint256 nonce,uint256 expiry)");

    // An event thats emitted when an account changes its delegate
    event DelegateChanged(address indexed delegator, address indexed fromDelegate, address indexed toDelegate);

    // An event thats emitted when a delegate account's vote balance changes
    event DelegateVotesChanged(address indexed delegate, uint previousBalance, uint newBalance);


    // Creates `_amount` token to `_to`. Can only be called by the owner (MasterChef).
    function mint(address _to, uint256 _amount) public onlyOwner {
        _mint(_to, _amount);
        _moveDelegates(address(0), _delegates[_to], _amount);
    }

    
    // Returns the current "votes" balance for `account`
    function getCurrentVotes(address account) external view returns (uint256) {
        uint32 nCheckpoints = numCheckpoints[account];
        return nCheckpoints > 0 ? checkpoints[account][nCheckpoints - 1].votes : 0;
    }


    /*  Determines the prior number of votes for an 'account' per the given 'blockNnumber'.
            NOTE: Block number must be a finalized block or else this function will revert to prevent misinformation.
    */
    function getPriorVotes(address account, uint blockNumber) external view returns (uint256) {
        
        require(blockNumber < block.number, "NOBLE: getPriorVotes: not yet determined");

        uint32 nCheckpoints = numCheckpoints[account];
        if (nCheckpoints == 0) {
            return 0;
        }

        // First check most recent balance
        if (checkpoints[account][nCheckpoints - 1].fromBlock <= blockNumber) {
            return checkpoints[account][nCheckpoints - 1].votes;
        }

        // Next check implicit zero balance
        if (checkpoints[account][0].fromBlock > blockNumber) {
            return 0;
        }

        uint32 lower = 0;
        uint32 upper = nCheckpoints - 1;
        
        while (upper > lower) {            
            uint32 center = upper - (upper - lower) / 2; // ceil, avoiding overflow
            Checkpoint memory cp = checkpoints[account][center];
            
            if (cp.fromBlock == blockNumber) {
                return cp.votes;
            } 
            else if (cp.fromBlock < blockNumber) {
                lower = center;
            } 
            else {
                upper = center - 1;
            }
        }
        return checkpoints[account][lower].votes;
    }


    // Delegate votes from `msg.sender` to `delegator`.
    function delegates(address delegator) external view returns (address) {
        return _delegates[delegator];
    }


    // Delegate votes from `msg.sender` to `delegatee`.
    function delegate(address delegatee) external {
        return _delegate(msg.sender, delegatee);
    }


    /* Delegates votes from signatory to `delegatee`.
            Parameters:
                delegatee - The address to delegate votes to.
                nonce - The contract state required to match the signature.
                expiry - The time at which to expire the signature.
                v - The recovery byte of the signature.
                r - Half of the ECDSA signature pair.
                s - Half of the ECDSA signature pair.
    */
    function delegateBySig(address delegatee, uint nonce, uint expiry, uint8 v, bytes32 r, bytes32 s) external {
        bytes32 domainSeparator = keccak256(abi.encode(DOMAIN_TYPEHASH, keccak256(bytes(name())), getChainId(), address(this)));

        bytes32 structHash = keccak256(abi.encode(DELEGATION_TYPEHASH, delegatee, nonce, expiry));

        bytes32 digest = keccak256(abi.encodePacked("\x19\x01", domainSeparator, structHash));

        address signatory = ecrecover(digest, v, r, s);
        require(signatory != address(0), "NOBLE: delegateBySig: invalid signature");
        require(nonce == nonces[signatory]++, "NOBLE: delegateBySig: invalid nonce");
        require(block.timestamp <= expiry, "NOBLE: delegateBySig: signature expired");
        return _delegate(signatory, delegatee);
    }


    // Internal function to change the Delagate.
    function _delegate(address delegator, address delegatee) internal {
        address currentDelegate = _delegates[delegator];
        uint256 delegatorBalance = balanceOf(delegator); // balance of underlying NOBLE (not scaled);
        _delegates[delegator] = delegatee;

        emit DelegateChanged(delegator, currentDelegate, delegatee);

        _moveDelegates(currentDelegate, delegatee, delegatorBalance);
    }


    // Internal function to move delegate votes from one Representative to another.
    function _moveDelegates(address srcRep, address dstRep, uint256 amount) internal {
        
        if (srcRep != dstRep && amount > 0) {
            if (srcRep != address(0)) {
                // decrease old representative
                uint32 srcRepNum = numCheckpoints[srcRep];
                uint256 srcRepOld = srcRepNum > 0 ? checkpoints[srcRep][srcRepNum - 1].votes : 0;
                uint256 srcRepNew = srcRepOld - amount;
                _writeCheckpoint(srcRep, srcRepNum, srcRepOld, srcRepNew);
            }

            if (dstRep != address(0)) {
                // increase new representative
                uint32 dstRepNum = numCheckpoints[dstRep];
                uint256 dstRepOld = dstRepNum > 0 ? checkpoints[dstRep][dstRepNum - 1].votes : 0;
                uint256 dstRepNew = dstRepOld + amount;
                _writeCheckpoint(dstRep, dstRepNum, dstRepOld, dstRepNew);
            }
        }
    }


    // Internal funtion to write the current delegate votes to the checkpoint struct.
    function _writeCheckpoint(address delegatee, uint32 nCheckpoints, uint256 oldVotes, uint256 newVotes) internal {
       
        uint32 blockNumber = _safe32(block.number, "NOBLE: _writeCheckpoint: block number exceeds 32 bits");

        if (nCheckpoints > 0 && checkpoints[delegatee][nCheckpoints - 1].fromBlock == blockNumber) {
            checkpoints[delegatee][nCheckpoints - 1].votes = newVotes;
        } else {
            checkpoints[delegatee][nCheckpoints] = Checkpoint(blockNumber, newVotes);
            numCheckpoints[delegatee] = nCheckpoints + 1;
        }

        emit DelegateVotesChanged(delegatee, oldVotes, newVotes);
    }


    // Internal check to ensure entered Block Number is less than or equal the max 32 integer amount (2,147,483,647).
    function _safe32(uint n, string memory errorMessage) internal pure returns (uint32) {
        require(n < 2**32, errorMessage);
        return uint32(n);
    }


    // Returns the current ChainID for the chain this contract is deployed to.
    function getChainId() internal view returns (uint) {
        uint256 chainId;
        assembly { chainId := chainid() }
        return chainId;
    }


    // Internal function; overriden to allow GTS20Snapshot to update values before a Transfer event.
    function _beforeTokenTransfer(address from, address to, uint256 amount) internal override(GTS20) {
        super._beforeTokenTransfer(from, to, amount);
    }
}