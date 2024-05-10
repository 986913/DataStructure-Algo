/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/***************************************** Solution: Binary Search *******************************************/
var searchMatrix = function (matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;

  let left = 0;
  let right = m - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (target < matrix[mid][0]) {
      //target在左半段row
      right = mid - 1;
    } else if (target > matrix[mid][n - 1]) {
      //target在右半段row
      left = mid + 1;
    } else if (matrix[mid][0] <= target && target <= matrix[mid][n - 1]) {
      //target在当前mid row, 那在当前row中binary search
      return binarySearch(matrix[mid], target);
    }
  }

  return false; // can't find
};

// helper function:  search in 1D array
const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) return true;
    else if (arr[mid] > target) right = mid - 1;
    else if (arr[mid] < target) left = mid + 1;
  }
  return false; // cant find
};
