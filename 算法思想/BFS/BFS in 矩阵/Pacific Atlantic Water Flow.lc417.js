/**
 * @param {number[][]} heights
 * @return {number[][]}
  大体思想：
    逆向模拟水的流动： 从海洋边界的格子开始，向内陆递归，标记哪些格子可以“逆流”回海洋。即，水只能从高点或等高点向低点流，所以我们从海洋边界的低点开始，寻找能流回去的路径。
    两个独立的DFS：   分别从太平洋和大西洋的边界进行DFS，标记所有能流到这两个海洋的格子。
    交集判断：       最终，找出那些同时能流到太平洋和大西洋的格子。
 */

/*********************************** Solution1: BFS ****************************************/
// Main function;
const pacificAtlantic = (grid) => {
  let m = grid.length;
  let n = grid[0].length;
  if (m === 0 || n === 0) return [];

  /* 初始化BFS队列和两个海洋的访问矩阵 */
  let queuePacific = [];
  let queueAtlantic = [];
  const pacificReachable = Array.from({ length: m }, () =>
    Array(n).fill(false)
  );
  const atlanticReachable = Array.from({ length: m }, () =>
    Array(n).fill(false)
  );

  /*****第1列和第1行的格子一定可以流入太平洋, 加入队列，同时标记为已访问*****/
  for (let i = 0; i < m; i++) {
    queuePacific.push([i, 0]);
    pacificReachable[i][0] = true;
  }
  for (let i = 0; i < n; i++) {
    queuePacific.push([0, i]);
    pacificReachable[0][i] = true;
  }
  // 进行 BFS 搜索，找出所有可以流入太平洋的格子
  bfs(grid, queuePacific, pacificReachable);
  /*****************************************************************/

  /*****最后1列和最后1行的格子一定可以流入大西洋, 加入队列，同时标记为已访问*****/
  for (let i = 0; i < m; i++) {
    queueAtlantic.push([i, n - 1]);
    atlanticReachable[i][n - 1] = true;
  }
  for (let i = 0; i < n - 1; i++) {
    queueAtlantic.push([m - 1, i]);
    atlanticReachable[m - 1][i] = true;
  }
  // 进行 BFS 搜索，找出所有可以流入大西洋的格子
  bfs(grid, queueAtlantic, atlanticReachable);
  /*****************************************************************/

  /* 找出交集result：收集既能流入太平洋又能流入大西洋的格子 */
  const result = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacificReachable[i][j] && atlanticReachable[i][j]) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

// helper function:
const bfs = (matrix, queue, reachable) => {
  let m = matrix.length;
  let n = matrix[0].length;

  while (queue.length) {
    let [x, y] = queue.shift();
    let currHeight = matrix[x][y];
    // 检查并入队邻近的格子，如果它们可以到达
    if (x > 0 && !reachable[x - 1][y] && matrix[x - 1][y] >= currHeight) {
      queue.push([x - 1, y]);
      reachable[x - 1][y] = true;
    }
    if (x + 1 < m && !reachable[x + 1][y] && matrix[x + 1][y] >= currHeight) {
      queue.push([x + 1, y]);
      reachable[x + 1][y] = true;
    }
    if (y > 0 && !reachable[x][y - 1] && matrix[x][y - 1] >= currHeight) {
      queue.push([x, y - 1]);
      reachable[x][y - 1] = true;
    }
    if (y - 1 < n && !reachable[x][y + 1] && matrix[x][y + 1] >= currHeight) {
      queue.push([x, y + 1]);
      reachable[x][y + 1] = true;
    }
  }
};

/*********************************** Solution2: DFS ****************************************/
// Main function;
const pacificAtlantic = (grid) => {
  let m = grid.length;
  let n = grid[0].length;
  if (m === 0 || n === 0) return [];

  //分别记录哪些格子可以流向太平洋和大西洋。
  const pacificReachable = Array.from({ length: m }, () =>
    Array(n).fill(false)
  );
  const atlanticReachable = Array.from({ length: m }, () =>
    Array(n).fill(false)
  );

  //从靠近海洋的边界开始DFS
  for (let i = 0; i < m; i++) {
    dfs(grid, i, 0, pacificReachable); //左边界
    dfs(grid, i, n - 1, atlanticReachable); //右边界
  }
  for (let i = 0; i < n; i++) {
    dfs(grid, 0, i, pacificReachable); //上边界
    dfs(grid, m - 1, i, atlanticReachable); //下边界
  }

  //找出交集result
  const result = [];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (pacificReachable[i][j] && atlanticReachable[i][j]) {
        result.push([i, j]);
      }
    }
  }
  return result;
};

// helper function： 对每个格子，递归地检查它的相邻格子是否符合流动条件(相邻格子的高度>=当前格子的高度). 如果符合，就递归到这个相邻格子。
const dfs = (matrix, i, j, reachable) => {
  let m = matrix.length;
  let n = matrix[0].length;

  reachable[i][j] = true;

  let curHeight = matrix[i][j];
  // 上
  if (i > 0 && !reachable[i - 1][j] && matrix[i - 1][j] >= curHeight) {
    dfs(matrix, i - 1, j, reachable);
  }
  // 下
  if (i < m - 1 && !reachable[i + 1][j] && matrix[i + 1][j] >= curHeight) {
    dfs(matrix, i + 1, j, reachable);
  }
  // 左
  if (j > 0 && !reachable[i][j - 1] && matrix[i][j - 1] >= curHeight) {
    dfs(matrix, i, j - 1, reachable);
  }
  // 右
  if (j < n - 1 && !reachable[i][j + 1] && matrix[i][j + 1] >= curHeight) {
    dfs(matrix, i, j + 1, reachable);
  }
};
