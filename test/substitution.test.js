// Write your tests here!
const { substitution } = require("../src/substitution");
const expect = require("chai").expect;

//
//
//
//
//  (For example, the results of A Message and a message should be the same.)

// substitution("", ""); //> ''
// substitution("", "", false); //> ''

// substitution("message", ""); //> ""
// substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"

// ; //> false

describe("Substitution Cipher", () => {
  it("should return false if the given alphabet isn't exactly 26 characters long", () => {
    expect(substitution("thinkful", "short")).to.be.false;
  });

  it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
    expect(substitution("message", "plmoknijbuhvygctfxrdzeswaq")).to.equal(
      "ykrrpik"
    );
    expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")).to.equal(
      "jrufscpw"
    );
    expect(
      substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)
    ).to.equal("thinkful");
    expect(substitution("message", "$wae&zrdxtfcygvuhbijnokmpl")).to.equal(
      "y&ii$r&"
    );
    expect(
      substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false)
    ).to.equal("message");
  });

  it("should return false if there are any duplicate characters in the given alphabet", () => {
    expect(substitution("thinkful", "abcabcabcabcabcabcabcabcyz")).to.be.false;
  });

  it("should maintain spaces in the message, before and after encoding or decoding", () => {
    expect(
      substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev")
    ).to.equal("elp xhm xf mbymwwmfj dne");
    expect(
      substitution(
        "elp xhm xf mbymwwmfj dne",
        "xoyqmcgrukswaflnthdjpzibev",
        false
      )
    ).to.equal("you are an excellent spy");
  });

  it("should ignore capital letters", () => {
    expect(substitution("A Message", "zyxwvutsrqponmlkjihgfedcba")).to.equal(
      substitution("a message", "zyxwvutsrqponmlkjihgfedcba")
    );
  });
});
