/*******************************Solution 1: O(N)**********************************************/
var NumMatrix = function (matrix) {
  this.matrix = matrix;
};
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
  this.matrix = matrix;
  this.preSumMatrix = this.calcPreSum(); // preSumMatrix[i][j] 表示 矩阵 从[0,0] 到[i-1, j-1] 的元素和
};

NumMatrix.prototype.calcPreSum = function () {
  let m = this.matrix.length;
  let n = this.matrix[0].length;

  //初始化 前缀和矩阵
  let preSumMatrix = Array.from({ length: m + 1 }, () => {
    return Array.from({ length: n + 1 }, () => 0);
  });
  // 构造 前缀和矩阵
  for (let i = 1; i < preSumMatrix.length; i++) {
    for (let j = 1; j < preSumMatrix[0].length; j++) {
      preSumMatrix[i][j] =
        preSumMatrix[i - 1][j] + // 代表当前元素上方的所有矩阵面积
        preSumMatrix[i][j - 1] + // 代表当前元素左方的所有矩阵面积
        this.matrix[i - 1][j - 1] - // 代表原矩阵mat中当前元素的值（新增的一块小拼图)
        preSumMatrix[i - 1][j - 1]; //因为我们在加“上方”和“左侧”时，左上角的这块矩形区域被加了两次，所以必须要减去1次
    }
  }

  return preSumMatrix;
};

NumMatrix.prototype.sumRegion = function (x1, y1, x2, y2) {
  // 查询 the preSumMat matrix(前缀和矩阵)： 目标矩阵之和由四个相邻矩阵运算获得: 区间 = 整体 - 左下 - 右上 + 左上角
  return (
    this.preSumMatrix[x2 + 1][y2 + 1] - //整体sum
    this.preSumMatrix[x1][y2 + 1] - //左下整体sum
    this.preSumMatrix[x2 + 1][y1] + //右上整体sum
    this.preSumMatrix[x1][y1] //左上角整体sum
  );
};
