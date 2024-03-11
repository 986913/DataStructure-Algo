/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
/************************** 👍👍👍 Sliding Window ************************************/
const strStr = (haystack, needle) => {
  let windowSize = needle.length;
  let curStr = ''; //相当于窗口

  let slow = 0;
  let fast = 0;
  // fast指针用来遍历；
  while (fast < haystack.length) {
    curStr += haystack[fast]; //窗口内数据的更新

    if (curStr.length >= windowSize) {
      // 比对curStr和needle，如果一样，则找到了, 就返回slow下标
      if (curStr === needle) return slow;

      // 比对curStr和needle，如果不一样，那继续找，就更新curStr,向右移动窗口
      curStr = curStr.substring(1); //窗口内数据的更新, 从curStr的index1开始截取到结束 eg: mingyue.substring(1) -> ingyue
      slow++; // 更新slow
    }

    fast++; // fast 是持续增加的
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
