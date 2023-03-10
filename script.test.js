import capitalize from './script'

console.log(capitalize)

test('the first letter is capitalized', () => {
    expect(capitalize("h")).toBe("H");
});

test('returns the full string capitalized', () => {
    expect(capitalize("hello")).toBe("Hello");
});