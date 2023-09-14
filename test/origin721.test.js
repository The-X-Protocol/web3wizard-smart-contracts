const OriginErc721 = artifacts.require("./OriginErc721.sol");
  // TODO: more negative senarios 

contract("OriginErc721 NFT contract", accounts => {
  const [owner, account1, account2] = accounts;
  const tokenId = 1;

  let nftContract;

  before(async () => {
    nftContract = await OriginErc721.deployed();
  });

  async function createToken() {
    await nftContract.mint(account1, tokenId, { from: owner });
    const transferedToken = await nftContract.safeTransferFrom(account1, account2, tokenId, { from: account1 });
    console.log('transferedToken', transferedToken);
  }

  async function createTokenAndSetApprovalForAll(tokenId) {
    await nftContract.mint(account1, tokenId, { from: owner });
    await nftContract.setApprovalForAll(account2, true, { from: account1 });
    const transferedToken = await nftContract.safeTransferFrom(account1, account2, tokenId, { from: account1 });
    await nftContract.setApprovalForAll(account2, false, { from: account1 });
    return transferedToken;
  }

  // // mint and safeTransferFrom
  // it("should allow the owner to create a token", async () => {
  //   const initialBalance = await nftContract.balanceOf(account1);
  //   assert.equal(initialBalance, 0, "Account1 should initially have 0 NFTs");

  //   await createToken();

  //   const account1Balance = await nftContract.balanceOf(account1);
  //   assert.equal(account1Balance, 0, "Account1 should have 0 NFT after token creation");

  //   const account2Balance = await nftContract.balanceOf(account2);
  //   assert.equal(account2Balance, 1, "Account1 should have 1 NFT after token creation");
  // });

  // // mint and setURI
  // it("should allow the owner to mint a new token and set its URI", async () => {
  //   const _tokenId = 2;
  //   await nftContract.mint(account1, _tokenId, { from: owner });
  //   const setURI = await nftContract.setURI(_tokenId, "http://example.com/token/2", { from: owner });
  //   assert.equal(setURI.receipt.status, true);
  //   const tokenURI = await nftContract.tokenURI(_tokenId);
  //   assert.equal(tokenURI, "http://example.com/token/2", "Token URI should be set accordingly");
  // });

  // // setBaseURI
  // it("should allow the owner to set a base URI", async () => {
  //   const baseURI = "https://testBaseURI/";
  //   const setBaseURI = await nftContract.setBaseURI(baseURI, { from: owner });
  //   assert.equal(setBaseURI.receipt.status, true);
  // });

  // // safeTransferFrom and burn
  // it("should allow transfer and then burning of the token", async () => {
  //   const initialBalance = await nftContract.balanceOf(account1);
  //   assert.equal(initialBalance, 0, "Account1 should initially have 0 NFTs");

  //   const transferedToken = await createTokenAndSetApprovalForAll();
  //   assert.equal(transferedToken.receipt.status, true);

  //   const account1Balance = await nftContract.balanceOf(account1);
  //   assert.equal(account1Balance, 0, "Account1 should have 0 NFT after token creation");

  //   const account2Balance = await nftContract.balanceOf(account2);
  //   assert.equal(account2Balance, 1, "Account2 should have 1 NFT after token creation");

  //   await nftContract.burn(tokenId, { from: account2 });

  //   const account2NewBalance = await nftContract.balanceOf(account2);
  //   assert.equal(account2NewBalance, 0, "Account2 should have 0 NFT after burning");
  // });

  // // batchMintNFT and batchSetURI 
  // it("should allow the owner to mint a new token and set its URI", async () => {
  //   const to = [
  //     owner,
  //     account1,
  //     account1,
  //     account2,
  //     account2,
  //   ],
  //     tokenIds = [11, 12, 13, 14, 15],
  //     uris = [
  //       "http://example.com/token/11",
  //       "http://example.com/token/12",
  //       "http://example.com/token/13",
  //       "http://example.com/token/14",
  //       "http://example.com/token/15",
  //     ];
  //   const batchMint = await nftContract.batchMintNFT(to, tokenIds, { from: owner });
  //   assert.equal(batchMint.receipt.status, true);
  //   const batchSetURI = await nftContract.batchSetURI(tokenIds, uris);
  //   assert.equal(batchSetURI.receipt.status, true);
  // });

  // //  batchMintNFT and batchBurnNFT 
  // it("should mint and burn ", async () => {
  //   const to = [
  //     owner,
  //     account1,
  //     account1,
  //     account2,
  //     account2,
  //   ],
  //     tokenIds = [11, 12, 13, 14, 15];

  //   const batchMint = await nftContract.batchMintNFT(to, tokenIds, { from: owner });
  //   assert.equal(batchMint.receipt.status, true);
  //   const batchBurnNFT = await nftContract.batchBurnNFT(tokenIds);
  //   assert.equal(batchBurnNFT.receipt.status, true);
  // });

});
