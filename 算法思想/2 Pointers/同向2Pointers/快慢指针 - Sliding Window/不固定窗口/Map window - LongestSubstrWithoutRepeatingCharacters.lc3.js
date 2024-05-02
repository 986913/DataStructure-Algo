/**
 * @param {string} s
 * @return {number}
 */

/* ------------------------ Solution1: 暴力法： ------------------------ */
const lengthOfLongestSubstring = function (s) {
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    let set = new Set();
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
  const window = new Map();

  let slow = 0;
  let fast = 0;
  let maxLen = 0;
  while (fast < s.length) {
    const moveIn = s[fast]; // moveIn 是将移入窗口的字符
    window.set(moveIn, window.get(moveIn) + 1 || 1); // update window
    fast++; // 增大窗口

    // 判断左侧窗口是否要收缩: 当新进来的data重复出现时
    while (window.get(moveIn) > 1) {
      const moveOut = s[slow]; // moveOut 是将移出窗口的字符
      window.set(moveOut, window.get(moveOut) - 1); // update window
      slow++; // 缩小窗口
    }

    maxLen = Math.max(maxLen, fast - slow); // update maxLen inside outer while loop
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
