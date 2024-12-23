// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PyinNyar is ERC20{
    constructor(string memory _name,string memory _symbol) ERC20(_name,_symbol){
        // 1 wei
        // 10^18 wei -> 1 eth
        // 10eth -> 10 own token
        _mint(msg.sender,100 * 10 ** 18);
    }
}