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

export { capitalize, reverseString };
