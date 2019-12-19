exports.maxN = function maxN(array, n = 1) {
  return Array.from(array).sort((a, b) => b - a).slice(0, n)
};
