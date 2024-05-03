/*  Climb stairs I 变形题：一步一个台阶，两个台阶，三个台阶，直到m个台阶，有 多少种方法爬到n阶楼顶？*/

/****************************  Solution1: 自底向上 迭代DP  ********************************/
var climbStairs = function (n, m) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    //m表示最多可以爬m个台阶
    for (let j = 1; j <= m; j++) {
      if (i >= j) {
        dp[i] += dp[i - j];
      }
    }
  }

  return dp[n];
};
