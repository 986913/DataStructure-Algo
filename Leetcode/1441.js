/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */

var buildArray = function (target, n) {
  let result = [];
  let i = 0;  //create pointer as target's index

  for (let j = 1; j <= n; j++) {
    if (i == target.length) break;

    if (j !== target[i]) {
      result.push("Push");
      result.push("Pop");
    } else {
      result.push("Push");
      i++;  // update index
    }
  }

  return result;
};
