const { assert } = require("chai");

describe("Greeter", function () {
  it("should return sum of x and y", async function () {
    const NewContract = await ethers.getContractFactory("NewContract");
    const newContract = await Greeter.deploy(x + y);
    await newContract.deployed();

    assert(await greeter.greet()).to.equal(7);

    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal("Hola, mundo!");
  });
});
