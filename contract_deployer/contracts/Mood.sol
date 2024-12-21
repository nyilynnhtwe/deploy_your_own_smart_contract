// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Mood {
    string public mood;
    function setMood(string memory _mood) public
    {
        mood=_mood;
    }
    function getMood() public view returns(string memory)
    {
        return mood;
    }
}