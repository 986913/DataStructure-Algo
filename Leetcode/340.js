/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
  let longestLen = 0;
  let windowStartIdx = 0;
  let map = new Map();

  for (let windowEndIdx = 0; windowEndIdx < s.length; windowEndIdx++) {
    map.set(s[windowEndIdx], map.get(s[windowEndIdx]) + 1 || 1);

    while (map.size > k) {
      const leftChar = s[windowStartIdx];
      map.set(leftChar, map.get(leftChar) - 1);
      if (map.get(leftChar) === 0) {
        map.delete(leftChar);
      }

      windowStartIdx++;
    }

    longestLen = Math.max(longestLen, windowEndIdx - windowStartIdx + 1);
  }

  return longestLen;
};

// https://www.educative.io/courses/grokking-the-coding-interview/YQQwQMWLx80
