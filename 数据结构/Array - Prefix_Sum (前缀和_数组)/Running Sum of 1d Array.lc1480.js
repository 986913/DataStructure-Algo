/**
 * @param {number[]} nums
 * @return {number[]}
 * runningSum([1,2,3,4]) --> [1,3,6,10]
 */

/******************************* Solution: 前缀和数组 - O(1)  LC303变形题 ********************************************/
var runningSum = function (nums) {
  if (!nums.length) return [];

  let preSumArr = new Array(nums.length).fill(0);
  preSumArr[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    preSumArr[i] = preSumArr[i - 1] + nums[i];
  }

  return preSumArr;
};
