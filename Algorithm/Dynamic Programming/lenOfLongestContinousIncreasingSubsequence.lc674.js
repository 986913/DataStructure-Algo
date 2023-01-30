/**
 * @param {number[]} nums
 * @return {number}
 */

/* ------------------------------------ soution 1: DP (lc300变形题🟡)------------------------------------  */
/**
  1. 确定dp数组以及下标的含义: dp[i]：以下标i为结尾的连续递增的子序列长度为dp[i]。
  2. 确定递推公式: 状态转移方程
      如果 nums[i] > nums[i - 1]，那么以 i 为结尾的连续递增的子序列长度 一定等于 以i - 1为结尾的连续递增的子序列长度 + 1 。
      即：dp[i] = dp[i - 1] + 1;
  3. dp数组如何初始化: dp[i] all is 1;
  4. 确定遍历顺序:
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i - 1]) { // 连续记录
        dp[i] = dp[i - 1] + 1;
      }
      result = Math.max(result, dp[i])
    }
  5. 举例推导dp数组: 
    已输入nums = [1,3,5,4,7]为例，dp数组状态: [1,2,3,1,2]
*/

const findLengthOfLCIS = (nums) => {
  let dp = Array(nums.length).fill(1);
  let result = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      // 连续记录
      dp[i] = dp[i - 1] + 1;
    }
    result = Math.max(result, dp[i]);
  }

  return result;
};

/* ------------------------------------ soution 2: Greedy ------------------------------------  */
// 当nums[i] > nums[i - 1]的情况，count就++，否则count为1，记录count的最大值就可以了。
const findLengthOfLCIS = (nums) => {
  if (nums.length === 1) return 1;

  let maxLen = 1;
  let curMax = 1;
  let cur = nums[0];

  for (let num of nums) {
    if (num > cur) {
      curMax += 1;
      maxLen = Math.max(maxLen, curMax);
    } else curMax = 1;

    cur = num;
  }

  return maxLen;
};
