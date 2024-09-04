/**
 * @param {number[][]} grid
 * @return {number}
 * 岛屿系列题目的核心考点就是用 DFS/BFS 算法遍历二维数组。
  ❗这道题不需要回溯❗，
 */

/****************************** Solution : DFS 分解思想  LC200变形题 ************************************/
// Main function:
var maxAreaOfIsland = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let maxArea = 0; // <--- diff is here

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, dfs(grid, i, j)); // <--- diff is here
      }
    }
  }

  return maxArea;
};
// helper function: 给 dfs 函数设置返回值，记录每次淹没的陆地的个数
const dfs = (matrix, i, j) => {
  let m = matrix.length;
  let n = matrix[0].length;

  if (i < 0 || i >= m || j < 0 || j >= n) return 0; //超出边际，面积就是0
  if (matrix[i][j] === 0) return 0; //已经被淹过或者本来就是水 面积就是0

  matrix[i][j] = 0;
  let area = 1; // <--- diff is here

  const upArea = dfs(matrix, i - 1, j);
  const downArea = dfs(matrix, i + 1, j);
  const leftArea = dfs(matrix, i, j - 1);
  const rightArea = dfs(matrix, i, j + 1);

  return area + upArea + downArea + leftArea + rightArea; // <--- diff is here 有返回值了 返回累加的岛屿面积
};

/****************************** Solution : BFS  LC200变形题 ************************************/
var maxAreaOfIsland = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let maxArea = 0; // <--- diff is here

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        maxArea = Math.max(maxArea, bfs(grid, i, j)); // <--- diff is here
      }
    }
  }

  return maxArea;
};
// helper function: 给 bfs 函数设置返回值，记录每次淹没的陆地的个数
const bfs = (matrix, i, j) => {
  let m = matrix.length;
  let n = matrix[0].length;

  matrix[i][j] = 0; //把岛屿淹掉 (1变成0)
  let area = 1; // <--- diff is here

  let queue = [[i, j]];
  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let [x, y] = queue.shift();

      //上
      if (x - 1 >= 0 && matrix[x - 1][y] === 1) {
        queue.push([x - 1, y]);
        matrix[x - 1][y] = 0;
        area += 1; // <-- diff is here
      }
      //下
      if (x + 1 < m && matrix[x + 1][y] === 1) {
        queue.push([x + 1, y]);
        matrix[x + 1][y] = 0;
        area += 1; // <-- diff is here
      }
      //左
      if (y - 1 >= 0 && matrix[x][y - 1] === 1) {
        queue.push([x, y - 1]);
        matrix[x][y - 1] = 0;
        area += 1; // <-- diff is here
      }
      //右
      if (y + 1 < n && matrix[x][y + 1] === 1) {
        queue.push([x, y + 1]);
        matrix[x][y + 1] = 0;
        area += 1; // <-- diff is here
      }
    }
  }

  return area; // <--- diff is here
};
