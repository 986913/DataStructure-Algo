/**
  1. 确定dp数组以及下标的含义: dp[j]表示 背包总容量（所能装的总重量）是j，放进物品后，背的最大重量为dp[j]
  2. 确定递推公式: 状态转移方程 dp[j] = max(dp[j], dp[j - stones[i]] + stones[i]);
  3. dp数组如何初始化: const dp = Array(sum / 2 + 1).fill(0);
  4. 确定遍历顺序: 此题对应01背包的一维dp遍历模版：
    for (let i = 0; i < stones.length; i++) {
      for (let j = sum / 2; j >= stones[i]; j--) {
        dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
      }
    }
  5. 举例推导dp数组: 
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

/* ------------------------------------ DP ------------------------------------  */
const lastStoneWeightII = (stones) => {
  let sum = stones.reduce((acc, cur) => acc + cur);

  let dpLen = Math.floor(sum / 2);
  let dp = new Array(dpLen + 1).fill(0);

  for (let i = 0; i < stones.length; ++i) {
    for (let j = dpLen; j >= stones[i]; --j) {
      dp[j] = Math.max(dp[j], dp[j - stones[i]] + stones[i]);
    }
  }

  return sum - dp[dpLen] - dp[dpLen]; //一堆石头的总重量是dp[target]，另一堆就是sum - dp[target]。那么相撞之后剩下的最小石头重量就是 (sum - dp[target]) - dp[target]。
};
