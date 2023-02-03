/**
 * @param {number[]} prices
 * @return {number}
 */

/* ----------------- 😐 Solution1: 双层forloop暴力法 ----------------- */
var maxProfit = function (prices) {
  let result = 0;

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      result = Math.max(result, prices[j] - prices[i]);
    }
  }

  return result;
};

/* ----------------- 👍👍👍 Solution2: DP -------------------------------- */
/**
  1. 确定dp数组以及下标的含义:
    dp[i][0] 表示第i天持有股票所得最多现金 
    dp[i][1] 表示第i天不持有股票所得最多现金

  2. 确定递推公式:
    dp[i][0] = max(dp[i - 1][0], -prices[i]);
    dp[i][1] = max(dp[i - 1][1], prices[i] + dp[i - 1][0])

  3. dp数组如何初始化:
    dp[0][0] -= prices[0];
    dp[0][1] = 0

  4. 确定遍历顺序: 从前向后遍历。

  5. 举例推导dp数组:
    输入：[7,1,5,3,6,4]为例，dp数组为：
    [[-7,0], [-1,0], [-1,4],[-1,4], [-1,5], [-1,5]]
 */

const maxProfit = (prices) => {
  const len = prices.length;
  // 创建dp二维数组
  const dp = new Array(len).fill([0, 0]);
  // dp数组初始化
  dp[0] = [-prices[0], 0];

  //遍历从下标1开始：
  for (let i = 1; i < len; i++) {
    //更新dp[i]
    dp[i] = [
      Math.max(dp[i - 1][0], -prices[i]),
      Math.max(dp[i - 1][1], dp[i - 1][0] + prices[i]),
    ];
    /* dp[i][0] ----> 如果第i天持有股票，那由两个状态推出来:
          第i-1天就持有股票，那么就保持现状，所得现金就是昨天持有股票的所得现金 即：dp[i - 1][0]
          第i天买入股票，所得现金就是0减去 今天的股票价格 即：0 - prices[i]  因为只买入一次
     */
    /* 即dp[i][1] ----> 如果第i天不持有股票, 由两个状态推出来
        第i-1天就不持有股票，那么就保持现状，所得现金就是昨天不持有股票的所得现金 即：dp[i - 1][1]
        第i天卖出股票，所得现金就是按照今天股票佳价格卖出后所得现金即：prices[i] + dp[i - 1][0]
    */
  }

  return dp[len - 1][1];
};

/* ----------------- 😐 Solution3: Greedy -------------------------------- */
var maxProfit = function (prices) {
  let minPrice = Infinity; // 重点是维护这个最小值（贪心的思想）
  let result = 0;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]); // 贪心地选择左面的最小价格
    result = Math.max(result, prices[i] - minPrice); // 遍历一趟就可以获得最大利润
  }

  return result;
};
