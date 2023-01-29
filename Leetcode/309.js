/**
  1. 确定dp数组以及下标的含义:
    dp[i][0] 表示第i天持有股票 （今天买入股票，或者是之前就买入了股票然后没有操作，一直持有）
    dp[i][1] 表示第i天保持卖出股票的状态
    dp[i][2] 表示第i天具体卖出股票
    dp[i][3] 表示第i天是冷冻期
  2. 确定递推公式:
    dp[i][0] = max(
      dp[i - 1][0],                 ---> 前一天持有股票状态
      dp[i - 1][3] - prices[i],     ---> 前一天是冷冻期，在冷冻期下一天买入股票了
      dp[i - 1][1] - prices[i],     ---> 前一天是保持卖出状态，在第i天买入股票了
    );
    dp[i][1] = max(
      dp[i - 1][1],                 ---> 前一天保持卖出股票状态 
      dp[i - 1][0] + prices[i]      ---> 前一天是冷冻期
    )；
    dp[i][2] = dp[i-1][0] + prices[i]--> 前一天持有股票状态,在第i天卖出股票
    dp[i][3] = dp[i-1][2]           ---> 前一天具体卖出股票
  3. dp数组如何初始化:
    dp[0][0] -= prices[0];
    dp[0][1] = 0,    
    dp[0][2] = 0,    
    dp[0][3] = 0,
  4. 确定遍历顺序: 从前向后遍历。
  5. 举例推导dp数组:
    输入：prices = [1,2,3,0,2]为例，dp数组为：
    [
      [-1, 0, 0, 0], 
      [-1, 0, 1, 0], 
      [-1, 0, 2, 0], 
      [ 1, 1, -1,2], 
      [ 1, 2, 3,-1], 
    ]
    ------------------------------
    结果在:                中取最大值
          dp[prices-1][1], 
          dp[prices-1][2],
          dp[prices-1][3]
 */

/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = (prices) => {
  const len = prices.length;
  if (len < 2) return 0;
  else if (len < 3) return Math.max(0, prices[1] - prices[0]);

  let dp = Array(len)
    .fill(0)
    .map((x) => Array(4).fill(0));
  dp[0][0] = 0 - prices[0];

  for (i = 1; i < len; i++) {
    dp[i][0] = Math.max(
      dp[i - 1][0],
      Math.max(dp[i - 1][1], dp[i - 1][3]) - prices[i]
    );
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][3]);
    dp[i][2] = dp[i - 1][0] + prices[i];
    dp[i][3] = dp[i - 1][2];
  }

  return Math.max(dp[len - 1][1], dp[len - 1][2], dp[len - 1][3]);
};
