exports.head = function head(array) {
  if (Array.isArray(array)) {
    return array[0]
  } else {
    return void 0;
  }
};
