/****************************** LC 283 ********************************/
/****************************** LC 27  ********************************/
/************************ LC 26, countUniqueValues ********************/
/****************************** reArrange *****************************/

const 同向2Pointer = (arr) => {
  let slow = 0;
  let fast = 0;

  while (fast < arr.length) {
    // 常见的condition有：arr[fast] !== something
    if (某个conditionc) {
      arr[slow] = arr[fast]; // OR swap arr[slow]和arr[fast], 根据题目不同
      slow++; // update slow
    }

    fast++; // fast 是持续++的
  }

  return slow; // most case return slow, you can change it based problem
};
