/* -------------------- solution:  DP: good performance  ------------------  */

/**
1. 确定dp数组以及下标的含义:  dp[i]： 爬到第i层楼梯，有dp[i]种方法
2. 确定递推公式: 状态转移方程 dp[i] = dp[i - 1] + dp[i - 2] 
3. dp数组如何初始化: dp[0]=1, dp[2] = 2;
4. 确定遍历顺序:从前往后
5. 举例推导dp数组: [1，2，3，5，8，13，21，...]
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  let dp = [1, 2]; // dp[i] 为第 i 阶楼梯有多少种方法爬到楼顶
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  console.log(dp);
  return dp[n - 1];
};
