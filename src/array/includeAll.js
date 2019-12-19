exports.includeAll = function includeAll(parentArray, childArray) {
  return childArray.every(value => parentArray.includes(value))
};
