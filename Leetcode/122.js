/**
 * @param {number[]} prices
 * @return {number}
 */

/**
 * 贪心：
 * 局部最优： 收集每天的正利润
 * 全局最优:  求的最大利润（每天的正利润加起来）
 */
var maxProfit = function (prices) {
  let result = 0;
  for (let i = 1; i < prices.length; i++) {
    result += Math.max(prices[i] - prices[i - 1], 0);
  }

  return result;
};
