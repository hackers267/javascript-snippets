exports.last = function last(array) {
  if (Array.isArray(array)) {
    const len = array.length;
    return array[len - 1]
  } else {
    return void 0;
  }
};
