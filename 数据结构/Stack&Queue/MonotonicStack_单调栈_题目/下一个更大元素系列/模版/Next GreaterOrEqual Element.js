/**
 * @param {number[]} nums
 * @return {number[]}
 * 输入：nums = [1, 3, 2, 4, 4]
 * 返回：res =  [3, 4, 4, 4,-1]
 */

/******************** Solution:  Monotonic stack - 单调栈_模版变形题 O(n) **********************/

var nextGreaterOrEqualElement = function (nums) {
  var res = new Array(nums.length).fill(0);
  var monoStack = []; // 单调递减栈

  for (var i = nums.length - 1; i >= 0; i--) {
    //出栈: diff is here  <= 改成 <
    while (monoStack.length && monoStack[monoStack.length - 1] < nums[i]) {
      monoStack.pop();
    }
    // 现在栈顶就是nums[i]身后的更大元素 或相等元素
    res[i] = monoStack.length ? monoStack[monoStack.length - 1] : -1;
    //入栈:
    monoStack.push(nums[i]);
  }

  return res;
};
