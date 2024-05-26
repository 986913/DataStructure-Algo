/**
 * @param {string} s
 * @return {number}
 */

/* ------------------------ Solution1: 暴力法： ------------------------ */
const lengthOfLongestSubstring = function (s) {
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    let set = new Set(); //在for-loop内部维持一个set
    for (let j = i; j < s.length; j++) {
      if (set.has(s[j])) break;
      set.add(s[j]);
    }
    maxLen = Math.max(maxLen, set.size);
  }

  return maxLen;
};

/* ------------------------ Solution2: 👍 Slding window ------------------------*/
const lengthOfLongestSubstring = function (s) {
  let maxLen = 0;
  const window = new Map();

  let slow = 0;
  let fast = 0;
  while (fast < s.length) {
    window.set(s[fast], window.get(s[fast]) + 1 || 1); // s[fast]是将移入窗口的字符，update window

    /* 当window中有进来的data时,且出现次数>1时.说明重复了。 不符合题目要求（invalid window） 就shrink the window */
    while (window.get(s[fast]) > 1) {
      window.set(s[slow], window.get(s[slow]) - 1); //s[slow]是将移出窗口的字符， update window
      slow++; // 缩小窗口
    }

    maxLen = Math.max(maxLen, fast - slow); // update maxLen;

    fast++; // 增大窗口
  }
  return maxLen;
};

/* ----- 🟡变形题： https://bigfrontend.dev/problem/longest-substring-with-unique-characters  ----- */
function longestUniqueSubstr(str) {
  if (str.length == 0) return '';

  let windowStart = 0;
  let longestSubstr = '';
  let charFrequency = new Map();

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    charFrequency.set(
      str[windowEnd],
      charFrequency.get(str[windowEnd]) + 1 || 1
    );

    // until you have unique characters
    while (charFrequency.get(str[windowEnd]) > 1) {
      let leftChar = str[windowStart]; // grab the left most character
      charFrequency.set(leftChar, charFrequency.get(leftChar) - 1); // decremenet by the count by 1
      if (charFrequency.get(leftChar) === 0) {
        charFrequency.delete(leftChar); // remove the character form hashmap if it's count is 0
      }
      windowStart += 1; // shrink the window
    }
    // get the length of characters in charFrequency by substracting the windowEnd from windowStart (1 is added as index is 0 based while we want length)
    longestSubstr =
      longestSubstr.length >= windowEnd - windowStart + 1
        ? longestSubstr
        : str.substring(windowStart, windowEnd + 1);
  }

  return longestSubstr;
}
