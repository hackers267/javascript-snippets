exports.includeAny = function includeAny(parentArray, childArray) {
  return childArray.some(value => parentArray.includes(value))
};
