const OriginErc20 = artifacts.require("./OriginErc20.sol");
  // TODO: more negative senarios 

contract("OriginErc20 Contract", function (accounts) {
  const [owner, recipient, anotherAccount] = accounts;
  let contract;

  before(async function () {
    contract = await OriginErc20.deployed();
  });

  // // 7. passed
  // it("should return the balance of the queried account", async function () {
  //   await contract._mint(owner, 100, { from: owner });

  //   const ownerBalance = await contract.balanceOf(owner);

  //   assert.equal(ownerBalance, 100);
  // }); 

  // // 6. passed
  // it("should allow a caller to transfer tokens to another account", async function () {
  //   await contract._mint(owner, 100, { from: owner });

  //   await contract.transfer(recipient, 50, { from: owner });

  //   const recipientBalance = await contract.balanceOf(recipient);
  //   const ownerBalance = await contract.balanceOf(owner);

  //   assert.equal(recipientBalance, 50);
  //   assert.equal(ownerBalance, 50);
  // });

  // // 5. passed
  // it("should allow a caller to transferFrom tokens from an allowance", async function () {
  //   await contract._mint(owner, 100, { from: owner });

  //   await contract.approve(anotherAccount, 50, { from: owner });

  //   await contract.transferFrom(owner, recipient, 50, { from: anotherAccount });

  //   const recipientBalance = await contract.balanceOf(recipient);
  //   const ownerBalance = await contract.balanceOf(owner);

  //   assert.equal(recipientBalance, 50);
  //   assert.equal(ownerBalance, 50);
  // });

  // // 3. transferFrom function
  // it("should transfer tokens from one account to another on behalf of a third account", async function () {
  //   const sender = owner;
  //   const spender = recipient;
  //   const _recipient = anotherAccount;
  //   const transferAmount = 50;

  //   await contract._mint(sender, 100, { from: owner });
  //   await contract.approve(spender, transferAmount, { from: sender });
  //   await contract.transferFrom(sender, _recipient, transferAmount, { from: spender });

  //   const senderBalance = await contract.balanceOf(sender);
  //   const recipientBalance = await contract.balanceOf(_recipient);

  //   assert.equal(senderBalance, 50);
  //   assert.equal(recipientBalance, transferAmount);
  // });

  // // 4. _mint
  // it("should only allow the owner to mint tokens", async function () {
  //   try {
  //     await contract._mint(recipient, 100, { from: recipient });
  //     assert.fail("Should have thrown an error");
  //   } catch (e) {
  //     assert.include(e.message, "Ownable: caller is not the owner");
  //   }

  //   await contract._mint(recipient, 100, { from: owner });

  //   const recipientBalance = await contract.balanceOf(recipient);
  //   assert.equal(recipientBalance, 100);
  // }); 

  // // 3. pause & unpause (2. and 3. cant run same time)
  // it("should only allow the owner to unpause the contract", async function () {
  //   await contract.pause({ from: owner });

  //   try {
  //     await contract.unpause({ from: anotherAccount });
  //     assert.fail("Should have thrown an error");
  //   } catch (e) {
  //     assert.include(e.message, "Ownable: caller is not the owner");
  //   }

  //   await contract.unpause({ from: owner });

  //   const paused = await contract.paused();
  //   assert.equal(paused, false);
  // });

  // // 2. pause 
  // it("should only allow the owner to pause the contract", async function () {
  //   try {
  //     await contract.pause({ from: anotherAccount });
  //     assert.fail("Should have thrown an error");
  //   } catch (e) {
  //     assert.include(e.message, "Ownable: caller is not the owner");
  //   }

  //   await contract.pause({ from: owner });

  //   const paused = await contract.paused();
  //   assert.equal(paused, true);
  // });

  // // 1. name & symbol
  // it("should have the correct name and symbol", async function () {
  //   const name = await contract.name();
  //   const symbol = await contract.symbol();

  //   assert.equal(name, "test name");
  //   assert.equal(symbol, "tn");
  // });

});