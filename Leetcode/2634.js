/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let result = [];

  arr.forEach((n, index) => {
    if (fn(n, index)) result.push(n);
  });

  return result;
};
