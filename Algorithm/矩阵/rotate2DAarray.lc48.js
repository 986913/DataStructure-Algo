/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/**
 *  step 1: filp array symmetrically(对角线翻转):
 *          [                         [
 *            [1,2,3],                  [1,4,7],
 *            [4,5,6],    ----->        [2,5,8],
 *            [7,8,9]                   [3,6,9],
 *          ]                         ]
 *
 *  step 2: 利用2pointer来reverse每一行:
 *          [                         [
 *            [1,4,7],                  [7,4,1],
 *            [2,5,8],   ------->       [8,5,2],
 *            [3,6,9]                   [9,6,3],
 *          ]                         ]
 */

var rotate = function (matrix) {
  let m = matrix.length; // row
  let n = matrix[0].length; // column

  // step1:
  for (let i = 0; i < m; i++) {
    for (let j = i; j < n; j++) {
      if (i === j) continue; // no need to swap if element is on 对角线上
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // step2:
  for (let i = 0; i < m; i++) {
    let left = 0;
    let right = n - 1;

    while (left <= right) {
      [matrix[i][left], matrix[i][right]] = [matrix[i][right], matrix[i][left]];
      left++;
      right--;
    }
  }
};
