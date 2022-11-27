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

/*  Slding window
  解题思路： 使用一个数组来维护滑动窗口
  遍历字符串，判断字符是否在滑动窗口数组里  
    不在则 push 进数组
    在则删除滑动窗口数组里相同字符及相同字符前的字符，然后将当前字符 push 进数组
    然后将 longestNonRepeatStrLen 更新为当前最长子串的长度
    遍历完，返回 longestNonRepeatStrLen 即可 
*/
var lengthOfLongestSubstring = function (s) {
  let longestNonRepeatStrLen = 0;
  let window = [];

  // try to extend the range [windowStartIdx, windowEndIdx]
  for (let windowEndIdx = 0; windowEndIdx < s.length; windowEndIdx++) {
    const index = window.indexOf(s[windowEndIdx]);
    if (index !== -1) {
      window.splice(0, index + 1);
    }
    window.push(s[windowEndIdx]);
    longestNonRepeatStrLen = Math.max(longestNonRepeatStrLen, window.length);
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
