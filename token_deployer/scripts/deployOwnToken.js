const he = require("hardhat");

const main = async () => {
  const PyinNyar = await he.ethers.getContractFactory("PyinNyar");
  const pyinNyar = await PyinNyar.deploy("PyinNyar", "PNY");
  console.log("PyinNyar deployed to:", pyinNyar.target);
};

main();
