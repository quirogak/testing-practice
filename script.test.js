import { capitalize, reverseString } from "./script";

test("the first letter is capitalized", () => {
  expect(capitalize("h")).toBe("H");
});

test("returns the full string capitalized", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("returns a short string backwards", () => {
  expect(reverseString("he")).toBe("eh");
});

test("returns a long, spaced string backwards", () => {
  expect(reverseString("Hello how are you")).toBe("uoy era woh olleH");
});
