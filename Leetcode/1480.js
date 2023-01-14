/**
 * @param {number[]} nums
 * @return {number[]}
 */

var runningSum = function (nums) {
  if (!nums.length) return [];

  let result = [nums[0]];
  let sum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    sum += nums[i];
    result[i] = sum;
  }

  return result;
};

// runningSum([1,2,3,4]) --> [1,3,6,10]
