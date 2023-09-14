const OriginErc20 = artifacts.require("OriginErc20");

module.exports = async function (deployer) {
  await deployer.deploy(
    OriginErc20,
    "test name", // name
    "tn", // symbol
    1, // initial balance
    "0x42C81dA41471cd323F46261C3bA4a1554efC4B00", // owner address (string)
    18 // decimals
  );
};
