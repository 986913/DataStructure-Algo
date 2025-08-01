/**
 * @param {number[]} nums
 * @return {number[]}
 * 输入：nums = [1, 3, 2, 4, 4]
 * 返回：res =  [3, 4, 4, 4,-1]
 */

/******************** Solution:  Monotonic stack - 单调栈_模版变形题 O(n) **********************/

var nextSmallerOrEqualElement = function (nums) {
  var res = new Array(nums.length).fill(0);
  var monoStack = []; // 单调递增栈

  for (var i = nums.length - 1; i >= 0; i--) {
    //出栈: 弹出/删掉nums[i](当前元素)后面较大的元素.   diff is here  <= 改成 >
    while (monoStack.length && monoStack[monoStack.length - 1] > nums[i]) {
      monoStack.pop();
    }
    // 现在栈顶就是nums[i]身后的更小元素 或相等元素
    res[i] = monoStack.length ? monoStack[monoStack.length - 1] : -1;
    //入栈:
    monoStack.push(nums[i]);
  }

  return res;
};
