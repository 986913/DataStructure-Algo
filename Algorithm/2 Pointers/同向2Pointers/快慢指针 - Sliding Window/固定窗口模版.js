/******************************参照LC   28题************************************* */
/******************************参照LC  239题************************************* */
/******************************参照LC  904题************************************* */

const fixedSlidingWindow = (target, s) => {
  // 用合适的数据结构记录窗口中的数据
  const window = new Map();

  let slow = 0;
  let fast = 0;
  while (fast < s.length) {
    let moveIn = s[fast]; // moveIn 是将移入窗口的字符
    window.set(moveIn, window.get(moveIn) + 1 || 1); // 进行窗口内数据的一系列更新。。。
    fast++; //增大窗口

    if (window.length >= fixedSize) {
      let moveOut = s[slow]; // moveOut 是将移出窗口的字符
      window.set(moveOut, window.get(moveOut) - 1); // 进行窗口内数据的一系列更新。。。
      slow++; // 缩小窗口
    }
  }
};
