/**
 * @param {number[]} nums
 * @return {number}
 */
//1. brute force: O(n^2) -------------------------------------------------------------------------
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

//2. 在线处理  O(N) -------------------------------------------------------------------------
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

// -------------------------------------------变形题-------------------------------------------------------
/* 
  这道题的变形题：
  write a function called maxSubarraySum which accpet an array of integers and a number called n.
  the function should calculate the maximum sum of n consecutve elements in the array

  eg:
  maxSubarraySum([100,200,300,400], 2)     700
  maxSubarraySum([1,2,5,2,8,1,5],   2)     10
  maxSubarraySum([1,2,5,2,8,1,5],   4)     17
  maxSubarraySum([4,2,1,6],         1)     6
  maxSubarraySum([4,2,1,6,2],       4)     13
  maxSubarraySum([],                4)     null
*/

/* 暴力法：
const maxSum = (arr, k) => {
  let maxSum = 0;

  for (let i = 0; i < arr.length - k + 1; i++) {
    let tmpSum = 0;
    for (let j = 0; j < k; j++) {
      tmpSum += arr[i + j];
    }
    maxSum = Math.max(maxSum, tmpSum);
  }
  return maxSum;
};

console.log(maxSum([100, 200, 300, 400], 2)); */

// sliding window:
const maxSum = (nums, k) => {
  let maxSum = 0;
  // 第一个窗口
  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }

  let currSum = maxSum;

  //开始滑动
  for (let i = k; i < nums.length; i++) {
    currSum = currSum + nums[i] - nums[i - k];
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
};
//console.log(maxSum([100, 200, 300, 400], 2));
