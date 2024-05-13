/**
 * @param {character[][]} board
 * @return {boolean}
 */

/******************************************* Solution: Set **********************************************************/
var isValidSudoku = function (board) {
  let seen = new Set();

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      //只看number:
      if (board[i][j] !== '.') {
        //check row, col, and 3x3 grid: 只要row, col 或者3x3 grid中再次出现同一个元素, 就不是valid sudoku. return false
        if (
          seen.has(`${board[i][j]} in row ${i}`) ||
          seen.has(`${board[i][j]} in col ${j}`) ||
          seen.has(
            `${board[i][j]} in block ${Math.floor(i / 3)}-${Math.floor(j / 3)}`
          )
        ) {
          return false;
        }

        // set Seen
        seen.add(`${board[i][j]} in row ${i}`);
        seen.add(`${board[i][j]} in col ${j}`);
        seen.add(
          `${board[i][j]} in block ${Math.floor(i / 3)}-${Math.floor(j / 3)}`
        );
      }
    }
  }

  return true; // valid
};
