const capitilizeFirst = require("../Functions/captilizeFirst");

test("Capitilizes First character", () => {
  expect(capitilizeFirst("hello world")).toBe("Hello world");
});

test("Capitilizes emptry string", () => {
  expect(capitilizeFirst(" ")).toBe(" ");
});

test("Deals with numbers", () => {
  expect(capitilizeFirst("3")).toBe("3");
});

test("Deals with  all upper", () => {
  expect(capitilizeFirst("HELLO WORLD")).toBe("Hello world");
});

test("Deals with random uppercase and lowercase", () => {
  expect(capitilizeFirst("hELlO WoRlD")).toBe("Hello world");
});
