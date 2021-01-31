const arrayAnalysis = (array) => {
  if (array.length === 0) return null;
  const length = array.length;
  const avg = array.reduce((total, x) => (total = total + x)) / length;
  const min = array.sort()[0];
  const max = array.sort()[length - 1];
  return { average: avg, min, max, length };
};

module.exports = arrayAnalysis;
