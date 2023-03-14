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

const caesarCipher = (word, jumpNum) => {
  if (jumpNum === undefined) jumpNum = 1;

  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const wordLetters = word.split("");

  const nextWords = [];

  let overflowCount = 1;

  for (let i = 0; i < wordLetters.length; i++) {
    if (wordLetters[i] === " ") {
      nextWords.push(" ");
    } // detect blank spaces and push them directly

    if (wordLetters[i] !== " ") {
      // avoid pushing blank spaces indexes

      const nextWordIndex =
        alphabet.indexOf(wordLetters[i].toLowerCase()) + jumpNum;

      if (nextWordIndex > alphabet.length - 1) {
        overflowCount++;

        for (let i = 0; i <= overflowCount + 1; i++) {
          alphabet = alphabet.concat(alphabet); // when the index is bigger than the alphabet, we concat a new alphabet to the current alphabet.
        }
      }
      if (wordLetters[i] === wordLetters[i].toUpperCase()) { // simple uppercase check
        nextWords.push(alphabet[nextWordIndex].toUpperCase());
      } else {
        nextWords.push(alphabet[nextWordIndex]);
      }
    }
  }

  const finalWord = nextWords.join("");

  return finalWord;
};

const analizeArray = (arr) => {

  const { length } = arr

  const min = Math.min(...arr)

  const max = Math.max(...arr)

  return { length, min, max }

}


export { capitalize, reverseString, calculator, caesarCipher, analizeArray };
