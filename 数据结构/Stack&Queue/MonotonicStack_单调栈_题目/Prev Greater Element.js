/**
 * @param {number[]} nums
 * @return {number[]}
 * 输入：nums = [8, 7, 6, 7]
 * 返回：res = [-1, 8, 7, 8]
 */

var prevGreaterElement = function (nums) {
  var res = new Array(nums.length).fill(0); // 存放结果的数组，初始为0;
  var monoStack = []; // 单调栈，存放数组元素

  // 从数组头向后遍历: 因为是求nums[i]前面的元素，所以正着往栈里放
  for (var i = 0; i < nums.length; i++) {
    //出栈: 弹出/删掉nums[i](当前元素)前面较小的元素
    while (monoStack.length && monoStack[monoStack.length - 1] <= nums[i]) {
      monoStack.pop();
    }

    //现在栈顶就是nums[i](当前元素)前面的更大元素
    res[i] = monoStack.length ? monoStack[monoStack.length - 1] : -1;

    //入栈:
    monoStack.push(nums[i]);
  }

  return res; // 返回结果数组
};
