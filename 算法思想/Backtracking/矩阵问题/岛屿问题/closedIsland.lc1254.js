/**
 * @param {number[][]} grid
 * @return {number}
 * 岛屿系列题目的核心考点就是用 DFS/BFS遍历二维数组
 */

/************************ Solution: DFS遍历思想 - 2D矩阵的DFS框架 （LC200变形题） **************************/
var closedIsland = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let count = 0;

  // diff is here: 把2D grid边界上的岛屿0都淹掉
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i == m - 1 || j === 0 || j == n - 1) {
        dfs(grid, i, j);
      }
    }
  }

  // the rest same as LC200
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        count++; // found a island. update count
        dfs(grid, i, j); //把与grid[i][j]相连的所有岛屿淹掉 (0变成1)
      }
    }
  }

  return count;
};

const dfs = (grid, i, j) => {
  let m = grid.length;
  let n = grid[0].length;

  if (i < 0 || i >= m || j < 0 || j >= n) return; //base condition: 越界
  if (grid[i][j] === 1) return; //base condition: 已遍历过（i,j) / 当前i,j位置已经被淹了

  //前序位置：
  grid[i][j] = 1; //把岛屿淹掉 (0变成1)

  dfs(grid, i + 1, j); // 上
  dfs(grid, i - 1, j); // 下
  dfs(grid, i, j + 1); // 右
  dfs(grid, i, j - 1); // 左
};
