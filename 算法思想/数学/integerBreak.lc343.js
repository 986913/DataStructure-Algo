/**
1. 确定dp数组以及下标的含义: 分拆数字i，可以得到的最大乘积为dp[i]
2. 确定递推公式: 状态转移方程 dp[i] = max( dp[i], (i-j)*j, dp[i-j]*j );         
                理解： j * (i - j) 是单纯的把整数拆分为两个数相乘，而j * dp[i - j]是拆分成两个以及两个以上的个数相乘。
3. dp数组如何初始化: dp[0]=0, dp[1]=0，dp[2]= 1 （从dp[i]的定义来说，拆分数字2，得到的最大乘积是1）
4. 确定遍历顺序: 
    for (int i = 3; i <= n ; i++) {
      for (int j = 1; j <= i / 2; j++) {
        dp[i] = max(dp[i], max((i - j) * j, dp[i - j] * j));
      }
    }
5. 举例推导dp数组: 
      举例当n为10 的时候，dp数组里的数值: [ 0,0,1,2,4,6,9,12,18,27,36 ]
 */

/**
 * @param {number} n
 * @return {number}
 */
/* -------------------- solution:  DP  ------------------  */
var integerBreak = function (n) {
  let dp = new Array(n + 1).fill(0);
  dp[2] = 1;

  for (let i = 3; i <= n; i++) {
    for (let j = 1; j <= i / 2; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] * j, (i - j) * j);
    }
  }
  // console.log(dp);
  return dp[n];
};
