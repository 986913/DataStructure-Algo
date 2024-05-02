/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

/****************************  Backtracking - 二维递归 (ie:多叉树遍历框架) LC51变形题 *****************************/

var solveSudoku = function (board) {
  const traversal = () => {
    //不同点在这: 是双层forloop：
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        if (board[i][j] !== '.') continue;

        for (let val = 1; val <= 9; val++) {
          if (isValid(board, i, j, `${val}`)) {
            board[i][j] = `${val}`;
            if (traversal()) return true; //递归
            board[i][j] = `.`; // 回溯
          }
        }

        return false; // 说明1-9都尝试了 咩有结果
      }
    }

    return true;
  };

  traversal(board);
  return board;
};

/*---------------- helper function ---------------------*/
const isValid = (board, row, col, val) => {
  let len = board.length;
  // 行不能重复
  for (let i = 0; i < len; i++) {
    if (board[row][i] === val) return false;
  }
  // 列不能重复
  for (let i = 0; i < len; i++) {
    if (board[i][col] === val) return false;
  }

  // 9宫格内不能重复
  let startRow = Math.floor(row / 3) * 3;
  let startCol = Math.floor(col / 3) * 3;
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      if (board[i][j] === val) return false;
    }
  }

  return true;
};
