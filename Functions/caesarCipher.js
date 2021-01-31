const caesarCipher = (string, shift) => {
  const array = string.split("");
  let newArray = [];

  //Convert each character to unicode
  array.forEach((char, index) => (newArray[index] = char.charCodeAt(0)));

  //convert each unicode number to the correct shift unicode
  newArray = newArray.map((char) => shifts(char, shift));

  //convert each unicode back to regular text
  newArray.forEach(
    (char, index) => (array[index] = String.fromCharCode(parseInt(char, 10)))
  );

  function shifts(char, shift) {
    if (char > 64 && char < 91) {
      if (char + shift > 90) {
        return char + shift - 26;
      } else return char + shift;
    } else if (char > 96 && char < 123) {
      if (char + shift > 122) {
        return char + shift - 26;
      } else return char + shift;
    } else return char;
  }

  return array.join("");
};

module.exports = caesarCipher;
