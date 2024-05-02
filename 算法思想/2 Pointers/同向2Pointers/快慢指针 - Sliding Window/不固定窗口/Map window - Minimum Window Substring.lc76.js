/* ------------------------ Solution: 👍 Slding window - LC567, 438变形题 ------------------------*/
//https://labuladong.github.io/algo/di-ling-zh-bfe1b/wo-xie-le--f02cd/#%E4%B8%80%E3%80%81%E6%9C%80%E5%B0%8F%E8%A6%86%E7%9B%96%E5%AD%90%E4%B8%B2

var minWindow = function (s, t) {
  if (t.length > s.length) return '';

  const needs = new Map(); // created needs window based on T --> 记录需要匹配的字符及对应的出现次数
  for (let i = 0; i < t.length; i++) {
    needs.set(t[i], needs.get(t[i]) + 1 || 1);
  }

  let valid = 0; // 表示window中满足needs条件的字符个数, 如果valid和need.size的大小相同，则说明window窗口已满足条件，S已经完全覆盖了串T。
  let start = 0; // 记录最小覆盖子串的起始索引
  let len = Infinity; // 记录最小覆盖子串的长度

  const window = new Map(); // 记录窗口中满足needs条件的字符及其出现次数
  let slow = 0;
  let fast = 0;

  while (fast < s.length) {
    let moveIn = s[fast];

    // 进行窗口内数据的一系列更新
    if (needs.has(moveIn)) {
      window.set(moveIn, window.get(moveIn) + 1 || 1);
      if (window.get(moveIn) === needs.get(moveIn)) valid++; //<--- key is here
    }
    fast++; // 扩大窗口

    /* 判断左侧窗口是否要收缩: 说明T中所有字符已经被S覆盖，已经得到一个可行的覆盖子串(注意比较的是needs.size) */
    while (valid === needs.size) {
      // 在这里更新最小覆盖子串
      if (fast - slow < len) {
        len = fast - slow;
        start = slow;
      }

      let moveOut = s[slow];
      // 进行窗口内数据的一系列更新
      if (needs.has(moveOut)) {
        if (window.get(moveOut) === needs.get(moveOut)) valid -= 1; // <---key is here
        window.set(moveOut, window.get(moveOut) - 1);
      }
      slow++; // 缩小窗口
    }
  }

  // 返回最小覆盖子串
  return len === Infinity ? '' : s.substring(start, start + len);
};
