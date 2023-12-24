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

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
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
