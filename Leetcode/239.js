/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let result = [];

  let window = [];
  let windowStartIdx = 0;

  for (let windowEndIdx = 0; windowEndIdx < nums.length; windowEndIdx++) {
    window.push(nums[windowEndIdx]);

    if (window.length >= k) {
      maxNum = Math.max.apply(Math, window);
      result.push(maxNum);

      window.shift();
      windowStartIdx++;
    }
  }

  return result;
};
