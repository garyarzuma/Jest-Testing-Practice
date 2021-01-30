const testFunctions = require("./functions");

/* ***************************************************************************************/
/* Capitilze tests */
/* ***************************************************************************************/
test("Capitilizes First character", () => {
  expect(testFunctions.capitilizeFirst("hello world")).toBe("Hello world");
});

test("Capitilizes emptry string", () => {
  expect(testFunctions.capitilizeFirst(" ")).toBe(" ");
});

test("Deals with numbers", () => {
  expect(testFunctions.capitilizeFirst("3")).toBe("3");
});

test("Deals with  all upper", () => {
  expect(testFunctions.capitilizeFirst("HELLO WORLD")).toBe("Hello world");
});

test("Deals with random uppercase and lowercase", () => {
  expect(testFunctions.capitilizeFirst("hELlO WoRlD")).toBe("Hello world");
});

/* ***************************************************************************************/
/* Reverse tests */
/* ***************************************************************************************/

test("Reverse string", () => {
  expect(testFunctions.reverseString("hello world")).toBe("dlrow olleh");
});
