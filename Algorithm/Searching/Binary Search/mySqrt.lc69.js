/**
 * @param {number} x
 * @return {number}
 */

var mySqrt = function (x) {
  let left = 0;
  let right = x;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    // difference is here: condition changed
    if (mid * mid < x) {
      left = mid + 1;
    } else if (mid * mid > x) {
      right = mid - 1;
    } else {
      return mid;
    }
  }

  return right; // <--- difference is here
};
