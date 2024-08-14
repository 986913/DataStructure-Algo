/**
 * @param {number[][]} grid
 * @return {number}
 * 岛屿系列题目的核心考点就是用 DFS/BFS遍历二维数组
  ❗这道题不要回溯❗
 */

/************************ Solution: DFS遍历思想 - 2D矩阵的DFS框架 （LC200变形题） **************************/
var closedIsland = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let count = 0;

  // diff is here --> 把2D grid边界上的岛屿0都淹掉
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

/************************************ Solution : BFS  LC200, LC429 BFS模版变形题 **************************************/
var closedIsland = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let count = 0;

  // diff is here --> 把2D grid边界上的岛屿0都淹掉
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i == m - 1 || j === 0 || j == n - 1) {
        if (grid[i][j] === 0) {
          bfs(grid, i, j);
        }
      }
    }
  }

  // the rest same as LC200
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 0) {
        count++; // found a island. update count
        bfs(grid, i, j); //把与grid[i][j]相连的所有岛屿淹掉 (0变成1)
      }
    }
  }

  return count;
};

const bfs = (matrix, i, j) => {
  let m = matrix.length;
  let n = matrix[0].length;

  let queue = [[i, j]]; //加进去的不是root了 而是[i，j]坐标
  matrix[i][j] = 1; //把岛屿淹掉

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let [x, y] = queue.shift();

      //淹没上下左右的陆地: 加进去不再是node.left/right/children了，而是x,y坐标的上下左右
      if (x - 1 >= 0 && matrix[x - 1][y] === 0) {
        queue.push([x - 1, y]);
        matrix[x - 1][y] = 1;
      }
      if (x + 1 < m && matrix[x + 1][y] === 0) {
        queue.push([x + 1, y]);
        matrix[x + 1][y] = 1;
      }
      if (y - 1 >= 0 && matrix[x][y - 1] === 0) {
        queue.push([x, y - 1]);
        matrix[x][y - 1] = 1;
      }
      if (y + 1 < n && matrix[x][y + 1] === 0) {
        queue.push([x, y + 1]);
        matrix[x][y + 1] = 1;
      }
    }
  }
};
