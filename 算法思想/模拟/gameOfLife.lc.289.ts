/**
  Do not return anything, modify board in-place instead.
  我们心中定下了一条铁律（不变量）：无论这个 cell 当前的值变成了什么（0、1、2 还是 3），任何扫描到它的邻居，都必须能通过一个固定规则（即“遇到 1 或 2 算活，0 或 3 算死”），准确倒推出它在初始时刻的状态。
 */

/***************************************** (仿真题) Composite States V1 ************************************************/
function gameOfLife(board: number[][]): void {
  let states = new Map<number, number[]>();
  states.set(0, [0, 0]); // 0死 -> 0死
  states.set(1, [1, 1]); // 1活 -> 1活
  states.set(2, [1, 0]); // 1活 -> 0死
  states.set(3, [0, 1]); // 0死 -> 1活

  let m = board.length;
  let n = board[0].length;
  // 第一遍遍历：统计活邻居并更新为复合状态 0, 1, 2, 3
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let cur = board[i][j];
      let liveNeighbors = 0;
      // visit all 8 neighbors and count liveNeighbors
      // 上
      if (i - 1 >= 0)
        if (board[i - 1][j] === 1 || board[i - 1][j] === 2) liveNeighbors++;
      // 下
      if (i + 1 < m)
        if (board[i + 1][j] === 1 || board[i + 1][j] === 2) liveNeighbors++;
      // 左
      if (j - 1 >= 0)
        if (board[i][j - 1] === 1 || board[i][j - 1] === 2) liveNeighbors++;
      // 右
      if (j + 1 < n)
        if (board[i][j + 1] === 1 || board[i][j + 1] === 2) liveNeighbors++;
      // 左上
      if (i - 1 >= 0 && j - 1 >= 0)
        if (board[i - 1][j - 1] === 1 || board[i - 1][j - 1] === 2)
          liveNeighbors++;
      // 右上
      if (i - 1 >= 0 && j + 1 < n)
        if (board[i - 1][j + 1] === 1 || board[i - 1][j + 1] === 2)
          liveNeighbors++;
      // 左下
      if (i + 1 < m && j - 1 >= 0)
        if (board[i + 1][j - 1] === 1 || board[i + 1][j - 1] === 2)
          liveNeighbors++;
      // 右下
      if (i + 1 < m && j + 1 < n)
        if (board[i + 1][j + 1] === 1 || board[i + 1][j + 1] === 2)
          liveNeighbors++;

      // apply Problem's rules here to update cur
      if (cur === 1) {
        // rule 1 and rule 3
        if (liveNeighbors < 2 || liveNeighbors > 3) {
          board[i][j] = 2;
        }
        // default rule 2
      } else {
        // rule 4
        if (liveNeighbors === 3) {
          board[i][j] = 3;
        }
      }
    }
  }

  // console.log(board);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let cur = board[i][j];
      board[i][j] = states.get(cur)[1];
    }
  }
}

/***************************************** (仿真题) Composite States V2 ************************************************/
function gameOfLife(board: number[][]): void {
  let states = new Map<number, number[]>();
  states.set(0, [0, 0]); // 0死 -> 0死
  states.set(1, [1, 1]); // 1活 -> 1活
  states.set(2, [1, 0]); // 1活 -> 0死
  states.set(3, [0, 1]); // 0死 -> 1活

  let m = board.length;
  let n = board[0].length;

  // 方向数组：定义 8 个相对坐标方向
  const directions = [
    [-1, 0], // 上
    [1, 0], // 下
    [0, -1], // 左
    [0, 1], // 右
    [-1, -1], // 左上
    [-1, 1], // 右上
    [1, -1], // 左下
    [1, 1], // 右下
  ];

  // 第一遍遍历：统计活邻居并更新为复合状态 0, 1, 2, 3
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let liveNeighbors = 0;
      let cur = board[i][j];

      // 使用内部循环代替 8 行 if 判断
      for (let [x, y] of directions) {
        // 统一处理边界，并读取初始状态 (1 或 2 均算作初始为活)
        if (
          i + x >= 0 &&
          i + x < m &&
          j + y >= 0 &&
          j + y < n &&
          (board[i + x][j + y] === 1 || board[i + x][j + y] === 2)
        ) {
          liveNeighbors++;
        }
      }

      // 应用核心规则更新当前细胞
      // apply Problem's rules here to update cur
      if (cur === 1) {
        // rule 1 and rule 3
        if (liveNeighbors < 2 || liveNeighbors > 3) {
          board[i][j] = 2;
        }
        // default rule 2
      } else {
        // rule 4
        if (liveNeighbors === 3) {
          board[i][j] = 3;
        }
      }
    }
  }

  // 第二遍遍历：还原最终状态
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let cur = board[i][j];
      board[i][j] = states.get(cur)[1];
    }
  }
}
