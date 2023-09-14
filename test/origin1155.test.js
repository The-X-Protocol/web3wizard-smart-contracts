const { expectRevert } = require('@openzeppelin/test-helpers');
const OriginErc1155 = artifacts.require("./OriginErc1155.sol");
// TODO: more negative senarios 

contract("OriginErc1155 Contract", function (accounts) {
    const [owner, recipient, operator, anotherAccount] = accounts;
    const nft1 = 1234;
    const nft2 = 5678;
    let contract;

    before(async function () {
        contract = await OriginErc1155.deployed();
    });

    //   // 1. mint
    //   it("should return the balance of the queried account for specific NFT id", async function () {
    //     await contract.mint(owner, nft1, 100, { from: owner });

    //     const ownerBalance = await contract.balanceOf(owner, nft1);

    //     assert.equal(ownerBalance, 100);
    //   });

    //   // 2. safeTransferFrom
    //   it("should allow a caller to safely transfer token to another account", async function () {
    //     await contract.mint(owner, nft1, 100, { from: owner });

    //     await contract.safeTransferFrom(owner, recipient, nft1, 50, "0x0", { from: owner });

    //     const recipientBalance = await contract.balanceOf(recipient, nft1);
    //     const ownerBalance = await contract.balanceOf(owner, nft1);

    //     assert.equal(recipientBalance, 50);
    //     assert.equal(ownerBalance, 50);
    //   });

    //   // 3. safeBatchTransferFrom
    //   it("should allow a caller to safely batch transfer tokens to another account", async function () {
    //     await contract.mintBatch(owner, [nft1, nft2], [100, 200], { from: owner });

    //     await contract.safeBatchTransferFrom(owner, recipient, [nft1, nft2], [50, 100], "0x0", { from: owner });

    //     const recipientBalance1 = await contract.balanceOf(recipient, nft1);
    //     const recipientBalance2 = await contract.balanceOf(recipient, nft2);
    //     const ownerBalance1 = await contract.balanceOf(owner, nft1);
    //     const ownerBalance2 = await contract.balanceOf(owner, nft2);

    //     assert.equal(recipientBalance1, 50);
    //     assert.equal(recipientBalance2, 100);
    //     assert.equal(ownerBalance1, 50);
    //     assert.equal(ownerBalance2, 100);
    //   });

    //   // 4. transferOwnership
    //   it("should only allow the owner to transfer ownership of the contract", async function () {
    //     try {
    //       await contract.transferOwnership(anotherAccount, { from: recipient });
    //       assert.fail("Should have thrown an error, only owner can transfer ownership");
    //     } catch (e) {
    //       assert.include(e.message, "Ownable: caller is not the owner");
    //     }

    //     await contract.transferOwnership(anotherAccount, { from: owner });

    //     const newOwner = await contract.owner();

    //     assert.equal(newOwner, anotherAccount);
    //   });

    // // 5. ? 
    // it("should allow a caller to set approval for all NFT(s)", async function () {
    //     await contract.setApprovalForAll(operator, true, { from: owner });

    //     const isApproved = await contract.isApprovedForAll(owner, operator);

    //     assert.equal(isApproved, true);
    // });

    //   // 7. setApprovalForAll and safeTransferFrom
    //   it("should allow a caller approved for all to transfer without specific approval", async function () {
    //     await contract.setApprovalForAll(operator, true, { from: owner });

    //     await contract.mint(owner, nft1, 100, { from: owner });

    //     await contract.safeTransferFrom(owner, recipient, nft1, 50, "0x0", { from: operator });

    //     const recipientBalance = await contract.balanceOf(recipient, nft1);
    //     const ownerBalance = await contract.balanceOf(owner, nft1);

    //     assert.equal(recipientBalance, 50);
    //     assert.equal(ownerBalance, 50);
    //   });

})