/**
 * @param {number[]} nums
 * @return {number}
 */
/* 2 pointer 👍   */

var removeDuplicates = function (nums) {
  if (nums == null) return 0;

  let slow = 1;

  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[fast] !== nums[slow - 1]) {
      nums[slow] = nums[fast];
      slow++;
    }
  }

  return slow;
};
