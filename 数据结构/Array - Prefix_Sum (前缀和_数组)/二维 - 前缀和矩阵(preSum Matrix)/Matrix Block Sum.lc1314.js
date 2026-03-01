/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[][]}
 * 对于矩阵mat中的一坐标为(i,j)的元素，在矩阵范围内，求从元素(i - k, j - k)到元素(i + k, j + k)的矩形区域内所有值的和。
 */

/******************************* Solution1: 暴力遍历 ********************************************/
// 时间 O(m * n * k²)
var matrixBlockSum = function (mat, k) {
  let m = mat.length;
  let n = mat[0].length;

  let matrix = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sum = 0;
      let r1 = Math.max(0, i - k);
      let r2 = Math.min(m, i + k + 1);
      let c1 = Math.max(0, j - k);
      let c2 = Math.min(n, j + k + 1);
      for (let x = r1; x < r2; x++) {
        for (let y = c1; y < c2; y++) {
          sum += mat[x][y];
        }
      }
      matrix[i][j] = sum;
    }
  }

  return matrix;
};

/******************************* Solution 2:  preSum矩阵 (二维前缀和) ********************************************/
// 时间空间都是 O(m * n)
var matrixBlockSum = function (mat, k) {
  let m = mat.length;
  let n = mat[0].length;

  // construct the preSumMat matrix(前缀和矩阵)
  let preSumMat = Array.from({ length: m + 1 }, () => {
    return Array.from({ length: n + 1 }, () => 0);
  });
  for (let i = 1; i < preSumMat.length; i++) {
    for (let j = 1; j < preSumMat[0].length; j++) {
      // 自上 + 自左 + 原斜 - 自斜
      preSumMat[i][j] =
        preSumMat[i - 1][j] + // 代表当前元素上方的所有矩阵面积
        preSumMat[i][j - 1] + // 代表当前元素左方的所有矩阵面积
        mat[i - 1][j - 1] - // 代表原矩阵mat中当前元素的值（新增的一块小拼图)
        preSumMat[i - 1][j - 1]; //因为我们在加“上方”和“左侧”时，左上角的这块矩形区域被加了两次，所以必须要减去1次
    }
  }

  //construc res matrix;
  let resMat = Array.from({ length: m }, () => {
    return Array.from({ length: n }, () => 0);
  });
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let r1 = Math.max(0, i - k);
      let r2 = Math.min(m - 1, i + k);
      let c1 = Math.max(0, j - k);
      let c2 = Math.min(n - 1, j + k);
      // 查询 the preSumMat matrix(前缀和矩阵)： 目标矩阵之和由四个相邻矩阵运算获得: 区间 = 整体 - 左下 - 右上 + 左上角
      resMat[i][j] =
        preSumMat[r2 + 1][c2 + 1] - //整体sum
        preSumMat[r2 + 1][c1] - //左下整体sum
        preSumMat[r1][c2 + 1] + //右上整体sum
        preSumMat[r1][c1]; //左上角整体sum
    }
  }
  return resMat;
};
