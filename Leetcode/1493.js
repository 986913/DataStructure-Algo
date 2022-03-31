var longestSubarray = function (nums) {
  let windowStartIdx = 0;
  let longestLen = 0;
  let k = 1;

  // Try to extend the range [windowStart, windowEnd]
  for (let windowEndIdx = 0; windowEndIdx < nums.length; ++windowEndIdx) {
    if (nums[windowEndIdx] === 0) {
      k--;
    }
    while (k < 0) {
      //[windowStartIdx, windowEndIdx] has 2 zeros
      if (nums[windowStartIdx] == 0) {
        //find the first zero
        k++;
      }
      windowStartIdx++;
    }

    longestLen = Math.max(longestLen, windowEndIdx - windowStartIdx);
  }

  return longestLen;
};
