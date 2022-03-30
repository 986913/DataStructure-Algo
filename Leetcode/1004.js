/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var longestOnes = function (arr, k) {
  let windowStartIdx = 0;
  let longestLen = 0;
  let maxRepeatOneCount = 0;

  // Try to extend the range [windowStart, windowEnd]
  for (let windowEndIdx = 0; windowEndIdx < arr.length; windowEndIdx++) {
    if (arr[windowEndIdx] === 1) {
      maxRepeatOneCount += 1;
    }

    // Current window size is from windowStart to windowEnd, overall we have a maximum of 1s
    // repeating 'maxOnesCount' times, this means we can have a window with 'maxOnesCount' 1s
    // and the remaining are 0s which should replace with 1s.
    // now, if the remaining 0s are more than 'k', it is the time to shrink the window as we
    // are not allowed to replace more than 'k' 0s
    if (windowEndIdx - windowStartIdx + 1 - maxRepeatOneCount > k) {
      if (arr[windowStartIdx] === 1) {
        maxRepeatOneCount -= 1;
      }
      windowStartIdx += 1;
    }

    longestLen = Math.max(longestLen, windowEndIdx - windowStartIdx + 1);
  }

  return longestLen;
};
