/**
 * @param {number[]} prices
 * @return {number}
 */

/**
  1. 确定dp数组以及下标的含义:
    dp[i][0] 表示第i天没有操作
    dp[i][1] 表示第i天第一次持有股票
    dp[i][2] 表示第i天不第一次持有股票 
    dp[i][3] 表示第i天第二次持有股票
    dp[i][4] 表示第i天第二次不持有股票 

  2. 确定递推公式:
    dp[i][0] = dp[i - 1][0];
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]);
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i]);
    dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i]);

  3. dp数组如何初始化:
    dp[0][0] = 0;
    dp[0][1] = -prices[0];
    dp[0][2] = 0;
    dp[0][3] = -prices[0];
    dp[0][4] = 0;

  4. 确定遍历顺序: 从前向后遍历。

  5. 举例推导dp数组:
    输入：[1,2,3,4,5]为例，dp数组为：
    [ [0, -1, 0, -1, 0], 
      [0, -1, 1, -1, 1], 
      [0, -1, 2, -1, 2],
      [0, -1, 3, -1, 3], 
      [0, -1, 4, -1, 4], 
    ]
 */

/* ----------------- 👍 Solution: DP -------------------------------- */
const maxProfit = (prices) => {
  const len = prices.length;

  const dp = new Array(len).fill(0).map((x) => new Array(5).fill(0));
  dp[0][1] = -prices[0];
  dp[0][3] = -prices[0];

  for (let i = 1; i < len; i++) {
    dp[i][0] = dp[i - 1][0];
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    dp[i][2] = Math.max(dp[i - 1][2], dp[i - 1][1] + prices[i]);
    dp[i][3] = Math.max(dp[i - 1][3], dp[i - 1][2] - prices[i]);
    dp[i][4] = Math.max(dp[i - 1][4], dp[i - 1][3] + prices[i]);
  }

  return dp[len - 1][4];
};

//https://programmercarl.com/0123.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BAIII.html#%E6%80%9D%E8%B7%AF
