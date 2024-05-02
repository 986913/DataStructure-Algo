/**
 * @param {number} n
 * @return {number}
 */

/****************************  Backtracking (ie:多叉树遍历框架) LC51变形题 *****************************
  时间复杂度为： O(n^2 * n！)  其中n为nums的长度
*/
var totalNQueens = function (n) {
  let result = 0;
  let matrix = new Array(n).fill(0).map((n) => new Array(n).fill('.'));

  const traversal = (board, curRow) => {
    if (curRow === n) {
      result += 1; // <-- diff is here
      return;
    }

    for (let col = 0; col < n; col++) {
      if (!isValid(board, curRow, col)) continue;

      board[curRow][col] = 'Q';
      traversal(board, curRow + 1);
      board[curRow][col] = '.';
    }
  };

  traversal(matrix, 0);
  return result;
};

// helper function:
const isValid = (board, row, col) => {
  for (let i = 0; i < row; i++) {
    if (board[i][col] === 'Q') return false;
  }
  for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] === 'Q') return false;
  }
  for (let i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
    if (board[i][j] === 'Q') return false;
  }
  return true;
};
