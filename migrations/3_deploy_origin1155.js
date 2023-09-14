const OriginErc1155 = artifacts.require("OriginErc1155");

module.exports = async function (deployer) {
  await deployer.deploy(
    OriginErc1155,
    "test 1155", // name
    "T1155" // symbol 
  );
};
