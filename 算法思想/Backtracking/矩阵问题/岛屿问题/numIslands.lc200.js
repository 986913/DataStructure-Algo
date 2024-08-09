/**
 * @param {character[][]} grid
 * @return {number}
 * 岛屿系列题目的核心考点就是用 DFS/BFS遍历二维数组

  ❗这道题不需要回溯❗，因为我们只需要找到每个岛屿并标记它的所有部分，确保不会重复计算。
  通过DFS或BFS，我们可以标记一个岛屿的所有相邻陆地，不需要回头重新考虑已经访问过的部分。 因此DFS或BFS遍历就足够了，不需要恢复状态的步骤

  回溯一般用于需要探索所有可能性并且在某一条路径上尝试后，可能会撤销选择回到上一步的场景。例如，解决迷宫问题、排列组合问题等。
  而在这道题中，标记一块陆地为水域后，不需要再返回去重新考虑这块陆地的状态，所以不涉及回溯的概念。
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
const dfs = (matrix, i, j) => {
  let m = matrix.length;
  let n = matrix[0].length;

  if (i < 0 || i >= m || j < 0 || j >= n) return; //base condition: 越界
  if (matrix[i][j] === '0') return; //base condition: 已遍历过（i,j) / 当前i,j位置已经被淹了

  //前序位置：
  matrix[i][j] = '0'; //把岛屿淹掉 (1变成0), 用来防止在后续遍历中重复访问同一片陆地，确保每个岛屿只被计数一次。

  //这里不再是nide.left, node.right了， 而是i,j坐标的上下左右
  dfs(matrix, i + 1, j); // 上
  dfs(matrix, i - 1, j); // 下
  dfs(matrix, i, j + 1); // 右
  dfs(matrix, i, j - 1); // 左
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
const bfs = (matrix, i, j) => {
  let m = matrix.length;
  let n = matrix[0].length;

  let queue = [[i, j]]; // <--- diff is here.  加进去的不是root了 而是[i，j]坐标
  matrix[i][j] = '0'; //把岛屿淹掉 (1变成0)

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let [x, y] = queue.shift();

      //diff are here， 加进去不再是node.left/right/children了，而是x,y坐标的上下左右
      //上
      if (x - 1 >= 0 && matrix[x - 1][y] === '1') {
        queue.push([x - 1, y]);
        matrix[x - 1][y] = '0';
      }
      //下
      if (x + 1 < m && matrix[x + 1][y] === '1') {
        queue.push([x + 1, y]);
        matrix[x + 1][y] = '0';
      }
      //左
      if (y - 1 >= 0 && matrix[x][y - 1] === '1') {
        queue.push([x, y - 1]);
        matrix[x][y - 1] = '0';
      }
      //右
      if (y + 1 < n && matrix[x][y + 1] === '1') {
        queue.push([x, y + 1]);
        matrix[x][y + 1] = '0';
      }
    }
  }
};
