// SPDX-License-Identifier: GPL-3.0-only
pragma solidity >=0.5.0;

import "../interfaces/INoblePair.sol";
import "../interfaces/INobleFactory.sol";
import "./SafeMath.sol";


library NobleLibrary {
    using SafeMath for uint;

    // Returns sorted token addresses, used to handle return values from pairs sorted in this order.
    function sortTokens(address tokenA, address tokenB) internal pure returns (address token0, address token1) {
        require(tokenA != tokenB, 'NobleLibrary: IDENTICAL_ADDRESSES');
        (token0, token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);
        require(token0 != address(0), 'NobleLibrary: ZERO_ADDRESS');
    }


    // Calculates the CREATE2 address for a pair without making any external calls.
    function pairFor(address factory, address tokenA, address tokenB) internal pure returns (address pair) {
        
        (address token0, address token1) = sortTokens(tokenA, tokenB);
        pair = address(
            uint256(
                keccak256(
                    abi.encodePacked(
                        hex"ff",
                        factory,
                        keccak256(abi.encodePacked(token0, token1)),
                        hex"a30d8881d5fc03317d61b3b3b25024d89f0b6f73b17f2f667c512dbbf26f9095" // init code hash
                        //If the above init code has does not work, try; 3fc40b6337623897486dc551948af195ebd1452c6bbb7aedfbd4e292384a6da6
                    )
                )
            )
        );
    }


    // Fetches and sorts the reserves for a pair,
    function getReserves(address factory, address tokenA, address tokenB) internal view returns (uint reserveA, uint reserveB) {
        (address token0,) = sortTokens(tokenA, tokenB);
        pairFor(factory, tokenA, tokenB);
        (uint reserve0, uint reserve1,) = INoblePair(pairFor(factory, tokenA, tokenB)).getReserves();
        (reserveA, reserveB) = tokenA == token0 ? (reserve0, reserve1) : (reserve1, reserve0);
    }


    // Given some amount of an asset and pair reserves, returns an equivalent amount of the other asset.
    function quote(uint amountA, uint reserveA, uint reserveB) internal pure returns (uint amountB) {
        require(amountA > 0, 'NobleLibrary: INSUFFICIENT_AMOUNT');
        require(reserveA > 0 && reserveB > 0, 'NobleLibrary: INSUFFICIENT_LIQUIDITY');
        
        amountB = amountA.mul(reserveB) / reserveA;
    }


    // Given an input amount of an asset and pair reserves, returns the maximum output amount of the other asset.
    function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) internal pure returns (uint amountOut) {
        require(amountIn > 0, "NobleLibrary: INSUFFICIENT_INPUT_AMOUNT");
        require(reserveIn > 0 && reserveOut > 0, "NobleLibrary: INSUFFICIENT_LIQUIDITY");
        
        uint256 amountInWithFee = amountIn.mul(9975);
        uint256 numerator = amountInWithFee.mul(reserveOut);
        uint256 denominator = reserveIn.mul(10000).add(amountInWithFee);
        amountOut = numerator / denominator;
    }


    // Given an output amount of an asset and pair reserves, returns a required input amount of the other asset.
    function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) internal pure returns (uint amountIn) {
        require(amountOut > 0, "NobleLibrary: INSUFFICIENT_OUTPUT_AMOUNT");
        require(reserveIn > 0 && reserveOut > 0, "NobleLibrary: INSUFFICIENT_LIQUIDITY");
        
        uint256 numerator = reserveIn.mul(amountOut).mul(10000);
        uint256 denominator = reserveOut.sub(amountOut).mul(9975);
        amountIn = (numerator / denominator).add(1);
    }


    // Performs chained getAmountOut calculations on any number of pairs.
    function getAmountsOut(address factory, uint amountIn, address[] memory path) internal view returns (uint[] memory amounts) {
        require(path.length >= 2, 'NobleLibrary: INVALID_PATH');
        
        amounts = new uint256[](path.length);
        amounts[0] = amountIn;
        
        for (uint256 i; i < path.length - 1; i++) {
            (uint256 reserveIn, uint256 reserveOut) = getReserves(factory, path[i], path[i + 1]);
            amounts[i + 1] = getAmountOut(amounts[i], reserveIn, reserveOut);
        }
    }


    // Performs chained getAmountIn calculations on any number of pairs.
    function getAmountsIn(address factory, uint amountOut, address[] memory path) internal view returns (uint[] memory amounts) {
        require(path.length >= 2, 'NobleLibrary: INVALID_PATH');
        
        amounts = new uint256[](path.length);
        amounts[amounts.length - 1] = amountOut;
        
        for (uint256 i = path.length - 1; i > 0; i--) {
            (uint256 reserveIn, uint256 reserveOut) = getReserves(factory, path[i - 1], path[i]);
            amounts[i - 1] = getAmountIn(amounts[i], reserveIn, reserveOut);
        }
    }
}
