/**
 * @param {number} n
 * @return {string[][]}
 */

const isValid = (row, col, chessBoard, n) => {
  for (let i = 0; i < row; i++) {
    if (chessBoard[i][col] === 'Q') return false;
  }
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (chessBoard[i][j] === 'Q') return false;
  }
  for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
    if (chessBoard[i][j] === 'Q') return false;
  }
  return true;
};

/**
2D array ----> 1D array:

from :
        [
          [ '.', 'Q', '.', '.' ],
          [ '.', '.', '.', 'Q' ],
          [ 'Q', '.', '.', '.' ],
          [ '.', '.', 'Q', '.' ]
        ]

to :    [".Q..","...Q","Q...","..Q."]
 */
const transformChessBoard = (chessBoard) => {
  let chessBoardBack = [];
  chessBoard.forEach((row) => {
    let rowStr = '';
    row.forEach((value) => (rowStr += value));
    chessBoardBack.push(rowStr);
  });
  return chessBoardBack;
};

/* ------------Main function is here ----------------------backtracking 模版 ---------------------------- */

var solveNQueens = function (n) {
  let result = [];
  let chessBoard = new Array(n).fill([]).map(() => new Array(n).fill('.')); //生成nxn的二维数组，内容都是 “.”

  function backtracing(row, chessBoard) {
    //走到最后一行，说明到了叶子节点， 开始收获结果集
    if (row === n) {
      result.push(transformChessBoard(chessBoard));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(row, col, chessBoard, n)) {
        chessBoard[row][col] = 'Q';
        backtracing(row + 1, chessBoard);
        chessBoard[row][col] = '.'; //回溯
      }
    }
  }

  backtracing(0, chessBoard);

  return result;
};
