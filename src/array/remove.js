exports.remove = function remove(arr, fn) {
  return Array.isArray(arr) ? arr.filter(val => !fn(val)) : [];
};
