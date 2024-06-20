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

/**************************** Solution 2:  Monotonic stack - 单调栈 O(n)模版变形题 ***********************************/
var dailyTemperatures = function (temperatures) {
  let result = new Array(temperatures.length).fill(0);
  let monoStack = []; // <--- 存储index的单调栈 (递减)

  for (let i = temperatures.length - 1; i >= 0; i--) {
    let curTemperatures = temperatures[i];

    //出栈
    while (
      monoStack.length &&
      temperatures[monoStack[monoStack.length - 1]] <= curTemperatures
    ) {
      monoStack.pop();
    }

    // update result:  key is here: 是index相减(索引间距)，不是温度差！
    result[i] = monoStack.length ? monoStack[monoStack.length - 1] - i : 0;
    //入栈： 将index入栈，而不是元素
    monoStack.push(i);
  }

  return result;
};
