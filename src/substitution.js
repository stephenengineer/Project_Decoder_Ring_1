// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  // Standard alphabet object with letter keys and number values for mapping to the translation alphabet
  const alphabetObject = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 14,
    P: 15,
    Q: 16,
    R: 17,
    S: 18,
    T: 19,
    U: 20,
    V: 21,
    W: 22,
    X: 23,
    Y: 24,
    Z: 25,
  };

  // Standard alphabet string for decoding
  const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";

  function subEncode(input, alphabet) {
    let encodedMessage = "";
    [...input].forEach(
      (letter) =>
        (encodedMessage +=
          letter === " " ? " " : alphabet[alphabetObject[letter.toUpperCase()]])
    );
    return encodedMessage;
  }

  function subDecode(enteredInput, alphabet) {
    const input = enteredInput.toLowerCase();
    let decodedMessage = "";
    [...input].forEach(
      (letter) =>
        (decodedMessage +=
          letter === " " ? " " : standardAlphabet[alphabet.indexOf(letter)])
    );
    return decodedMessage;
  }

  function checkForDuplicates(alphabet) {
    const tempStorage = [];
    return [...alphabet].every((letter) =>
      tempStorage.includes(letter)
        ? !tempStorage.includes(letter)
        : tempStorage.push(letter)
    );
  }

  function checkForSpaces(alphabet) {
    return [...alphabet].every((letter) => letter !== " ");
  }

  function checkForValidInput(enteredInput, alphabet, encode = true) {
    const input = enteredInput.toLowerCase();
    if (encode) {
      return [...input].every(
        (letter) =>
          letter === " " ||
          (letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123)
      );
    }
  }

  function substitution(input, enteredAlphabet, encode = true) {
    // your solution code here
    const alphabet = enteredAlphabet.toLowerCase();
    const canContinue =
      !!alphabet &&
      alphabet.length === 26 &&
      checkForDuplicates(alphabet) &&
      checkForSpaces(alphabet) &&
      checkForValidInput(input, alphabet);
    if (!canContinue) return canContinue;

    const encodedMessage = encode
      ? subEncode(input, alphabet)
      : subDecode(input, alphabet);
    return encodedMessage;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
