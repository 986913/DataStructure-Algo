/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

var flat = function (arr, n) {
  let result = [];

  const helper = (input, depthInput) => {
    if (depthInput <= 0) result = [...result, ...input];
    else {
      input.forEach((i) => {
        if (!Array.isArray(i)) result.push(i);
        else helper(i, depthInput - 1);
      });
    }
  };

  helper(arr, n);
  return result;
};
