// Write your tests here!
const { caesar } = require("../src/caesar");
const expect = require("chai").expect;

describe("Caesar Shift", () => {
  it("should properly encode or decode the message according to Caesar Shift principles", () => {
    expect(caesar("thinkful", 3)).to.equal("wklqnixo");
    expect(caesar("thinkful", -3)).to.equal("qefkhcri");
    expect(caesar("wklqnixo", 3, false)).to.equal("thinkful");
  });

  it("should return false if the shift value is equal to 0, less than -25, greater than 25, or not present", () => {
    expect(caesar("thinkful")).to.be.false;
    expect(caesar("thinkful", 99)).to.be.false;
    expect(caesar("thinkful", -26)).to.be.false;
    expect(caesar("thinkful", 0)).to.be.false;
  });

  it("should ignore capital letters", () => {
    expect(caesar("A Message", 1)).to.equal(caesar("a message", 1));
  });

  it("should handle shifts that go past the end of the alphabet when encoding", () => {
    expect(caesar("y", 3)).to.equal("b");
    expect(caesar("b", 3, false)).to.equal("y");
    expect(caesar("Zebra Magazine", 3)).to.equal("cheud pdjdclqh");
  });

  it("should maintain spaces and other nonalphabetic symbols in the message, before and after encoding or decoding", () => {
    expect(caesar("This is a secret message!", 8)).to.equal(
      "bpqa qa i amkzmb umaaiom!"
    );
    expect(caesar("BPQA qa I amkzmb umaaiom!", 8, false)).to.equal(
      "this is a secret message!"
    );
  });
});
