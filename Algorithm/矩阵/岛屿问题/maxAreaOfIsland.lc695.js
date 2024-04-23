/**
 * @param {number[][]} grid
 * @return {number}
 */
/****************************** Solution : DFS 分解思想  LC200变形题 ************************************/
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
// helper function
const dfs = (grid, i, j) => {
  let m = grid.length;
  let n = grid[0].length;
  let area = 1; // <--- diff is here

  if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0) return 0; //超出边际或者不是岛，面积就是0

  grid[i][j] = 0;

  //diff is here:
  area += dfs(grid, i - 1, j);
  area += dfs(grid, i + 1, j);
  area += dfs(grid, i, j - 1);
  area += dfs(grid, i, j + 1);
  return area; // <--- diff is here 返回累加的岛屿面积
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

const bfs = (grid, i, j) => {
  let m = grid.length;
  let n = grid[0].length;

  grid[i][j] = 0; //把岛屿淹掉 (1变成0)
  let area = 0; // <--- diff is here
  let queue = [[i, j]];
  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let [x, y] = queue.shift();
      area += 1; // <--- diff is here

      //上
      if (x - 1 >= 0 && grid[x - 1][y] === 1) {
        queue.push([x - 1, y]);
        grid[x - 1][y] = 0;
      }
      //下
      if (x + 1 < m && grid[x + 1][y] === 1) {
        queue.push([x + 1, y]);
        grid[x + 1][y] = 0;
      }
      //左
      if (y - 1 >= 0 && grid[x][y - 1] === 1) {
        queue.push([x, y - 1]);
        grid[x][y - 1] = 0;
      }
      //右
      if (y + 1 < n && grid[x][y + 1] === 1) {
        queue.push([x, y + 1]);
        grid[x][y + 1] = 0;
      }
    }
  }

  return area; // <--- diff is here
};
