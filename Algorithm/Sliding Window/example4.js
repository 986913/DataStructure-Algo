/* 
给定一个整数数组，计算长度为 'k' 的连续子数组的最大总和 

eg:
  输入： arr [] = [100,200,300,400]     k = 2
  输出： 700
  解释:  300+400=700
*/

// 暴力法：
const maxSum = (arr, k) => {
  let maxSum = 0;

  for (let i = 0; i < arr.length - k + 1; i++) {
    let tmpSum = 0;
    for (let j = 0; j < k; j++) {
      tmpSum += arr[i + j];
    }
    maxSum = Math.max(maxSum, tmpSum);
  }
  return maxSum;
};
console.log(maxSum([100, 200, 300, 400], 2));
