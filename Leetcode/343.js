/**
 * @param {number} n
 * @return {number}
 */

/********************************* Solution 1:  Top to Bottom 递归 - O(n^2) ****************************
  递归时间复杂度分析：递归函数调用的次数 * 递归函数本身的复杂度
                       O(n) * O(n)
*/
var integerBreak = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let maxProduct = -Infinity;
  for (let i = 1; i < n; i++) {
    // 将 n 拆分成 i 和 n-i，计算乘积，并递归求解
    const currProduct = i * Math.max(n - i, integerBreak(n - i));
    maxProduct = Math.max(maxProduct, currProduct);
  }
  return maxProduct;
};

/********************************* Solution 2:  Top to Bottom 递归 (带备忘录) - O(n^2) ****************************
  递归时间复杂度分析：递归函数调用的次数 * 递归函数本身的复杂度
                       O(n) * O(n)
*/
var integerBreak = function (n) {
  let memo = new Array(n + 1).fill(-1);
  return helper(n, memo);
};

const helper = (n, memo) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  // 准备递归之前，先去备忘录里查一下，算过了就不用再计算了， 没算就准备递归计算
  if (memo[n] !== -1) return memo[n];

  let maxProduct = -Infinity;
  for (let i = 1; i < n; i++) {
    // 将 n 拆分成 i 和 n-i，计算乘积，并递归求解
    const currProduct = i * Math.max(n - i, integerBreak(n - i));
    maxProduct = Math.max(maxProduct, currProduct);
  }
  memo[n] = maxProduct; //把递归结果存到备忘录里
  return maxProduct;
};

/********************************** Solution 3: 自底向上 迭代DP - O(n^2) *************************************  

  1. 确定dp数组以及下标的含义:      分拆数字i，可以得到的最大乘积为dp[i]
  2. 确定递推公式状态转移方程       dp[i] = max( dp[i], j*(i-j), j*dp[i-j] );         
                                理解： j*(i-j)是单纯的把整数拆分为两个数相乘，而j*dp[i-j]是拆分成两个以及两个以上的个数相乘。
  3. dp数组如何初始化:            dp[0]=0, dp[1]=0，dp[2]= 1 （从dp[i]的定义来说，拆分数字2，得到的最大乘积是1）
  4. 确定遍历顺序: 
                                for (int i = 3; i <= n ; i++) {
                                  for (int j = 1; j < i; j++) {
                                    dp[i] = Math.max(dp[i], j*(i-j), j*dp[i-j])
                                  }
                                }
  5. 举例推导dp数组:              举例当n为10 的时候，dp数组里的数值: [ 0,0,1,2,4,6,9,12,18,27,36 ]
 */
var integerBreak = function (n) {
  let dp = new Array(n + 1).fill(-1);
  dp[2] = 1; // 初始化dp[2]为1: 拆分数字2,得到的最大乘积是1

  for (let i = 3; i <= n; i++) {
    // 循环条件应该是 i <= n
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], j * (i - j), j * dp[i - j]); // 动态规划状态转移方程
    }
  }
  return dp[n];
};
