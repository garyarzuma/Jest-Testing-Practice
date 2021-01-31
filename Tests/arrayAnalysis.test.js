const arrayAnalysis = require("../Functions/arrayAnalysis");

test("Analyze regular string", () => {
  expect(arrayAnalysis([1, 3, 5, 7])).toEqual({
    average: 4,
    min: 1,
    max: 7,
    length: 4,
  });
});

test("Analyze empty string", () => {
  expect(arrayAnalysis([])).toEqual(null);
});
