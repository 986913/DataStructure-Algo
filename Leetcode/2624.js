/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */

/**************************** LC 59变形题 ************************************************/

Array.prototype.snail = function (rowsCount, colsCount) {
  if (rowsCount * colsCount !== this.length) return [];

  // create 2D result array:
  const result = new Array(rowsCount)
    .fill()
    .map(() => new Array(colsCount).fill(null));

  // 循环不变量
  let top = 0; // 0 -> rowsCount;
  let bottom = rowsCount - 1; // rowsCount-1 -> 0;
  let left = 0;
  let right = colsCount - 1;

  let index = 0;
  let rev = false;

  //开始便利循环：
  while (top <= bottom && left <= right) {
    // 从下到上
    if (rev) {
      for (let i = bottom; i >= top; i--) {
        result[i][left] = this[index];
        index++;
      }
    } else {
      // 从上到下
      for (let i = top; i <= bottom; i++) {
        result[i][left] = this[index];
        index++;
      }
    }

    left += 1;
    rev = !rev;
  }

  return result;
};

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
