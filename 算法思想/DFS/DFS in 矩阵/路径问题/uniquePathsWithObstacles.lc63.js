/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

/****************************************** Solution 1:  DFS 遍历矩阵 - O(2^(m*n)) Bad performance ******************************************
  递归时间复杂度分析：递归函数调用的次数 * 递归函数本身的复杂度
                       O(2^(m*n)) * O(1)
*/
var uniquePathsWithObstacles = function (obstacleGrid) {
  return dfs(obstacleGrid, 0, 0); //因为从top-left出发
};

const dfs = (grid, i, j) => {
  let m = grid.length;
  let n = grid[0].length;

  if (i < 0 || i >= m || j < 0 || j >= n) return 0; //超出边界
  if (i === m - 1 && j === n - 1) {
    //到达bottom-right, 且bottom-right有障碍物，走不通 直接return 0
    if (grid[i][j] === 1) return 0;
    //到达bottom-right, 且bottom-right没有障碍物，走的通return 1
    return 1;
  }
  if (grid[i][j] === 1) return 0; //当前格子有障碍物，走不通 直接return 0

  let pathsCount = 0;
  pathsCount += dfs(grid, i, j + 1);
  pathsCount += dfs(grid, i + 1, j);
  return pathsCount;
};

/******************************************** Solution 2:  DFS 遍历矩阵（带备忘录）- 优化版 **************************************************
  递归时间复杂度分析：递归函数调用的次数 * 递归函数本身的复杂度
                              O(m*n) * O(1)
*/
var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;

  // 初始化二维数组 memo，用于存储已经计算过的路径数量
  let memo = new Array(m).fill(0).map(() => new Array(n).fill(-1));
  return dfs(obstacleGrid, 0, 0, memo);
};

const dfs = (grid, i, j, memo) => {
  let m = grid.length;
  let n = grid[0].length;

  if (i < 0 || i >= m || j < 0 || j >= n) return 0;
  if (i === m - 1 && j === n - 1) {
    if (grid[i][j] === 1) return 0;
    return 1;
  }
  if (grid[i][j] === 1) return 0;

  // 准备递归之前，先去备忘录里查一下，算过了就不用再计算了， 没算就准备递归计算
  if (memo[i][j] !== -1) return memo[i][j];

  // 开始递归
  let pathsCount = 0;
  pathsCount += dfs(grid, i, j + 1, memo);
  pathsCount += dfs(grid, i + 1, j, memo);
  memo[i][j] = pathsCount; //把递归结果存到备忘录里
  return pathsCount;
};

/*************************************** Solution 3: 自底向上 迭代DP - O(m*n) **************************************************************  
  1. 确定dp数组以及下标的含义:          dp[i][j]表示从（0 ，0）出发，到(i, j) 有dp[i][j]条不同的路径
  2. 确定递推公式: 状态转移方程： 
                                    递推公式和62.不同路径一样，dp[i][j] = dp[i - 1][j] + dp[i][j - 1]. 
                                    但这里需要注意一点 🟡 因为有了障碍，(i, j)如果就是障碍的话应该就保持初始状态（初始状态为0
                                    if (obstacleGrid[i][j] === 0) {
                                      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]; // 当(i, j)没有障碍的时候，再推导dp[i][j]
                                    } else {
                                      dp[i][j] = 0;                           // 当(i, j)有障碍的时候，再推导dp[i][j]就是0
                                    }
  3. dp数组如何初始化: 
                                    障碍之后（包括障碍）都是走不到的位置了，所以障碍之后的dp[i][0]应该还是初始值0。
                                    for (int i = 0; i < m && obstacleGrid[i][0] == 0; i++) dp[i][0] = 1;
                                    for (int j = 0; j < n && obstacleGrid[0][j] == 0; j++) dp[0][j] = 1;
  4. 确定遍历顺序: 从上倒下，从左到右遍历
  5. 举例推导dp数组
 */

var uniquePathsWithObstacles = function (obstacleGrid) {
  let m = obstacleGrid.length;
  let n = obstacleGrid[0].length;

  // edge case: if start or end is obstacle. then no way to get there
  if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) return 0;

  let dp = new Array(m).fill().map(() => new Array(n).fill(0));
  //初始dp最上边一行: diff is here ---> obstacleGrid[0][j] == 0;
  for (let j = 0; j < n && obstacleGrid[0][j] == 0; j++) {
    dp[0][j] = 1;
  }
  //初始dp最左边一列: diff is here ---> obstacleGrid[i][0] == 0
  for (let i = 0; i < m && obstacleGrid[i][0] == 0; i++) {
    dp[i][0] = 1;
  }

  for (let i = 1; i < m; i++) {
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
