/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/************************** 👍👍👍 Sliding Window ************************************/
var numSubarrayProductLessThanK = function (nums, k) {
  let windowStartIdx = 0;
  let currProduct = 1;
  let count = 0;

  for (let windowEndIdx = 0; windowEndIdx < nums.length; windowEndIdx++) {
    currProduct *= nums[windowEndIdx];

    while (currProduct >= k && windowStartIdx <= windowEndIdx) {
      // when window is invalid, then update product && shrink the window
      currProduct /= nums[windowStartIdx];
      windowStartIdx++;
    }
    count += windowEndIdx - windowStartIdx + 1;
  }

  return count;
};
