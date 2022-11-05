/**
 * @param {string} s
 * @return {number}
 */

// 暴力法：
var lengthOfLongestSubstring = function (s) {
  let maxSize = 0;

  for (let i = 0; i < s.length; i++) {
    let set = new Set();
    for (let j = i; j < s.length; j++) {
      if (set.has(s[j])) break;
      set.add(s[j]);
    }
    maxSize = Math.max(maxSize, set.size);
  }

  return maxSize;
};

// Slding window
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let windowStartIdx = 0;
  let longestNonRepeatStrLen = 0;
  let charIndexMap = new Map();

  // try to extend the range [windowStartIdx, windowEndIdx]
  for (let windowEndIdx = 0; windowEndIdx < s.length; windowEndIdx++) {
    const rightChar = s[windowEndIdx];
    // if the map already contains the 'rightChar', shrink the window from the beginning so that
    // we have only one occurrence of 'rightChar'

    if (charIndexMap.has(rightChar)) {
      // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
      // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
      windowStartIdx = Math.max(
        windowStartIdx,
        charIndexMap.get(rightChar) + 1
      );
    }

    // insert the 'rightChar' into the map
    charIndexMap.set(rightChar, windowEndIdx);

    // remember the maximum length so far
    longestNonRepeatStrLen = Math.max(
      longestNonRepeatStrLen,
      windowEndIdx - windowStartIdx + 1
    );
  }

  return longestNonRepeatStrLen;
};

//变形题： https://bigfrontend.dev/problem/longest-substring-with-unique-characters
function longestUniqueSubstr(str) {
  if (!str.length) return '';

  const set = new Set();
  let start = 0;
  let end = 0;
  let max = 0;
  let start_idx = 0;

  while (end < str.length) {
    if (!set.has(str[end])) {
      set.add(str[end]);
      end++;
    } else {
      set.delete(str[start]);
      start++;
    }

    if (end - start > max) {
      max = end - start;
      start_idx = start;
    }
  }
  return str.slice(start_idx, start_idx + max);
}
