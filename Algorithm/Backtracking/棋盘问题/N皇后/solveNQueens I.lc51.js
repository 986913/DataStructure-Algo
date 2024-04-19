/**
 * @param {number} n
 * @return {string[][]}
 */

/****************************  Backtracking (ie:多叉树遍历框架) *****************************
  时间复杂度为： O(n^2 * n！)  其中n为nums的长度
*/

// 主函数：
var solveNQueens = function (n) {
  let result = [];
  let board = new Array(n).fill(0).map(() => new Array(n).fill('.')); //生成nxn的二维数组，内容都是 “.”

  function traversal(board, curRow) {
    //走到最后一行 说明到了叶子
    if (curRow === n) {
      result.push(transformChessBoard(board));
      return;
    }

    //在当前行的每一列都有可能放置皇后：
    for (let col = 0; col < n; col++) {
      if (!isValid(board, curRow, col)) continue; //树枝上去重(排除不合法的选择)，即不能在board[curRow][col]上放皇后，那就跳过

      board[curRow][col] = 'Q'; // 做选择：在board[curRow][col]上放皇后
      traversal(board, curRow + 1);
      board[curRow][col] = '.'; //回溯：在board[curRow][col]上撤销皇后
    }
  }

  traversal(board, 0);
  return result;
};

// helper function 1: 判断是否能在board[curRow][col]上放置皇后
const isValid = (board, row, col) => {
  const n = board.length; // 获取棋盘的大小

  //列col是固定的，行row为变量: 检查在当前位置的上方是否有其他皇后，有的话返回 false
  for (let i = 0; i < row; i++) {
    if (board[i][col] === 'Q') return false;
  }

  //检查在左上方的对角线上是否有皇后，有的话返回 false
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 'Q') return false;
  }

  // 检查在右上方的对角线上是否有皇后，有的话返回 false
  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (board[i][j] === 'Q') return false;
  }

  // 若以上条件都不满足，则说明可以在该位置放置皇后，返回 true
  return true;
};

/**
  helper function2: 2D array ----> 1D array

    from :                                            to :  
            [                                               [".Q..","...Q","Q...","..Q."]
              [ '.', 'Q', '.', '.' ],
              [ '.', '.', '.', 'Q' ],
              [ 'Q', '.', '.', '.' ],
              [ '.', '.', 'Q', '.' ]
            ]
 */
const transformChessBoard = (board) => {
  let result = [];
  board.forEach((row) => {
    result.push(row.join(''));
  });
  return result;
};
