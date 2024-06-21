/**
 * @param {number[]} nums
 * @return {number[]}
 * 输入：nums = [8, 7, 6, 7]
 * 返回：res = [-1, 8, 7, 8]
 */

var prevGreaterOrEqualElement = function (nums) {
  var res = new Array(nums.length).fill(0);
  var monoStack = []; // 单调递减栈

  // 从数组头向后遍历: 因为是求nums[i]前面的元素，所以正着往栈里放
  for (var i = 0; i < nums.length; i++) {
    //出栈: 弹出/删掉nums[i](当前元素)前面较小的元素 diff is here, <= 改成 <
    while (monoStack.length && monoStack[monoStack.length - 1] < nums[i]) {
      monoStack.pop();
    }

    //现在栈顶就是nums[i](当前元素)前面的更大元素或 相等元素
    res[i] = monoStack.length ? monoStack[monoStack.length - 1] : -1;
    //入栈:
    monoStack.push(nums[i]);
  }

  return res;
};
