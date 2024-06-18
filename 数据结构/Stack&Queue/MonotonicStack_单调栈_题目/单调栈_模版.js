// 定义函数 nextGreaterElement，参数为 nums 数组

var nextGreaterElement = function (nums) {
  var res = new Array(nums.length - 1).fill(0); // 存放结果的数组，初始为0;
  var monoStack = []; // 单调栈，存放数组元素

  // 从数组末尾向前遍历
  for (var i = nums.length - 1; i >= 0; i--) {
    // 维护单调递减栈，保证栈顶元素始终 > 当前元素
    while (monoStack.length && monoStack[monoStack.length - 1] <= nums[i]) {
      monoStack.pop(); // 弹出比当前元素小的栈顶元素
    }

    /* 如果栈为空，  表示当前nums[i]后面没有更大的元素，将res[i]设为 -1
       如果栈不为空, res[i]设为栈顶元素s[s.length-1]，即当前nums[i]后面第一个比它大的元素 */
    res[i] = monoStack.length ? monoStack[monoStack.length - 1] : -1;
    monoStack.push(nums[i]); // 当前元素入栈
  }

  return res; // 返回结果数组
};
