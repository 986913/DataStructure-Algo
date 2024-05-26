/**
 * @param {number[]} prices
 * @return {number}
 */

/********************************* 😐 Solution1: 双层forloop暴力法 *********************************/
var maxProfit = function (prices) {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      max = Math.max(max, prices[j] - prices[i]);
    }
  }
  return max;
};

/************************************ 👍 Solution2: Greedy ******************************************/
var maxProfit = function (prices) {
  let minPrice = Infinity; // 重点是维护这个最小值（贪心的思想）
  let maxProfitVal = 0;

  // 遍历一趟就可以获得最大利润
  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]); // 贪心地选择左面的最小价格

    if (prices[i] - minPrice > maxProfitVal) {
      maxProfitVal = prices[i] - minPrice; //更新最大利润
    }
  }

  return maxProfitVal;
};

/******************************** Solution3: Recursion (Top-down) *******************************
  递归时间复杂度分析：递归函数调用的次数 * 递归函数本身的复杂度
                             O(n) * O(1)
*/
var maxProfit = function (prices) {
  return helper(prices, 0, prices[0]);
};

// Recursive function
const helper = (prices, curIdx, minPrice) => {
  // Base case: if we are at the end of the array, return 0
  if (curIdx >= prices.length) return 0;

  // 1.if we sell today(curIdx):     Calculate the current profit
  let currProfit = prices[curIdx] - minPrice;
  // 2.if we not sell today(curIdx): Recursive Calculate the max profit if we continue
  let maxProfitIfContinue = helper(
    prices,
    curIdx + 1,
    Math.min(minPrice, prices[curIdx])
  );

  // Return the maximum of selling today or continuing
  return Math.max(currProfit, maxProfitIfContinue);
};

/************************** Solution4: Recursion + 备忘录 (优化版Top-down) ************************
  递归时间复杂度分析：递归函数调用的次数 * 递归函数本身的复杂度
                             O(n) * O(1)
*/
var maxProfit = function (prices) {
  let memo = new Array(prices.length).fill(-1); // 初始化1维数组memo，用于存储已经计算过的每一天的maxProfit
  return helper(prices, 0, prices[0], memo);
};
// Recursive function:
const helper = (prices, startIdx, minPrice, memo) => {
  if (startIdx >= prices.length) return 0;

  let currProfit = prices[startIdx] - minPrice;

  // diff is here: 准备递归之前，先去备忘录里查一下，算过了就不用再计算了，没算就准备递归计算
  if (memo[startIdx] !== -1) return Math.max(currProfit, memo[startIdx]);
  // 备忘录中没查到的话 开始递归：
  let maxProfitIfContinue = helper(
    prices,
    startIdx + 1,
    Math.min(minPrice, prices[startIdx]),
    memo
  );
  // diff is here: 递归完后，把递归结果存到备忘录里
  memo[startIdx] = maxProfitIfContinue;

  return Math.max(currProfit, maxProfitIfContinue);
};

/****************************** Solution5: DP (Down to Up)   O(n)***************************************
  1. 确定dp数组以及下标的含义:
                                  dp[i] --->  到达第i天时所能获得的最大利润。
  2. 确定递推公式:
                                  dp[i] = Math.max(currProfit, dp[i - 1]);

                                  在第i天获取的最大利润是在下面2个情况中取最大,，这样就确保了dp[i]包含了到第i天为止所能获得的最大利润:
                                    1.如果在当前天卖出股票，  我们可以获得的利润，即currProfit。
                                    2.如果不在当前天卖出股票，那么当前最大的利润就是前一天的最大利润，即dp[i - 1]。
  3. dp数组如何初始化:              dp all item is 0
  4. 确定遍历顺序:                  从前向后遍历。
  5. 举例推导dp数组
 */

var maxProfit = function (prices) {
  // Initialize a DP array to store the maximum profit up to each index
  const dp = new Array(prices.length).fill(0);

  // Initialize the minimum price to the first price
  let minPrice = prices[0];

  // Loop through the prices array starting from the second day
  for (let i = 1; i < prices.length; i++) {
    const currProfit = prices[i] - minPrice; // Calculate the current profit if we sell on the current day
    dp[i] = Math.max(currProfit, dp[i - 1]); // Update the DP table with the maximum of selling today or continuing
    minPrice = Math.min(minPrice, prices[i]); // Update the minimum price seen so far
  }

  // Return the maximum profit from the last day
  return dp[prices.length - 1];
};
