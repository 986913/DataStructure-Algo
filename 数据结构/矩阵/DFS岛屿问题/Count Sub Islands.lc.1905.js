/**
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}

 * 岛屿系列题目的核心考点就是用 DFS/BFS 算法遍历二维数组。
  ❗这道题不需要回溯❗，
 */

/****************************** Solution : DFS 分解思想 LC200, 1254变形题 ************************************/
// Main function:
var countSubIslands = function (grid1, grid2) {
  let m = grid1.length;
  let n = grid1[0].length;
  // diff is here --> 提前去除(淹掉)不符合条件的格子
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 这个岛屿肯定不是子岛，淹掉
      if (grid1[i][j] === 0 && grid2[i][j] === 1) {
        dfs(grid2, i, j);
      }
    }
  }
  let count = 0;
  // 现在 grid2中剩下的岛屿都是子岛，用套路(LC200)去计算连成片的岛屿数量
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] === 1) {
        count += 1;
        dfs(grid2, i, j);
      }
    }
  }
  return count;
};

// helper function: 把与matrix[i][j]相连的所有岛屿淹掉
const dfs = (matrix, i, j) => {
  let m = matrix.length;
  let n = matrix[0].length;

  // base condition
  if (i < 0 || i >= m || j < 0 || j >= n) return;
  if (matrix[i][j] === 0) return;

  matrix[i][j] = 0; // 淹掉matrix中的当前格子
  dfs(matrix, i - 1, j);
  dfs(matrix, i + 1, j);
  dfs(matrix, i, j - 1);
  dfs(matrix, i, j + 1);
};

/************************************ Solution : BFS   LC200，1254 BFS模版变形题 **************************************/
var countSubIslands = function (grid1, grid2) {
  let m = grid1.length;
  let n = grid1[0].length;
  // diff is here --> 提前去除(淹掉)不符合条件的格子
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 这个岛屿肯定不是子岛，淹掉
      if (grid1[i][j] === 0 && grid2[i][j] === 1) {
        bfs(grid2, i, j);
      }
    }
  }
  let count = 0;
  // 现在 grid2中剩下的岛屿都是子岛，用套路(LC200)去计算连成片的岛屿数量
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid2[i][j] === 1) {
        count += 1;
        bfs(grid2, i, j);
      }
    }
  }
  return count;
};

// helper function: 把与matrix[i][j]相连的所有岛屿淹掉
const bfs = (matrix, i, j) => {
  let m = matrix.length;
  let n = matrix[0].length;

  let queue = [[i, j]]; // <--- diff is here.  加进去的不是root了 而是[i，j]坐标
  matrix[i][j] = 0; //把岛屿淹掉

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let [x, y] = queue.shift();

      //diff are here， 加进去不再是node.left/right/children了，而是x,y坐标的上下左右
      //上
      if (x - 1 >= 0 && matrix[x - 1][y] === 1) {
        queue.push([x - 1, y]);
        matrix[x - 1][y] = 0;
      }
      //下
      if (x + 1 < m && matrix[x + 1][y] === 1) {
        queue.push([x + 1, y]);
        matrix[x + 1][y] = 0;
      }
      //左
      if (y - 1 >= 0 && matrix[x][y - 1] === 1) {
        queue.push([x, y - 1]);
        matrix[x][y - 1] = 0;
      }
      //右
      if (y + 1 < n && matrix[x][y + 1] === 1) {
        queue.push([x, y + 1]);
        matrix[x][y + 1] = 0;
      }
    }
  }
};
