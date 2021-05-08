// Write your tests here!
const { polybius } = require("../src/polybius");
const expect = require("chai").expect;

describe("Polybius Square", () => {
  it("should properly encode or decode the message according to Polybius Square principles", () => {
    expect(polybius("message")).to.equal("23513434112251");
    expect(polybius("23513434112251", false)).to.equal("message");
  });

  it("it should output a string when encoding", () => {
    expect(polybius("message")).to.be.a("string");
  });

  it("should translate the letters i and j to 42 when encoding", () => {
    expect(polybius("ij")).to.equal("4242");
    expect(polybius("thinkful")).to.equal("4432423352125413");
  });

  it("should translate 42 to (i/j) when decoding", () => {
    expect(polybius("42", false)).to.equal("(i/j)");
    expect(polybius("4432423352125413", false)).to.equal("th(i/j)nkful");
  });

  it("should ignore capital letters", () => {
    expect(polybius("A Message")).to.equal(polybius("a message"));
  });

  it("should maintain spaces in the message, before and after encoding or decoding", () => {
    expect(polybius("Hello world")).to.equal("3251131343 2543241341");
    expect(polybius("3251131343 2543241341", false)).to.equal("hello world");
  });

  it("should return false if the number of characters in the string excluding spaces is not even when decoding", () => {
    expect(polybius("44324233521254134", false)).to.be.false;
  });
});
