/**
 * @param {number[]} temperatures
 * @return {number[]}
 *

/**************************** Solution 1: 暴力双层forLoop ***********************************/
var dailyTemperatures = function (temperatures) {
  let result = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    for (let j = i + 1; j < temperatures.length; j++) {
      if (temperatures[j] > temperatures[i]) {
        result[i] = j - i;
        break;
      }
    }
  }

  return result;
};

/**************************** Solution 2:  Monotonic stack - 单调栈 O(n) ***********************************/
var dailyTemperatures = function (temperatures) {
  let result = new Array(temperatures.length).fill(0);
  let indexStack = []; // <--- 存储下标的单调栈 (递减)

  let n = temperatures.length;
  for (let curDay = 0; curDay < n; curDay++) {
    let curTemperature = temperatures[curDay];
    while (
      indexStack.length !== 0 &&
      curTemperature > temperatures[indexStack[indexStack.length - 1]]
    ) {
      let prevIndex = indexStack.pop();
      result[prevIndex] = curDay - prevIndex; // key is here: 是index相减，不是温度差！
    }

    indexStack.push(curDay);
  }

  return result;
};
