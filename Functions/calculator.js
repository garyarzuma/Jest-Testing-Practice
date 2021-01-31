const calculator = (() => {
  function add(x, y) {
    return +x + +y;
  }

  function subtract(x, y) {
    return x - y;
  }

  function multiply(x, y) {
    return x * y;
  }

  function divide(x, y) {
    return x / y;
  }

  return { add, multiply, divide, subtract };
})();

module.exports = calculator;
