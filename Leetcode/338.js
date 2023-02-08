/**
 * @param {number} n
 * @return {number[]}
 */

/* ---------------------Solution : Bit operation -------------------  */
var countBits = function (n) {
  let result = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    result[i] = result[i & (i - 1)] + 1; //最快消除末尾1的方法：n & (n-1); --> 参考lc191
  }
  return result;
};

//https://www.jiakaobo.com/leetcode/338.%20Counting%20Bits.html
