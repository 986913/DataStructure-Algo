/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/************************** 👍👍👍 Sliding Window ************************************/
var numSubarrayProductLessThanK = function (nums, k) {
  if (k <= 1) return 0;

  let count = 0;
  let product = 1;

  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    let moveIn = nums[fast];
    product = product * moveIn;
    fast++;

    // when window is invalid, then update product && shrink the window
    while (product >= k) {
      let moveOut = nums[slow];
      product = product / moveOut;
      slow++;
    }

    count += fast - slow; // update count here
  }

  return count;
};
