/**
 * @param {number[][]} grid
 * @return {number}
 * 岛屿系列题目的核心考点就是用 DFS/BFS遍历二维数组
  ❗这道题要回溯❗
 */

/************************ Solution: DFS遍历思想 - 2D矩阵的DFS框架 （LC200变形题） **************************/
// Main function:
var numDistinctIslands = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  let set = new Set(); // <-- diff is here
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 淹掉这个岛屿，同时存储岛屿的序列化结果
      if (grid[i][j] === 1) {
        const path = dfs(grid, i, j, [], 'S'); //记录从起始点(S)开始的所有移动方向，用于表示岛屿的形状。
        set.add(path.join('')); // set会自动去重
      }
    }
  }
  return set.size; // <-- diff is here
};

//Helper function: 淹掉这个岛屿且return岛屿的序列化结果
const dfs = (matrix, i, j, curPath, direction) => {
  let m = matrix.length;
  let n = matrix[0].length;

  if (i < 0 || i >= m || j < 0 || j >= n) return;
  if (matrix[i][j] === 0) return;

  matrix[i][j] = 0; //淹掉
  curPath.push(direction);
  dfs(matrix, i - 1, j, curPath, 'U'); // 上
  dfs(matrix, i + 1, j, curPath, 'D'); // 下
  dfs(matrix, i, j - 1, curPath, 'L'); // 左
  dfs(matrix, i, j + 1, curPath, 'R'); // 右
  curPath.push('B'); // “B”表示回撤，表示退回到上一个状态
  return curPath;
};
