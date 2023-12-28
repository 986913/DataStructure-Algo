/**
 * @param {number} target
 * @return {number}
 */
Array.prototype.upperBound = function (target) {
  let left = 0;
  let right = this.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (this[mid] <= target) {
      left = mid + 1;
    } else if (this[mid] > target) {
      right = mid - 1;
    }
  }

  if (right < 0 || this[right] !== target) {
    return -1;
  }

  return right;
};

// [3,4,5].upperBound(5); // 2
// [1,4,5].upperBound(2); // -1
// [3,4,6,6,6,6,7].upperBound(6) // 5
