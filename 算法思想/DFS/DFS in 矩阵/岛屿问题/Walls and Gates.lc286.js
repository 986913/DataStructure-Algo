/**
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */

/************************ Solution: BFS 推荐 **************************/
var wallsAndGates = function (rooms) {
  let m = rooms.length;
  let n = rooms[0].length;

  let queue = [];

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 使用 BFS 方法从每个门出发，正确计算到达每个房间的最短距离
      if (rooms[i][j] === 0) {
        queue.push([i, j]);
      }
    }
  }

  while (queue.length) {
    let len = queue.length;

    for (let k = 0; k < len; k++) {
      let [x, y] = queue.shift();

      // 遍历四个方向: 上下左右
      if (x - 1 >= 0 && rooms[x - 1][y] === 2147483647) {
        rooms[x - 1][y] = rooms[x][y] + 1;
        queue.push([x - 1, y]);
      }
      if (x + 1 < m && rooms[x + 1][y] === 2147483647) {
        rooms[x + 1][y] = rooms[x][y] + 1;
        queue.push([x + 1, y]);
      }
      if (y - 1 >= 0 && rooms[x][y - 1] === 2147483647) {
        rooms[x][y - 1] = rooms[x][y] + 1;
        queue.push([x, y - 1]);
      }
      if (y + 1 < n && rooms[x][y + 1] === 2147483647) {
        rooms[x][y + 1] = rooms[x][y] + 1;
        queue.push([x, y + 1]);
      }
    }
  }
};

/************************ Solution: DFS *****************************/
// Main function:
var wallsAndGates = function (rooms) {
  let m = rooms.length;
  let n = rooms[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      // 使用 DFS 方法从每个门出发，正确计算到达每个房间的最短距离
      if (rooms[i][j] === 0) {
        dfs(rooms, i, j, 0);
      }
    }
  }
};
// Helper function:
const dfs = (matrix, i, j, distance) => {
  let m = matrix.length;
  let n = matrix[0].length;

  if (i < 0 || i >= m || j < 0 || j >= n) return 0;
  if (matrix[i][j] === -1) return 0;
  if (matrix[i][j] < distance) return; // 如果当前位置的值 <= 当前距离，说明已经找到更短的路径，直接返回。

  matrix[i][j] = distance; // 更新当前房间的距离为当前距离
  dfs(matrix, i - 1, j, distance + 1);
  dfs(matrix, i + 1, j, distance + 1);
  dfs(matrix, i, j - 1, distance + 1);
  dfs(matrix, i, j + 1, distance + 1);
};
