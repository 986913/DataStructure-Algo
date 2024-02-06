/*
  write a function called minSubArrayLen which accepts two parameters: an array of positive integers and a positive interger
  this function should return the minimal lenght of a contiguous subarray of which the sum is greater than or equal to the integer passed tp the function
  if there isn't one, return 0 instead

  eg:
  minSubArrayLen([2,3,1,2,4,3],                    7)         2 --> because [4,3] is the smallest subarray
  minSubArrayLen([2,1,6,5,4],                      9)         2 --> because [5,4] is the smallest subarray
  minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],    52)         1 --> because [62] is the smallest subarray
*/

/*********************** simple solution: doueble for-loop:  O(n^2) *****************************/
const minSubArrayLen = (s, nums) => {
  let result = Infinity; // 最终的结果
  let sum = 0; // 子序列的数值之和
  let subLength = 0; // 子序列的长度

  for (let i = 0; i < nums.length; i++) {
    // 设置子序列起点为i
    sum = 0;
    for (let j = i; j < nums.length; j++) {
      // 设置子序列终止位置为j
      sum += nums[j];
      if (sum >= s) {
        // 一旦发现子序列和超过了s，更新result
        subLength = j - i + 1; // 取子序列的长度
        result = Math.min(result, subLength);
        break; // 因为我们是找符合条件最短的子序列，所以一旦符合条件就break
      }
    }
  }

  return result == Infinity ? 0 : result;
};

/*********************************** 👍👍👍 sliding window - 同向2Pointers ***********************************/
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

const minSubArrayLen = (target, nums) => {
  let curSum = 0;
  let minLen = Infinity;

  let slow = 0;
  let fast = 0;
  //fast指针负责遍历：
  while (fast < nums.length) {
    let moveIn = nums[fast]; // moveIn 是将移入窗口的数字
    curSum += moveIn; //进行窗口内数据的一系列更新。。。
    fast++; // 增大窗口

    /*判断左侧窗口是否要收缩: 已经找到和>=target的子数组了*/
    while (curSum >= target) {
      // update helper variable minLen
      minLen = Math.min(minLen, fast - slow);

      let moveOut = nums[slow]; // moveOut 是将移出窗口的字符
      curSum -= moveOut; // 进行窗口内数据的一系列更新。。。
      slow++; // 缩小窗口
    }
  }

  return minLen === Infinity ? 0 : minLen; // 如果minLen没有被赋值的话，就返回0，说明没有符合条件的子序列
};
