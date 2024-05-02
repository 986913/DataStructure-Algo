/**
1. 确定dp数组以及下标的含义: dp[j]：凑成总金额j的货币组合数为dp[j]
2. 确定递推公式: 状态转移方程 dp[j] += dp[j - coins[i]];       
3. dp数组如何初始化: dp[0]=1
4. 确定遍历顺序: 
 for (let i = 0; i < coins.length; i++) { // 遍历物品
    for (let j = coins[i]; j <= amount; j++) { // 遍历背包容量
        dp[j] += dp[j - coins[i]];
    }
}
5. 举例推导dp数组:
 */

const change = (amount, coins) => {
  let dp = Array(amount + 1).fill(0);
  dp[0] = 1;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= amount; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }

  return dp[amount];
};
