/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
/********************************* Solution 1: 光圈收缩法 (不变量) *********************************/
// 不变量：只要 top < bottom，说明还有外层/内层需要旋转（对角线/中心点无需旋转）
function rotate(matrix: number[][]): void {
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix.length - 1;

  while (top < bottom && left < right) {
    let count = right - left; // 或者bottom-top也行

    for (let i = 0; i < count; i++) {
      //上边（从左往右  走i步）  A (上边第 i 个): matrix[top][left + i]
      //右边（从上往下 走i步）   B (右边第 i 个): matrix[top + i][right]
      //下边（从右往左 走i步）   C (下边第 i 个): matrix[bottom][right - i]
      //左边（从下往上 走i步）   D (左边第 i 个): matrix[bottom - i][left]

      // 顺时针正向移动 A -> B -> C -> D -> A:
      let temp = matrix[top][left + i]; // 记住A
      matrix[top][left + i] = matrix[bottom - i][left]; // D 给 A
      matrix[bottom - i][left] = matrix[bottom][right - i]; // C 给 D
      matrix[bottom][right - i] = matrix[top + i][right]; // B 给 C
      matrix[top + i][right] = temp; // A(temp) 给 B
    }

    top++;
    bottom--;
    left++;
    right--;
  }
}

/********************************* Solution 2 : 按照对角线翻转，然后reverse每一行 *********************************
 *  step 1: filp array symmetrically(对角线翻转):
 *          [                             [                              [
 *            [1,2,3],                      [1,4,7],                         [7,4,1],
 *            [4,5,6],  --(对角线翻转)--->    [2,5,8],  ---reverse每一行--->    [8,5,2],
 *            [7,8,9]                       [3,6,9],                          [9,6,3]
 *          ]                             ]                               ]
 */
var rotate = function (mx) {
  let len = mx.length;
  /* step 1: 根据对角线反转  */
  for (let i = 0; i < len; i++) {
    // 注意：j等于i开始， 因为不能做多余的翻转
    for (let j = i; j < len; j++) {
      if (i === j) continue; // no need to swap if element is on 对角线上
      [mx[i][j], mx[j][i]] = [mx[j][i], mx[i][j]];
    }
  }
  /* step 2: reverse 每一行   */
  mx.forEach((row) => {
    let left = 0;
    let right = len - 1;
    while (left <= right) {
      [row[left], row[right]] = [row[right], row[left]];
      left++;
      right--;
    }
  });

  return mx;
};
