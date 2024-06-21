/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */

/*************** Solution:  Monotonic stack - 单调栈_模版prevSmallerElement变形题O(n) **************/
var removeKdigits = function (num, k) {
  let monoStack = [];

  //prevSmallerElement模版
  for (let i = 0; i < num.length; i++) {
    while (
      monoStack.length &&
      monoStack[monoStack.length - 1] > num[i] &&
      k > 0
    ) {
      // 挤掉大于nums[i]的记录
      monoStack.pop();
      k--;
    }

    //防止0作为数字的开头
    if (monoStack.length === 0 && num[i] === '0') continue;
    monoStack.push(num[i]);
  }

  //此时栈中元素单调递增，若k还没用完的话删掉栈顶元素
  while (k > 0 && monoStack.length > 0) {
    monoStack.pop();
    k--;
  }

  //若最后没剩下数字，就是0
  if (monoStack.length === 0) return '0';

  // return monoStack的数据
  return monoStack.join('');
};
