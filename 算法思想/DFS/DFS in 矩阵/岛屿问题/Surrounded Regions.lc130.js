/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

/***************************************** Solution 1: DFS解决岛屿问题 ****************************************
  时间复杂度：O(M*N)
*/
const solve = (board) => {
  let m = board.length;
  let n = board[0].length;
  // Step1:  先for循环遍历棋盘的四边，用DFS把那些与边界相连的"O"换成一个特殊字符，比如"#"
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
        // 从（i,j) 开始，将与之相邻的O都变成#
        dfs(board, i, j);
      }
    }
  }
  // Step2:  然后再遍历整个棋盘，把剩下的 O 换成 X，把 # 恢复成 O
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      } else if (board[i][j] === '#') {
        board[i][j] = 'O';
      }
    }
  }
};
// helper function:
const dfs = (matrix, i, j) => {
  let m = matrix.length;
  let n = matrix[0].length;

  if (i < 0 || i >= m || j < 0 || j >= n) return;
  if (matrix[i][j] === '#' || matrix[i][j] === 'X') return; // <-- diff

  if (matrix[i][j] === 'O') matrix[i][j] = '#'; // <-- diff
  dfs(matrix, i - 1, j);
  dfs(matrix, i + 1, j);
  dfs(matrix, i, j - 1);
  dfs(matrix, i, j + 1);
};

/***************************************** Solution 2: BFS解决岛屿问题 **************************************/
const solve = (board) => {
  let m = board.length;
  let n = board[0].length;
  // Step1:  先for循环遍历棋盘的四边，用BFS把那些与边界相连的"O"换成一个特殊字符，比如"#"
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
        // 从（i,j) 开始，将与之相邻的O都变成#
        if (board[i][j] === 'O') bfs(board, i, j);
      }
    }
  }
  // Step2:  然后再遍历整个棋盘，把剩下的 O 换成 X，把 # 恢复成 O
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      } else if (board[i][j] === '#') {
        board[i][j] = 'O';
      }
    }
  }
};
// helper function:
const bfs = (matrix, i, j) => {
  let m = matrix.length;
  let n = matrix[0].length;

  let queue = [[i, j]]; // <-- diff, 加进去的不是root了 而是[i，j]坐标
  matrix[i][j] = '#'; // <-- diff

  while (queue.length) {
    let len = queue.length;

    for (let i = 0; i < len; i++) {
      let [x, y] = queue.shift();

      // 遍历i,j坐标的上下左右邻居，如果邻居是'O'则标记为'#'，并把邻居加入队列
      if (x - 1 >= 0 && matrix[x - 1][y] === 'O') {
        queue.push([x - 1, y]);
        matrix[x - 1][y] = '#';
      }
      if (x + 1 < m && matrix[x + 1][y] === 'O') {
        queue.push([x + 1, y]);
        matrix[x + 1][y] = '#';
      }
      if (y - 1 >= 0 && matrix[x][y - 1] === 'O') {
        queue.push([x, y - 1]);
        matrix[x][y - 1] = '#';
      }
      if (y + 1 < n && matrix[x][y + 1] === 'O') {
        queue.push([x, y + 1]);
        matrix[x][y + 1] = '#';
      }
    }
  }
};

/***************************************** Solution 3: Union find *****************************************/
const solve = (board) => {
  const m = board.length;
  const n = board[0].length;

  let uf = new UnionFound(m * n + 1);
  let dummy = m * n;
  // Connect first and last column 'O's to dummy
  for (let i = 0; i < m; i++) {
    if (board[i][0] === 'O') uf.union(i * n, dummy);
    if (board[i][n - 1] === 'O') uf.union(i * n + (n - 1), dummy);
    // 敲黑板，这是将2维坐标映射到1维的常用技巧: 2维坐标(x,y)可以转换成 (x * n) + y 这个数, m是棋盘的行数,n是列数
  }
  // Connect first and last row 'O's to dummy
  for (let j = 0; j < n; j++) {
    if (board[0][j] === 'O') uf.union(j, dummy);
    if (board[m - 1][j] === 'O') uf.union((m - 1) * n + j, dummy);
  }

  //把内部的O们拉成一伙，然后看看它们是否间接连接到了dummy通过边缘的O), Manually checking 4 directions
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (board[i][j] === 'O') {
        if (board[i + 1][j] === 'O') uf.union((i + 1) * n + j, i * n + j); // Down
        if (board[i - 1][j] === 'O') uf.union((i - 1) * n + j, i * n + j); // Up
        if (board[i][j + 1] === 'O') uf.union(i * n + (j + 1), i * n + j); // Right
        if (board[i][j - 1] === 'O') uf.union(i * n + (j - 1), i * n + j); // Left
      }
    }
  }

  // Replace all 'O's that are Not connected to dummy
  for (let i = 1; i < m - 1; i++) {
    for (let j = 1; j < n - 1; j++) {
      if (!uf.connected(dummy, i * n + j)) {
        board[i][j] = 'X';
      }
    }
  }
};

// helper class:
class UnionFound {
  // n 为图中节点的个数
  constructor(n) {
    // 连通分量个数
    this._count = n;
    // 存储每个节点的父节点：相当于指向父节点的指针，所以parent数组内实际存储着一个森林（若干棵多叉树）。
    this.parent = Array.from({ length: n }, (_, index) => index);
  }
  //查找元素x所属于的集合的代表元素（也叫根节点）：
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]); //- 这里有路径压缩：保证任意树的高度保持在常数，使得各个API时间复杂度为O(1)
    }
    return this.parent[x];
  }

  // 将节点 p 和节点 q 连通
  union(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);
    if (rootP === rootQ) return;

    this.parent[rootQ] = rootP; // 将两个不同集合合并
    this._count--; // 两个连通分量合并成一个连通分量
  }
  // 判断节点 p 和节点 q 是否连通
  connected(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);
    return rootP === rootQ;
  }
  // 返回图中的连通分量个数
  count() {
    return this._count;
  }
}
