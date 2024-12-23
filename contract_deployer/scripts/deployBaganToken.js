const ht = require("hardhat");

const main = async () => {
    const BaganToken = await ht.ethers.getContractFactory("BaganToken");
    const baganToken = await BaganToken.deploy("BaganToken", "BGN");
    console.log(baganToken.target);
}
main();