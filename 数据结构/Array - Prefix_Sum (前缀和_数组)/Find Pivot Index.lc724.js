/**
 * @param {number[]} nums
 * @return {number}
 */

/* ------------------------解法1: build in ------------------------ */
// 时间 O(n^2)
var pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let leftSum = sum(nums.slice(0, i));
    let rightSum = sum(nums.slice(i + 1));
    if (leftSum === rightSum) return i;
  }
  return -1;
};
const sum = (arr) => arr.reduce((prev, curr) => prev + curr, 0);

/*------------------------解法2: Math / Two Pointer/ 隐式🫥 Prefix sum 👍 ------------------------ */
// 时间 O(n), 空间O(1)
var pivotIndex = function (nums) {
  let totalSum = nums.reduce((acc, cur) => acc + cur);

  let leftSum = 0; // 只是你没有把它存进数组，而是用变量滚动维护。
  for (let i = 0; i < nums.length; i++) {
    const rightSum = totalSum - leftSum - nums[i];
    if (leftSum === rightSum) return i;
    leftSum += nums[i];
  }

  return -1;
};

/*------------------------解法3: Prefix sum  ------------------------ */
// 时间 O(n), 空间O(n)
var pivotIndex = function (nums) {
  let preSum = new Array(nums.length + 1).fill(0);
  for (let i = 1; i < preSum.length; i++) {
    preSum[i] = preSum[i - 1] + nums[i - 1];
  }

  for (let i = 0; i < preSum.length; i++) {
    let leftSum = preSum[i];
    let rightSum = preSum[preSum.length - 1] - preSum[i + 1];
    if (leftSum === rightSum) return i;
  }

  return -1;
};
