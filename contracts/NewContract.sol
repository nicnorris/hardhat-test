//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract NewContract {
    uint256 x = 2;
    uint256 y = 5;

    function sum() external view returns (uint256) {
        return x + y;
    }
}
