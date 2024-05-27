/******************************参照LC  904题************************************* */
/******************************参照LC  424题************************************* */
/******************************参照LC  567题************************************* */
const fixedSlidingWindow = (target, s) => {
  // 用合适的数据结构记录窗口中的数据
  const window = new Map();
  // 一个global variable的例子
  let maxLenOfxxx = 0;

  let slow = 0;
  let fast = 0;
  while (fast < s.length) {
    // s[fast]是将移入窗口的字符， 进行窗口内数据的一系列更新
    window.set(s[fast], window.get(s[fast]) + 1 || 1);

    /***** 收缩窗口 -- 不符合题目要求的条件(窗口大小超过题目要求的固定长度) *****/
    if (window.length >= fixedSize) {
      // s[slow]是将移出窗口的字符， 进行窗口内数据的一系列更新
      window.set(s[slow], window.get(s[slow]) - 1);
      slow++; // 缩小窗口
    }

    //Key is here: ---> update global variable here
    maxLenOfxxx = Math.max(maxLenOfxxx, fast - slow + 1);
    fast++; //增大窗口
  }
};

/******************************参照LC   28题************************************* */
/******************************参照LC  239题************************************* */
/******************************参照LC  438题************************************* */
const fixedSlidingWindow = (target, s) => {
  // 用合适的数据结构记录窗口中的数据
  const window = new Map();
  // 一个global variable的例子
  let maxLenOfxxx = 0;

  let slow = 0;
  let fast = 0;
  while (fast < s.length) {
    // s[fast]是将移入窗口的字符， 进行窗口内数据的一系列更新
    window.set(s[fast], window.get(s[fast]) + 1 || 1);

    /***** 收缩窗口 -- 符合题目要求的条件 *****/
    if (window.length >= fixedSize) {
      //Key is here: ---> update global variable here
      maxLenOfxxx = Math.max(maxLenOfxxx, fast - slow + 1);

      // s[slow]是将移出窗口的字符， 进行窗口内数据的一系列更新
      window.set(s[slow], window.get(s[slow]) - 1);
      slow++; // 缩小窗口
    }

    fast++; //增大窗口
  }
};
