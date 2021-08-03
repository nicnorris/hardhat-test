const { assert } = require("chai");

describe("Greeter", function () {
  it("should return sum of x and y", async function () {
    const NewContract = await ethers.getContractFactory("NewContract");
    const newContract = await NewContract.deploy();
    await newContract.deployed();

    const sum = await newContract.sum()
    assert.equal(sum, 7)

    
  });
});
