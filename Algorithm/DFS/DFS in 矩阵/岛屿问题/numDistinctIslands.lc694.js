/**
 * @param {number[][]} grid
 * @return {number}
 * 岛屿系列题目的核心考点就是用 DFS/BFS遍历二维数组
 */

/************************ Solution: DFS遍历思想 - 2D矩阵的DFS框架 （LC200变形题） **************************/
function numDistinctIslands(grid) {
  let m = grid.length;
  let n = grid[0].length;
  const set = new Set(); // <--- diff is here： Set被用来存储不同的岛屿形状。岛屿的形状由相对位置关系决定，因此通过将相对位置关系转换为字符串且存到set中

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        const s = []; // 用于存储当前岛屿的相对位置关系
        dfs(grid, i, j, i, j, s);
        set.add(s.join('')); // 将岛屿的形状转换为字符串并添加到 Set 中
      }
    }
  }

  return set.size; // 返回 Set 的大小，即不同岛屿的数量
}

// helper function:
function dfs(grid, i0, j0, i, j, s) {
  let m = grid.length;
  let n = grid[0].length;

  if (i < 0 || i >= m || j < 0 || j >= n) return;
  if (grid[i][j] === 0) return;

  s.push(`${i - i0}${j - j0}`); // 将当前位置i,j相对于起始位置i0，j0的相对位置关系添加到数组中
  grid[i][j] = 0;

  dfs(grid, i0, j0, i - 1, j, s); // 上
  dfs(grid, i0, j0, i + 1, j, s); // 下
  dfs(grid, i0, j0, i, j - 1, s); // 左
  dfs(grid, i0, j0, i, j + 1, s); // 右
}
