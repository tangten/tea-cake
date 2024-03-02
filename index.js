const isOdd = require("is-odd");

module.exports = {
  nthRt: function nthRt(n) {
    return n ** (1 / n);
  },
  isEven: function isEven(n) {
    return !isOdd(n);
  },
};
