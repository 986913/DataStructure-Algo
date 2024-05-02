/**
  1. 确定dp数组以及下标的含义: dp[i]表示i之前包括i的以nums[i]结尾的最长递增子序列的长度
  2. 确定递推公式: 状态转移方程if (nums[i] > nums[j]) {dp[i] = max(dp[i], dp[j] + 1);}
  3. dp数组如何初始化: dp[i] all is 1;
  4. 确定遍历顺序:
      for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
          if (nums[i] > nums[j]) {
            dp[i] = Math.max(dp[i], dp[j] + 1);
          }
        }
        result = Math.max(result, dp[i]);
      }
  5. 举例推导dp数组: 
*/

/* ------------------------------------ DP ------------------------------------  */
const lengthOfLIS = (nums) => {
  let dp = Array(nums.length).fill(1);
  let result = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    result = Math.max(result, dp[i]);
  }

  return result;
};
