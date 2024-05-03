/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 * 对于矩阵mat中的一坐标为(i,j)的元素，在矩阵范围内，求从元素(i - k, j - k)到元素(i + k, j + k)的矩形区域内所有值的和。
 */

/******************************* Solution1: 暴力遍历 ********************************************/
var matrixBlockSum = function (mat, k) {
  let m = mat.length;
  let n = mat[0].length;

  let matrix = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0;
      for (let x = Math.max(0, i - k); x < Math.min(m, i + k + 1); x++) {
        for (let y = Math.max(0, j - k); y < Math.min(n, j + k + 1); y++) {
          sum += mat[x][y];
        }
      }
      matrix[i][j] = sum;
    }
  }

  return matrix;
};

/******************************* Solution2: 前缀和数组 - O(1) LC304变形题 ********************************************/
