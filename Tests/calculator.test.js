const calculator = require("../Functions/calculator");

test("Adds 2 numbers", () => {
  expect(calculator.add(1, 2)).toEqual(3);
});

test("Adds 2 strings", () => {
  expect(calculator.add("1", "2")).toEqual(3);
});

test("multiplies 2 numbers", () => {
  expect(calculator.multiply(1, 2)).toBe(2);
});

test("divides 2 numbers", () => {
  expect(calculator.divide(11.2, 2)).toEqual(5.6);
});

test("subtracts 2 numbers", () => {
  expect(calculator.subtract(1, 2)).toEqual(-1);
});
