// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  // Make a 2D array 5 wide and 5 deep with all the letters in it
  const polybiusTable = [
    [..."aflqv"],
    [..."bgmrw"],
    [..."chnsx"],
    ["d", "(i/j)", ..."oty"],
    [..."ekpuz"],
  ];

  // When encoding, put the whole string as an array to be iterated through.
  // For each letter, subtract 96 from the character code to find a tableValue to use for the table
  // To find the column, use tableValue % 5.  To find the row, use tableValue / 5 (reduce to an int).
  // Helper Function
  function polybiusEncode(input) {
    let encodedMessage = "";
    [...input].forEach((letter) => {
      if (letter === " ") {
        encodedMessage += letter;
        return;
      }
      const charCodeProxy = letter.toLowerCase().charCodeAt(0);
      // Correcting for i/j sharing a table value
      const tableValue =
        charCodeProxy - 96 > 9 ? charCodeProxy - 96 - 1 : charCodeProxy - 96;
      // To get the proper column for each value that is cleanly divisible by 5
      const column = tableValue % 5 ? tableValue % 5 : 5;
      // To get the proper row for each value that is cleanly divisible by 5
      let row = tableValue % 5 ? tableValue / 5 + 1 : tableValue / 5;
      row = Math.trunc(row);
      encodedMessage += column.toString() + row.toString();
    });
    return encodedMessage;
  }

  // To work backwards for decoding, we will iterate through the string two characters at a time.
  // For each loop, convert the characters to numbers
  // Use the first number as the first index in the table and the second number as the second index.
  // Add the resulting character from the table to the message.
  // Helper Function
  function polybiusDecode(input) {
    let decodedMessage = "";
    for (let i = 0; i < input.length; i += 2) {
      if (input[i] === " ") {
        decodedMessage += input[i];
        i++;
      }
      decodedMessage += polybiusTable[input[i] - 1][input[i + 1] - 1];
    }
    return decodedMessage;
  }

  //Helper Function
  const inputLength = (input) =>
    [...input].reduce(
      (length, letter) => (letter !== " " ? length + 1 : length),
      0
    );

  function polybius(input, encode = true) {
    // your solution code here
    // checks if the input length is even for decoding
    const canContinue = encode || !(inputLength(input) % 2);
    if (!canContinue) return canContinue;

    const encodedMessage = encode
      ? polybiusEncode(input)
      : polybiusDecode(input);
    return encodedMessage;
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
