/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
/******************** Solution 1: queque + build in methods ******************************/
var duplicateZeros = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 0, 0);
      arr.pop();
      i++;
    }
  }
};

/******************** Solution 2: use queque ******************************/
// https://www.youtube.com/watch?v=gaB-guUxCWI&ab_channel=EricProgramming
var duplicateZeros = function (arr) {
  let queue = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      queue.push(0, 0);
    } else {
      queue.push(arr[i]);
    }
    arr[i] = queue.shift();
  }

  return arr;
};
