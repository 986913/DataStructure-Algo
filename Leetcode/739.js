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

/**************************** Solution 2:  Monotonic stack - 单调栈 ***********************************/
var dailyTemperatures = function (temperatures) {};
