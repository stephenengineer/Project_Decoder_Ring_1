// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  // Helper Function
  function caesarShift(charCodeProxy, directionalShiftBeforeProcessing) {
    // Check that ASCII value is within range of a-z
    // If the shift would bring the ASCII value over 122, we need to wraparound
    // Calculate difference between boundary and ASCII value
    // Subtract that amount from directionalShift, then add the remaining shift starting from the other boundary
    // Do a similar method in the opposite direction if the shift would bring the ASCII value under 97
    // If the directionalShift won't bring the character code 'out of bounds,' just add it normally to the character code
    // Refactoring code for going over the bounds 7/26/21
    let directionalShift = directionalShiftBeforeProcessing;
    if (charCodeProxy >= 97 && charCodeProxy <= 122) {
      if (charCodeProxy + directionalShift > 122) {
        directionalShift -= 26;
        charCodeProxy = caesarShift(charCodeProxy, directionalShift);
      } else if (charCodeProxy + directionalShift < 97) {
        directionalShift += 26;
        charCodeProxy = caesarShift(charCodeProxy, directionalShift);
      } else charCodeProxy += directionalShift;
    }
    return charCodeProxy;
  }

  function caesar(input, shift, encode = true) {
    // your solution code here
    // checks if the shift value is equal to 0, less than -25, greater than 25, or not present
    const canContinue = !!shift;
    if (!canContinue) return canContinue;
    // Set encoding variable to decide the direction of transcription
    const directionalShift = encode ? shift : -shift;

    let encodedMessage = "";
    // Transform input into array to be iterated through and processed
    [...input].forEach((letter) => {
      // Get ASCII code of each letter transformed to lowercase
      let charCodeProxy = letter.toLowerCase().charCodeAt(0);
      charCodeProxy = caesarShift(charCodeProxy, directionalShift);
      encodedMessage += String.fromCharCode(charCodeProxy);
    });
    return encodedMessage;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
