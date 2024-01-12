/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function (matrix, target) {
  let left = 0;
  let right = matrix.length - 1;
  let cols = matrix[0].length;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    //如果target在row区间，继续binary search
    if (target <= matrix[mid][cols - 1] && target >= matrix[mid][0]) {
      // just an Nested binary search,  pass an mid row as para:
      return binarySearch(matrix[mid], target);
    } else if (target > matrix[mid][cols - 1]) {
      //target在右半段row
      left = mid + 1;
    } else if (target < matrix[mid][0]) {
      //target在左半段row
      right = mid - 1;
    }
  }

  return false; // cant find at rows
};

// helper function:
const binarySearch = (arr, target) => {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let m = l + Math.floor((r - l) / 2);
    if (arr[m] < target) {
      l = m + 1;
    } else if (arr[m] > target) {
      r = m - 1;
    } else {
      return true;
    }
  }
  return false; // cant find at cols
};
