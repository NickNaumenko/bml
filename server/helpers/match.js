const match = (left, op, right) => {
  switch (op) {
    case '=':
      return left === right;
    case '<':
      return left < right;
    case '>':
      return left > right;
    default:
      return false;
  }
};

module.exports = match;
