/**
 * @param {number[][]} matrix
 * @return {number[]}
 */

function spiralOrder(matrix: number[][]): number[] {
  let m = matrix.length;
  let n = matrix[0].length;

  // 【核心不变量 (Invariant) / logic contract】
  // 在任何时刻，[top, bottom] 和 [left, right] 共同圈定的矩形区域，
  // 必须严格代表“绝对存在且尚未被打印的内部 Cell 集合”。
  // 只要 top <= bottom 且 left <= right 成立，这层契约就有效，内部就必定有活着的元素。
  let top = 0;
  let bottom = m - 1;
  let left = 0;
  let right = n - 1;
  let res = [];

  while (top <= bottom && left <= right) {
    // 走一圈
    // 上
    for (let j = left; j <= right; j++) {
      res.push(matrix[top][j]);
    }
    top++;

    // 右
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;

    // 下
    // 【捍卫契约】：前面的 top++ 可能已经彻底摧毁了上下边界的契约（比如单行矩阵）
    if (top <= bottom) {
      for (let j = right; j >= left; j--) {
        res.push(matrix[bottom][j]);
      }
      bottom--;
    }

    // 左
    // 【捍卫契约】：前面的 right-- 可能已经彻底摧毁了左右边界的契约（比如单行矩阵）
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left]);
      }
      left++;
    }
  }

  return res;
}
