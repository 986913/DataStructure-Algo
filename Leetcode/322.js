/**
1. 确定dp数组以及下标的含义:dp[j]：凑足总额为j所需钱币的最少个数为dp[j]
2. 确定递推公式: 状态转移方程 dp[j] = min(dp[j - coins[i]] + 1, dp[j]);    
3. dp数组如何初始化: dp[0]=0
4. 确定遍历顺序: 
    如果求组合数就是外层for循环遍历物品，内层for遍历背包。
    如果求排列数就是外层for遍历背包，内层for循环遍历物品。

      此题求求钱币最小个数，那么钱币有顺序和没有顺序都可以，都不影响钱币的最小个数，所以本题并不强调集合是组合不是排列

5. 举例推导dp数组: */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

const coinChange = (coins, amount) => {
  if (!amount) return 0;

  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
};
