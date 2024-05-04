/**
 * @param {character[][]} grid
 * @return {number}
 * 岛屿系列题目的核心考点就是用 DFS/BFS遍历二维数组
 */

/************************ Solution: DFS遍历思想 - 2D矩阵的DFS框架 （LC589,695变形题） **************************/
// 主函数：
var numIslands = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        count++; // found a island. update count
        dfs(grid, i, j); //把与grid[i][j]相连的所有岛屿淹掉 (1变成0)
      }
    }
  }

  return count;
};

// helper function:
const dfs = (grid, i, j) => {
  let m = grid.length;
  let n = grid[0].length;

  if (i < 0 || i >= m || j < 0 || j >= n) return; //base condition: 越界
  if (grid[i][j] === '0') return; //base condition: 已遍历过（i,j) / 当前i,j位置已经被淹了

  //前序位置：
  grid[i][j] = '0'; //把岛屿淹掉 (1变成0)

  //这里不再是nide.left, node.right了， 而是i,j坐标的上下左右
  dfs(grid, i + 1, j); // 上
  dfs(grid, i - 1, j); // 下
  dfs(grid, i, j + 1); // 右
  dfs(grid, i, j - 1); // 左
};

/************************************ Solution : BFS   LC429，BFS模版变形题 **************************************/
// 主函数：
var numIslands = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1') {
        count += 1; // found a island. update count
        bfs(grid, i, j); //把与grid[i][j]相连的所有岛屿淹掉 (1变成0)
      }
    }
  }
  return count;
};

// helper function:
const bfs = (grid, i, j) => {
  let m = grid.length;
  let n = grid[0].length;

  let queue = [[i, j]]; // <--- diff is here.  加进去的不是root了 而是[i，j]坐标
  grid[i][j] = '0'; //把岛屿淹掉 (1变成0)

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let [x, y] = queue.shift();

      //diff are here， 加进去不再是node.left/right/children了，而是x,y坐标的上下左右
      //上
      if (x - 1 >= 0 && grid[x - 1][y] === '1') {
        queue.push([x - 1, y]);
        grid[x - 1][y] = '0';
      }
      //下
      if (x + 1 < m && grid[x + 1][y] === '1') {
        queue.push([x + 1, y]);
        grid[x + 1][y] = '0';
      }
      //左
      if (y - 1 >= 0 && grid[x][y - 1] === '1') {
        queue.push([x, y - 1]);
        grid[x][y - 1] = '0';
      }
      //右
      if (y + 1 < n && grid[x][y + 1] === '1') {
        queue.push([x, y + 1]);
        grid[x][y + 1] = '0';
      }
    }
  }
};
