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

  const upperCaseAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  const wordLetters = word.split("")

  const nextWords = []

  for (let i = 0; i < wordLetters.length; i++) {

    if (wordLetters[i] === " ") { nextWords.push(" ") }   // detect blank spaces and push them directly

    if (wordLetters[i] !== " ") { // avoid pushing blank spaces indexes
      if (wordLetters[i] === wordLetters[i].toUpperCase()) {
        const nextWordIndex = upperCaseAlphabet.indexOf(wordLetters[i]) + 1
        nextWords.push(upperCaseAlphabet[nextWordIndex])
      }
      else {
        const nextWordIndex = alphabet.indexOf(wordLetters[i]) + 1
        nextWords.push(alphabet[nextWordIndex])
      }
    }

  }

  const finalWord = nextWords.join("")


  return finalWord

}

export { capitalize, reverseString, calculator, caesarCipher };
