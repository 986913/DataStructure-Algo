/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

/********************************* Solution 1:  DFS 遍历矩阵 - O(2^(m*n)) Bad performance ****************************
  递归时间复杂度分析：递归函数调用的次数 * 递归函数本身的复杂度
                       O(2^(m*n)) * O(1)
*/
var uniquePaths = function (m, n) {
  return dfs(m, n, 0, 0); //因为从top-left出发
};

const dfs = (m, n, i, j) => {
  if (i < 0 || i >= m || j < 0 || j >= n) return 0; //超出边界
  if (i === m - 1 && j === n - 1) return 1; //到达bottom-right,更新结果

  let pathCounts = 0;
  pathCounts += dfs(m, n, i + 1, j); //下
  pathCounts += dfs(m, n, i, j + 1); //右
  return pathCounts;
};

/********************************* Solution 2:  DFS 遍历矩阵（带备忘录）- 优化版 ****************************
  递归时间复杂度分析：递归函数调用的次数 * 递归函数本身的复杂度
                              O(m*n) * O(1)
*/
var uniquePaths = function (m, n) {
  let memo = new Array(m).fill(0).map(() => new Array(n).fill(-1)); // 初始化二维数组 memo，用于存储已经计算过的路径数量
  return dfs(m, n, 0, 0, memo);
};

const dfs = (m, n, i, j, memo) => {
  if (i < 0 || i >= m || j < 0 || j >= n) return 0;
  if (i === m - 1 && j === n - 1) return 1; //到达bottom-right,更新结果

  // 准备递归之前，先去备忘录里查一下，算过了就不用再计算了， 没算就准备递归计算
  if (memo[i][j] !== -1) return memo[i][j];

  // 开始递归，且把递归结果存到备忘录里
  let pathCounts = 0;
  pathCounts += dfs(m, n, i + 1, j, memo); // 下
  pathCounts += dfs(m, n, i, j + 1, memo); // 右
  memo[i][j] = pathCounts;
  return pathCounts;
};

/********************************* Solution 3: 自底向上 迭代DP - O(m*n) *************************************  

  1. 确定dp数组以及下标的含义:     dp[i][j]表示从（0 ，0）出发，到(i, j) 有dp[i][j]条不同的路径。
  2. 确定递推公式: 状态转移方程：   dp[i][j] = dp[i - 1][j] + dp[i][j - 1] 
  3. dp数组如何初始化: 
                                for (int i = 0; i < m; i++) dp[i][0] = 1; --> 初始dp最左边一列
                                for (int j = 0; j < n; j++) dp[0][j] = 1; --> 初始dp最上边一行
  4. 确定遍历顺序:                从上倒下，从左到右遍历
  5. 举例推导dp数组: 
                                以m=3, n=7为例子输入，
                                dp array 为：
                                [
                                  [ 1, 1, 1, 1, 1, 1, 1],
                                  [ 1, 2, 3, 4, 5, 6, 7],
                                  [ 1, 3, 6,10,15,21, 28]
                              ]
*/
var uniquePaths = function (m, n) {
  //dp也是一个mxn的2d数组：类似Solution2的memo
  let dp = new Array(m).fill(0).map(() => new Array(n).fill(-1));

  //初始dp最上边一行
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }
  //初始dp最左边一列
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }

  //外层for控制行，m和n都是从1开始
  for (let i = 1; i < m; i++) {
    //内层for控制列
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  // console.log(dp);
  return dp[m - 1][n - 1];
};
