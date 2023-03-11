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

export { capitalize, reverseString, calculator };
