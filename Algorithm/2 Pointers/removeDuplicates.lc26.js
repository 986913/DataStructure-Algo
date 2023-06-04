/**
 * @param {number[]} nums
 * @return {number}
 */
/* 2 pointer 👍 ： 前提nums是sorted好的   */

var removeDuplicates = function (nums) {
  if (nums == null) return 0;

  let slow = 0;
  for (let fast = 1; fast < nums.length; fast++) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast];
    }
  }

  return slow + 1; //这个返回的是长度
  // arr.splice(slow + 1) //这个返回的是in place去重后的数组
};
