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

/**
  套路总结：
    旋转二维矩阵的难点在于将「行」变成「列」，将「列」变成「行」，而只有按照对角线的对称操作是可以轻松完成这一点的，对称操作之后就很容易发现规律了。

  既然说道这里，我们可以发散一下，如何将矩阵逆时针旋转 90 度呢？
  思路是类似的，只要通过另一条对角线镜像对称矩阵，然后再反转每一行，就得到了逆时针旋转矩阵的结果(看逆时针翻转90度.js)
 */
