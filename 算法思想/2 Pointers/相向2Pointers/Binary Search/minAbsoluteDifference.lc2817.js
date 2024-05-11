/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */

/***************************** Solution 1: 暴力双层for loop ****************************************/
var minAbsoluteDifference = function (nums, x) {
  let minAbsDiff = Infinity;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + x; j < nums.length; j++) {
      minAbsDiff = Math.min(minAbsDiff, Math.abs(nums[j] - nums[i]));
    }
  }

  return minAbsDiff;
};

/***************************** Solution 2: Binary Search + Sliding window **********************************/
