/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let result = [];

  arr.forEach((n, idx) => {
    result[idx] = fn(n, idx);
  });

  return result;
};
