/**
 * @param {number[]} prices
 * @return {number[]}
 */
/************ Solution:  单调栈_模版nextSmallerOrEqualElement变形题 O(n) ****************/
var finalPrices = function (prices) {
  const res = new Array(prices.length).fill(0);
  const monoStack = [];

  for (var i = prices.length - 1; i >= 0; i--) {
    //出栈: 弹出/删掉prices[i](当前元素)后面较大的元素.
    while (monoStack.length && monoStack[monoStack.length - 1] > prices[i]) {
      monoStack.pop();
    }
    // 现在栈顶就是prices[i]身后的更小元素 或相等元素
    res[i] = monoStack.length
      ? prices[i] - monoStack[monoStack.length - 1] // <--- diff is here, 因为结果要的是折扣后的价钱啦
      : prices[i];
    //入栈:
    monoStack.push(prices[i]);
  }

  return res;
};
