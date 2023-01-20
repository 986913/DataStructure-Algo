/**
  1. 确定dp数组以及下标的含义: dp[j]表示 背包总容量（所能装的总重量）是j，放进物品后，背的最大重量为dp[j]
  2. 确定递推公式: 状态转移方程 dp[j] = max(dp[j], dp[j - nums[i]] + nums[i]);
  3. dp数组如何初始化: const dp = Array(sum / 2 + 1).fill(0);
  4. 确定遍历顺序: 此题对应01背包的一维dp遍历模版：
    for (let i = 0; i < nums.length; i++) {
      for (let j = sum / 2; j >= nums[i]; j--) {
        dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
      }
    }
  5. 举例推导dp数组: 
    输入[1,5,11,5] 为例， dp array is: [0,1,1,1,1,5,6,6,6,6,10,11]
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

/* ------------------------------------ DP ------------------------------------  */
var canPartition = function (nums) {
  const sum = nums.reduce((acc, cur) => acc + cur);
  if (sum & 1) return false;
  const dp = Array(sum / 2 + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    for (let j = sum / 2; j >= nums[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - nums[i]] + nums[i]);
      if (dp[j] === sum / 2) {
        return true;
      }
    }
  }
  return dp[sum / 2] === sum / 2;
};
