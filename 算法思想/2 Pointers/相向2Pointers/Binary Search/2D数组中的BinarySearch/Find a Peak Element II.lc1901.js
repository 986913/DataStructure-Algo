/**
 * @param {number[][]} mat
 * @return {number[]}
 *
 * Time complexity: O(m*log(n))
 * Space complexity: O(1)
 */

/************************************* Solution1 : Binary Search ***********************************************/
var findPeakGrid = function (mat) {
  let top = 0;
  let bottom = mat.length - 1;

  while (top <= bottom) {
    // 1. Start by calculating the mid row index of the sub-mat
    let mid = top + Math.floor((bottom - top) / 2);

    // 2. find max element in current mid row
    let maxCol = 0;
    for (let i = 0; i < mat[mid].length; i++) {
      if (mat[mid][i] > mat[mid][maxCol]) {
        maxCol = i;
      }
    }

    // 3. Check if our current element is a peak
    let isUpHigher = mid - 1 >= 0 && mat[mid - 1][maxCol] > mat[mid][maxCol];
    let isDownHigher =
      mid + 1 <= mat.length - 1 && mat[mid + 1][maxCol] > mat[mid][maxCol];

    if (isUpHigher) {
      //说明peak在上面
      bottom = mid - 1;
    } else if (isDownHigher) {
      //说明peak在下面
      top = mid + 1;
    } else if (!isUpHigher && !isDownHigher) {
      //说明当前是peak
      return [mid, maxCol];
    }
  }

  // 没找到peak
  return [-1, -1];
};
