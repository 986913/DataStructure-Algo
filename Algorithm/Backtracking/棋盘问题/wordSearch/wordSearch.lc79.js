/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

/*
  since its a 2D array, instead of looping once, we will loop twice, over the row and column of the board
  then to choose, we will just mark the visited index with '*'
  to explore, we will be exploring left, right, up, down of the board from the current spot/box
  then to unchoose, we will just replace the '*' with the letter we had replaced

  so basically,
  we will start from the [0][0] of the board, and start checking if the letter in that spot is equal to the letter in the given word
  if it is equal, we recurse to find possible matching letter from the board
  we increment the wordIndex by 1, we also replace the spot with '*'
  and then backtrack check to see if the neighbors(left, right, up, down) have the new letter from the given word
  if somehow the boundary check fails or the letter check fails, we return false,
  if all of the check fails while backtracking we start replacing the '*' with the actual letters we stored in our temp variable
  then return the result back.
*/

/**
 * ----------------------------------------- 👍 backtracking 模版 -----------------------------------------------------------
 */

/* Main function: */
const exist = (board, word) => {
  if (board == null || word == null || board.length == 0) return false; //edge case

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (backtracking(board, word, row, col, 0)) return true; //recursive check
    }
  }

  return false;
};

/* helper backtracking function: */
const backtracking = (board, word, row, col, wordIndex) => {
  if (wordIndex == word.length) return true;
  //out of bounds check
  if (row < 0 || row >= board.length || col < 0 || col >= board[0].length)
    return false;
  //letter check in the box (if the letter at the board is not equal to the letter of the given word return false)
  if (board[row][col] != word[wordIndex]) return false;

  //处理节点
  let temp = board[row][col];
  board[row][col] = '*'; //marking the visited box
  //递归
  let bool =
    backtracking(board, word, row - 1, col, wordIndex + 1) ||
    backtracking(board, word, row + 1, col, wordIndex + 1) ||
    backtracking(board, word, row, col - 1, wordIndex + 1) ||
    backtracking(board, word, row, col + 1, wordIndex + 1);
  //回溯，撤销处理结果
  board[row][col] = temp; //setting back the value from '*' to the letter

  return bool;
};
