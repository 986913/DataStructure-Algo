/**
 * Solves a 10x10 crossword puzzle by filling in all given words.
 *
 * You are given a crossword grid where each cell is either '+' (blocked) or '-' (empty).
 * You must fill the empty cells with all words from a given list such that:
 *   1. Words can be placed horizontally (left-to-right) or vertically (top-to-bottom).
 *   2. Words cannot overlap with conflicting letters.
 *   3. Cells marked '+' cannot be overwritten.
 *   4. All words must be used exactly once.
 *
 * @param {string[]} crossword - An array of 10 strings of length 10 representing the grid.  '+' for blocked cells, '-' for empty cells.
 * @param {string} words - A semicolon-delimited string of words to fit into the grid.
 *
 * @returns {string[]} - The completed crossword grid as an array of 10 strings.
 * @example
 * const crossword = [
 *   '+-++++++++',
 *   '+-++++++++',
 *   '+-++++++++',
 *   '+-----++++',
 *   '+-+++-++++',
 *   '+-+++-++++',
 *   '+++++-++++',
 *   '++------++',
 *   '+++++-++++',
 *   '+++++-++++'
 * ];
 * const words = 'LONDON;DELHI;ICELAND;ANKARA';
 * const result = crosswordPuzzle(crossword, words);
 * // result => [
 * //   '+L++++++++',
 * //   '+O++++++++',
 * //   '+N++++++++',
 * //   '+DELHI++++',
 * //   '+O+++C++++',
 * //   '+N+++E++++',
 * //   '+++++L++++',
 * //   '++ANKARA++',
 * //   '+++++N++++',
 * //   '+++++D++++'
 * // ]
 *
 * @note
 * This is a backtracking problem. Implement careful placement and undo (backtracking)
 * to explore all valid arrangements of words on the grid.
 */

function crosswordPuzzle(crossword, wordsStr) {
  const m = crossword.length;
  const n = crossword[0].length;
  const words = wordsStr.split(';');
  let grid = crossword.map((row) => row.split(''));

  // -----------------------
  // 检查能否横向(自左到右)放置 word
  // -----------------------
  const canPlaceHorizontal = (i, j, word) => {
    if (j + word.length > n) return false; // 越界判断
    for (let k = 0; k < word.length; k++) {
      const c = grid[i][j + k]; // 当前格子的内容 (自左到右)

      if (c === '-') {
        // 这个格子是空的，可以直接写上当前单词的字母
        continue;
      } else if (c === word[k]) {
        // 这个格子已经有了和当前字母一样的字母，可以继续放，不冲突
        continue;
      } else {
        // 这个格子里已经有不同的字母了，不能放当前单词的这个字母
        return false;
      }
    }
    return true;
  };

  // -----------------------
  // 检查能否竖向(自上到下)放置 word
  // -----------------------
  const canPlaceVertical = (i, j, word) => {
    if (i + word.length > m) return false; // 越界判断
    for (let k = 0; k < word.length; k++) {
      const c = grid[i + k][j]; // 当前格子的内容

      if (c === '-') {
        // 这个格子是空的，可以直接写上当前单词的字母
        continue;
      } else if (c === word[k]) {
        // 这个格子已经有了和当前字母一样的字母，可以继续放，不冲突
        continue;
      } else {
        // 这个格子里已经有不同的字母了，不能放当前单词的这个字母
        return false;
      }
    }
    return true;
  };

  // -----------------------
  // 横向(自左到右)放置 word，并记录本次新填的格子
  // -----------------------
  const placeHorizontal = (i, j, word) => {
    let placedPosition = [];
    for (let k = 0; k < word.length; k++) {
      if (grid[i][j + k] === '-') {
        grid[i][j + k] = word[k];
        placedPosition.push([i, j + k]); // 记录本次新填的格子
      }
    }
    return placedPosition;
  };

  // -----------------------
  // 竖向(自上到下)放置 word，并记录本次新填的格子
  // -----------------------
  const placeVertical = (i, j, word) => {
    let placedPosition = [];
    for (let k = 0; k < word.length; k++) {
      if (grid[i + k][j] === '-') {
        grid[i + k][j] = word[k];
        placedPosition.push([i + k, j]); // 记录本次新填的格子
      }
    }
    return placedPosition;
  };

  // -----------------------
  // 回溯撤销本次填入的格子
  // -----------------------
  const undo = (placedPosition) => {
    for (const [i, j] of placedPosition) {
      grid[i][j] = '-'; // 只撤销本次填的格子，不影响原有匹配字母
    }
  };

  // -----------------------
  // 核心回溯函数: 从当前单词开始 放完剩余单词是否可行
  // -----------------------
  const backtracking = (wordIdx) => {
    if (wordIdx === words.length) return true; // 所有单词已成功放置

    const word = words[wordIdx];
    //  遍历整个 grid，尝试把当前 word 放在每个可能位置
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        // ---------- 横向尝试 ----------
        if (canPlaceHorizontal(i, j, word)) {
          const placedPosition = placeHorizontal(i, j, word); // 放置并记录新写格子
          if (backtracking(wordIdx + 1)) return true; // 递归下一单词 （当前单词放这个位置 和所有后续单词组合起来可以成功填满 grid， 所以整个递归可以直接返回 true → 找到一条成功路径）
          undo(placedPosition); // 回溯 （当前单词放在这里会导致后续单词无法放满， 所以要撤销当前单词，再尝试 grid 上其他位置）
        }

        // ---------- 竖向尝试 ----------
        if (canPlaceVertical(i, j, word)) {
          const placedPosition = placeVertical(i, j, word); // 放置并记录新写格子
          if (backtracking(wordIdx + 1)) return true; // 递归下一单词
          undo(placedPosition); // 回溯
        }
      }
    }

    return false; // 当前单词无法放置，触发上层回溯
  };
  // 启动回溯
  backtracking(0);

  // 将二维数组转回字符串数组返回
  return grid.map((row) => row.join(''));
}
