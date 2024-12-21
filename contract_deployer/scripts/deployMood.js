const he = require("hardhat");

const main = async () => {
    const Mood = await he.ethers.getContractFactory("Mood");
    const mood = await Mood.deploy();
    console.log(mood.target);
}

main();