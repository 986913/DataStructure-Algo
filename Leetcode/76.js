/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */

/******************************* Solution1: 暴力双循环 *********************************************/
var minWindow = function (s, target) {
  if (target.length > s.length) return '';

  const needs = new Map();
  for (let char of target) {
    needs.set(char, needs.get(char) + 1 || 1);
  }

  let minLen = Infinity;
  let startIdx = 0;

  for (let i = 0; i < s.length; i++) {
    let map = new Map(); //在for-loop内部维持一个map
    let matched = 0; //在for-loop内部维持一个matched, 表示match了多少“个”char

    for (let j = i; j < s.length; j++) {
      if (needs.has(s[j])) {
        map.set(s[j], map.get(s[j]) + 1 || 1);
        if (map.get(s[j]) <= needs.get(s[j])) matched += 1;
      }

      if (matched === target.length) {
        if (j - i + 1 < minLen) {
          minLen = j - i + 1;
          startIdx = i;
        }
        break;
      }
    }
  }
  return minLen === Infinity ? '' : s.substr(startIdx, minLen);
};

/******************************* Solution2: 👍 Slding window - LC567, 438变形题 ********************************************
https://labuladong.github.io/algo/di-ling-zh-bfe1b/wo-xie-le--f02cd/#%E4%B8%80%E3%80%81%E6%9C%80%E5%B0%8F%E8%A6%86%E7%9B%96%E5%AD%90%E4%B8%B2

  target作为标准比对的frequency map, 过程中不对needs进行任何更改
  s是实际的window map, 记录和s和target中每一个一样char的频率。 滑动窗口过程中只更改s的window map
  matched很重要，是记载window中match了多少类字符, 当match===needs.size说明window里元素全match上了t！！
*/

var minWindow = function (s, target) {
  if (target.length > s.length) return '';

  // set frequency map (needs) to target string: target
  const needs = new Map();
  for (let char of target) {
    needs.set(char, needs.get(char) + 1 || 1);
  }

  //sliding window technique on s:
  let map = new Map();
  let matched = 0; //<---- key is here: 表示match了多少“种”char
  let minLen = Infinity;
  let startIdx = 0;

  let slow = 0;
  let fast = 0;
  while (fast < s.length) {
    //当needs中有移入元素时，才更新window
    if (needs.has(s[fast])) {
      map.set(s[fast], map.get(s[fast]) + 1 || 1);
      if (map.get(s[fast]) === needs.get(s[fast])) matched++; // <--- key is here
    }

    /* 当matched等于needs.size时，说明当前窗口包括了target的所有字符, 满足题目要求。 那就shrink the window找最小长度 */
    while (matched === needs.size) {
      //此时窗口满足题目要求，在此更新全局变量  <--- key is here
      if (fast - slow + 1 < minLen) {
        minLen = fast - slow + 1;
        startIdx = slow;
      }

      //当needs中有移出元素时，才更新window
      if (needs.has(s[slow])) {
        if (map.get(s[slow]) === needs.get(s[slow])) matched--; // <--- key is here
        map.set(s[slow], map.get(s[slow]) - 1);
      }

      slow++; // 缩小窗口
    }

    fast++; // 增大窗口
  }

  // 返回最小覆盖子串
  return minLen === Infinity ? '' : s.substring(startIdx, startIdx + minLen);
};
