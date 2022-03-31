/**
 * @param {number[]} nums
 * @return {number}
 */

var findMaxConsecutiveOnes = function (nums) {
  let windowStartIdx = 0;
  let longestLen = 0;
  let maxRepeatOneCount = 0;

  // Try to extend the range [windowStart, windowEnd]
  for (let windowEndIdx = 0; windowEndIdx < nums.length; windowEndIdx++) {
    if (nums[windowEndIdx] === 1) {
      maxRepeatOneCount += 1;
    }

    /* Current window size is from windowStart to windowEnd, overall we have a maximum of 1s
    repeating 'maxOnesCount' times, this means we can have a window with 'maxOnesCount' 1s
    and the remaining are 0s which should replace with 1s.
    now, if the remaining 0s are more than '1', it is the time to shrink the window as we
    are not allowed to replace more than '1' 0s */
    if (windowEndIdx - windowStartIdx + 1 - maxRepeatOneCount > 1) {
      if (nums[windowStartIdx] === 1) {
        maxRepeatOneCount -= 1;
      }
      windowStartIdx += 1;
    }

    longestLen = Math.max(longestLen, windowEndIdx - windowStartIdx + 1);
  }

  return longestLen;
};
