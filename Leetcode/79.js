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

/*---------------------------------- 👍 backtracking 模版 -----------------------------------------*/
var exist = function (board, word) {
  if (board == null || word == null || board.length == 0) return false; //edge case

  let m = board.length;
  let n = board[0].length;

  /****** helper function ******/
  const dfs = (board, i, j, wordIdx) => {
    //base condition
    if (i < 0 || i >= m || j < 0 || j >= n) return false; // out of bounds, return false
    if (board[i][j] !== word[wordIdx]) return false; //letter check in the box (if the letter at the board is not equal to the letter of the given word return false)
    if (wordIdx === word.length - 1) return true; // 已经匹配到最后一个字符，说明都对上啦

    //前序位置：
    let record = board[i][j];
    board[i][j] = '*'; // 标记当前位置已访问 (把岛屿淹掉)

    //这里不再是nide.left, node.right了， 而是i,j坐标的上下左右
    const isUpExsit = dfs(board, i - 1, j, wordIdx + 1);
    const isDownExist = dfs(board, i + 1, j, wordIdx + 1);
    const isLeftExist = dfs(board, i, j - 1, wordIdx + 1);
    const isRightExist = dfs(board, i, j + 1, wordIdx + 1);

    board[i][j] = record; // 回溯，恢复当前位置字符
    return isUpExsit || isDownExist || isLeftExist || isRightExist;
  };

  /****** Main function ******/
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(board, i, j, 0)) return true; // 找到起点，开始搜索
    }
  }

  return false;
};

/*---------------------------------- 👍 backtracking 模版 - 带备忘录 -----------------------------------------*/
var exist = function (board, word) {
  let m = board.length;
  let n = board[0].length;
  let memo = new Array(m).fill(-1).map(() => new Array(n).fill(false)); //备忘录

  /****** helper function ******/
  const dfs = (board, i, j, wordIdx) => {
    if (i < 0 || i >= m || j < 0 || j >= n) return false;
    if (board[i][j] !== word[wordIdx] || memo[i][j]) return false;
    if (wordIdx === word.length - 1) return true;

    memo[i][j] = true;
    const isExsitOnUp = dfs(board, i - 1, j, wordIdx + 1);
    const isExsitOnBelow = dfs(board, i + 1, j, wordIdx + 1);
    const isExsitOnLeft = dfs(board, i, j - 1, wordIdx + 1);
    const isExsitOnRight = dfs(board, i, j + 1, wordIdx + 1);
    memo[i][j] = false;
    return isExsitOnUp || isExsitOnRight || isExsitOnBelow || isExsitOnLeft;
  };

  /****** Main function ******/
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(board, i, j, 0)) return true;
    }
  }

  return false;
};
