/**
 * @param {number[]} nums
 * @return {number}
 */
/* ------------------------ 😐 Solution1: brute force: O(n^2) --------------------------- */
const maxSubArray = (nums) => {
  let maxSum = -Infinity;
  // 设置起始位置
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    // 每次从起始位置i开始遍历寻找最大值
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      maxSum = Math.max(maxSum, sum);
    }
  }
  return maxSum;
};

/* ------------------------ 👍 Solution2: Greedy ---------------------------------------- */
const maxSubArray = (nums) => {
  let currSum = 0;
  let maxSum = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i]; /*向右累加*/
    maxSum = Math.max(maxSum, currSum);
    if (currSum < 0) {
      currSum = 0; /*你这当前和都成负数了，那就直接清零当前和， 抛弃之*/
    }
  }

  return maxSum;
};

/* ------------------------ 👍 Solution3: DP -------------------------------------------- */
/*
  1. 确定dp数组以及下标的含义: dp[i]: 包括下标i（以nums[i]为结尾）的最大连续子序列和为dp[i]。
  2. 确定递推公式: dp[i] = max(dp[i - 1] + nums[i], nums[i]);
      dp[i - 1] + nums[i] ---> nums[i]加入当前连续子序列和
      nums[i]             ---> 从头开始计算当前连续子序列和
  3. dp数组如何初始化: dp[0] = nums[0]
  4. 确定遍历顺序: 递推公式中dp[i]依赖于dp[i - 1]的状态，需要从前向后遍历。
  5. 举例推导dp数组: 
      以输入：nums = [-2,1,-3,4,-1,2,1,-5,4]为例,对应的dp状态:[-2,1,-2,4,3,5,6,1,5], 其中最大值(6)是结果
*/
const maxSubArray = (nums) => {
  // 数组长度，dp初始化
  const dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];

  // 最大值初始化为dp[0]
  let result = dp[0];

  for (let i = 1; i < nums.length; i++) {
    // 更新dp[i]
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    // 更新最大值
    result = Math.max(result, dp[i]);
  }

  return result;
};

/* ============================ 这道题的🟡变形题 ===============================================
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

/* ---- 😐 变形题solution1:暴力法： ------------------------ */
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

/* ---- 👍 变形题solution2: 固定窗口的sliding window: ------ */
const maxSum = (nums, k) => {
  let maxSum = 0;

  // 第一个窗口
  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }

  let currSum = maxSum;

  //窗口开始滑动
  for (let i = k; i < nums.length; i++) {
    currSum = currSum + nums[i] - nums[i - k];
    maxSum = Math.max(currSum, maxSum);
  }

  return maxSum;
};
//console.log(maxSum([100, 200, 300, 400], 2));
