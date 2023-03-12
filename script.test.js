import { capitalize, reverseString, calculator, caesarCipher } from "./script";

// capitalize
test("the first letter is capitalized", () => {
  expect(capitalize("h")).toBe("H");
});

test("returns the full string capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
});

// reverseString
test("returns a short string backwards", () => {
  expect(reverseString("he")).toBe("eh");
});

test("returns a long, spaced string backwards", () => {
  expect(reverseString("Hello how are you")).toBe("uoy era woh olleH");
});

// calculator

// sum
test("can return a sum between two short numbers", () => {
  expect(calculator.sum(1, 1)).toBe(2);
});

test("can return a sum between two big numbers", () => {
  expect(calculator.sum(12392323, 8903034)).toBe(21295357);
});

// substract

test("can return a substraction between two short numbers", () => {
  expect(calculator.substract(3, 1)).toBe(2);
});

test("can return a substraction between two big numbers", () => {
  expect(calculator.substract(50403, 3331)).toBe(47072);
});

test("can return a negative number", () => {
  expect(calculator.substract(200, 560)).toBe(-360);
});

// divide

test("can return a division between two numbers (result without decimals)", () => {
  expect(calculator.divide(8, 2)).toBe(4);
});

test("can return a division between two numbers (result with decimals)", () => {
  expect(calculator.divide(7, 4)).toBe(1.75);
});

// multiply

test("can return a multiplication between two numbers", () => {
  expect(calculator.multiply(6, 4)).toBe(24);
});

test("can return a multiplication between two big numbers ", () => {
  expect(calculator.multiply(935, 521)).toBe(487135);
});


// caesarCipher

test("can receive a letter and returns the next", () => {
  expect(caesarCipher("a")).toBe("b");
});

test("can receive a two letters word and returns it ciphered", () => {
  expect(caesarCipher("hi")).toBe("ij");
});

test("can receive multiple words and returns them ciphered", () => {
  expect(caesarCipher("how are you")).toBe("ipx bsf zpv");
});

test("can receive an upper case letter and return the ciphered upper case letter", () => {
  expect(caesarCipher("Hey")).toBe("Ifz");
});




