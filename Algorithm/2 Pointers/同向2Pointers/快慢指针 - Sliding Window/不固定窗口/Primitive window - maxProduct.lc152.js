/**
 * @param {number[]} nums
 * @return {number}
 */
/***********************************  sliding window ***********************************/
var maxProduct = function (nums) {
  let maxProduct = -Infinity;
  let curProduct = 1;

  let fast = 0;
  let slow = 0;
  while (fast < nums.length) {
    // 如果当前元素为0且当前子数组乘积为负数且慢指针小于快指针 - 1;
    if (nums[fast] === 0 && curProduct < 0 && slow < fast - 1) {
      curProduct /= nums[slow];
      slow++;
      maxProduct = Math.max(curProduct, maxProduct);
    }
    // 如果当前元素为0
    else if (nums[fast] === 0) {
      maxProduct = Math.max(0, maxProduct);
      fast++;
      slow = fast;
      curProduct = 1; // 重置当前子数组乘积为1
    }
    // 如果当前元素不为0
    else {
      curProduct *= nums[fast];
      fast++;
      maxProduct = Math.max(curProduct, maxProduct);
    }
  }

  while (curProduct < 0 && slow < nums.length - 1) {
    curProduct /= nums[slow];
    maxProduct = Math.max(curProduct, maxProduct);
    slow++;
  }

  return maxProduct === -Infinity ? 0 : maxProduct;
};
