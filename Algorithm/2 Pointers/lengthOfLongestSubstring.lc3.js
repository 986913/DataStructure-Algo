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
