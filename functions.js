const testFunctions = (() => {
  const capitilizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const reverseString = (string) => {
    return string.split("").reverse().join("");
  };

  return { capitilizeFirst, reverseString };
})();

module.exports = testFunctions;
