/**
 * @param {number[]} nums
 * @return {number}
 */
//1. brute force: O(n^2)
var maxSubArray = function (nums) {
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      maxSum = Math.max(maxSum, sum);
    }
  }

  return maxSum;
};

//2. 在线处理  O(N)
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i]; /*向右累加*/
    maxSum = Math.max(maxSum, currSum);
    if (currSum < 0)
      currSum = 0; /*你这当前和都成负数了，那就直接清零当前和， 抛弃之*/
  }

  return maxSum;
};
