/*******************************Solution 1: O(N)**********************************************/
/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  this.matrix = matrix;
};

/**
 * @param {number} row1
 * @param {number} col1
 * @param {number} row2
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  let sum = 0;

  for (let i = row1; i <= row2; i++) {
    for (let j = col1; j <= col2; j++) {
      sum += this.matrix[i][j];
    }
  }

  return sum;
};

/*******************************Solution 2: 前缀和数组 - O(1) *********************************************
  核心思路: new一个2D preSumArr数组出来，专门记录以原点为顶点的矩阵的元素之和， 就可以用几次加减运算 算出任何一个子矩阵的元素和
  https://www.bilibili.com/video/BV1NY4y1J7xQ/?vd_source=8b5297d974f6a5e72c60ec8ea33f2ff6
*/

/**
 * @param {number[][]} matrix
 */
var NumMatrix = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  if (m == 0 || n == 0) return;
  //定义： preSum[i][j]， 记录matrix中子矩阵[0，0， i-1， j-1]的元素和
  this.preSum = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));
  console.log(this.preSum);
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      // 计算每个矩阵 [0, 0, i, j] 的元素和
      this.preSum[i][j] =
        this.preSum[i - 1][j] +
        this.preSum[i][j - 1] +
        matrix[i - 1][j - 1] -
        this.preSum[i - 1][j - 1];
    }
  }
};

/**
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (x1, y1, x2, y2) {
  // 目标矩阵之和由四个相邻矩阵运算获得
  return (
    this.preSum[x2 + 1][y2 + 1] -
    this.preSum[x1][y2 + 1] -
    this.preSum[x2 + 1][y1] +
    this.preSum[x1][y1]
  );
};
