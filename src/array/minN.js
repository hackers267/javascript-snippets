exports.minN = function minN(array, n = 1) {
  return Array.from(array).sort((a, b) => a - b).slice(0, n)
};
