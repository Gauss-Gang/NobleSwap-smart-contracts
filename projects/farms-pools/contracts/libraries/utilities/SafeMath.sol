// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;



/*  CAUTION
        This version of SafeMath should only be used with Solidity 0.8 or later,
        because it relies on the compiler's built in overflow checks.

        NOTE:   `SafeMath` is generally not needed starting with Solidity 0.8, since the compiler
                now has built in overflow checking.
*/

// Library that adds wrappers over Solidity's arithmetic operations.
library SafeMath {
    
    //  Returns the addition of two unsigned integers, with an overflow flag.
    function tryAdd(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            uint256 c = a + b;
            if (c < a) return (false, 0);
            return (true, c);
        }
    }


    // Returns the subtraction of two unsigned integers, with an overflow flag.
    function trySub(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b > a) return (false, 0);
            return (true, a - b);
        }
    }


    // Returns the multiplication of two unsigned integers, with an overflow flag.
    function tryMul(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
            // benefit is lost if 'b' is also tested.
            // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522
            if (a == 0) return (true, 0);
            uint256 c = a * b;
            if (c / a != b) return (false, 0);
            return (true, c);
        }
    }


    // Returns the division of two unsigned integers, with a division by zero flag.
    function tryDiv(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b == 0) return (false, 0);
            return (true, a / b);
        }
    }


    // Returns the remainder of dividing two unsigned integers, with a division by zero flag.
    function tryMod(uint256 a, uint256 b) internal pure returns (bool, uint256) {
        unchecked {
            if (b == 0) return (false, 0);
            return (true, a % b);
        }
    }


    // Returns the addition of two unsigned integers, reverting on overflow.
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        return a + b;
    }


    // Returns the subtraction of two unsigned integers, reverting on overflow (when the result is negative).
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return a - b;
    }


    // Returns the multiplication of two unsigned integers, reverting on overflow.
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        return a * b;
    }


    // Returns the integer division of two unsigned integers, reverting on division by zero. The result is rounded towards zero.
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return a / b;
    }


    // Returns the remainder of dividing two unsigned integers. (unsigned integer modulo), reverting when dividing by zero.
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return a % b;
    }


    // Returns the subtraction of two unsigned integers, reverting with custom message on overflow (when the result is negative).
    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        unchecked {
            require(b <= a, errorMessage);
            return a - b;
        }
    }


    // Returns the integer division of two unsigned integers, reverting with custom message on division by zero. The result is rounded towards zero.
    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        unchecked {
            require(b > 0, errorMessage);
            return a / b;
        }
    }


    // Returns the remainder of dividing two unsigned integers. (unsigned integer modulo), reverting with custom message when dividing by zero.
    function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        unchecked {
            require(b > 0, errorMessage);
            return a % b;
        }
    }
}