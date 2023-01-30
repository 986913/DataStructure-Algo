/**
  1. 确定dp数组以及下标的含义:
    dp[i][0] 表示第i天持有股票所得最多现金 
    dp[i][1] 表示第i天不持有股票所得最多现金
  2. 确定递推公式:
    dp[i][0] = max(dp[i - 1][0], dp[i - 1][1] - prices[i]);  
        ----> 如果第i天持有股票，那由两个状态推出来:
              第i-1天就持有股票，那么就保持现状，所得现金就是昨天持有股票的所得现金 即：dp[i - 1][0]
              第i天买入股票，所得现金就是昨天不持有股票的所得现金减去 今天的股票价格 即：dp[i - 1][1] - prices[i] 

    dp[i][1] = max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee)；(🟢 这是与lc122 maxProfitII唯一不同的地方！🟢)
        ----> 即dp[i][1] ----> 如果第i天不持有股票, 由两个状态推出来
              第i-1天就不持有股票，那么就保持现状，所得现金就是昨天不持有股票的所得现金 即：dp[i - 1][1]
              第i天卖出股票，所得现金就是按照今天股票佳价格卖出后所得现金-手续费 即：prices[i] + dp[i - 1][0] - fee

  3. dp数组如何初始化:
    dp[0][0] -= prices[0];
    dp[0][1] = 0
  4. 确定遍历顺序: 从前向后遍历。
  5. 举例推导dp数组
 */

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */

/* -----------------  Solution1:👍 DP (leetcode 122🟡的变形题) -------------------------------- */
const maxProfit = (prices, fee) => {
  const len = prices.length;
  const dp = new Array(len).fill([0, 0]); // 创建dp二维数组
  dp[0] = [-prices[0], 0]; // dp数组初始化

  //更新dp[i]
  for (let i = 1; i < len; i++) {
    dp[i] = [
      Math.max(dp[i - 1][0], dp[i - 1][1] - prices[i]),
      Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i] - fee),
    ];
  }

  return dp[len - 1][1];
};

/* -----------------  Solution2: Greedy (没明白 lc122的变形题) -------------------------------- */
var maxProfit = function (prices, fee) {
  let result = 0;
  let minPrice = prices[0];

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < minPrice) minPrice = prices[i];

    if (prices[i] >= minPrice && prices[i] <= minPrice + fee) {
      continue;
    }

    if (prices[i] > minPrice + fee) {
      result += prices[i] - minPrice - fee;
      // 买入和卖出只需要支付一次手续费
      minPrice = prices[i] - fee;
    }
  }

  return result;
};
