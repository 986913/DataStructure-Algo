/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

/**
 *  step 1: filp array symmetrically(对角线翻转):
 *          [                         [
 *            [1,2,3],                  [9,6,3],
 *            [4,5,6],    ----->        [8,5,2],
 *            [7,8,9]                   [7,4,1],
 *          ]                         ]
 *
 *  step 2: 利用2pointer来reverse每一行:
 *          [                         [
 *            [9,6,3],                  [3,6,9],
 *            [8,5,2],   ------->       [2,5,8],
 *            [7,4,1]                   [1,4,7],
 *          ]                         ]
 */

/*************************** 顺时针翻转90度.js的变形题 *************************************************/

var rotate = function (mx) {
  let len = mx.length;

  /* step 1: 根据对角线反转  */
  for (let i = 0; i < len; i++) {
    // difference is here: 注意j止步于len-1
    for (let j = 0; j < len - i; j++) {
      if (i + j === len - 1) continue; // no need to swap if element is on 对角线上
      // difference is here, swap的坐标也不一样了
      [mx[i][j], mx[len - 1 - j][len - 1 - i]] = [
        mx[len - 1 - j][len - 1 - i],
        mx[i][j],
      ];
    }
  }

  /* step 2: reverse 每一行 */
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
