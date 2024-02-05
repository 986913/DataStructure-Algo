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

/* ------------------------ Solution2: 👍 Slding window - LC567, 438变形题 ------------------------*/
//https://labuladong.github.io/algo/di-ling-zh-bfe1b/wo-xie-le--f02cd/#%E4%B8%80%E3%80%81%E6%9C%80%E5%B0%8F%E8%A6%86%E7%9B%96%E5%AD%90%E4%B8%B2

var minWindow = function (s, t) {
  if (t.length > s.length) return '';

  const needs = new Map(); // created needs window based on T --> 记录需要匹配的字符及对应的出现次数
  for (let i = 0; i < t.length; i++) {
    needs.set(t[i], needs.get(t[i]) + 1 || 1);
  }

  const window = new Map(); // 记录窗口中满足needs条件的字符及其出现次数
  let slow = 0;
  let fast = 0;

  let valid = 0; // 表示window中满足needs条件的字符个数, 如果valid和need.size的大小相同，则说明window窗口已满足条件，S已经完全覆盖了串T。
  let start = 0; // 记录最小覆盖子串的起始索引
  let len = Infinity; // 记录最小覆盖子串的长度

  while (fast < s.length) {
    let c = s[fast]; // c是将移入窗口的字符
    fast++; // 扩大窗口
    // 进行窗口内数据的一系列更新
    if (needs.has(c)) {
      window.set(c, window.get(c) + 1 || 1);
      //key is here:
      if (window.get(c) === needs.get(c)) {
        valid++;
      }
    }

    /* 缩小窗口：判断左侧窗口是否要收缩: 说明T中所有字符已经被S覆盖，已经得到一个可行的覆盖子串*/
    while (valid === needs.size) {
      // 在这里更新最小覆盖子串
      if (fast - slow < len) {
        len = fast - slow;
        start = slow;
      }

      let d = s[slow]; // d 是将移出窗口的字符
      slow++; // 缩小窗口
      // 进行窗口内数据的一系列更新
      if (needs.has(d)) {
        //key is here:
        if (window.get(d) === needs.get(d)) valid -= 1;
        window.set(d, window.get(d) - 1);
      }
    }
  }

  // 返回最小覆盖子串
  return len === Infinity ? '' : s.substring(start, start + len);
};
