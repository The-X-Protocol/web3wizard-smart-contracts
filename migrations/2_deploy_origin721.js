const OriginErc721 = artifacts.require("OriginErc721");

module.exports = async function (deployer) {
  await deployer.deploy(
    OriginErc721,
    "test NFT", // name
    "TNFT", // symbol 
  );
};
