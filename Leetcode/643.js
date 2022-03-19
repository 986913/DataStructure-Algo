/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**
  force brute --------------------------------------------------------------------------------------
 */
var findMaxAverage = function (nums, k) {
  let max = -Infinity;

  for (let i = 0; i < nums.length - k + 1; i++) {
    let subArr = nums.slice(i, i + k);
    let average = subArr.reduce((acc, cur) => acc + cur) / k;
    max = Math.max(max, average);
  }

  return max;
};
var findMaxAverage = function (nums, k) {
  let max = -Infinity;

  for (let i = 0; i < nums.length - k + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += nums[j];
    }
    max = Math.max(max, sum / k);
  }

  return max;
};

/**
  Sliding window --------------------------------------------------------------------------------------
 */
var findMaxAverage = function (nums, k) {
  let max = -Infinity;

  let windowSum = 0,
    windowStartIdx = 0;

  for (let windowEndIdx = 0; windowEndIdx < nums.length; windowEndIdx++) {
    windowSum += nums[windowEndIdx]; // add the next element
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'
    if (windowEndIdx >= k - 1) {
      max = Math.max(max, windowSum / k);
      windowSum -= nums[windowStartIdx]; // subtract the element going out
      windowStartIdx += 1; // slide the window ahead
    }
  }

  return max;
};
