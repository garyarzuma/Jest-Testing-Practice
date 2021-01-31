const reverseString = require("../Functions/reverseString");

test("Reverse string", () => {
  expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("Reverse empty string", () => {
  expect(reverseString("")).toBe("");
});
