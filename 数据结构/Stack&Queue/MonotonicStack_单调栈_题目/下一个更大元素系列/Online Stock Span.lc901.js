/********** Solution:  Monotonic stack - 单调栈_模版prevGreaterElement变形题 O(n) **************/

var StockSpanner = function () {
  this.monoStack = []; // <----diff is here {价格，小于等于该价格的天数} 二元组
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  // 算上当天
  let count = 1;

  //prevGreaterElement模版
  while (
    this.monoStack.length &&
    this.monoStack[this.monoStack.length - 1].price <= price
  ) {
    // 挤掉价格低于 price 的记录
    const prev = this.monoStack.pop();
    // 计算小于等于 price 的天数
    count += prev.count; // <----diff is here
  }

  this.monoStack.push({ price, count }); // <----diff is here
  return count;
};
