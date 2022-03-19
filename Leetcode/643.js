/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let max = -Infinity;

  for (let i = 0; i < nums.length - k + 1; i++) {
    let subArr = nums.slice(i, i + k);
    let average = subArr.reduce((acc, cur) => acc + cur) / k;
    max = Math.max(max, average);
  }

  return max;
};
