// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";

contract Abitrage {
    address internal constant UNISWAP_V2_ROUTER_ADDRESS = 0xeE567Fe1712Faf6149d80dA1E6934E354124CfE3;
    address internal usdc = 0xf08A50178dfcDe18524640EA6618a1f965821715;

    IUniswapV2Router02 public uniswapV2Router;

    constructor() {
        uniswapV2Router = IUniswapV2Router02(UNISWAP_V2_ROUTER_ADDRESS);
    }

    function convertEthToUsdc(uint usdcAmount) public payable {
        uint deadline = block.timestamp + 15;
        uniswapV2Router.swapETHForExactTokens{value: msg.value}(usdcAmount, getPathForEthToUsdc(), address(this), deadline);
        (bool success,) = msg.sender.call{value: address(this).balance}("");
        require(success, "refund failed");
    }

    function getPathForEthToUsdc() private view returns(address [] memory) {
        address[] memory path = new address[](2);
        path[0] = uniswapV2Router.WETH();
        path[1] = usdc;

        return path;
    }

    receive() payable external {}
}
