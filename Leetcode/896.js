/**
 * @param {number[]} nums
 * @return {boolean}
 */

var isMonotonic = function (nums) {
  let isIncrease = true;
  let isDecrease = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) isDecrease = false;
    if (nums[i] < nums[i - 1]) isIncrease = false;
  }

  return isIncrease || isDecrease;
};
