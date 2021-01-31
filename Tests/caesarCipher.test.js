const caesarCipher = require("../Functions/caesarCipher");

test("Shifts word 1", () => {
  expect(caesarCipher("Gary", 1)).toEqual("Hbsz");
});

test("Shifts word 15", () => {
  expect(caesarCipher("Gary", 15)).toEqual("Vpgn");
});

test("Doesn't shift puncuation or numbers", () => {
  expect(caesarCipher("Ga!r2y", 15)).toEqual("Vp!g2n");
});

test("Doesn't shift puncuation or numbers or spaces", () => {
  expect(caesarCipher("Ga! r2 y", 15)).toEqual("Vp! g2 n");
});

test("Doesn't break on nothing", () => {
  expect(caesarCipher("", 15)).toEqual("");
});
