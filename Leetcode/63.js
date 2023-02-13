/**
1. 确定dp数组以及下标的含义: dp[i][j]表示从（0 ，0）出发，到(i, j) 有dp[i][j]条不同的路径

2. 确定递推公式: 状态转移方程： 
    递推公式和62.不同路径一样，dp[i][j] = dp[i - 1][j] + dp[i][j - 1]. 
    但这里需要注意一点 🟡 因为有了障碍，(i, j)如果就是障碍的话应该就保持初始状态（初始状态为0
    if (obstacleGrid[i][j] === 0) {
      // 当(i, j)没有障碍的时候，再推导dp[i][j]
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    } else {
      // 当(i, j)有障碍的时候，再推导dp[i][j]就是0
      dp[i][j] = 0;
    }

3. dp数组如何初始化: 
    障碍之后（包括障碍）都是走不到的位置了，所以障碍之后的dp[i][0]应该还是初始值0。
    for (int i = 0; i < m && obstacleGrid[i][0] == 0; i++) dp[i][0] = 1;
    for (int j = 0; j < n && obstacleGrid[0][j] == 0; j++) dp[0][j] = 1;

4. 确定遍历顺序: 从上倒下，从左到右遍历

5. 举例推导dp数组: 
    以输入obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]] 为例
    对应的dp 2d array 为 [[1,1,1],[1,0,1],[1,1,2]]
 */

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
/* ----------------------------------  solution:  DP:  -------------------------------  */

var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length; //row
  let n = obstacleGrid[0].length; // colummn;

  // edge case: if start or end is obstacle. then no way to get there
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) return 0;

  //dp也是一个mxn的2d数组
  let dp = new Array(m).fill().map((item) => new Array(n).fill(0));
  //初始dp最上边一行
  for (let j = 0; j < n && obstacleGrid[0][j] == 0; j++) {
    dp[0][j] = 1;
  }
  //初始dp最左边一列
  for (let i = 0; i < m && obstacleGrid[i][0] == 0; i++) {
    dp[i][0] = 1;
  }

  //外层for控制行
  for (let i = 1; i < m; i++) {
    //内层for控制列
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] === 0) {
        // 当(i, j)没有障碍的时候，再推导dp[i][j]
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      } else {
        // 当(i, j)有障碍的时候，再推导dp[i][j]就是0
        dp[i][j] = 0;
      }
    }
  }

  // console.log(dp);
  return dp[m - 1][n - 1];
};
