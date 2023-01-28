/**
 * @param {number[]} prices
 * @return {number}
 */

/* 本题和动态规划lc123.买卖股票的最佳时机III最大的区别就是这里要类比j为奇数是买，偶数是卖的状态。*/

/* ----------------- 👍 Solution: DP (leetcode 123的变形题)-------------------------------- */
const maxProfit = (k, prices) => {
  if (prices == null || prices.length < 2 || k == 0) return 0;

  let dp = new Array(prices.length)
    .fill(0)
    .map((x) => new Array(2 * k + 1).fill(0));

  for (let j = 1; j < 2 * k; j += 2) {
    dp[0][j] = 0 - prices[0];
  }

  for (let i = 1; i < prices.length; i++) {
    for (let j = 0; j < 2 * k; j += 2) {
      dp[i][j + 1] = Math.max(dp[i - 1][j + 1], dp[i - 1][j] - prices[i]);
      dp[i][j + 2] = Math.max(dp[i - 1][j + 2], dp[i - 1][j + 1] + prices[i]);
    }
  }

  return dp[prices.length - 1][2 * k];
};

//https://programmercarl.com/0123.%E4%B9%B0%E5%8D%96%E8%82%A1%E7%A5%A8%E7%9A%84%E6%9C%80%E4%BD%B3%E6%97%B6%E6%9C%BAIII.html#%E6%80%9D%E8%B7%AF
