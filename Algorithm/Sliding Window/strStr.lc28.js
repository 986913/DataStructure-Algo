//1. 👍👍👍 sliding window:
var strStr = function (haystack, needle) {
  if (needle === '') return 0;
  if (haystack.length < needle.length) return -1;

  let windowStartIdx = 0;
  let chars = '';
  const windowSize = needle.length;

  for (let windowEndIdx = 0; windowEndIdx < haystack.length; windowEndIdx++) {
    chars += haystack[windowEndIdx];

    if (chars.length >= windowSize) {
      // 比对chars和needle，如果一样，则找到了, 就返回left下标
      if (chars === needle) return windowStartIdx;

      // 比对chars和needle，如果不一样，那继续找，就更新chars,向右移动窗口
      chars = chars.substring(1); //  从chars的index1开始截取到结束 eg: mingyue.substring(1) -> ingyue
      windowStartIdx += 1;
    }
  }

  return -1;
};

/* 2. KMP算法--------------------属于Advance算法 没看懂， 以后再试------------------------------------------------ */
// https://www.bilibili.com/video/BV1PD4y1o7nd/

const getNext = (needle) => {
  let next = [];
  let j = 0;
  next.push(j);

  for (let i = 1; i < needle.length; ++i) {
    while (j > 0 && needle[i] !== needle[j]) j = next[j - 1];
    if (needle[i] === needle[j]) j++;
    next.push(j);
  }

  return next;
};
// 主函数 ：haystack是主串，needle是子串
var strStr = function (haystack, needle) {
  if (needle.length === 0) return 0;

  let next = getNext(needle); // next就是前缀表

  let j = 0;
  for (let i = 0; i < haystack.length; ++i) {
    while (j > 0 && haystack[i] !== needle[j]) j = next[j - 1];
    if (haystack[i] === needle[j]) j++;
    if (j === needle.length) return i - needle.length + 1;
  }

  return -1;
};
