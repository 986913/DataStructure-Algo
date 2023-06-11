/**
 * @param {string} s
 * @return {number}
 */

/* ------------------------ Solution1: 暴力法： ------------------------ */
var lengthOfLongestSubstring = function (s) {
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
/*
  解题思路：
  遍历字符串，判断字符是否在map里  
    在则: 更新window的start index (确保windowStartIdx只能增加不能减少) <--- 重点
    不在: 则存进map里，(字符 as key, index as value)
  然后将maxLen更新为当前最长子串的长度
  遍历完，返回maxLen即可 
*/
var lengthOfLongestSubstring = function (s) {
  let maxLen = 0;

  let map = new Map(); //key is element, value is index
  let windowStartIdx = 0;
  for (let windowEndIdx = 0; windowEndIdx < s.length; windowEndIdx++) {
    if (map.has(s[windowEndIdx])) {
      windowStartIdx = Math.max(windowStartIdx, map.get(s[windowEndIdx]) + 1); // <--- 重点
    }
    maxLen = Math.max(maxLen, windowEndIdx - windowStartIdx + 1);
    map.set(s[windowEndIdx], windowEndIdx);
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
