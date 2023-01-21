/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
  let minPrice = Infinity;
  let maxProft = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i]; // 1
    } else if (prices[i] - minPrice > maxProft) {
      maxProft = prices[i] - minPrice; //4
    }
  }

  return maxProft;
};
