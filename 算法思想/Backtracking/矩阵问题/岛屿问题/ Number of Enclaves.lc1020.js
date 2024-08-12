/**
 * @param {number[][]} grid
 * @return {number}
 * 岛屿系列题目的核心考点就是用 DFS/BFS 算法遍历二维数组。
  ❗这道题不需要回溯❗，
 */

/****************************** Solution: DFS 分解思想  LC200, LC1254变形题 ************************************/
// Main function:
var numEnclaves = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  // diff is here --> 把2D grid边界上的岛屿0都淹掉
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
        if (grid[i][j] === 1) {
          dfs(grid, i, j);
        }
      }
    }
  }

  let area = 0; // <--- diff is here
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        area += 1;
      }
    }
  }
  return area;
};

// helper function:
const dfs = (matrix, i, j) => {
  let m = matrix.length;
  let n = matrix[0].length;

  if (i < 0 || i >= m || j < 0 || j >= n) return 0; // 超出边际，面积就是0
  if (matrix[i][j] === 0) return 0; //已经被淹过或者本来就是水 面积就是0

  matrix[i][j] = 0;
  dfs(matrix, i - 1, j);
  dfs(matrix, i + 1, j);
  dfs(matrix, i, j - 1);
  dfs(matrix, i, j + 1);
};

/************************************ Solution: BFS - LC200,LC1254 BFS模版变形题 **************************************/
// Main function:
var numEnclaves = function (grid) {
  let m = grid.length;
  let n = grid[0].length;

  // diff is here --> 把2D grid边界上的岛屿都淹掉
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
        if (grid[i][j] === 1) {
          bfs(grid, i, j);
        }
      }
    }
  }

  let area = 0; // <--- diff is here
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        area += 1;
      }
    }
  }
  return area;
};

// helper function:
const bfs = (matrix, i, j) => {
  let m = matrix.length;
  let n = matrix[0].length;

  let queue = [[i, j]]; //加进去的不是root了 而是[i，j]坐标
  matrix[i][j] = 0; //把岛屿淹掉

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let [x, y] = queue.shift();

      //淹没上下左右的陆地: 加进去不再是node.left/right/children了，而是x,y坐标的上下左右
      if (x - 1 >= 0 && matrix[x - 1][y] === 1) {
        queue.push([x - 1, y]);
        matrix[x - 1][y] = 0;
      }
      if (x + 1 < m && matrix[x + 1][y] === 1) {
        queue.push([x + 1, y]);
        matrix[x + 1][y] = 0;
      }
      if (y - 1 >= 0 && matrix[x][y - 1] === 1) {
        queue.push([x, y - 1]);
        matrix[x][y - 1] = 0;
      }
      if (y + 1 < n && matrix[x][y + 1] === 1) {
        queue.push([x, y + 1]);
        matrix[x][y + 1] = 0;
      }
    }
  }
};
