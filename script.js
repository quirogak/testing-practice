const capitalize = (word) => {
  const firstLetter = word.slice(0, 1);
  const upperLetter = firstLetter.toUpperCase();
  return word.replace(firstLetter, upperLetter);
};

const reverseString = (word) => {
  const reverseWord = [];

  for (let i = word.length - 1; i >= 0; i--) {
    reverseWord.push(word[i]);
  }

  return reverseWord.join("");
};

const calculator = {
  sum: (num1, num2) => num1 + num2,
  substract: (num1, num2) => num1 - num2,
  divide: (num1, num2) => Number(parseFloat(num1 / num2).toFixed(3)),
  multiply: (num1, num2) => num1 * num2,
};

const caesarCipher = (word) => {

  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

  const nextWordIndex = alphabet.indexOf(word) + 1

  return alphabet[nextWordIndex]

}

export { capitalize, reverseString, calculator, caesarCipher };
