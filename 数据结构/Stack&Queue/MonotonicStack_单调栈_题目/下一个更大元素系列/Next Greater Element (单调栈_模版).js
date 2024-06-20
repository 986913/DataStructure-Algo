/**
 * @param {number[]} nums
 * @return {number[]}
 * 输入：nums = [1, 3, 2, 4, 4]
 * 返回：res =  [3, 4, 4, -1,-1]
 */

var nextGreaterElement = function (nums) {
  var res = new Array(nums.length).fill(0); // 存放结果的数组，初始为0;
  var monoStack = []; // 单调栈，存放数组元素

  // 从数组末尾向前遍历: 因为是求nums[i]后面的元素，所以倒着往栈里放
  for (var i = nums.length - 1; i >= 0; i--) {
    //出栈: 弹出/删掉nums[i](当前元素)后面较小的元素
    while (monoStack.length && monoStack[monoStack.length - 1] <= nums[i]) {
      monoStack.pop();
    }

    //现在栈顶就是nums[i](当前元素)身后的更大元素
    res[i] = monoStack.length ? monoStack[monoStack.length - 1] : -1;

    //入栈:
    monoStack.push(nums[i]);
  }

  return res; // 返回结果数组
};
