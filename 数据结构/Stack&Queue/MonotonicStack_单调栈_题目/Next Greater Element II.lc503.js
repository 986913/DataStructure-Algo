/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**************************** Solution 1: Brute force - O(n2) ********************************************/
var nextGreaterElements = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let foundNextGreater = false;

    // 内层循环从1到nums.length-1，确保检查数组中的所有元素
    for (let j = 1; j < nums.length; j++) {
      // (i+j)%nums.length 实现环形数组的效果
      if (nums[(i + j) % nums.length] > nums[i]) {
        result.push(nums[(i + j) % nums.length]);
        foundNextGreater = true;
        break;
      }
    }

    if (!foundNextGreater) result.push(-1);
  }

  return result;
};

/**************************** Solution 2:  Monotonic stack - 单调栈_模版变形题 O(n) **********************************

  这个问题肯定还是要用单调栈的解题模板，但难点在于比如输入是 [2,1,2,4,3]，对于最后一个3，如何找到4作为下一个更大元素
  对于这种需求，常用套路就是将数组长度翻倍
*/
var nextGreaterElements = function (nums) {
  var res = new Array(nums.length).fill(0);
  var monoStack = [];

  // 从数组末尾向前遍历, diff is here --> 数组长度翻倍 用来 模拟环形数组
  for (var i = 2 * nums.length - 1; i >= 0; i--) {
    while (
      monoStack.length &&
      monoStack[monoStack.length - 1] <= nums[i % nums.length] // diff is here --> i%nums.length 用来模拟环形数组
    ) {
      monoStack.pop();
    }

    // diff is here --> i%nums.length 用来模拟环形数组
    res[i % nums.length] = monoStack.length
      ? monoStack[monoStack.length - 1]
      : -1;
    monoStack.push(nums[i % nums.length]); // diff is here --> i%nums.length 用来模拟环形数组
  }

  return res;
};
