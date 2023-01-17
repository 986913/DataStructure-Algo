/**
1. 确定dp数组以及下标的含义: dp[i][j]表示从（0 ，0）出发，到(i, j) 有dp[i][j]条不同的路径。
2. 确定递推公式: 状态转移方程： dp[i][j] = dp[i - 1][j] + dp[i][j - 1] 
3. dp数组如何初始化: 
      for (int i = 0; i < m; i++) dp[i][0] = 1; --> 初始dp最左边一列
      for (int j = 0; j < n; j++) dp[0][j] = 1; --> 初始dp最上边一行
4. 确定遍历顺序: 从上倒下，从左到右遍历
5. 举例推导dp数组: 
    以m=3, n=7为例子输入，
    dp array 为：
    [
      [ 1, 1, 1, 1, 1, 1, 1],
      [ 1, 2, 3, 4, 5, 6, 7],
      [ 1, 3, 6,10,15,21, 28]
    ]
 */

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
// m是行，n是列

var uniquePaths = function (m, n) {
  //dp也是一个mxn的2d数组
  let dp = new Array(m).fill().map((item) => new Array(n));
  console.log(dp);
  //初始dp最上边一行
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  //初始dp最左边一列
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }

  //外层for控制行
  for (let i = 1; i < m; i++) {
    //内层for控制列
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  // console.log(dp);
  return dp[m - 1][n - 1];
};
