// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "./standard-libs/access/Ownable.sol";
import "./standard-libs/interfaces/IWGANG.sol";
import "./standard-libs/libraries/SafeMath.sol";
import "./standard-libs/interfaces/IGTS20.sol";


contract GangStaking is Ownable {

    using SafeMath for uint256;

    // Info of each user.
    struct UserInfo {
        uint256 amount; // How many LP tokens the user has provided.
        uint256 rewardDebt; // Reward debt. See explanation below.
        bool inBlackList;
    }

    // Info of each pool.
    struct PoolInfo {
        IGTS20 lpToken; // Address of LP token contract.
        uint256 allocPoint; // How many allocation points assigned to this pool. NOBLEs to distribute per block.
        uint256 lastRewardBlock; // Last block number that NOBLEs distribution occurs.
        uint256 accNoblePerShare; // Accumulated NOBLEs per share, times 1e12. See below.
    }

    // Info of each pool.
    PoolInfo[] public poolInfo;

    // Info of each user that stakes LP tokens.
    mapping(address => UserInfo) public userInfo;

    // The REWARD TOKEN
    IGTS20 public rewardToken;

    // Admin Address
    address public adminAddress;

    // wGANG Address
    address public immutable wGANG;

    // Limit 10 GANG here
    uint256 public limitAmount = 10000000000000000000;
    // Total allocation poitns. Must be the sum of all allocation points in all pools.
    uint256 public totalAllocPoint = 0;
    // NOBLE tokens created per block.
    uint256 public rewardPerBlock;
    // The block number when NOBLE mining starts.
    uint256 public startBlock;
    // The block number when NOBLE mining ends.
    uint256 public bonusEndBlock;

    event Deposit(address indexed user, uint256 amount);
    event Withdraw(address indexed user, uint256 amount);
    event EmergencyWithdraw(address indexed user, uint256 amount);

    constructor(IGTS20 _lp, IGTS20 _rewardToken, uint256 _rewardPerBlock, uint256 _startBlock, uint256 _bonusEndBlock, address _adminAddress, address _wGANG) {
        rewardToken = _rewardToken;
        rewardPerBlock = _rewardPerBlock;
        startBlock = _startBlock;
        bonusEndBlock = _bonusEndBlock;
        adminAddress = _adminAddress;
        wGANG = _wGANG;

        // Staking pool
        poolInfo.push(PoolInfo({lpToken: _lp, allocPoint: 1000, lastRewardBlock: startBlock, accNoblePerShare: 0}));

        totalAllocPoint = 1000;
    }


    modifier onlyAdmin() {
        require(msg.sender == adminAddress, "Admin: Message sender is not admin");
        _;
    }


    receive() external payable {
        assert(msg.sender == wGANG); // only accept GANG via fallback from the wGANG contract
    }


    // Update admin address by the previous dev.
    function setAdmin(address _adminAddress) public onlyOwner {
        adminAddress = _adminAddress;
    }


    function setBlackList(address _blacklistAddress) public onlyAdmin {
        userInfo[_blacklistAddress].inBlackList = true;
    }


    function removeBlackList(address _blacklistAddress) public onlyAdmin {
        userInfo[_blacklistAddress].inBlackList = false;
    }


    // Set the limit amount. Can only be called by the owner.
    function setLimitAmount(uint256 _amount) public onlyOwner {
        limitAmount = _amount;
    }


    // Return reward multiplier over the given _from to _to block.
    function getMultiplier(uint256 _from, uint256 _to) public view returns (uint256) {
       
        if (_to <= bonusEndBlock) {
            return _to.sub(_from);
        } 

        else if (_from >= bonusEndBlock) {
            return 0;
        } 

        else {
            return bonusEndBlock.sub(_from);
        }
    }


    // View function to see pending Reward on frontend.
    function pendingReward(address _user) external view returns (uint256) {
        PoolInfo storage pool = poolInfo[0];
        UserInfo storage user = userInfo[_user];
        uint256 accNoblePerShare = pool.accNoblePerShare;
        uint256 lpSupply = pool.lpToken.balanceOf(address(this));
        
        if (block.number > pool.lastRewardBlock && lpSupply != 0) {
            uint256 multiplier = getMultiplier(pool.lastRewardBlock, block.number);
            uint256 nobleReward = multiplier.mul(rewardPerBlock).mul(pool.allocPoint).div(totalAllocPoint);
            accNoblePerShare = accNoblePerShare.add(nobleReward.mul(1e12).div(lpSupply));
        }

        return user.amount.mul(accNoblePerShare).div(1e12).sub(user.rewardDebt);
    }


    // Update reward variables of the given pool to be up-to-date.
    function updatePool(uint256 _pid) public {
        PoolInfo storage pool = poolInfo[_pid];
        
        if (block.number <= pool.lastRewardBlock) {
            return;
        }

        uint256 lpSupply = pool.lpToken.balanceOf(address(this));
        if (lpSupply == 0) {
            pool.lastRewardBlock = block.number;
            return;
        }

        uint256 multiplier = getMultiplier(pool.lastRewardBlock, block.number);
        uint256 nobleReward = multiplier.mul(rewardPerBlock).mul(pool.allocPoint).div(totalAllocPoint);
        pool.accNoblePerShare = pool.accNoblePerShare.add(nobleReward.mul(1e12).div(lpSupply));
        pool.lastRewardBlock = block.number;
    }

    // Update reward variables for all pools. Be careful of gas spending!
    function massUpdatePools() public {
        uint256 length = poolInfo.length;
        for (uint256 pid = 0; pid < length; ++pid) {
            updatePool(pid);
        }
    }


    // Stake tokens to SmartChef
    function deposit() public payable {
        PoolInfo storage pool = poolInfo[0];
        UserInfo storage user = userInfo[msg.sender];

        require(user.amount.add(msg.value) <= limitAmount, "exceed the top");
        require(!user.inBlackList, "in black list");

        updatePool(0);
        
        if (user.amount > 0) {
            uint256 pending = user.amount.mul(pool.accNoblePerShare).div(1e12).sub(user.rewardDebt);
            if (pending > 0) {
                rewardToken.transfer(address(msg.sender), pending);
            }
        }

        if (msg.value > 0) {
            IWGANG(wGANG).deposit{value: msg.value}();
            assert(IWGANG(wGANG).transfer(address(this), msg.value));
            user.amount = user.amount.add(msg.value);
        }

        user.rewardDebt = user.amount.mul(pool.accNoblePerShare).div(1e12);

        emit Deposit(msg.sender, msg.value);
    }


    function safeTransferGANG(address to, uint256 value) internal {
        (bool success, ) = to.call{gas: 23000, value: value}("");
        // (bool success,) = to.call{value:value}(new bytes(0));
        require(success, "TransferHelper: ETH_TRANSFER_FAILED");
    }


    // Withdraw tokens from STAKING.
    function withdraw(uint256 _amount) public {
        PoolInfo storage pool = poolInfo[0];
        UserInfo storage user = userInfo[msg.sender];
        require(user.amount >= _amount, "Withdraw: amount entered is higher than user amount");
        updatePool(0);
        uint256 pending = user.amount.mul(pool.accNoblePerShare).div(1e12).sub(user.rewardDebt);
        
        if (pending > 0 && !user.inBlackList) {
            rewardToken.transfer(address(msg.sender), pending);
        }

        if (_amount > 0) {
            user.amount = user.amount.sub(_amount);
            IWGANG(wGANG).withdraw(_amount);
            safeTransferGANG(address(msg.sender), _amount);
        }
        user.rewardDebt = user.amount.mul(pool.accNoblePerShare).div(1e12);

        emit Withdraw(msg.sender, _amount);
    }

    // Withdraw without caring about rewards. EMERGENCY ONLY.
    function emergencyWithdraw() public {
        PoolInfo storage pool = poolInfo[0];
        UserInfo storage user = userInfo[msg.sender];

        pool.lpToken.transfer(address(msg.sender), user.amount);
        emit EmergencyWithdraw(msg.sender, user.amount);
        
        user.amount = 0;
        user.rewardDebt = 0;
    }

    // Withdraw reward. EMERGENCY ONLY.
    function emergencyRewardWithdraw(uint256 _amount) public onlyOwner {
        require(_amount < rewardToken.balanceOf(address(this)), "not enough token");
        rewardToken.transfer(address(msg.sender), _amount);
    }
}
