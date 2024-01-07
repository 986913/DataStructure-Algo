/**
 * @param {number[]} nums
 * @return {number}
 */
/* 2 pointer 👍 ： 前提nums是sorted好的  ----LC27变形题   */
var removeDuplicates = function (nums) {
  let slow = 1;
  let fast = 1;

  for (fast; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow - 1]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  return slow;
};
