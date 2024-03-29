import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analizeArray,
} from "./script";

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

test("can receive the number of words 'jumped'", () => {
  expect(caesarCipher("Greetings", 2)).toBe("Itggvkpiu");
});

test("can jump z to a", () => {
  expect(caesarCipher("z")).toBe("a");
});

test("can jump z to b", () => {
  expect(caesarCipher("z", 2)).toBe("b");
});

test("can jump an absurdly high number of letters", () => {
  expect(caesarCipher("Javascript is great", 200)).toBe("Bsnskujahl ak yjwsl");
});

test("can return the length of the given array", () => {
  expect(analizeArray([1, 2, 3]).length).toBe(3);
});

test("can return the min value of the given array", () => {
  expect(analizeArray([2, 3, 4]).min).toBe(2);
});

test("can return the max value of the given array", () => {
  expect(analizeArray([2, 3, 4, 3, 6, 5]).max).toBe(6);
});

test("can return the average value of the given array", () => {
  expect(analizeArray([2, 3, 4, 3, 6, 5]).average()).toBe(3.8);
});
